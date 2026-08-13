import OpenAI from "openai";
import type { EntryOffer, IntentId, IntakeAnswers } from "@/lib/intake";

function getLlmClient(): { client: OpenAI; via: "openrouter" | "openai" } | null {
  const openrouterKey = process.env.OPENROUTER_API_KEY;
  if (openrouterKey) {
    return {
      via: "openrouter",
      client: new OpenAI({
        apiKey: openrouterKey,
        baseURL: "https://openrouter.ai/api/v1",
        defaultHeaders: {
          "HTTP-Referer":
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.twm.expert",
          "X-Title": "TWM Advisory",
        },
      }),
    };
  }

  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    return {
      via: "openai",
      client: new OpenAI({ apiKey: openaiKey }),
    };
  }

  return null;
}

async function transcribeWithOpenRouter(
  apiKey: string,
  videoBytes: Buffer,
  format: string,
  language: string,
): Promise<string | null> {
  const res = await fetch("https://openrouter.ai/api/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer":
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.twm.expert",
      "X-Title": "TWM Advisory",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_STT_MODEL || "openai/whisper-1",
      language,
      input_audio: {
        data: videoBytes.toString("base64"),
        format,
      },
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("[intake] OpenRouter STT failed", res.status, errText.slice(0, 300));
    return null;
  }

  const json = (await res.json()) as { text?: string };
  return json.text?.trim() || null;
}

async function transcribeWithOpenAI(
  client: OpenAI,
  videoBytes: Buffer,
  filename: string,
  mime: string,
  language: string,
): Promise<string | null> {
  const { toFile } = await import("openai");
  const file = await toFile(videoBytes, filename, { type: mime });
  const transcription = await client.audio.transcriptions.create({
    file,
    model: "whisper-1",
    language,
  });
  return transcription.text?.trim() || null;
}

export async function buildIntakeBrief(input: {
  lang: "fr" | "en";
  intent: IntentId;
  answers: IntakeAnswers;
  score: number;
  entryOffer: EntryOffer;
  name: string;
  company: string | null;
  signalText: string | null;
  videoBytes: Buffer | null;
  videoMime: string | null;
}): Promise<{ transcript: string | null; briefMd: string }> {
  const llm = getLlmClient();
  if (!llm) {
    const fallback = [
      `# Brief — ${input.name}`,
      ``,
      `- Intent: ${input.intent}`,
      `- Score: ${input.score}`,
      `- Entry offer: ${input.entryOffer}`,
      `- Org: ${input.answers.orgSize} · Urgency: ${input.answers.urgency} · Data: ${input.answers.dataConstraint}`,
      `- Company: ${input.company ?? "—"}`,
      ``,
      `## Signal`,
      input.signalText ??
        "(video present — transcription unavailable without OPENROUTER_API_KEY or OPENAI_API_KEY)",
      ``,
      `_Set OPENROUTER_API_KEY (preferred) or OPENAI_API_KEY to enable Whisper + structured brief._`,
    ].join("\n");
    return { transcript: null, briefMd: fallback };
  }

  let transcript = input.signalText?.trim() || null;
  const language = input.lang === "fr" ? "fr" : "en";

  if (!transcript && input.videoBytes) {
    const format = input.videoMime?.includes("mp4")
      ? "mp4"
      : input.videoMime?.includes("wav")
        ? "wav"
        : "webm";
    const filename = `signal.${format}`;
    const mime = input.videoMime || `video/${format}`;

    if (llm.via === "openrouter") {
      transcript = await transcribeWithOpenRouter(
        process.env.OPENROUTER_API_KEY!,
        input.videoBytes,
        format,
        language,
      );
    } else {
      transcript = await transcribeWithOpenAI(
        llm.client,
        input.videoBytes,
        filename,
        mime,
        language,
      );
    }
  }

  const prompt = `Tu prépares un briefing call pour TWM Advisory (opérateur IA agentique).
Réponds en ${input.lang === "fr" ? "français" : "anglais"}, markdown concis.

Contexte:
- Nom: ${input.name}
- Société: ${input.company ?? "n/a"}
- Intention: ${input.intent}
- Score maturité: ${input.score}/100
- Offre d'entrée recommandée: ${input.entryOffer}
- Taille: ${input.answers.orgSize}
- Urgence: ${input.answers.urgency}
- Contrainte data: ${input.answers.dataConstraint}
- Signal prospect:
"""
${transcript ?? "(aucun signal texte/transcript)"}
"""

Structure obligatoire:
## Synthèse (3 lignes)
## Offre d'entrée & pourquoi
## 3 use cases probables
## Méthodo du call (ordre des 20–30 min)
## 5 questions à poser
## Risques data / confidentialité
## Angle à éviter`;

  const chatModel =
    llm.via === "openrouter"
      ? process.env.OPENROUTER_CHAT_MODEL || "openai/gpt-4o-mini"
      : process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini";

  const completion = await llm.client.chat.completions.create({
    model: chatModel,
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content:
          "Tu es un préparateur de calls B2B senior. Pas de blabla. Actionnable.",
      },
      { role: "user", content: prompt },
    ],
  });

  const briefMd =
    completion.choices[0]?.message?.content?.trim() ||
    `Brief indisponible.\n\nSignal:\n${transcript ?? "—"}`;

  return { transcript, briefMd };
}
