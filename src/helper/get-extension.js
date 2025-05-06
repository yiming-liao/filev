import { extension } from "mime-types";
/**
 * ⚡ Get Extension
 */
export const getExtension = (fileType) => {
    if (typeof fileType !== "string") {
        // ✨
        return "unknown";
    }
    // ✨ Use mime-types
    return extension(fileType) || "unknown";
};
