import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docsData as docs } from '../docsData';
import { ChevronLeft, ChevronRight, Hash, Copy, Check } from 'lucide-react';


const CodeBlock = ({ match, children, props }) => {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-slate-800/80 bg-[#0a0f1c] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0f1524] border-b border-slate-800/80">
        <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">{match[1]}</span>
        <button 
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 bg-[#1a233a] hover:bg-[#253253] px-2.5 py-1 rounded-md text-xs"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? <span className="text-emerald-400">Copied!</span> : <span>Copy</span>}
        </button>
      </div>
      <SyntaxHighlighter
        children={code}
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        customStyle={{ margin: 0, background: 'transparent', padding: '1.25rem', fontSize: '0.875rem', lineHeight: '1.5' }}
        {...props}
      />
    </div>
  );
};

export default function DocPage() {
  const { slug } = useParams();
  const [doc, setDoc] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const index = docs.findIndex(d => d.slug === slug);
    if (index !== -1) {
      setDoc(docs[index]);
      setCurrentIndex(index);

      // Extract headings for "On this page" sidebar
      const extractedHeadings = [];
      const regex = /^(#{2,3})\s+(.+)$/gm;
      let match;
      while ((match = regex.exec(docs[index].content)) !== null) {
        const level = match[1].length;
        const text = match[2];
        // Standard slugification to match rehype-slug
        const id = text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
        extractedHeadings.push({ level, text, id });
      }
      setHeadings(extractedHeadings);
    } else {
      setDoc(null);
    }
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [slug]);

  if (!doc) return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Document not found</h2>
      <p className="text-slate-400 mb-6">The page you are looking for doesn't exist.</p>
      <Link to="/docs" className="text-blue-400 hover:underline">Go back to Documentation</Link>
    </div>
  );

  const prevDoc = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const nextDoc = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  return (
    <div className="flex flex-col xl:flex-row gap-12 items-start w-full relative">
      {/* Markdown Content */}
      <article className="flex-1 w-full min-w-0 pb-20 overflow-hidden">
        <div className="mb-14">
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 tracking-tight leading-tight mb-6 drop-shadow-sm">
            {doc.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <div className="h-0.5 w-full bg-gradient-to-r from-slate-800 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Custom Prose Styles for a real documentation feel */}
        <div className="prose prose-invert max-w-none prose-lg break-words prose-p:text-[17px] prose-p:leading-[1.85] prose-p:text-slate-300 prose-p:mb-9 prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8 prose-h1:font-semibold prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:font-semibold prose-h2:text-white prose-h2:border-b prose-h2:border-slate-700 prose-h2:pb-6 prose-h3:text-[26px] prose-h3:mt-14 prose-h3:mb-6 prose-h3:font-medium prose-hr:my-16 prose-hr:border-slate-700 prose-strong:text-white prose-strong:font-semibold prose-ul:my-8 prose-li:my-3 prose-li:text-slate-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <CodeBlock match={match} children={children} props={props} />
                ) : (
                  <code className="bg-[#0f1524] text-blue-300 px-1.5 py-0.5 rounded-md text-[0.875em] font-mono border border-slate-700/50" {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {doc.content}
          </ReactMarkdown>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-20 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between gap-4">
          {prevDoc ? (
            <Link to={`/docs/${prevDoc.slug}`} className="group flex flex-col gap-2 p-5 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all text-left w-full sm:w-1/2">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                <ChevronLeft size={16} /> Previous
              </span>
              <span className="text-blue-400 font-medium text-lg group-hover:text-blue-300">{prevDoc.title}</span>
            </Link>
          ) : <div className="w-full sm:w-1/2"></div>}

          {nextDoc ? (
            <Link to={`/docs/${nextDoc.slug}`} className="group flex flex-col gap-2 p-5 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all text-right w-full sm:w-1/2 items-end">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                Next <ChevronRight size={16} />
              </span>
              <span className="text-blue-400 font-medium text-lg group-hover:text-blue-300">{nextDoc.title}</span>
            </Link>
          ) : <div className="w-full sm:w-1/2"></div>}
        </div>
      </article>

      {/* Right Sidebar - Table of Contents */}
      {headings.length > 0 && (
        <aside className="hidden xl:block w-64 shrink-0 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
          <div className="border-l border-slate-800/60 pl-6 py-2">
            <h4 className="text-sm font-bold text-slate-200 mb-4 uppercase tracking-wider">On this page</h4>
            <nav className="flex flex-col gap-2.5">
              {headings.map((h, idx) => (
                <a
                  key={idx}
                  href={`#${h.id}`}
                  className={`text-sm hover:text-blue-400 transition-colors block line-clamp-2 ${
                    h.level === 2 ? 'text-slate-400 font-medium' : 'pl-4 text-slate-500'
                  }`}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}
