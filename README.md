# DocViewer

## Overview
DocViewer is a SPA that allows users to view documents that an admin has previously uploaded. The app displays a list of folders and files, with the ability to filter and sort the documents.

## Features
- Display a list of folders and files.
- Show file type, name, and date added for each file.
- Indicate folders and make them clickable.
- Filter documents by filename.
- Sort documents by name and date.

## Getting Started

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/mckinney-stack/doc-viewer.git
   cd doc-viewer
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application
1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Running Tests
1. Run the test suite:
   ```sh
   npm test
   ```

## Incomplete Functionality

### TDD for DocumentList and App components
To implement TDD for the `DocumentList` and `App` components, I would:

1. **Write Tests First**:
   - Define the expected behavior and write tests for each feature before implementing the code.
   - Create unit tests using Jest and RTL

2. **Implement Features**:
   - Develop the features to pass the tests written in the previous step.
   - Ensure that the components meet the requirements and pass all tests.

3. **Refactor and Optimize**:
   - Refactor the code to improve readability and performance while ensuring that all tests still pass.
   - Continuously run tests to verify that the changes do not introduce any regressions.


## Folder Structure
```
doc-viewer/
├── public/
├── src/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.tsx
│   │   ├── DocumentList/
│   │   │   ├── DocumentList.tsx
│   │   ├── Folder/
│   │   │   ├── Folder.tsx
│   │   ├── File/
│   │   │   ├── File.tsx
│   ├── data/
│   │   ├── data.json
│   ├── styles/
│   │   ├── GlobalStyles.js
│   ├── index.tsx
├── package.json
└── README.md
```
