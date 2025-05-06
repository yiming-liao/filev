import { EMPTY_ARRAY, } from "./file-validator.types";
import { validateExtension } from "./rules/validate-extension";
import { validateSize } from "./rules/validate-size";
import { validateType } from "./rules/validate-type";
/**
 * ⭐ File validator
 */
class FileValidator {
}
/**
 * ⚡ Validate single file
 */
FileValidator.validate = ({ file, maxSize = 1024 * 1024 * 5, // Default to 5MB
extensions = EMPTY_ARRAY, // Default to allowing all extensions
optional = false, }) => {
    // Optional
    if (!file && optional) {
        return null;
    }
    // Validate type
    const typeSafeFile = validateType(file);
    // Validate extension
    validateExtension(typeSafeFile, extensions);
    // Validate size
    validateSize(typeSafeFile, maxSize);
    // ✨
    return typeSafeFile;
};
/**
 * ⚡ Validate multiple files
 */
FileValidator.validateMultiple = ({ files, maxSize = 1024 * 1024 * 5, // Default to 5MB
extensions = EMPTY_ARRAY, // Default to allowing all extensions
 }) => {
    const validatedFiles = [];
    // Check `files` is File[] or File
    if (!Array.isArray(files)) {
        validateType(files);
        // Change to array when `files` is a single file
        files = [files];
    }
    // 🔄 Validate every file
    files.forEach((file) => {
        const validatedFile = FileValidator.validate({
            file,
            maxSize,
            extensions,
        });
        validatedFiles.push(validatedFile);
    });
    // ✨
    return validatedFiles;
};
export default FileValidator;
