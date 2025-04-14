# filev

A simple and extensible file validation library for browser and server environments.

> A lightweight and extensible file validation library for both browser and server environments.  
> Supports type, size, and extension rules — ideal for file uploads in modern web applications.

## Features

- 🎯 Validate file **type**, **size**, and **extension**
- 🔒 Built with **TypeScript** for full type safety
- 🌍 Works seamlessly in both browser and server-side environments
- 🧩 Modular rule design for easy customization

## Installation

```bash
npm install filev
```

## Usage

#### Validate single file

```typescript
import { FileValidator } from "filev";

const validated = FileValidator.validate({
  file: myFile,
  maxSize: 5 * 1024 * 1024, // 5MB
  extensions: ["jpg", "png", "pdf"],
});
```

#### Validate multiple files

```typescript
import { FileValidator } from "filev";

const result = FileValidator.validateMultiple({
  files: fileList, // File | File[]
  maxSize: 10 * 1024 * 1024, // 10MB
  extensions: ["mp4", "mov"],
});
```

## Validation Rules

You can also use the built-in rules separately:

```typescript
import { validateSize } from "filev/rules/validate-size";
import { validateType } from "filev/rules/validate-type";
import { validateExtension } from "filev/rules/validate-extension";

validateSize(file, 10 * 1024 * 1024);
validateType(file);
validateExtension(file, ["png", "jpg"]);
```
