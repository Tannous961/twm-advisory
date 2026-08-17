function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unknown error";
}

export async function withRetry<T>(
  operation: () => Promise<T>,
  options: { attempts?: number; delayMs?: number } = {},
): Promise<T> {
  const attempts = options.attempts ?? 2;
  const delayMs = options.delayMs ?? 300;
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
      }
    }
  }

  throw lastError;
}

export async function reportOperationalError(input: {
  event: string;
  recordId?: string;
  error: unknown;
}): Promise<void> {
  const payload = {
    event: input.event,
    recordId: input.recordId,
    error: errorMessage(input.error).slice(0, 500),
    occurredAt: new Date().toISOString(),
  };

  console.error("[operations]", payload);

  const webhook = process.env.OPS_ALERT_WEBHOOK_URL;
  if (!webhook) return;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5_000),
    });
  } catch (error) {
    console.error("[operations] alert webhook failed", errorMessage(error));
  }
}

export function toProcessingError(error: unknown): string {
  return errorMessage(error).slice(0, 1_000);
}
