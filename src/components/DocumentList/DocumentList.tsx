import React, { useState, FC } from 'react';
import Folder from '../Folder/Folder.tsx';
import File from '../File/File.tsx';
import { StyledButton } from './DocumentList.styles.js';

interface File {
  type: string;
  name: string;
  added: string;
}

interface Folder {
  type: 'folder';
  name: string;
  files: File[];
}

type Document = File | Folder;

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: FC<DocumentListProps> = ({ documents }) => {
  const [sortField, setSortField] = useState<keyof Document>('name');
  const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>('ascending');

  const handleSort = (field: keyof Document) => {
    setSortField(field);
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };

  const sortedDocs = [...documents].sort((a, b) => {
    const comparison = a[sortField] > b[sortField] ? 1 : -1;
    return sortOrder === 'ascending' ? comparison : -comparison;
  });

  return (
    <div>
      <div className="sort-options">
        <StyledButton onClick={() => handleSort('name')}>Sort by Name</StyledButton>
        <StyledButton onClick={() => handleSort('dateAdded')}>Sort by Date</StyledButton>
      </div>
      <ul>
        {sortedDocs.map((doc, index) =>
          doc.type === 'folder' ? (
            <Folder key={index} folder={doc} />
          ) : (
            <File key={index} file={doc} />
          )
        )}
      </ul>
    </div>
  );
};

export default DocumentList;