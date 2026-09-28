import React, { useState } from 'react';
import {
  Terminal, Cpu, Shield, Globe, ArrowRight, Code, MessageSquare, Play, Package, Sparkles,
  Bot, Workflow, Network, Plug, Brain, Mic, Clock, Layers, Copy, Check, BookOpen,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VERSION = '0.4.7';
const REPO_URL = 'https://github.com/Json55Hdz/OpenACM';

const FEATURES = [
  {
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    title: 'OS-Level Execution',
    description: 'Runs shell commands, a persistent Python kernel and surgical code edits — with a real interactive terminal for every conversation.',
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: 'Browser Automation',
    description: 'A persistent Playwright/Chromium browser that navigates, clicks, fills forms and extracts data across multiple steps.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-green-400" />,
    title: 'Multi-Channel',
    description: 'Web dashboard, terminal console, Telegram, Discord and WhatsApp (official Cloud API) — all sharing the same brain.',
  },
  {
    icon: <Bot className="w-6 h-6 text-orange-400" />,
    title: 'Agents',
    description: 'Specialized assistants with their own prompt, tool allowlist, knowledge base, memory policy and their own Telegram bot or WhatsApp number.',
  },
  {
    icon: <Workflow className="w-6 h-6 text-pink-400" />,
    title: 'Visual Flows & Webhooks',
    description: 'Node-based flows (HTTP, conditions, loops, WooCommerce) that agents call as tools — or that run from signed public webhooks.',
  },
  {
    icon: <Network className="w-6 h-6 text-purple-400" />,
    title: 'Multi-Agent Swarms',
    description: 'Give a goal to a team of AI workers that plan, share knowledge and execute tasks in parallel.',
  },
  {
    icon: <Plug className="w-6 h-6 text-indigo-400" />,
    title: 'MCP & Plugins',
    description: 'Connect any Model Context Protocol server, or use plugins like Gmail Classifier, Home Assistant and Content Automation.',
  },
  {
    icon: <Brain className="w-6 h-6 text-rose-400" />,
    title: 'Long-Term Memory',
    description: 'ChromaDB RAG memory across conversations, automatic context compaction, and Code Resurrection over your old projects.',
  },
  {
    icon: <Layers className="w-6 h-6 text-sky-400" />,
    title: 'Any LLM',
    description: 'OpenAI, Anthropic, Gemini, xAI, OpenRouter, OpenCode Go, Ollama, any OpenAI-compatible endpoint — or your logged-in Claude/Gemini CLI.',
  },
  {
    icon: <Clock className="w-6 h-6 text-yellow-400" />,
    title: 'Cron & Routines',
    description: 'Scheduled jobs, activity-based routine detection and workflow suggestions that automate what you repeat.',
  },
  {
    icon: <Mic className="w-6 h-6 text-teal-400" />,
    title: 'Voice',
    description: 'Optional always-on voice daemon (faster-whisper + wake word) and in-browser Kokoro text-to-speech.',
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: 'Local, Private & Guarded',
    description: 'Self-hosted, token-protected dashboard, encrypted conversations, and confirmation / whitelist / yolo execution modes.',
  },
];

const INSTALL_OPTIONS = [
  {
    title: 'npm CLI (recommended)',
    note: 'Requires Node.js 18+ and git. Installs into ~/OpenACM.',
    commands: 'npm i -g open-acm\nopenacm install\nopenacm start',
  },
  {
    title: 'One-liner',
    note: 'Linux / macOS — on Windows use install.ps1 from an admin PowerShell.',
    commands: 'curl -fsSL https://raw.githubusercontent.com/Json55Hdz/OpenACM/main/install.sh | bash',
  },
  {
    title: 'Docker',
    note: 'Set web.host 0.0.0.0 / web.port 8080 in config/local.yaml first — see the Docker guide.',
    commands: 'git clone https://github.com/Json55Hdz/OpenACM.git && cd OpenACM\ndocker compose -f docker/docker-compose.yml up -d --build\ndocker logs openacm',
  },
];

const REQUIREMENTS = [
  { label: 'Python', value: '3.12+' },
  { label: 'Node.js', value: '20+' },
  { label: 'RAM', value: '8 GB Windows · 3 GB Linux' },
  { label: 'CPU', value: '2+ cores (3+ recommended)' },
  { label: 'Dashboard', value: 'http://127.0.0.1:47821' },
];

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="OpenACM" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#install" className="hover:text-white transition-colors">Install</a>
            <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <a href={REPO_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/docs/02-getting-started" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-blue-400 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              v{VERSION} · Tier-1 Autonomous Agent · MIT
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Stop describing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Start executing.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              OpenACM is a self-hosted, autonomous AI agent that doesn't just give you instructions — it executes them.
              Direct OS access, browser automation, agents with their own channels, visual flows, swarms and MCP — all from one web dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/docs" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Read the Docs <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={REPO_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-slate-700">
                <Code className="w-4 h-4" /> View Source
              </a>
            </div>
          </div>

          {/* Terminal Preview */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs text-slate-500 font-mono">acm@local:~</div>
              </div>
              <div className="p-6 font-mono text-sm md:text-base text-slate-300 space-y-4">
                <div className="flex gap-4">
                  <span className="text-blue-400 shrink-0">➜</span>
                  <span className="text-slate-100">User: "Create a React app, install tailwind, and start the server."</span>
                </div>
                <div className="flex gap-4 opacity-80">
                  <span className="text-slate-500 shrink-0">⚙</span>
                  <span className="text-cyan-400">Thinking: I need to run shell commands to bootstrap the project.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">⚡</span>
                  <div>
                    <span className="text-slate-400">run_command: </span>
                    <span className="text-yellow-300">npx create-vite my-app --template react && cd my-app && npm install tailwindcss</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-slate-300">Approved in the dashboard · dependencies installed. Starting dev server...</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">➤</span>
                  <span className="text-slate-300">Server running at <span className="text-green-400">http://localhost:5173</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative py-24 border-t border-slate-800/60 scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Real Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Not just another chatbot. OpenACM can actually do things on your system — and keeps doing them on a schedule, on your channels, or when a webhook fires.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="py-24 border-t border-slate-800/60 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Install in minutes</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Setup installs uv, Python 3.12, Node 20, the dependencies and Chromium. On first start, open the dashboard, paste the token printed in the terminal and pick your LLM provider.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {INSTALL_OPTIONS.map((option) => (
              <InstallCard key={option.title} {...option} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {REQUIREMENTS.map((req) => (
              <div key={req.label} className="rounded-lg border border-slate-800/60 bg-slate-900/30 px-4 py-3">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{req.label}</div>
                <div className="text-sm text-slate-200 font-medium">{req.value}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Update anytime with <code className="text-blue-300">openacm update</code> (or <code className="text-blue-300">./update.sh</code> / <code className="text-blue-300">update.bat</code>).{' '}
            <Link to="/docs/02-getting-started" className="text-blue-400 hover:underline">Full installation guide →</Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to stop typing commands?</h2>
          <p className="text-slate-400 mb-8 text-lg">Get started with OpenACM in minutes. It's free and open source.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/docs/02-getting-started" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Play className="w-4 h-4" /> Quick Start
            </Link>
            <Link to="/docs/32-docker" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-slate-700">
              <Package className="w-4 h-4" /> Run with Docker
            </Link>
          </div>
        </div>
      </section>

      {/* About This Site Section */}
      <section className="py-16 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-slate-800/60 bg-slate-900/50">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-2">
                Site Created by OpenACM (AI Agent)
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                This landing page and its documentation system were built by OpenACM itself — from generating the React components to turning the project's Markdown docs into these pages and building the production bundle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="OpenACM" className="h-8 w-auto" />
              <span className="text-slate-500 text-sm">v{VERSION}</span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Jeison Hernandez (JsonProductions). Open source under the MIT License.
            </p>
            <div className="flex gap-6">
              <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="text-slate-400 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <Link to="/docs" aria-label="Documentation" className="text-slate-400 hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </Link>
              <a href="https://www.npmjs.com/package/open-acm" target="_blank" rel="noreferrer" aria-label="npm package" className="text-slate-400 hover:text-white transition-colors">
                <Cpu className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-800/30 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function InstallCard({ title, note, commands }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/60 bg-slate-950/60">
        <h3 className="font-semibold text-slate-100">{title}</h3>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 bg-slate-800/70 hover:bg-slate-700 px-2.5 py-1 rounded-md text-xs"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="px-5 py-4 text-sm font-mono text-yellow-200 whitespace-pre-wrap break-all flex-1">{commands}</pre>
      <p className="px-5 pb-4 text-xs text-slate-500">{note}</p>
    </div>
  );
}

export default Landing;
