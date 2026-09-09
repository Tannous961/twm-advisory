import { Readable } from "node:stream";
import { google } from "googleapis";
import type { drive_v3 } from "googleapis";
import type { DeliverPayload } from "./deliver-n8n";

export type DriveDeliveryResult = {
  folderId: string;
  folderUrl: string;
  files: { name: string; id: string; webViewLink?: string }[];
};

function parseServiceAccountCredentials(): Record<string, unknown> {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (raw) {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      throw new Error(
        "GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON. Paste the full service-account key, or use GOOGLE_SERVICE_ACCOUNT_JSON_BASE64.",
      );
    }
  }

  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim();
  if (b64) {
    try {
      return JSON.parse(
        Buffer.from(b64, "base64").toString("utf8"),
      ) as Record<string, unknown>;
    } catch {
      throw new Error(
        "GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 could not be decoded as JSON.",
      );
    }
  }

  throw new Error(
    "Set GOOGLE_SERVICE_ACCOUNT_JSON (or GOOGLE_SERVICE_ACCOUNT_JSON_BASE64) for Drive delivery.",
  );
}

function getParentFolderId() {
  const id = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim();
  if (!id) {
    throw new Error(
      "GOOGLE_DRIVE_FOLDER_ID is required (share that folder with the service account as Editor).",
    );
  }
  return id;
}

export function isDriveDeliveryConfigured() {
  return Boolean(
    process.env.GOOGLE_DRIVE_FOLDER_ID?.trim() &&
      (process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim() ||
        process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim() ||
        process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim()),
  );
}

async function getDriveClient(): Promise<drive_v3.Drive> {
  const scopes = ["https://www.googleapis.com/auth/drive"];

  if (
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim() ||
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim()
  ) {
    const credentials = parseServiceAccountCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes,
    });
    return google.drive({ version: "v3", auth });
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes,
  });
  return google.drive({ version: "v3", auth });
}

async function createDraftFolder(
  drive: drive_v3.Drive,
  parentId: string,
  folderName: string,
) {
  const res = await drive.files.create({
    requestBody: {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
      parents: [parentId],
    },
    fields: "id, webViewLink",
    supportsAllDrives: true,
  });

  if (!res.data.id) {
    throw new Error("Google Drive did not return a folder id");
  }

  return {
    id: res.data.id,
    webViewLink:
      res.data.webViewLink ??
      `https://drive.google.com/drive/folders/${res.data.id}`,
  };
}

async function uploadTextFile(
  drive: drive_v3.Drive,
  args: {
    folderId: string;
    name: string;
    content: string;
    mimeType: string;
  },
) {
  const res = await drive.files.create({
    requestBody: {
      name: args.name,
      parents: [args.folderId],
    },
    media: {
      mimeType: args.mimeType,
      body: Readable.from([args.content]),
    },
    fields: "id, name, webViewLink",
    supportsAllDrives: true,
  });

  if (!res.data.id || !res.data.name) {
    throw new Error(`Failed to upload ${args.name} to Google Drive`);
  }

  return {
    name: res.data.name,
    id: res.data.id,
    webViewLink: res.data.webViewLink ?? undefined,
  };
}

export function draftFolderName(payload: DeliverPayload) {
  return `${payload.post.date}-${payload.post.slug}`;
}

export function buildDriveFiles(payload: DeliverPayload) {
  return [
    {
      name: "FR.md",
      content: payload.frDocument,
      mimeType: "text/markdown; charset=utf-8",
    },
    {
      name: "EN.md",
      content: payload.enDocument,
      mimeType: "text/markdown; charset=utf-8",
    },
    {
      name: "review.md",
      content: payload.reviewMarkdown,
      mimeType: "text/markdown; charset=utf-8",
    },
    {
      name: "sources.json",
      content: `${JSON.stringify(payload.sources, null, 2)}\n`,
      mimeType: "application/json",
    },
    {
      name: "draft.json",
      content: `${JSON.stringify(payload.post, null, 2)}\n`,
      mimeType: "application/json",
    },
  ] as const;
}

export async function deliverToDrive(
  payload: DeliverPayload,
): Promise<DriveDeliveryResult> {
  const drive = await getDriveClient();
  const parentId = getParentFolderId();
  const folder = await createDraftFolder(
    drive,
    parentId,
    draftFolderName(payload),
  );

  const files = [];
  for (const file of buildDriveFiles(payload)) {
    files.push(
      await uploadTextFile(drive, {
        folderId: folder.id,
        name: file.name,
        content: file.content,
        mimeType: file.mimeType,
      }),
    );
  }

  return {
    folderId: folder.id,
    folderUrl: folder.webViewLink,
    files,
  };
}
