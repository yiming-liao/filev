// 🧬
export type ValidateParams<T extends boolean = false> = {
  file: unknown;
  optional?: T;
  maxSize?: number;
  extensions?: readonly string[];
};

// 🧬
export type ValidateMultipleParams = {
  files: unknown;
  optional?: boolean;
  maxSize?: number;
  extensions?: readonly string[];
};

// 🧬
export type FileWithOptional<T extends boolean = false> = T extends true
  ? File | null
  : File;

/**
 * 📐 Default values
 */
export const EMPTY_ARRAY = [] as [];
