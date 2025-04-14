import { describe, it, expect } from "vitest";
import { FileValidator } from "../index";

// Mock
function createMockFile(name: string, type: string, size: number): File {
  const blob = new Blob(["a".repeat(size)], { type });
  return new File([blob], name, { type });
}

describe("FileValidator", () => {
  it("should validate a single valid file", () => {
    const file = createMockFile("hello.png", "image/png", 1024 * 100); // 100KB
    const result = FileValidator.validate({
      file,
      maxSize: 1024 * 1024, // 1MB
      extensions: ["png"],
    });
    expect(result).toBeInstanceOf(File);
    expect(result.name).toBe("hello.png");
  });

  it("should return null when optional is true and file is null", () => {
    const result = FileValidator.validate({
      file: null,
      optional: true,
    });
    expect(result).toBeNull();
  });

  it("should throw error if extension is not allowed", () => {
    const file = createMockFile("resume.pdf", "application/pdf", 5000);
    expect(() =>
      FileValidator.validate({
        file,
        extensions: ["jpg", "png"],
      })
    ).toThrowError(/FILE_EXTENSION_INVALID/i);
  });

  it("should throw error if file size exceeds max", () => {
    const file = createMockFile("big.jpg", "image/jpeg", 1024 * 1024 * 10); // 10MB
    expect(() =>
      FileValidator.validate({
        file,
        maxSize: 1024 * 1024 * 5, // 5MB
      })
    ).toThrowError(/FILE_SIZE_EXCEEDED/i);
  });

  it("should validate multiple files", () => {
    const files = [
      createMockFile("a.jpg", "image/jpeg", 100000),
      createMockFile("b.jpg", "image/jpeg", 200000),
    ];
    const result = FileValidator.validateMultiple({
      files,
      extensions: ["jpg"],
      maxSize: 1024 * 1024,
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    result.forEach((file) => {
      expect(file).toBeInstanceOf(File);
    });
  });

  it("should support single file passed to validateMultiple", () => {
    const file = createMockFile("one.png", "image/png", 300000);
    const result = FileValidator.validateMultiple({
      files: file,
      extensions: ["png"],
      maxSize: 1024 * 1024,
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("one.png");
  });
});
