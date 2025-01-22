import React, { useState, FC } from 'react';

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
        {isOpen && folder.files.map((file) => (
          <div key={file.name}>
            {file.name}
          </div>
        ))}
      </li>
    );
  };

export default Folder;