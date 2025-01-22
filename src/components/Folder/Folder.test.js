import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Folder from './Folder';
import '@testing-library/jest-dom';


const mockFolder = {
    type: 'folder',
  name: 'Test Folder',
  files: [
    { type: 'file', name: 'File 1', added: '2021-01-01' },
    { type: 'file', name: 'File 2', added: '2021-02-01' },
  ],
};

test('renders folder name and item count', () => {
  render(<Folder folder={mockFolder} />);
  expect(screen.getByText(/Test Folder/i)).toBeInTheDocument();
  expect(screen.getByText(/\(2 items\)/i)).toBeInTheDocument();
});

test('toggles document list on click', () => {
    render(<Folder folder={mockFolder} />);
    const folderElement = screen.getByText(/Test Folder/i);
  
    // Initially, the document list should not be visible
    expect(screen.queryByText(/File 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/File 2/i)).not.toBeInTheDocument();
  
    // Click to open the folder
    fireEvent.click(folderElement);
    expect(screen.getByText(/File 1/i)).toBeInTheDocument();
    expect(screen.getByText(/File 2/i)).toBeInTheDocument();
  
    // Click to close the folder
    fireEvent.click(folderElement);
    expect(screen.queryByText(/File 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/File 2/i)).not.toBeInTheDocument();
  });