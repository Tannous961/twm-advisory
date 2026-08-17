import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import {
  createIntakeSession,
  verifyIntakeSession,
} from "../src/lib/security/intake-session";
import { detectSupportedVideo } from "../src/lib/security/video-validation";
import { withRetry } from "../src/lib/operations";

describe("signed intake sessions", () => {
  const previousSecret = process.env.INTAKE_SESSION_SECRET;

  before(() => {
    process.env.INTAKE_SESSION_SECRET = "test-secret-at-least-32-bytes-long";
  });

  after(() => {
    if (previousSecret === undefined) {
      delete process.env.INTAKE_SESSION_SECRET;
    } else {
      process.env.INTAKE_SESSION_SECRET = previousSecret;
    }
  });

  it("creates and verifies a session", () => {
    const now = Date.UTC(2026, 7, 17, 12);
    const session = createIntakeSession(now);
    const verified = verifyIntakeSession(session.token, now + 1_000);

    assert.equal(verified?.sessionId, session.sessionId);
    assert.equal(session.expiresAt, new Date(now + 30 * 60 * 1_000).toISOString());
  });

  it("rejects tampered and expired sessions", () => {
    const now = Date.UTC(2026, 7, 17, 12);
    const session = createIntakeSession(now);
    const [payload, signature] = session.token.split(".");

    assert.equal(
      verifyIntakeSession(`${payload}.${signature.slice(0, -1)}x`, now),
      null,
    );
    assert.equal(
      verifyIntakeSession(session.token, now + 30 * 60 * 1_000),
      null,
    );
  });
});

describe("video signature validation", () => {
  it("recognizes WebM, MP4, and QuickTime signatures", () => {
    assert.deepEqual(
      detectSupportedVideo(Uint8Array.from([0x1a, 0x45, 0xdf, 0xa3])),
      { extension: "webm", mimeType: "video/webm" },
    );
    assert.deepEqual(
      detectSupportedVideo(
        Uint8Array.from([
          0, 0, 0, 24, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6f, 0x6d,
        ]),
      ),
      { extension: "mp4", mimeType: "video/mp4" },
    );
    assert.deepEqual(
      detectSupportedVideo(
        Uint8Array.from([
          0, 0, 0, 24, 0x66, 0x74, 0x79, 0x70, 0x71, 0x74, 0x20, 0x20,
        ]),
      ),
      { extension: "mov", mimeType: "video/quicktime" },
    );
  });

  it("rejects arbitrary bytes even when a client could claim video MIME", () => {
    assert.equal(
      detectSupportedVideo(Uint8Array.from([0x3c, 0x73, 0x63, 0x72, 0x69])),
      null,
    );
  });
});

describe("external operation retries", () => {
  it("retries transient failures and returns the successful result", async () => {
    let attempts = 0;
    const result = await withRetry(
      async () => {
        attempts += 1;
        if (attempts === 1) throw new Error("temporary");
        return "ok";
      },
      { attempts: 2, delayMs: 1 },
    );

    assert.equal(result, "ok");
    assert.equal(attempts, 2);
  });

  it("throws the final error after exhausting retries", async () => {
    await assert.rejects(
      () =>
        withRetry(async () => {
          throw new Error("still failing");
        }, { attempts: 2, delayMs: 1 }),
      /still failing/,
    );
  });
});
