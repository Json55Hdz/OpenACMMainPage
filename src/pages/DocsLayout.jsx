import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { docsData as docs } from '../docsData';
import { Menu, X, Terminal } from 'lucide-react';
import { Search } from 'lucide-react';

export default function DocsLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doc.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 flex flex-col font-sans selection:bg-blue-500/30">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0a0f1c]/80 border-b border-slate-800/60 shadow-sm">
        <div className="flex h-16 items-center px-4 md:px-8 max-w-[1600px] mx-auto w-full">
          <button className="md:hidden mr-4 text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight text-white hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Terminal size={18} className="text-white" />
            </div>
            OpenACM
          </Link>

          <nav className="ml-auto flex items-center gap-8 text-sm font-medium">
            <Link to="/docs" className="text-blue-400 font-semibold">Docs</Link>
            <a href="https://github.com/OpenACM" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <div className="flex-1 max-w-[1600px] mx-auto w-full flex relative">
        {/* Left Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0a0f1c] border-r border-slate-800/60 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] pt-16 md:pt-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="h-full overflow-y-auto px-4 py-8 pb-20 custom-scrollbar">
            <h4 className="mb-4 px-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Documentation</h4>

            {/* Search Bar */}
            <div className="relative mb-6 px-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={14} className="text-slate-500" />
              </div>
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a0f1c] border border-slate-700/60 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div className="space-y-1 border-l border-slate-800/60 ml-2">
              {filteredDocs.map((doc) => {
                const isActive = location.pathname === `/docs/${doc.slug}`;
                return (
                  <Link
                    key={doc.slug}
                    to={`/docs/${doc.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block pl-4 py-2 text-sm transition-all border-l-2 -ml-[1px] ${
                      isActive
                        ? 'border-blue-500 text-blue-400 font-medium bg-blue-500/5 rounded-r-md'
                        : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-800/20 rounded-r-md'
                    }`}
                  >
                    {doc.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 md:px-12 py-8 md:py-12 lg:flex gap-12 justify-center">
          <div className="flex-auto max-w-6xl w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
