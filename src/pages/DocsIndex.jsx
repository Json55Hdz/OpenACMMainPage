import React from 'react';
import { Navigate } from 'react-router-dom';
import { docsData } from '../docsData';

// /docs → first document (01-introduction). Kept in its own module so the
// large docsData bundle is only loaded on documentation routes.
export default function DocsIndex() {
  return <Navigate to={`/docs/${docsData[0]?.slug ?? ''}`} replace />;
}
