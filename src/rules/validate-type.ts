import { FileValidatorErrorCode } from "../error/error-code.types";
import { FileValidationError } from "../error/file-validator-error";

/**
 * ⚡ [file-validator] Validate type
 */
export const validateType = (file: unknown): File => {
  if (file && file instanceof File) {
    // ✨
    return file;
  }

  // 🚨 Throw error
  else {
    throw new FileValidationError(FileValidatorErrorCode.TYPE_INVALID);
  }
};
