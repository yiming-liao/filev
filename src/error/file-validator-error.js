/**
 * ⭐ File validattion error
 */
export class FileValidationError extends Error {
    constructor(code) {
        super(code);
        this.code = code;
        this.name = "FileValidationError";
    }
}
