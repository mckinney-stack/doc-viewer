import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import File from './File';
import '@testing-library/jest-dom';


const mockFile = {
    file: {
        type: 'pdf',
        name: 'Test File',
        added: '2021-01-01',
    }
};

test('renders file name, type and date added', () => {
  render(<File file={mockFile} />);
  expect(screen.getByText(/Test File/i)).toBeInTheDocument();
  expect(screen.getByText(/pdf/i)).toBeInTheDocument();
  expect(screen.getByText(/2021-01-01/i)).toBeInTheDocument();
});