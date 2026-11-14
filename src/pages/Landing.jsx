import React, { useEffect, useRef } from 'react';
import { Terminal, Cpu, Shield, Globe, Zap, ArrowRight, Code, MessageSquare, Play, Package, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

// Config de animaciones suaves (NO matan GPU)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

// Componente para animar cuando entra al viewport (solo UNA VEZ)
function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: isInView ? "auto" : "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
            <Link to="/plugins" className="hover:text-white transition-colors">Plugins</Link>
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
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-blue-400 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Level 1 Autonomous Agent
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Stop describing. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Start executing.
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                OpenACM is a local, autonomous AI agent that doesn't just give you instructions — it executes them. With direct OS access, browser automation, and multi-channel support.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/docs" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  Read the Docs <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 hover:scale-105">
                  <Code className="w-4 h-4" /> View on GitHub
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="py-24 border-t border-slate-800/60 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Action</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Unlike chatbots that only talk, OpenACM executes. It runs commands, manages files, and automates workflows.
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<Terminal className="w-6 h-6 text-blue-400" />}
                title="OS Integration"
                description="Execute terminal commands, manage processes, and automate system tasks with direct OS access."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<Globe className="w-6 h-6 text-cyan-400" />}
                title="Browser Automation"
                description="Built-in Playwright integration for web scraping, testing, and automated browser workflows."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<Shield className="w-6 h-6 text-emerald-400" />}
                title="Multi-Channel"
                description="Control via CLI, Telegram, or Discord. Use the interface that fits your workflow."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<Zap className="w-6 h-6 text-amber-400" />}
                title="Local by Default"
                description="Your data stays on your machine. No cloud dependencies, no API calls to external services."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<Cpu className="w-6 h-6 text-purple-400" />}
                title="Skill System"
                description="Teach the agent custom capabilities. From file operations to complex multi-step workflows."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                icon={<Package className="w-6 h-6 text-pink-400" />}
                title="Extensible"
                description="Open architecture with TypeScript. Add providers, channels, and tools as needed."
              />
            </motion.div>
          </motion.div>

          <AnimatedSection className="mt-10">
            <Link
              to="/plugins"
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:border-blue-500/40 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1">Plugin marketplace</h3>
                <p className="text-slate-400 text-sm">Add browser control, smart-home devices and more. Install a plugin in your OpenACM with one click.</p>
              </div>
              <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-2 shrink-0">
                Browse plugins <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800/50 p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to stop typing commands?</h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Install OpenACM locally and start executing tasks instead of just planning them.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/docs" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:scale-105">
                    Get Started
                  </Link>
                  <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Code className="w-4 h-4" /> View Source
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="OpenACM" className="h-8 w-auto" />
              <span className="text-slate-500 text-sm">© 2026 OpenACM. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/docs" className="text-slate-400 hover:text-white transition-colors text-sm">Documentation</Link>
              <Link to="/plugins" className="text-slate-400 hover:text-white transition-colors text-sm">Plugins</Link>
              <a href="https://github.com/Json55Hdz/OpenACM" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/OpenACM" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Code className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-800/30 transition-all duration-300 group cursor-pointer hover:border-slate-700/60 hover:shadow-lg hover:shadow-blue-500/5">
      <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default Landing;








