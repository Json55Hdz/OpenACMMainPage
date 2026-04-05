import React from 'react';
import { Terminal, Cpu, Shield, Globe, Zap, ArrowRight, Code, MessageSquare, Play, Package, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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

            <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-4">

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
              OpenACM is a local, autonomous AI agent that doesn't just give you instructions — it executes them. With direct OS access, browser automation, and multi-channel support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/docs" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Read the Docs <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-slate-700">
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
                  <span className="text-blue-400 shrink-0">âžœ</span>
                  <span className="text-slate-100">User: "Create a React app, install tailwind, and start the server."</span>
                </div>
                <div className="flex gap-4 opacity-80">
                  <span className="text-slate-500 shrink-0">âš™</span>
                  <span className="text-cyan-400">Thinking: I need to run shell commands to bootstrap the project.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">âš¡</span>
                  <div>
                    <span className="text-slate-400">Executing: </span>
                    <span className="text-yellow-300">npx create-vite my-app --template react && cd my-app && npm install tailwindcss</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">âœ“</span>
                  <span className="text-slate-300">Dependencies installed successfully. Starting dev server...</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 shrink-0">ðŸš€</span>
                  <span className="text-slate-300">Server running at <span className="text-green-400">http://localhost:5173</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative py-24 border-t border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Real Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Not just another chatbot. OpenACM can actually do things on your system.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Terminal className="w-6 h-6 text-blue-400" />}
              title="OS-Level Execution"
              description="Run shell commands, manage files, and control your system directly through natural language."
            />
            <FeatureCard 
              icon={<Cpu className="w-6 h-6 text-purple-400" />}
              title="Local & Private"
              description="Everything runs on your machine. No data leaves your system unless you explicitly allow it."
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6 text-cyan-400" />}
              title="Browser Automation"
              description="Control browsers, scrape data, fill forms, and interact with web apps automatically."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-emerald-400" />}
              title="Secure by Design"
              description="Sandboxed execution environment with clear permission boundaries and audit logs."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Multi-Channel"
              description="Interact via CLI, Discord, Slack, or the web interface — your choice."
            />
            <FeatureCard 
              icon={<Code className="w-6 h-6 text-pink-400" />}
              title="Extensible"
              description="Add custom tools and integrations. OpenACM adapts to your workflow."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to stop typing commands?</h2>
          <p className="text-slate-400 mb-8 text-lg">Get started with OpenACM in minutes. It's free and open source.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/docs" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Play className="w-4 h-4" /> Quick Start
            </Link>
            <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-slate-700">
              <Package className="w-4 h-4" /> Installation
            </a>
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
                This entire landing page — including the documentation system, design, and all 20+ docs — was built, written, and deployed entirely by OpenACM (the AI Agent itself). From generating the React components to populating the docs from Markdown files, building the production bundle, and uploading it to the server. The agent handled everything autonomously.
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
            </div>
            <p className="text-slate-500 text-sm">
              Â© {new Date().getFullYear()} OpenACM. Open source under MIT License.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/OpenACM" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
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

export default Landing;
