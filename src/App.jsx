import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';

// Documentation routes (docs content + syntax highlighter) are split into
// their own chunk so the landing page loads fast.
const DocsLayout = lazy(() => import('./pages/DocsLayout'));
const DocPage = lazy(() => import('./pages/DocPage'));
const DocsIndex = lazy(() => import('./pages/DocsIndex'));

function Loading() {
  return <div className="min-h-screen bg-[#0a0f1c]" />;
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<DocsIndex />} />
          <Route path=":slug" element={<DocPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
