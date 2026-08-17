import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TWM Advisory — Conseil et déploiement de solutions IA";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070A11",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,115,51,0.28) 0%, rgba(7,10,17,0) 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              border: "1px solid #B87333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#B87333",
              fontSize: 20,
              fontFamily: "Georgia, serif",
            }}
          >
            T
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#F2EFEA",
              fontFamily: "Georgia, serif",
            }}
          >
            TWM{" "}
            <span style={{ color: "#B87333", marginLeft: 10 }}>Advisory</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              color: "#B87333",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            CONSEIL · CONCEPTION · DÉPLOIEMENT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 54,
              lineHeight: 1.1,
              color: "#F2EFEA",
              fontFamily: "Georgia, serif",
              maxWidth: 920,
            }}
          >
            <span>Des solutions d&apos;IA conçues</span>
            <span style={{ color: "#E3AC6C", fontStyle: "italic" }}>
              pour vos opérations.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              color: "#98A1B3",
              fontSize: 24,
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Diagnostic. Déploiement. Mesure. Supervision humaine.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
            color: "#5D6579",
            fontSize: 18,
            fontFamily: "monospace",
            letterSpacing: "0.08em",
          }}
        >
          <span>ACCOMPAGNEMENT OPÉRATIONNEL</span>
          <span style={{ color: "#B87333" }}>TWM ADVISORY</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
