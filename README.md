# solveClutter

The `solveClutter` module is designed to organize files within a directory by moving them into subdirectories based on their file extensions.

## Installation

No additional installation is required. The module utilizes built-in Node.js modules (`fs` and `path`) and does not have any external dependencies.

## Usage

```javascript
const solveClutter = require('./solveClutter');

solveClutter('/path/to/directory');
```
## Functionality

### Directory Structure

- The module reads the contents of the specified directory.
- It creates subdirectories within the directory based on the file extensions of the files present.

### File Organization

- For each file in the directory, the module extracts the file extension and creates a subdirectory with that extension name (if it doesn't already exist).
- It moves the file into the corresponding subdirectory.

### Error Handling

- The module handles errors gracefully, logging any encountered errors during the file moving process.

## Parameters

- `pathName` (string): The path of the directory containing the files to be organized.

## Example

Suppose we have a directory structure like this:

```JavaScript
- /path/to/directory
  |- file1.txt
  |- file2.js
  |- file3.txt
  |- file4.jpg

```


After running `solveClutter('/path/to/directory')`, the directory structure would become:

```JavaScript
- /path/to/directory
  |- txt
  |  |- file1.txt
  |  |- file3.txt
  |- js
  |  |- file2.js
  |- jpg
     |- file4.jpg

```