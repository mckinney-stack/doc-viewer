import React, { FC } from 'react';

interface FileProps {
  file: {
    name: string;
    type: 'file';
    added: string; 
  };
}

const File: FC<FileProps> = ({ file }) => (
  <li>
    📄 {file.name} (Type: {file.type}, Added: {file.added})
  </li>
);

export default File;