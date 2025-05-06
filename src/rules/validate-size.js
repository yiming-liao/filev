import { FileValidatorErrorCode } from "../error/error-code.types";
import { FileValidationError } from "../error/file-validator-error";
/**
 * ⚡ [file-validator] Validate size
 */
export const validateSize = (file, maxSize) => {
    // 🚨 Throw error
    if (file.size > maxSize) {
        throw new FileValidationError(FileValidatorErrorCode.SIZE_EXCEEDED);
    }
};
