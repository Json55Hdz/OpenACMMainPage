import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docsData as docs } from '../docsData';
import { ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

const REPO_URL = 'https://github.com/Json55Hdz/OpenACM';
const DOC_SLUGS = new Set(docs.map(d => d.slug));

// Same rule as update_docs.py → slugify(): file name without extension,
// lowercase, "_" and spaces → "-".
function fileSlug(fileName) {
  const stem = fileName.replace(/\.md$/i, '').toLowerCase();
  return stem.replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
}

// Approximation of github-slugger (used by rehype-slug) for the "On this page" ids.
function headingSlug(text, seen) {
  const base = text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc}\- ]/gu, '')
    .replace(/ /g, '-');
  const count = seen.get(base) || 0;
  seen.set(base, count + 1);
  return count ? `${base}-${count}` : base;
}

// Turn the relative links used inside docs/*.md into site routes:
//   ./07-agents.md#channels  → /docs/07-agents#channels
//   ../CHANGELOG.md, ../LICENSE → the file on GitHub
function resolveHref(href) {
  if (!href || href.startsWith('#') || /^[a-z]+:/i.test(href)) return { href };
  const [path, hash] = href.split('#');
  const anchor = hash ? `#${hash}` : '';
  const clean = path.replace(/^\.\//, '');
  if (clean.startsWith('../')) {
    return { href: `${REPO_URL}/blob/main/${clean.replace(/^(\.\.\/)+/, '')}${anchor}`, external: true };
  }
  if (/\.md$/i.test(clean) && !clean.includes('/')) {
    const slug = fileSlug(clean);
    if (DOC_SLUGS.has(slug)) return { to: `/docs/${slug}${anchor}` };
  }
  return { href: `${REPO_URL}/blob/main/docs/${clean}${anchor}`, external: true };
}

function MarkdownLink({ href, children, ...props }) {
  const target = resolveHref(href);
  if (target.to) {
    return <Link to={target.to} {...props}>{children}</Link>;
  }
  if (target.external) {
    return <a href={target.href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
  }
  return <a href={target.href} {...props}>{children}</a>;
}

const CodeBlock = ({ language, children, props }) => {
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
        <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 bg-[#1a233a] hover:bg-[#253253] px-2.5 py-1 rounded-md text-xs"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? <span className="text-emerald-400">Copied!</span> : <span>Copy</span>}
        </button>
      </div>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        PreTag="div"
        customStyle={{ margin: 0, background: 'transparent', padding: '1.25rem', fontSize: '0.875rem', lineHeight: '1.5' }}
        {...props}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const markdownComponents = {
  a: MarkdownLink,
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <CodeBlock language={match[1]} props={props}>{children}</CodeBlock>
    ) : (
      <code className="bg-[#0f1524] text-blue-300 px-1.5 py-0.5 rounded-md text-[0.875em] font-mono border border-slate-700/50" {...props}>
        {children}
      </code>
    );
  },
};

export default function DocPage() {
  const { slug } = useParams();
  const location = useLocation();

  const currentIndex = docs.findIndex(d => d.slug === slug);
  const doc = currentIndex !== -1 ? docs[currentIndex] : null;

  // The page renders the title itself, so drop the document's leading "# Title".
  const body = useMemo(
    () => (doc ? doc.content.replace(/^\s*#\s+[^\n]*\n/, '') : ''),
    [doc]
  );

  // Headings for the "On this page" sidebar (code blocks excluded).
  const headings = useMemo(() => {
    const seen = new Map();
    const withoutCode = body.replace(/```[\s\S]*?```/g, '');
    const result = [];
    for (const match of withoutCode.matchAll(/^(#{1,3})\s+(.+)$/gm)) {
      const text = match[2].replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();
      const id = headingSlug(text, seen);
      if (match[1].length >= 2) result.push({ level: match[1].length, text, id });
    }
    return result;
  }, [body]);

  // Scroll to the top on page change, or to the #anchor when there is one.
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [slug, location.hash]);

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
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{doc.section}</p>
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 tracking-tight leading-tight mb-6 drop-shadow-sm">
            {doc.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <div className="h-0.5 w-full bg-gradient-to-r from-slate-800 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Custom Prose Styles for a real documentation feel */}
        <div className="prose prose-invert max-w-none prose-lg break-words prose-p:text-[17px] prose-p:leading-[1.85] prose-p:text-slate-300 prose-p:mb-9 prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8 prose-h1:font-semibold prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:font-semibold prose-h2:text-white prose-h2:border-b prose-h2:border-slate-700 prose-h2:pb-6 prose-h3:text-[26px] prose-h3:mt-14 prose-h3:mb-6 prose-h3:font-medium prose-hr:my-16 prose-hr:border-slate-700 prose-strong:text-white prose-strong:font-semibold prose-ul:my-8 prose-li:my-3 prose-li:text-slate-300 prose-a:text-blue-400 prose-table:block prose-table:overflow-x-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            components={markdownComponents}
          >
            {body}
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
              {headings.map((h) => (
                <a
                  key={h.id}
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
