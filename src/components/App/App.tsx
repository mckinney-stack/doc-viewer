import React, { useState, ChangeEvent } from 'react';
import DocumentList from '../DocumentList/DocumentList.tsx';
import data from '../../data/data.json';

interface Document {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>(data);
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value.toLowerCase());

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(filter)
  );

  return (
    <div className="app">
      <h1>DocViewer</h1>
      <input 
        type="text" 
        placeholder="Search by filename..." 
        onChange={handleFilterChange} 
      />
      <DocumentList documents={filteredDocuments} />
    </div>
  );
};

export default App;