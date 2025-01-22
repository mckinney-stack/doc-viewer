import React, { useState, FC } from 'react';

interface FolderProps {
    folder: {
      id: number;
      name: string;
      type: 'folder';
      files: {
        id: number;
        name: string;
        type: 'folder' | 'file';
        added: string; 
      }[];
    };
  }

  const Folder: FC<FolderProps> = ({ folder }) => {
  
    return (
      <li>
        <div className="folder">
          📁 <strong>{folder.name}</strong> ({folder.files.length} items)
        </div>
      </li>
    );
  };

export default Folder;