import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070A11",
          border: "6px solid #B87333",
          color: "#B87333",
          fontSize: 96,
          fontFamily: "Georgia, serif",
          fontWeight: 600,
        }}
      >
        T
      </div>
    ),
    { ...size },
  );
}
