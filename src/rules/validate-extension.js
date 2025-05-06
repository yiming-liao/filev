import { FileValidatorErrorCode } from "../error/error-code.types";
import { FileValidationError } from "../error/file-validator-error";
import { getExtension } from "../helper/get-extension";
/**
 * ⚡ [file-validator] Validate Extensions
 */
export const validateExtension = (file, extensions) => {
    const fileExtension = getExtension(file.type);
    // Allow
    if (!extensions || extensions.length === 0) {
        return;
    }
    // 🚨 Throw error
    if (!extensions.some((extname) => fileExtension === extname)) {
        throw new FileValidationError(FileValidatorErrorCode.EXTENSION_INVALID);
    }
};
