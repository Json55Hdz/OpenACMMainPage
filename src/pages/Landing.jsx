import React from 'react';
import { Terminal, Cpu, Shield, Globe, Zap, ArrowRight, Code, MessageSquare, Play, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight">OpenACM</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link to="/docs" className="hover:text-white transition-colors">Features</Link>
            <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <a href="https://github.com/OpenACM/OpenACM" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/docs" className="text-sm font-medium hover:text-white hidden sm:block">Log in</Link>
            <Link to="/docs" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
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
              Level 1 Autonomous Agent
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Stop describing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Start executing.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              OpenACM is a local, autonomous AI agent that doesn't just give you instructions—it executes them. With direct OS access, browser automation, and multi-channel support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/docs" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Read the Docs <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/OpenACM/OpenACM" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-slate-700">
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
                    <span className="text-slate-400">Executing: </span>
                    <span className="text-yellow-300">npx create-vite my-app --template react && cd my-app && npm install tailwindcss</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span className="text-slate-300">Dependencies installed successfully. Starting dev server...</span>
                </div>
                <div className="flex gap-4 animate-pulse">
                  <span className="text-blue-400 shrink-0">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-900/50 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Action</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">OpenACM connects directly to your environment to perform tasks autonomously.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct OS Access</h3>
              <p className="text-slate-400 leading-relaxed">Full capability to read/write files, execute shell commands, and manage your local environment securely.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">MCP Support</h3>
              <p className="text-slate-400 leading-relaxed">Native support for the Model Context Protocol. Connect to databases, APIs, and tools without changing code.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Channel</h3>
              <p className="text-slate-400 leading-relaxed">Interact with OpenACM through Telegram, Discord, or the local Web UI. Your agent is wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-slate-500" />
            <span className="font-semibold text-slate-400">OpenACM</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 OpenACM Project. Open source under MIT License.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
