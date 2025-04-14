import { extension } from "mime-types";

/**
 * ⚡ Get Extension
 */
export const getExtension = (fileType?: string): string | "unknown" => {
  if (typeof fileType !== "string") {
    // ✨
    return "unknown";
  }

  // ✨ Use mime-types
  return extension(fileType) || "unknown";
};
