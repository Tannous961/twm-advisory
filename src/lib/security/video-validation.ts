export type SupportedVideo = {
  extension: "webm" | "mp4" | "mov";
  mimeType: "video/webm" | "video/mp4" | "video/quicktime";
};

const WEBM_SIGNATURE = [0x1a, 0x45, 0xdf, 0xa3];

export function detectSupportedVideo(bytes: Uint8Array): SupportedVideo | null {
  if (
    bytes.length >= 4 &&
    WEBM_SIGNATURE.every((value, index) => bytes[index] === value)
  ) {
    return { extension: "webm", mimeType: "video/webm" };
  }

  if (
    bytes.length >= 12 &&
    String.fromCharCode(...bytes.slice(4, 8)) === "ftyp"
  ) {
    const brand = String.fromCharCode(...bytes.slice(8, 12));
    if (brand === "qt  ") {
      return { extension: "mov", mimeType: "video/quicktime" };
    }
    return { extension: "mp4", mimeType: "video/mp4" };
  }

  return null;
}
