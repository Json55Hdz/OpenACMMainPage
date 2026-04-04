import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import DocsLayout from './pages/DocsLayout';
import DocPage from './pages/DocPage';
import { docsData } from './docsData';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs" element={<DocsLayout />}>
        <Route index element={<Navigate to={`/docs/${docsData[0]?.slug}`} replace />} />
        <Route path=":slug" element={<DocPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
