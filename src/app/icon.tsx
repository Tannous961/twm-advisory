import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "2px solid #B87333",
          color: "#B87333",
          fontSize: 18,
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
