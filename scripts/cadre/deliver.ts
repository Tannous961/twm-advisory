import {
  deliverToN8n,
  type DeliverPayload,
} from "./deliver-n8n";
import {
  deliverToDrive,
  isDriveDeliveryConfigured,
  type DriveDeliveryResult,
} from "./deliver-drive";

export type DeliveryResult =
  | { channel: "drive"; drive: DriveDeliveryResult }
  | { channel: "n8n"; status: number; body: string };

export function resolveDeliveryChannel(): "drive" | "n8n" | null {
  if (isDriveDeliveryConfigured()) return "drive";
  if (process.env.N8N_WEBHOOK_URL?.trim()) return "n8n";
  return null;
}

export async function deliverDraft(
  payload: DeliverPayload,
): Promise<DeliveryResult> {
  const channel = resolveDeliveryChannel();

  if (channel === "drive") {
    const drive = await deliverToDrive(payload);
    return { channel: "drive", drive };
  }

  if (channel === "n8n") {
    const result = await deliverToN8n(payload);
    return { channel: "n8n", status: result.status, body: result.body };
  }

  throw new Error(
    "No delivery channel configured. Set GOOGLE_SERVICE_ACCOUNT_JSON (+ optional BASE64) and GOOGLE_DRIVE_FOLDER_ID, or N8N_WEBHOOK_URL.",
  );
}
