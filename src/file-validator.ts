import {
  type ValidateMultipleParams,
  type FileWithOptional,
  type ValidateParams,
  EMPTY_ARRAY,
} from "./file-validator.types";
import { validateExtension } from "./rules/validate-extension";
import { validateSize } from "./rules/validate-size";
import { validateType } from "./rules/validate-type";

/**
 * ⭐ File validator
 */
export default class FileValidator {
  /**
   * ⚡ Validate single file
   */
  static validate = <T extends boolean = false>({
    file,
    maxSize = 1024 * 1024 * 5, // Default to 5MB
    extensions = EMPTY_ARRAY, // Default to allowing all extensions
    optional = false as T,
  }: ValidateParams<T>): FileWithOptional<T> => {
    // Optional
    if (!file && optional) {
      return null as FileWithOptional<T>;
    }

    // Validate type
    const typeSafeFile = validateType(file);

    // Validate extension
    validateExtension(typeSafeFile, extensions);

    // Validate size
    validateSize(typeSafeFile, maxSize);

    // ✨
    return typeSafeFile as FileWithOptional<T>;
  };

  /**
   * ⚡ Validate multiple files
   */
  static validateMultiple = ({
    files,
    maxSize = 1024 * 1024 * 5, // Default to 5MB
    extensions = EMPTY_ARRAY, // Default to allowing all extensions
  }: ValidateMultipleParams): FileWithOptional<false>[] => {
    const validatedFiles: FileWithOptional<false>[] = [];

    // Check `files` is File[] or File
    if (!Array.isArray(files)) {
      validateType(files);
      // Change to array when `files` is a single file
      files = [files];
    }

    // 🔄 Validate every file
    (files as File[]).forEach((file) => {
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
}
