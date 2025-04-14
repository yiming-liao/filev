import type { FileValidatorErrorCode } from "./error-code.types";

/**
 * ⭐ File validattion error
 */
export class FileValidationError extends Error {
  constructor(public readonly code: FileValidatorErrorCode) {
    super(code);
    this.name = "FileValidationError";
  }
}
