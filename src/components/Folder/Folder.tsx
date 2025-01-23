import React, { useState, FC } from 'react';
import DocumentList from '../DocumentList/DocumentList.tsx';

interface FolderProps {
    folder: {
      name: string;
      type: 'folder';
      files: {
        name: string;
        type: 'folder' | 'file';
        added: string; 
      }[];
    };
  }

  const Folder: FC<FolderProps> = ({ folder }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <li>
        <div onClick={() => setIsOpen(!isOpen)} className="folder">
          📁 <strong>{folder.name}</strong> ({folder.files.length} items)
        </div>
        {isOpen && <DocumentList documents={folder.files} />}
      </li>
    );
  };

export default Folder;