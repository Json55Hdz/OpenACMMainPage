import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, Copy, Check, Code, Puzzle, ExternalLink, ShieldAlert, Package } from 'lucide-react';
import { pluginsData, DEFAULT_OPENACM_URL, pipCommand } from '../pluginsData';

const STORAGE_KEY = 'openacm.dashboardUrl';

/** Keep only a usable http(s) origin; anything else falls back to the default. */
function cleanBaseUrl(value) {
  try {
    const url = new URL(String(value || '').trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return DEFAULT_OPENACM_URL;
    return url.origin;
  } catch {
    return DEFAULT_OPENACM_URL;
  }
}

function useCopy() {
  const [copied, setCopied] = useState(null);
  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((current) => (current === key ? null : current)), 1800);
    } catch {
      setCopied(null);
    }
  };
  return { copied, copy };
}

export default function Plugins() {
  const [query, setQuery] = useState('');
  const [baseInput, setBaseInput] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_OPENACM_URL;
    } catch {
      return DEFAULT_OPENACM_URL; // storage unavailable
    }
  });
  const { copied, copy } = useCopy();

  const baseUrl = cleanBaseUrl(baseInput);

  const saveBase = (value) => {
    setBaseInput(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // storage unavailable: the value still works for this visit
    }
  };

  const plugins = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pluginsData;
    return pluginsData.filter((p) =>
      [p.name, p.description, p.author, ...(p.tags || [])].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <nav className="border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="OpenACM" className="h-10 w-auto" />
          </Link>
          <div className="flex gap-6 sm:gap-8 text-sm font-medium text-slate-300">
            <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <Link to="/plugins" className="text-blue-400 font-semibold">Plugins</Link>
            <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-blue-400 mb-6">
            <Puzzle className="w-4 h-4" /> Plugin marketplace
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Give your agent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">new abilities</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Plugins add tools, skills and dashboards to OpenACM. Install one with a click, or copy its
            address and paste it into the Plugins page of your OpenACM.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-4 mb-10">
          <label className="block">
            <span className="block text-sm font-medium text-slate-300 mb-2">Search plugins</span>
            <span className="relative block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="browser, email, smart home…"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </span>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-300 mb-2">Where your OpenACM runs</span>
            <input
              type="url"
              value={baseInput}
              onChange={(e) => saveBase(e.target.value)}
              placeholder={DEFAULT_OPENACM_URL}
              spellCheck={false}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-sm font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <span className="block text-xs text-slate-500 mt-2">
              The Install button opens this address. Change it if OpenACM runs on another machine or port.
            </span>
          </label>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          {plugins.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} baseUrl={baseUrl} copied={copied} copy={copy} />
          ))}
        </section>

        {plugins.length === 0 && (
          <p className="text-center py-16 text-slate-500">No plugins match “{query}”.</p>
        )}

        <section className="mt-20 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-8">
            <h2 className="text-xl font-bold mb-5">How installing works</h2>
            <ol className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <StepNumber n={1} />
                <span><strong className="text-slate-200">Press Install.</strong> Your own OpenACM opens on its Plugins page with the plugin ready to install.</span>
              </li>
              <li className="flex gap-3">
                <StepNumber n={2} />
                <span><strong className="text-slate-200">Confirm there.</strong> OpenACM shows the repository and asks before installing anything.</span>
              </li>
              <li className="flex gap-3">
                <StepNumber n={3} />
                <span><strong className="text-slate-200">Restart OpenACM.</strong> The plugin loads on the next start.</span>
              </li>
            </ol>
            <p className="text-sm text-slate-400 mt-6">
              Prefer copy and paste? Copy the plugin address and paste it into
              <span className="text-slate-200"> Plugins → Install from GitHub</span> in OpenACM, or run the pip command in the Python environment OpenACM uses.
            </p>
            <div className="flex gap-3 mt-6 text-sm text-slate-400 border-t border-slate-800/60 pt-5">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
              <span>A plugin runs with the same access OpenACM has on your machine. Install only plugins whose source you trust.</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-8">
            <h2 className="text-xl font-bold mb-5">Publish your own plugin</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              A plugin is a normal Python package in a public GitHub repository that registers itself
              in the <code className="font-mono text-slate-200">openacm.plugins</code> entry point group.
              No change to OpenACM is needed.
            </p>
            <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto mb-5">{`[project.entry-points."openacm.plugins"]
my_plugin = "my_package:PLUGIN"`}</pre>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Anyone can already install it by pasting its GitHub address into OpenACM. To list it
              here, open a pull request that adds it to the marketplace registry.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Json55Hdz/OpenACM/blob/main/docs/24-plugins.md"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
              >
                Plugin guide <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Json55Hdz/OpenACMMainPage/blob/main/src/pluginsData.js"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
              >
                <Code className="w-4 h-4" /> Marketplace registry
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 py-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-slate-500 text-sm">© 2026 OpenACM. All rights reserved.</span>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <Link to="/docs" className="text-slate-400 hover:text-white transition-colors">Documentation</Link>
            <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepNumber({ n }) {
  return (
    <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0">
      {n}
    </span>
  );
}

function CopyButton({ label, copiedLabel = 'Copied', isCopied, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
    >
      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
      {isCopied ? copiedLabel : label}
    </button>
  );
}

function PluginCard({ plugin, baseUrl, copied, copy }) {
  const installHref = plugin.repo
    ? `${baseUrl}/plugins?install=${encodeURIComponent(plugin.repo)}`
    : null;

  return (
    <article className="flex flex-col p-6 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:border-slate-700/60 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-lg bg-slate-800/60 flex items-center justify-center shrink-0">
            <Puzzle className="w-5 h-5 text-blue-400" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-lg leading-tight truncate">{plugin.name}</h3>
            <p className="text-xs text-slate-500 truncate">by {plugin.author}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {plugin.builtIn && (
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Included
            </span>
          )}
          <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">v{plugin.version}</span>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-4">{plugin.description}</p>

      {plugin.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {plugin.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-800/60 text-slate-400">{tag}</span>
          ))}
        </div>
      )}

      {plugin.notes && <p className="text-xs text-slate-500 mb-4">{plugin.notes}</p>}

      <div className="mt-auto pt-4 border-t border-slate-800/60">
        {plugin.builtIn ? (
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <Package className="w-4 h-4 text-emerald-400" />
            Ships with OpenACM. Turn it on in the Plugins page.
          </p>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              <a
                href={installHref}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              >
                <Download className="w-4 h-4" /> Install in OpenACM
              </a>
              <CopyButton
                label="Copy address"
                isCopied={copied === `${plugin.id}:repo`}
                onClick={() => copy(`${plugin.id}:repo`, plugin.repo)}
              />
              <CopyButton
                label="Copy pip command"
                isCopied={copied === `${plugin.id}:pip`}
                onClick={() => copy(`${plugin.id}:pip`, pipCommand(plugin.repo))}
              />
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm">
              <a href={plugin.repo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5">
                <Code className="w-4 h-4" /> Source
              </a>
              {(plugin.extras || []).map((extra) => (
                <a key={extra.url} href={extra.url} className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <Download className="w-4 h-4" /> {extra.label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
