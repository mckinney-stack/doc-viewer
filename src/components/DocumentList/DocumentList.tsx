import React, { useState, FC } from 'react';
import Folder from '../Folder/Folder.tsx';
import File from '../File/File.tsx';

interface Document {
  name: string;
  type: 'folder' | 'file';
  dateAdded?: string; 
}

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
        <div onClick={() => handleSort('name')}>Sort by Name</div>
        <div onClick={() => handleSort('dateAdded')}>Sort by Date</div>
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