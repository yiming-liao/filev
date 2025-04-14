# file-validator

A simple and extensible file validation library for browser and server environments.

> Lightweight, type-safe, and modular — ideal for custom file upload flows, client-side checks, or API validation pipelines.

## Features

- 🎯 Validate file **type**, **size**, and **extension**
- 🔒 Built with **TypeScript** for full type safety
- 🌍 Works seamlessly in both browser and server-side environments
- 🧩 Modular rule design for easy customization

## Installation

```bash
npm install file-validator
```

## Usage

#### Validate single file

```typescript
import { FileValidator } from "file-validator";

const validated = FileValidator.validate({
  file: myFile,
  maxSize: 5 * 1024 * 1024, // 5MB
  extensions: ["jpg", "png", "pdf"],
});
```

#### Validate multiple files

```typescript
import { FileValidator } from "file-validator";

const result = FileValidator.validateMultiple({
  files: fileList, // File | File[]
  maxSize: 10 * 1024 * 1024, // 10MB
  extensions: ["mp4", "mov"],
});
```

## Validation Rules

You can also use the built-in rules separately:

```typescript
import { validateSize } from "file-validator/rules/validate-size";
import { validateType } from "file-validator/rules/validate-type";
import { validateExtension } from "file-validator/rules/validate-extension";

validateSize(file, 10 * 1024 * 1024);
validateType(file);
validateExtension(file, ["png", "jpg"]);
```

> This lightweight utility helps you validate uploaded files by type, size, and extension — perfect for custom file upload flows, client-side checks, or API validation pipelines.

## Features

- 🎯 Validates file type, size, and extension
- 🔒 Written in TypeScript with full type safety
- 🌍 Works in both browser and server-side
- 🔧 Modular rule design for future extensibility

## Installation

```bash
npm install file-validator
```

## Usage

#### Validate single file

```typescript
import { FileValidator } from "file-validator";

const validated = FileValidator.validate({
  file: myFile,
  maxSize: 5 * 1024 * 1024, // 5MB
  extensions: ["jpg", "png", "pdf"],
});
```

#### Validate multiple files

```typescript
import { FileValidator } from "file-validator";

const result = FileValidator.validateMultiple({
  files: fileList, // File | File[]
  maxSize: 10 * 1024 * 1024, // 10MB
  extensions: ["mp4", "mov"],
});
```

## Validation Rules

You can also use the built-in rules separately:

```typescript
import { validateSize } from "file-validator/rules/validate-size";
import { validateType } from "file-validator/rules/validate-type";
import { validateExtension } from "file-validator/rules/validate-extension";

validateSize(file, 10 * 1024 * 1024);
validateType(file);
validateExtension(file, ["png", "jpg"]);
```
