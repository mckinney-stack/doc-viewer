import React from 'react';
import { render, screen } from '@testing-library/react';
import File from './File';
import '@testing-library/jest-dom';


const mockFile = {
    name: 'Test File',
    type: 'pdf',
    added: '2021-01-01',
};

test('renders file name, type and date added', () => {
  render(<File file={mockFile} />);
  expect(screen.getByText(/pdf/i)).toBeInTheDocument();
  expect(screen.getByText(/Test File/i)).toBeInTheDocument();
  expect(screen.getByText(/2021-01-01/i)).toBeInTheDocument();
});