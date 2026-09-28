// Archivo generado por update_docs.py a partir de ../OpenACM/docs/*.md
// No lo edites a mano: edita los .md y vuelve a correr `python update_docs.py`.

export const docSections = ["Documentation", "Guides", "Project"];

export const docsData = [
  {
    "slug": "01-introduction",
    "title": "Introduction to OpenACM",
    "section": "Documentation",
    "content": `
# Introduction to OpenACM

## What is OpenACM?

**OpenACM** (Open Automated Computer Manager) is an open-source, self-hosted Tier-1 autonomous AI agent that runs directly on your computer or server. Unlike cloud-based AI assistants, OpenACM has real, direct access to your operating system — it can execute commands, write and run code, control a browser, manage files, control smart home devices through Home Assistant, interact with your Google Workspace, run specialized agents on Telegram and WhatsApp, and much more.

OpenACM is not a chatbot. It is an **execution engine** that happens to be controlled through natural language.

---

## The Core Idea

Most AI assistants *describe* what to do. OpenACM *does it*.

\`\`\`
User: "Generate a report of my disk usage and send it to my email"

❌ Traditional AI:
"You can use the \`du\` command to check disk usage, then use your email client..."

✅ OpenACM:
[Runs \`du -sh *\` to get disk usage]
[Generates a PDF report with Python + reportlab]
[Sends the email via Gmail API]
"Done! Report sent to your inbox."
\`\`\`

The key difference is agency — OpenACM completes tasks end-to-end without requiring you to copy-paste code, run commands manually, or switch between applications.

---

## Key Features

### 🧠 Intelligent Decision Making
- Powered by any LLM (OpenCode Go, OpenAI, Anthropic, Gemini, xAI, OpenRouter, Ollama, any OpenAI-compatible endpoint, or a logged-in \`claude\`/\`gemini\`/\`opencode\` CLI — via LiteLLM)
- Multi-step agentic loops — can call multiple tools in sequence to complete complex tasks
- Automatic intent classification to select the right tools for each request
- Semantic tool selection using multilingual embeddings — sends only relevant tools to save tokens

### 🛠️ 70+ Built-in Tools
- System command execution with sandboxing
- Python kernel (persistent, with installed libraries)
- Automated browser control (Playwright/Chromium)
- File system operations and surgical code editing (\`edit_file\`, \`grep_in_files\`, \`get_file_outline\`, \`run_linter\`)
- Web search and page scraping
- Google Workspace (Gmail, Calendar, Drive, YouTube)
- Smart Home control through the Home Assistant plugin
- Screenshot capture
- UI generation (Google Stitch)
- Platform self-management: agents, flows, cron jobs, swarms, MCP servers, model and security mode

See the [Tools Reference](./05-tools-reference.md) for the full list.

### 🔌 Multi-Channel Support
Talk to your agent through:
- **Web Dashboard** — built-in browser interface with real-time streaming
- **Telegram** — message your agent from anywhere
- **Discord** — integrate into your server
- **WhatsApp** — official Meta WhatsApp Cloud API (or a legacy local bridge)
- **Console** — interactive terminal

Agents can also have their **own** Telegram bot and WhatsApp number.

### 🧩 Fully Extensible
- **Create skills** — markdown instructions that change how the agent thinks and behaves
- **Create agents** — specialized assistants with their own tools, personality, knowledge base, and Telegram/WhatsApp channels
- **Build visual flows** — node-based automations that agents call as tools, or that run from a public webhook
- **Launch swarms** — teams of AI workers that plan and execute a project in parallel
- **Connect MCP servers** — plug in any Model Context Protocol compatible server
- **Write plugins** — package tools, API routes, dashboard pages and settings in a single Python package

### 🔒 Privacy First
- 100% self-hosted — your data never leaves your machine
- Conversation messages encrypted at rest (Fernet / AES, local key in \`config/activity.key\`)
- Activity data (app usage) encrypted at rest
- Configurable security policies (blocked commands, execution modes)
- Three execution modes: \`confirmation\`, \`auto\`, \`yolo\`

### 🧠 Memory Systems
- **Short-term:** Conversation history per user/channel, auto-compacted when it reaches 60% of the model's context window
- **Long-term:** Vector database (ChromaDB) for facts, notes, and past knowledge retrieval
- **Passive learning:** LocalRouter learns your patterns to classify intents faster

---

## Philosophy

### "Do, don't describe"
OpenACM's golden rule: if there's a tool available, use it. Never describe how something could theoretically be done — just do it.

### Open and self-hosted
Your agent runs on your hardware. Your conversations, your files, your activity — all local. You control the LLM provider, the security policies, and the channels.

### Extensible by design
OpenACM is a platform, not a product. Skills, agents, flows, cron jobs, swarms and MCP servers can be added at runtime without restarting or editing source code; plugins add whole features with a restart.

### Language-agnostic
The intent classification and tool selection system is powered by multilingual embeddings (\`paraphrase-multilingual-MiniLM-L12-v2\`). You can talk to OpenACM in any of 50+ languages.

---

## Who is OpenACM for?

| User | Use Case |
|------|----------|
| **Developers** | Automate repetitive coding tasks, run tests, manage projects, generate boilerplate |
| **Power Users** | Control your PC with voice/text, automate workflows, manage files at scale |
| **Smart Home Enthusiasts** | Unified natural language control for IoT devices via Home Assistant |
| **Teams** | Deploy a shared agent on a server, accessible via Telegram/Discord/WhatsApp |
| **Small businesses** | Customer-facing agents on WhatsApp/Telegram with a knowledge base and WooCommerce product search |
| **AI Researchers** | Platform for experimenting with multi-tool agentic systems |
| **Content Creators** | Automate editing pipelines, generate assets, manage social media |

---

## What OpenACM Can Do Right Now

- ✅ Execute any OS command with real-time output streaming
- ✅ Write, execute, and debug Python code interactively
- ✅ Control a real browser — log in, fill forms, scrape, interact with any website
- ✅ Read, write, search, and manage files across your file system
- ✅ Search the web and retrieve up-to-date information
- ✅ Send and read emails via Gmail
- ✅ Create and manage Google Calendar events
- ✅ Upload/download files from Google Drive
- ✅ Take screenshots and analyze them
- ✅ Control smart home devices through Home Assistant (lights, climate, covers, media players, vacuums, scenes)
- ✅ Remember facts across conversations (vector memory)
- ✅ Create and manage agents, flows, cron jobs and swarms from chat
- ✅ Connect to any MCP-compatible external tool server
- ✅ Run as a Telegram bot, Discord bot, WhatsApp bot, or web interface
- ✅ Classify your Gmail inbox and draft replies (Gmail Classifier plugin)
- ✅ Expose flows as signed public webhooks
- ✅ Listen and speak through the optional voice daemon
- ✅ Detect repetitive workflows and suggest automation
- ✅ Monitor your OS activity patterns and build routines

---

## What Makes OpenACM Different

| Feature | OpenACM | Cloud AI Assistants | Local LLM UIs |
|---------|---------|---------------------|---------------|
| Real OS execution | ✅ | ❌ | ❌ |
| Self-hosted | ✅ | ❌ | ✅ |
| Multi-channel (Telegram, Discord) | ✅ | ❌ | ❌ |
| Visual flows + webhooks | ✅ | ❌ | ❌ |
| IoT / Smart Home | ✅ | Limited | ❌ |
| MCP protocol support | ✅ | Some | Some |
| Encrypted local storage | ✅ | N/A | Varies |
| Multi-agent system | ✅ | ❌ | ❌ |
| Works with any LLM | ✅ | ❌ (locked in) | ✅ |
| Activity pattern detection | ✅ | ❌ | ❌ |
| Long-term RAG memory | ✅ | ❌ | ❌ |

---

## Version

**Current:** v0.4.7 — active development (pre-1.0; breaking changes may still happen between minor versions). See the [CHANGELOG](../CHANGELOG.md).

See the [Roadmap](./18-roadmap.md) for planned features.

`
  },
  {
    "slug": "02-getting-started",
    "title": "Getting Started",
    "section": "Documentation",
    "content": `
# Getting Started

## Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| OS | Windows 10, macOS 12, Ubuntu 22.04 | Windows 11, macOS 14, Ubuntu 24.04 |
| Python | 3.12+ | 3.12+ |
| RAM | 8 GB (Windows) / 3 GB (Linux VPS) | 8-16 GB (16+ GB with local LLMs) |
| CPU | 2 cores / vCPUs | 3+ cores (smooth concurrency) |
| Storage | 5 GB | 20 GB+ |
| Node.js | 20+ | 20+ |
| GPU | Not required | Optional (for local LLM acceleration) |

> OpenACM itself uses about **1.8 GB of RAM** at runtime (FastAPI + dashboard + the embedding models used by RAG and the local router). Windows needs more headroom because the OS alone uses ~4 GB at idle.

The setup scripts install what is missing: [\`uv\`](https://docs.astral.sh/uv/), Python 3.12 (through \`uv\`), Node.js 20 (via nvm, Homebrew or apt on macOS/Linux), the Python dependencies and Playwright's Chromium.

---

## Installation (Recommended — npm CLI)

Requires Node.js 18+ and git.

\`\`\`bash
npm i -g open-acm
openacm install   # clones the repo into ~/OpenACM and runs the full setup
openacm start
\`\`\`

Or without a global install: \`npx open-acm install\` / \`npx open-acm start\`.

| Command | Description |
|---------|-------------|
| \`openacm install\` | Clone and set up OpenACM (first time; offers \`update\` if already installed) |
| \`openacm start\` | Start OpenACM |
| \`openacm stop\` | Stop a running instance |
| \`openacm status\` | Check if OpenACM is running |
| \`openacm update\` | Pull latest + sync deps + rebuild frontend |
| \`openacm repair\` | Reinstall Python dependencies (no git pull) |
| \`openacm uninstall\` | Delete the installation directory |

Set \`OPENACM_DIR=/custom/path\` to use a different installation directory.

---

## Installation (One-Liner)

No need to clone the repo manually. Run this from anywhere:

**macOS / Linux:**
\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/Json55Hdz/OpenACM/main/install.sh | bash
\`\`\`

**Windows (PowerShell as Administrator):**
\`\`\`powershell
iwr -useb https://raw.githubusercontent.com/Json55Hdz/OpenACM/main/install.ps1 | iex
\`\`\`

This clones the repo to \`~/OpenACM\` (or pulls if it already exists), runs the full setup, and offers to launch OpenACM when done.

> To install to a custom path, set \`OPENACM_DIR\` first:  
> \`OPENACM_DIR=/opt/openacm curl -fsSL ... | bash\`

---

## Installation (Manual — Already have git)

If you prefer to clone yourself:

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/Json55Hdz/OpenACM.git
cd OpenACM
\`\`\`

### 2. Run setup

**Windows:**
\`\`\`
setup.bat
\`\`\`
(\`setup.bat\` asks for administrator rights — some Windows setups block the \`uv\` or Playwright installs otherwise.)

**macOS / Linux:**
\`\`\`bash
chmod +x setup.sh run.sh update.sh acm.sh
./setup.sh
\`\`\`

The setup script creates \`.venv\`, installs the Python package (\`uv pip install -e .\`), installs Playwright's Chromium, creates \`config/.env\` from \`config/.env.example\`, and offers to start OpenACM. When it starts, open your browser at \`http://127.0.0.1:47821\`.

---

## The \`acm\` Script

Inside the repository, \`acm.bat\` (Windows) and \`acm.sh\` (macOS/Linux) are a single entry point for the other scripts:

| Command | Description |
|---------|-------------|
| \`acm install\` | First-time setup |
| \`acm start\` | Start OpenACM |
| \`acm stop\` | Stop the instance listening on port 47821 |
| \`acm status\` | Check if OpenACM is running |
| \`acm update\` | Pull latest + sync deps + rebuild frontend |
| \`acm repair\` | Reinstall Python deps without pulling git |

**Windows:** \`acm start\`  
**macOS / Linux:** \`./acm.sh start\`

> **No config needed upfront.** The onboarding wizard in the browser guides you through choosing your LLM provider and entering API keys. Prefer the terminal? Run \`openacm-setup --guided\` (see [CLI Setup Wizard](./27-cli-setup.md)).

---

## First Run: Dashboard Setup

1. Open \`http://127.0.0.1:47821\` in your browser
2. Enter the **Dashboard Token** shown in the terminal. It is generated on the first start and saved as \`DASHBOARD_TOKEN\` in \`config/.env\`, so it stays the same across restarts.
3. The **Onboarding Wizard** guides you through:
   - Choosing your LLM provider and model
   - Setting up optional channels (Telegram, WhatsApp)
   - Configuring optional integrations (Google)
4. In the first chat, the assistant asks for your name, what to call it, and how it should behave, then saves your profile (\`save_user_profile\`).

On first launch you'll see something like:

\`\`\`
   ____                      ___   ______ __  ___
  / __ \\____  ___  ____     /   | / ____//  |/  /
 / / / / __ \\/ _ \\/ __ \\   / /| |/ /    / /|_/ /
/ /_/ / /_/ /  __/ / / /  / ___ / /___ / /  / /
\\____/ .___/\\___/_/ /_/  /_/  |_\\____//_/  /_/
    /_/

[████████████████████] 100% • Starting web dashboard  3.2s

✅ OpenACM is running!

  🧠 LLM: opencode_go (kimi-k2.5)
  🖥️  Web: http://127.0.0.1:47821
  🔒 Security: confirmation mode
  📱 Channels: Console · Web

  🔑 Dashboard Token:
  <your token>
\`\`\`

---

## First Conversation

Type in the web chat or directly in the terminal console:

\`\`\`
You> What can you do?
You> Take a screenshot and tell me what's on my screen
You> What's my disk usage?
You> Search for the latest news about AI agents
You> Create a Python script that renames all .txt files in my Downloads folder to lowercase
\`\`\`

In the default \`confirmation\` security mode, every shell command the agent wants to run is shown to you for approval first. See [Security](./12-security.md).

---

## Quick LLM Configuration

The easiest way is the dashboard (**Configuration → Model**) or the onboarding wizard. To do it by hand, put your overrides in \`config/local.yaml\` (not committed, survives updates) and API keys in \`config/.env\`. API keys are always read from environment variables named \`<PROVIDER_ID>_API_KEY\`.

### Ollama (local, no API key needed)

1. Install [Ollama](https://ollama.com)
2. Pull a model: \`ollama pull llama3.2\`
3. In \`config/local.yaml\`:

\`\`\`yaml
llm:
  default_provider: ollama
  providers:
    ollama:
      base_url: "http://localhost:11434"
      default_model: "llama3.2"
\`\`\`

### OpenAI

\`\`\`yaml
# config/local.yaml
llm:
  default_provider: openai
  providers:
    openai:
      default_model: "gpt-4o"
\`\`\`
\`\`\`env
# config/.env
OPENAI_API_KEY=sk-...
\`\`\`

### Anthropic (Claude)

\`\`\`yaml
# config/local.yaml
llm:
  default_provider: anthropic
  providers:
    anthropic:
      default_model: "claude-sonnet-4-20250514"
\`\`\`
\`\`\`env
# config/.env
ANTHROPIC_API_KEY=sk-ant-...
\`\`\`

See [LLM Providers](./09-llm-providers.md) for every provider, custom endpoints and CLI providers.

---

## Slash Commands

Available in the web chat, the terminal console, and external channels:

| Command | Description |
|---------|-------------|
| \`/new\` | Start a fresh conversation |
| \`/clear\` | Same as \`/new\` |
| \`/reset\` | Emergency reset — wipes this conversation's memory to fix a broken LLM state |
| \`/compact\` | Summarize the conversation now to free context |
| \`/model <name>\` | Switch LLM model mid-conversation |
| \`/stats\` | Show token usage and request counts |
| \`/export\` | Export conversation as text |
| \`/workspace [path\\|clear]\` | Show, pin, or clear the working directory for this conversation |
| \`/help\` | Show available commands |

The terminal console also has \`/models\`, \`/tools\` and \`/config\`.

---

## Directory Structure

\`\`\`
OpenACM/
├── install.ps1 / install.sh   # Bootstrap: clone + setup (run from anywhere)
├── acm.bat / acm.sh           # Unified script: install/update/start/stop/status/repair
├── setup.bat / setup.sh       # One-time setup script
├── update.bat / update.sh     # Pull + sync deps + rebuild frontend
├── run.bat / run.sh           # Start OpenACM (rebuilds the frontend if Node is available)
├── bin/openacm.js             # npm CLI (\`open-acm\` package)
├── scripts/                   # The real implementations of the scripts above (.sh / .ps1)
├── config/
│   ├── default.yaml           # Base configuration (committed)
│   ├── local.yaml             # Your overrides (not committed)
│   ├── .env                   # API keys, tokens and secrets (not committed)
│   ├── .env.example           # Template for .env
│   ├── activity.key           # Local encryption key (not committed)
│   ├── custom_providers.json  # Custom LLM endpoints
│   ├── mcp_servers.json       # MCP server configurations
│   └── google_credentials.json / google_token.json   # Google OAuth (optional)
├── data/
│   ├── openacm.db             # SQLite database (conversations, agents, flows, cron, swarms…)
│   ├── vectordb/              # ChromaDB vector storage (long-term memory)
│   ├── media/                 # Uploaded and generated files served at /api/media
│   ├── logs/                  # Log files
│   └── router_learned.json    # LocalRouter learned examples
├── docker/                    # Dockerfile + docker-compose.yml
├── docs/                      # This documentation
├── frontend/                  # Next.js web dashboard source
├── skills/                    # Skill markdown files
├── src/openacm/               # Python source
│   ├── app.py                 # Main orchestrator
│   ├── core/                  # Brain, memory, LLM router, config, flows, swarms
│   ├── channels/              # Discord, Telegram, WhatsApp (+ per-agent channels)
│   ├── tools/                 # All built-in tools
│   ├── plugins/               # Built-in plugins
│   ├── security/              # Sandbox, policies, crypto
│   ├── storage/               # SQLite database layer
│   ├── voice/                 # Voice daemon + TTS providers
│   ├── cli/                   # openacm-setup / openacm-manage
│   ├── web/                   # FastAPI server + static frontend
│   └── watchers/              # Activity monitor, cron scheduler, code resurrection
└── workspace/                 # Default directory for generated files
\`\`\`

---

## Updating OpenACM

**npm CLI:** \`openacm update\`

**Windows:**
\`\`\`
acm update
\`\`\`
or
\`\`\`
update.bat
\`\`\`

**macOS / Linux:**
\`\`\`bash
./acm.sh update
\`\`\`
or
\`\`\`bash
./update.sh
\`\`\`

This updates the code (\`git pull --ff-only\`, temporarily stashing local changes; if the folder is not a git checkout it downloads the latest tarball from GitHub instead), syncs Python dependencies, and rebuilds the frontend. \`config/.env\`, \`config/local.yaml\`, \`data/\` and \`.venv/\` are preserved. The database schema is automatically migrated on startup.

---

## Docker

\`\`\`bash
# Tell OpenACM to listen on all interfaces, on the port the compose file publishes
cat > config/local.yaml <<'EOF'
web:
  host: 0.0.0.0
  port: 8080
EOF

docker compose -f docker/docker-compose.yml up -d --build
docker logs openacm   # first start prints the dashboard token
\`\`\`

Then open \`http://localhost:8080\`. \`data/\` and \`config/\` are mounted from the host. See [Docker](./32-docker.md).

---

## Manual Installation (Advanced)

If you prefer to install without the scripts, or need to customize the setup:

### 1. Create a Python virtual environment

\`\`\`bash
python3.12 -m venv .venv

# Windows
.venv\\Scripts\\activate

# macOS / Linux
source .venv/bin/activate
\`\`\`

(or \`uv venv --seed\` if you use \`uv\`)

### 2. Install Python dependencies

\`\`\`bash
pip install -e .
playwright install chromium
\`\`\`

All core features (RAG, browser agent, Google APIs, MCP, document parsing) are regular dependencies. The only optional extras are:

\`\`\`bash
pip install -e ".[voice]"   # sounddevice, faster-whisper, numpy, pyttsx3 for the voice daemon
pip install -e ".[dev]"     # pytest, pytest-asyncio, pytest-mock, ruff
\`\`\`

### 3. Build the frontend

\`\`\`bash
cd frontend
npm install
npm run deploy   # next build + copy frontend/dist into src/openacm/web/static
cd ..
\`\`\`

### 4. Run

\`\`\`bash
python -m openacm
# or, with the package installed:
openacm
\`\`\`

---

## Troubleshooting

### "Web dashboard fails to load"
- Make sure the frontend was built and copied to \`src/openacm/web/static/\` (\`npm run deploy\` in \`frontend/\`) — \`setup\`, \`run\` and \`update\` scripts do this automatically when Node.js is available
- Check that port 47821 is not in use: \`netstat -ano | findstr 47821\` (Windows) or \`lsof -i :47821\` (macOS/Linux)

### "LLM connection failed"
- For Ollama: verify it's running with \`ollama list\`
- For cloud providers: check your \`<PROVIDER>_API_KEY\` in \`config/.env\`
- Verify the provider's \`base_url\` in \`config/default.yaml\` / \`config/local.yaml\`

### "Tool execution blocked"
- Review \`security.execution_mode\` (in \`auto\` mode only whitelisted commands run)
- Check \`security.blocked_patterns\` and \`security.blocked_paths\` — you may have blocked too aggressively

### "Sentence-transformers model not downloading"
- The \`paraphrase-multilingual-MiniLM-L12-v2\` model (local router + tool selection) and \`all-MiniLM-L6-v2\` (RAG) download on first use
- Requires internet access on first run; subsequent runs are fully offline
- Cached at \`~/.cache/huggingface/hub/\`

More in [Troubleshooting](./TROUBLESHOOTING.md).

`
  },
  {
    "slug": "03-architecture",
    "title": "Architecture",
    "section": "Documentation",
    "content": `
# Architecture

## Overview

OpenACM is built as a layered, event-driven system. At its core is the **Brain** — an agentic loop that receives messages, selects tools, calls the LLM, executes tool calls, and returns responses. Everything else — channels, the web dashboard, agents, swarms, the cron scheduler, plugins — communicates through the Brain or the shared **EventBus**.

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                          CHANNELS (Input)                           │
│   Web Chat  Telegram  Discord  WhatsApp  Console  (+ agent channels)│
└───────────────────────────────┬─────────────────────────────────────┘
                                │ message
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                              BRAIN                                  │
│                                                                     │
│  ┌──────────────┐   ┌──────────────┐   ┌───────────────────────┐   │
│  │ LocalRouter  │   │    Memory    │   │    Skill Manager      │   │
│  │ (classifier) │   │  (history)   │   │   (inject prompts)    │   │
│  └──────────────┘   └──────────────┘   └───────────────────────┘   │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                     Agentic Loop                             │   │
│  │   1. Build system prompt                                     │   │
│  │   2. Select tools (semantic similarity)                      │   │
│  │   3. Call LLM  ──────────────────────────────────────┐       │   │
│  │   4. Parse response                                   │       │   │
│  │   5. Execute tool calls ──────────────────────────────┘       │   │
│  │   6. Repeat until done (max_tool_iterations, default 25)      │   │
│  └──────────────────────────────────────────────────────────────┘   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ events
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           EVENT BUS                                 │
│  message.received  message.sent  tool.called  tool.result           │
│  message.thinking  llm.request  memory.recall  skill.active  swarm:* │
└───────┬────────────────────────────────────────────────┬────────────┘
        │                                                │
        ▼                                                ▼
┌───────────────┐                            ┌───────────────────────┐
│  Tool Registry│                            │  Web Server (FastAPI)  │
│  70+ tools    │                            │  REST + WebSocket      │
│  + MCP tools  │                            │  Dashboard frontend    │
└───────────────┘                            └───────────────────────┘
        │                                                │
        ▼                                                ▼
┌───────────────┐                            ┌───────────────────────┐
│   Security    │                            │      Database          │
│   Sandbox     │                            │  SQLite (aiosqlite)    │
│   Policies    │                            │  ChromaDB (RAG)        │
└───────────────┘                            └───────────────────────┘
\`\`\`

---

## Component Breakdown

### Brain (\`core/brain.py\`)

The central orchestrator. Receives a message + context, runs the full agentic loop, returns a response.

**Responsibilities:**
- Build and maintain system prompt (base context + active skills + MCP tool list)
- Manage the agentic loop (up to \`assistant.max_tool_iterations\` tool-calling iterations — 25 in the shipped \`default.yaml\`)
- Select relevant tools via semantic similarity (or keyword fallback)
- Inject and parse tool call results back into the conversation
- Handle interruption and message queuing per channel
- Emit events for real-time frontend updates
- Passive learning: teach LocalRouter from tool usage patterns
- Track workflows for automation suggestions

The Brain is split into mixins: \`brain_loop.py\` (agentic loop + message preparation), \`brain_prompt.py\` (system prompt, RAG and skill injection), \`brain_multimodal.py\` (attachments: images, PDFs, audio, office files) and \`brain_workflow.py\` (workflow suggestions).

**Key methods:**
- \`process_message()\` — public entry point; wraps the run in a cancellable task per channel
- \`_prepare_messages_for_llm()\` — optimizes history before each LLM call (nulls old tool results, strips old tool-call arguments and reasoning content, replaces already-seen images with placeholders)
- \`_execute_fast_path()\` — skip LLM entirely for recognized simple intents
- \`structured_extract()\` — typed extraction via Instructor (see [Third-Party Integrations](./25-third-party-integrations.md))

Agents run through \`AgentRunner\` (\`core/agent_runner.py\`), which reuses the same Brain loop with the agent's own prompt, tool allowlist, knowledge base and flow tools.

---

### LLM Router (\`core/llm_router.py\`)

Unified interface to 100+ LLM providers via LiteLLM.

**Capabilities:**
- Retries with exponential backoff on transient errors (5xx, dropped connections) and HTTP 429 rate limits (honors \`Retry-After\`)
- Streaming support (yields tokens in real-time)
- Token usage tracking (persisted to database)
- Model persistence across restarts
- Provider profile system (handles quirks like Gemini's strict message format, providers that don't support tool calling)
- Custom provider support (OpenAI-compatible endpoints) and CLI providers (\`claude\`, \`gemini\`, \`opencode\` binaries)
- Strips \`<think>\` blocks and reasoning content from responses

**Provider Profiles** define per-provider behavior:
- \`needs_tool_enforcement\` — some models need a system message forcing tool use
- \`max_tools_per_call\` — cap tool count (e.g. Gemini has limits)
- \`supports_streaming\` — whether to use streaming mode

---

### Local Router (\`core/local_router.py\`)

Offline intent classifier using sentence-transformers.

**Purpose:** Classify user intents to enable fast-path execution (skip LLM) and passive learning.

**Model:** \`paraphrase-multilingual-MiniLM-L12-v2\` — 50+ language support, ~470MB, CPU-friendly.

**Modes:**
- \`FAST_PATH MODE\` (default, \`local_router.observation_mode: false\`): intercept recognized intents above \`confidence_threshold\` (0.88) and execute directly without an LLM call
- \`OBSERVATION MODE\` (\`observation_mode: true\`): classify silently in background, emit stats, never block the LLM

**Intents:** \`OPEN_APP\`, \`PLAY_MEDIA\`, \`SCREENSHOT\`, \`SYSTEM_INFO\`, \`FILE_SIMPLE\`, \`WEB_SEARCH_SIMPLE\`, \`COMPLEX_TASK\`

**Passive Learning:** When the LLM calls a tool on the first iteration (single tool call = unambiguous signal), the router learns to associate that message pattern with the tool's intent. No explicit labeling needed.

---

### Memory Manager (\`core/memory.py\`)

Per-conversation history management.

**Short-term memory:**
- In-memory cache (Python dict) keyed by \`channel_id:user_id\`
- Persisted to SQLite on every message
- Survives restarts: reloaded from DB on cache miss
- Truncation: drops oldest messages when over \`max_context_messages\` (default 50), never splitting a tool-call/tool-result pair
- Hard ceiling: never lets the estimated context exceed 85% of the model's context window
- Per-agent memory policy: a conversation can be reset after N hours of inactivity (\`memory_ttl_hours\`); old messages stay in SQLite but are not loaded back

**Conversation Compaction:**
When the estimated tokens reach \`assistant.compact_ratio\` (default 0.60) of the model's context window, older messages are summarized by the LLM into a single summary message, keeping the last \`compact_keep_recent\` (default 6) messages verbatim. \`/compact\` forces it.

\`\`\`
Before compaction:
[system] [msg1] [msg2] ... [msg19] [msg20] [msg21] [msg22] [msg23] [msg24] [msg25]

After compaction:
[system] [summary of msg1-msg19] [msg20] [msg21] [msg22] [msg23] [msg24] [msg25]
\`\`\`

---

### Tool Registry (\`tools/registry.py\`)

Manages all available tools and selects relevant ones per request.

**Tool Selection Strategy:**

1. **Conversational detection** — if the message is clearly a greeting or short chitchat (≤80 chars, no action keywords), send zero tools. Saves ~2-3K tokens.

2. **Semantic selection** — embed the user message with the same multilingual model, compute cosine similarity against all tool description embeddings. Only send tools above threshold (0.28). Language-agnostic.

3. **Keyword fallback** — if the embedding model hasn't loaded yet (first few seconds of startup), fall back to keyword-based category matching.

A small set of core tools (\`send_file_to_chat\`, \`run_command\`, \`read_file\`, \`write_file\`, \`web_search\`) is always included regardless of similarity score. Selected tools are sent as *slim schemas* (first sentence of the description, no parameter descriptions).

**Tool Embeddings:** Pre-computed at startup once the sentence-transformer model finishes loading. Cached for the lifetime of the process (~1ms per request for similarity computation).

---

### Security Layer (\`security/\`)

**Three levels:**

| Level | Component | What it does |
|-------|-----------|--------------|
| Policy | \`SecurityPolicy\` | Blocks dangerous patterns before execution |
| Sandbox | \`Sandbox\` | Limits runtime: timeout, output size |
| Tool | \`ToolDefinition.risk_level\` | Annotates tools as low/medium/high risk |

**Execution Modes** (apply to shell commands run through \`run_command\`):
- \`confirmation\` (default) — ask the user before every command
- \`auto\` — only commands whose executable is in \`whitelisted_commands\` run; everything else is rejected
- \`yolo\` — execute everything (use with caution)

**Always-blocked (hardcoded, no override):**
- Privilege escalation (\`runas\`, \`gsudo\`, \`sudo -s\`, \`sudo -i\`, \`su -\`, setuid/setgid \`chmod\`, \`chown root\`, adding Windows users/admins)
- Credential files (\`/etc/shadow\`, \`/etc/passwd\`)

See [Security](./12-security.md).

---

### Database (\`storage/database.py\`)

Async SQLite wrapper using \`aiosqlite\`. All writes are non-blocking.

**Schema overview:**

| Table | Purpose |
|-------|---------|
| \`messages\` | Conversation history (content encrypted at rest) |
| \`tool_executions\` | Log of every tool call with args, result, timing |
| \`llm_usage\` | Token counts and cost per LLM call |
| \`skills\` | Skill definitions (global, agent-private, worker-private and flow skills) |
| \`settings\` | Key-value store (schema version, model preference, security mode…) |
| \`agents\` | Agent definitions (prompt, tool policy, memory policy, inactivity follow-up) |
| \`agent_channels\` | Per-agent Telegram / WhatsApp channels |
| \`agent_knowledge\` | Per-agent knowledge base entries |
| \`agent_skills\` | Global skills enabled per agent |
| \`flows\` / \`connections\` | Agent visual flows and their external connections (WooCommerce) |
| \`customer_names\` | Names saved per conversation by \`save_customer_name\` |
| \`webhook_connectors\` / \`webhook_connector_events\` | Public webhook connectors and their audit log |
| \`workflow_executions\` / \`workflow_suggestions\` | Tool sequence history for pattern detection |
| \`app_activities\` | OS app focus sessions (fields encrypted) |
| \`detected_routines\` | Automation patterns (fields encrypted) |
| \`cron_jobs\` / \`cron_job_runs\` | Scheduled jobs and their run history |
| \`swarms\` / \`swarm_workers\` / \`swarm_tasks\` / \`swarm_messages\` / \`swarm_templates\` | Multi-agent swarms |
| \`content_queue\` / \`social_credentials\` | Content Automation plugin |
| \`gmail_*\` | Gmail Classifier plugin |
| \`plugin_state\` | Plugin enabled flags and settings |

**Migrations:** Automatic on startup. Current schema version: 41.

**Encryption:** Fernet (AES-128-CBC + HMAC) via \`ActivityEncryptor\`. Key stored at \`config/activity.key\` (auto-generated, git-ignored). Applies to:
- \`messages.content\`
- \`app_activities.app_name\`, \`.window_title\`, \`.process_name\`
- \`detected_routines.name\`, \`.description\`, \`.apps\`, \`.trigger_data\`

---

### Web Server (\`web/server.py\`)

FastAPI application serving:
- The Next.js compiled frontend (static export, SPA fallback)
- ~250 REST API endpoints split into routers under \`web/routers/\` (system, config, chat, skills, agents, mcp, activity, cron, swarms, voice, webhooks, whatsapp_webhook) plus plugin routers mounted under \`/api/\`
- WebSocket endpoints: \`/ws/chat\`, \`/ws/events\`, \`/ws/terminal\`, \`/ws/swarms/{id}\`
- Interactive API docs at \`/api/docs\`

**WebSockets:**

| Endpoint | Purpose |
|----------|---------|
| \`/ws/chat\` | Bidirectional chat — send messages, receive responses, or send \`{type:"cancel"}\` to abort |
| \`/ws/events\` | Server-sent events — real-time tool calls, thinking status, skill activation |
| \`/ws/terminal?channel=<id>\` | Full interactive PTY shell, one persistent session per channel. Powered by \`pywinpty\` (Windows) / \`pty\` (Linux/Mac) + xterm.js frontend |

**Authentication:** Token-based. Every \`/api/*\` request must include the dashboard token either as \`Authorization: Bearer <token>\` header or \`?token=<token>\` query parameter; WebSockets pass \`?token=\`. Public exceptions: the SPA and static assets, \`/api/auth/check\`, \`/api/ping\`, \`/api/system/info\`, \`/api/config/google/callback\`, \`POST /api/webhooks/{slug}\` (connectors authenticate themselves), plugin-declared public paths, and the WhatsApp webhook \`/webhooks/whatsapp\` (verified with Meta's signature). See [API Reference](./10-api-reference.md#authentication).

---

### Event Bus (\`core/events.py\`)

Pub/sub system for decoupling components.

**Event Types:**

| Event | Emitted by | Consumed by |
|-------|------------|-------------|
| \`message.received\` | Brain | EventBus WebSocket (dashboard) |
| \`message.sent\` | Brain | Channels, EventBus WebSocket |
| \`message.thinking\` | Brain | EventBus WebSocket (spinner UI) |
| \`message.reasoning\` | Brain | EventBus WebSocket (thinking content of reasoning models) |
| \`context:stats\` | Brain | EventBus WebSocket (live context usage) |
| \`tool.called\` | Brain | EventBus WebSocket, channel's PTY terminal |
| \`tool.result\` | Brain | EventBus WebSocket |
| \`tool.output_stream\` | Tools (run_command, run_python…) | Channel's PTY terminal (real-time streaming) |
| \`llm.request\` | LLM Router | EventBus WebSocket |
| \`llm.response\` | LLM Router | EventBus WebSocket |
| \`tool.confirmation_needed\` | Web server confirmation callback | EventBus WebSocket (approval dialog) |
| \`memory.recall\` | Brain | EventBus WebSocket (memory indicator) |
| \`memory.compacted\` | MemoryManager | EventBus WebSocket |
| \`skill.active\` | Brain | EventBus WebSocket (skill badge) |
| \`router.learned\` | LocalRouter | EventBus WebSocket |
| \`swarm:*\` | SwarmManager | EventBus WebSocket, \`/ws/swarms/{id}\` |
| \`voice:daemon_state\` | VoiceDaemon | EventBus WebSocket |
| \`ha:state_changed\` | Home Assistant plugin | EventBus WebSocket |
| \`channel:send\` | Agent inactivity follow-ups, plugins (e.g. Gmail daily summary) | Agent channels (proactive outbound messages) |

---

## Data Flow: A Single Message

\`\`\`
1. User sends "take a screenshot"
   └─ via WebSocket /ws/chat

2. Brain.process_message() invoked
   ├─ LocalRouter.observe() → SCREENSHOT (confidence 0.94) [async, background]
   ├─ Memory.get_or_create() → conversation history loaded
   ├─ ToolRegistry.get_tools_by_intent()
   │   ├─ _is_conversational() → False (action keyword detected)
   │   └─ get_tools_semantic() → [take_screenshot, send_file_to_chat] (similarity > 0.28)
   └─ Agentic loop begins

3. Iteration 1:
   ├─ _prepare_messages_for_llm() → optimize history
   ├─ LLMRouter.chat() → model returns tool_call: take_screenshot({})
   ├─ EventBus.emit(tool.called) → dashboard shows "Executing take_screenshot..."
   ├─ ToolRegistry.execute(take_screenshot) → captures screen, saves to /api/media/screenshot_xxx.png
   └─ EventBus.emit(tool.result)

4. Iteration 2:
   ├─ LLMRouter.chat() → model returns tool_call: send_file_to_chat({path: "..."})
   ├─ ToolRegistry.execute(send_file_to_chat) → returns "ATTACHMENT:screenshot_xxx.png"
   └─ generated_attachments = ["screenshot_xxx.png"]

5. Iteration 3:
   ├─ LLMRouter.chat() → model returns text: "Here's your screenshot!"
   └─ Loop exits

6. Response sent:
   ├─ WebSocket.send_json({type: "response", content: "Here's your screenshot!", attachments: ["screenshot_xxx.png"]})
   ├─ EventBus.emit(message.sent) → other channels notified
   ├─ Memory.add_message() → saved to DB (encrypted)
   └─ Database.log_llm_usage() → token counts persisted

7. Frontend renders:
   ├─ Text: "Here's your screenshot!"
   └─ Image preview + Download button (parsed from attachments array)
\`\`\`

---

## Startup Sequence

\`\`\`
1. Load config (default.yaml + local.yaml + config/.env + env vars; auto-detect CLI providers)
2. Initialize Database (SQLite, run migrations; activity encryption key)
3. Initialize Security (policy + sandbox), LLM Router, Memory Manager
4. Initialize RAG Engine (ChromaDB)
5. Initialize Skill Manager (sync skills/ folder to DB)
6. Restore persisted model + security mode, initialize Brain + WorkflowTracker
7. Register tools (built-in modules; browser_agent unless features.browser_agent=false) + connect MCP servers
8. Start Channels (Discord, Telegram, WhatsApp) and wait until each is ready
9. Start Agent Channels (per-agent Telegram bots / WhatsApp numbers)
10. Generate or load the dashboard token
11. Start watchers: Activity Watcher, Code Resurrection, Cron Scheduler, Swarm Manager, Voice daemon (unless features.voice=false)
12. Load and start plugins (their tools, keywords, skills and routers)
13. Start Web Server (FastAPI + Next.js frontend)
14. Print status panel + token
15. Start LocalRouter warm-up in background (downloads model on first run)
    └─ On model loaded: precompute tool embeddings (semantic selection ready)
16. Enter console loop (or, without a TTY — Docker/systemd — just stay alive until SIGTERM)
\`\`\`

---

## Frontend Architecture

Built with **Next.js 16** (App Router, static export), **React 19**, **TypeScript**, **Tailwind CSS 4**, **@xyflow/react** (flow editor), **xterm.js** (terminal) and **kokoro-js** (in-browser TTS).

**State management:** Zustand stores (\`chat-store\`, \`dashboard-store\`, \`auth-store\`, \`terminal-store\`, \`sidebar-store\`, \`ha-store\`, \`tamagotchi-store\`).

**Data fetching:** React Query (\`@tanstack/query\`) for REST endpoints. WebSocket connections managed in \`use-websocket.ts\` hook, initialized globally in \`AppLayout\`.

**Real-time updates:** The \`/ws/events\` WebSocket stream drives all live indicators (thinking spinner, tool execution badges, memory recall indicator, skill active badge, router learning indicator).

**Build output:** \`next build\` writes a static export to \`frontend/dist/\`, which is copied to \`src/openacm/web/static/\` (\`npm run deploy\`, or automatically by the setup/run/update scripts and the Docker build). FastAPI serves it as static files with SPA fallback.

`
  },
  {
    "slug": "04-core-concepts",
    "title": "Core Concepts",
    "section": "Documentation",
    "content": `
# Core Concepts

## The Agentic Loop

The core of OpenACM is an **agentic loop** — a cycle of LLM calls and tool executions that continues until the task is complete.

\`\`\`
User Message
     │
     ▼
Build Context (system prompt + skills + conversation history)
     │
     ▼
Select Tools (semantic similarity → only relevant tools sent)
     │
     ▼
┌─── LLM Call ──────────────────────────────────────────┐
│   Returns: text response OR one or more tool calls    │
└────────────────────────────────────────────────────────┘
     │
     ├─── No tool calls → Return response to user ──────────────► DONE
     │
     ▼
Execute tool calls (in parallel if multiple)
     │
     ▼
Add tool results to conversation
     │
     └──► Repeat (max \`assistant.max_tool_iterations\`, 25 by default)
\`\`\`

Each iteration the LLM sees the full conversation including all previous tool results. This allows it to chain tools intelligently — for example: search the web → summarize findings → write to file → send via email.

---

## Messages and Roles

Conversation history is a sequence of messages with roles:

| Role | Sender | Example |
|------|--------|---------|
| \`system\` | OpenACM (injected) | Base context, active skills, OS info |
| \`user\` | The human | "Search for AI news" |
| \`assistant\` | The LLM | Text responses and tool call requests |
| \`tool\` | Tool execution results | JSON output from \`web_search\` |

The LLM sees this entire history on each call. Memory compaction (triggered at 60% of the model's context window) keeps the context window manageable.

---

## Tools vs Skills vs Agents vs Flows

These extension mechanisms serve distinct purposes:

### Tools
Executable Python functions that **do things**. They have inputs, run code, and return output. Tools are how OpenACM interacts with the world.

- Examples: \`run_command\`, \`web_search\`, \`gmail_send\`, \`ha_control\`
- Created by: adding a \`@tool\` module to \`src/openacm/tools/\` (registered in \`app.py\`) or shipping it in a [plugin](./24-plugins.md); MCP servers add tools at runtime
- Invoked by: the LLM when it decides they're needed
- Registered in: \`ToolRegistry\`

### Skills
Markdown files that **change how OpenACM thinks**. They're injected into the system prompt when a skill is active. Skills have no code — they're behavior/persona instructions.

- Examples: "code-reviewer", "api-designer", "blender-modeling", "agent-creator"
- Created with: \`create_skill\` tool, the Skills page, or adding \`.md\` files to \`skills/\`
- Activated: toggled on/off in the dashboard; an active skill is injected only when the message is relevant to it (keyword or name match)
- Stored in: \`skills/{category}/\` directory + SQLite \`skills\` table (agents, swarm workers and flows can also have private skills)

### Agents
Specialized assistants with their own system prompt, a restricted set of tools, a knowledge base, a memory policy, and optionally their own Telegram bot / WhatsApp number.

- Example: a "ResearchBot" that only has access to \`web_search\`, \`get_webpage\`, and \`remember_note\`
- Created via: dashboard, \`create_agent\` tool, or \`POST /api/agents\`
- Can be messaged via: its own Telegram/WhatsApp channel, the dashboard chat, or the REST API (\`/api/agents/{id}/chat\`)

### Flows
Visual node graphs that belong to an agent. Every active flow becomes a tool (\`flow_<id>\`) the agent can call, and a flow can also be triggered by a public [webhook connector](./29-webhook-connectors.md).

- Example: "search the store for a product, and if nothing is found call a fallback API"
- Created via: the flow editor on the Agents page, the flow chat panel, or the \`create_or_update_agent_flow\` tool
- See [Agent Flows](./28-agent-flows.md)

### When to use which

| Need | Use |
|------|-----|
| Do something (API call, file op, system interaction) | Tool |
| Change how the agent thinks or responds | Skill |
| Create a specialized assistant with limited scope | Agent |
| A deterministic sequence of HTTP/store calls an agent can run | Flow |
| Let a third-party service trigger OpenACM | Webhook connector |
| Package a whole feature (tools + API + UI + settings) | Plugin |
| Connect to an external tool server | MCP |

---

## Memory Architecture

OpenACM has two memory systems that work together:

### Short-term Memory (Conversation History)
- Scope: per user + channel pair
- Stored: SQLite + in-memory cache
- Lifetime: until conversation is cleared or deleted
- Compaction: when the conversation reaches \`compact_ratio\` (60%) of the model's context window, older messages are summarized by the LLM
- Encryption: message content encrypted at rest (Fernet, key in \`config/activity.key\`)

### Long-term Memory (RAG / Vector Store)
- Scope: global across all conversations
- Stored: ChromaDB (persistent vector database)
- Lifetime: permanent until explicitly deleted
- Access: via \`remember_note\` (write) and \`search_memory\` (read); relevant fragments are also injected automatically when their distance is below \`rag_relevance_threshold\`
- Model: \`all-MiniLM-L6-v2\` embeddings, cosine similarity search

**How they interact:**
\`\`\`
User: "Remember that my server IP is 192.168.1.100"
→ remember_note("Server IP: 192.168.1.100")

[Later, new conversation]
User: "What's my server IP again?"
→ search_memory("server IP") → returns the stored fact
→ Brain answers: "Your server IP is 192.168.1.100"
\`\`\`

---

## Semantic Tool Selection

On each user message, OpenACM must decide which tools to send to the LLM. Sending all tools wastes tokens. The selection system works in layers:

**Layer 1: Conversational detection**
\`\`\`
"hola!" → 0 tools sent (saves ~3K tokens)
"gracias" → 0 tools sent
"ok cool" → 0 tools sent
\`\`\`

Short messages (≤80 chars) with no action keywords → no tools. Pure conversation doesn't need tool schemas.

**Layer 2: Semantic similarity**
\`\`\`
"toma una captura de pantalla" →
  embed message → cosine similarity against all tool descriptions →
  take_screenshot (0.82) > threshold (0.28) ✓
  send_file_to_chat, run_command, read_file, write_file, web_search (always included) ✓
  gmail_send (0.04) < threshold ✗
\`\`\`

The same multilingual model (\`paraphrase-multilingual-MiniLM-L12-v2\`) that runs the LocalRouter is used here. Tool descriptions are embedded at startup and cached. Each request costs ~1ms.

**Layer 3: Keyword fallback**
If the embedding model hasn't finished loading (first few seconds), falls back to keyword-based category matching. Same behavior, less accurate.

---

## Event System

All major actions emit events through the **EventBus**. The web dashboard subscribes to these events via WebSocket (\`/ws/events\`) to show real-time status.

\`\`\`
User sends "search for AI news"
  → EventBus: message.received
  
Brain starts processing
  → EventBus: message.thinking {status: "processing"}

LLM calls web_search tool
  → EventBus: tool.called {tool: "web_search"}
  
web_search completes
  → EventBus: tool.result {tool: "web_search", result: "..."}

LLM generates response
  → EventBus: message.sent

Dashboard shows: thinking spinner → tool badge → response
\`\`\`

---

## Security Model

OpenACM can execute arbitrary system commands and Python code — this is intentional and is what makes it powerful. Security is layered:

### Execution Modes

The execution mode governs shell commands run through \`run_command\`:

| Mode | Behavior |
|------|----------|
| \`confirmation\` (default) | Ask the user before running each command |
| \`auto\` | Run only commands whose executable is in \`whitelisted_commands\`; reject the rest |
| \`yolo\` | Run every command without asking |

### Blocked Patterns (always enforced)
Even in \`yolo\` mode, certain patterns are always blocked:
- Privilege escalation (\`runas\`, \`gsudo\`, \`sudo -s\`, \`sudo -i\`, \`su -\`, setuid/setgid \`chmod\`, \`chown root\`, adding Windows admin accounts)
- Credential files (\`/etc/shadow\`, \`/etc/passwd\`)
- Anything in your configured \`blocked_patterns\` / \`blocked_paths\` (by default \`config/\`, the database and the vector store are blocked too)

### Tool Risk Levels
Every tool is annotated with a risk level (shown in the dashboard and in \`/tools\`):
- \`low\` — read-only or harmless (list_directory, system_info, search_memory)
- \`medium\` — reads sensitive data or makes network calls (read_file, web_search, take_screenshot, calendar_create)
- \`high\` — arbitrary execution or destructive writes (run_command, run_python, write_file, edit_file, browser_agent, gmail_send)

---

## LLM Providers

OpenACM uses **LiteLLM** internally, which provides a unified interface to 100+ LLM providers. From OpenACM's perspective, all providers speak the same OpenAI-compatible API.

**Built-in provider presets:** OpenCode Go (default), OpenAI, Anthropic, Google Gemini, xAI, OpenRouter, Ollama (local). **CLI providers** (\`claude\`, \`gemini\`, \`opencode\` binaries) are auto-detected. **Any OpenAI-compatible endpoint** (LM Studio, vLLM, Groq, Together, DeepSeek…) can be added as a custom provider.

You can switch the active model mid-conversation with \`/model provider/model-name\`.

**Provider Profiles** handle quirks across providers:
- Some models don't support native tool calling → OpenACM prompts them to use tools via text
- Some models have tool count limits → OpenACM caps automatically
- Some models return thinking/reasoning tokens → stored but stripped from older context

---

## Channels

OpenACM is channel-agnostic. The same Brain handles messages from all channels identically.

Each channel has a unique \`channel_id\` and each user within that channel has a \`user_id\`. The combination \`channel_id:user_id\` uniquely identifies a conversation.

| Channel | channel_id | user_id |
|---------|-----------|---------|
| Web dashboard | \`web\` | \`web\` or \`web_<timestamp>\` (one per conversation) |
| Console | \`console\` | \`console\` |
| Telegram | Telegram chat ID | Telegram user ID |
| Discord | Discord channel ID | Discord user ID |
| WhatsApp | Sender phone number | Sender phone number |

The channel is responsible for: receiving messages, delivering responses, and translating platform-specific features (attachments, formatting) to/from OpenACM's internal format.

`
  },
  {
    "slug": "05-tools-reference",
    "title": "Tools Reference",
    "section": "Documentation",
    "content": `
# Tools Reference

OpenACM ships with 70+ built-in tools. Tools are Python async functions decorated with \`@tool\`. They receive injected context (\`_sandbox\`, \`_event_bus\`, \`_brain\`, \`_user_id\`, \`_channel_id\`, \`_channel_type\`, \`_confirm_callback\`) alongside their declared parameters.

Which tools are available depends on what is enabled: the \`browser_agent\` tool can be turned off with \`features.browser_agent: false\`, and plugin tools (Home Assistant, Content Automation) exist only while their plugin is enabled. Tools from connected MCP servers are added at runtime. Run \`/tools\` in the console or open the **Tools** page to see the live list with risk levels.

> The **Risk** shown below is the tool's \`risk_level\` annotation (low / medium / high). It is informational — the approval prompt of the \`confirmation\` security mode applies to shell commands run through \`run_command\`. See [Security](./12-security.md).

---

## Tool Categories

| Category | Tools | Description |
|----------|-------|-------------|
| \`general\` | \`run_command\`, \`run_python\`, \`send_file_to_chat\`, \`create_agent\`, \`list_agents\`, \`delete_agent\`, \`create_or_update_agent_flow\`, \`stitch_generate_ui\` | Core execution and agent management |
| \`system\` | \`system_info\`, \`add_resurrection_path\`, \`save_user_profile\`, cron tools, platform tools | OS info and platform self-management |
| \`file\` | \`read_file\`, \`write_file\`, \`list_directory\`, \`search_files\`, \`edit_file\`, \`read_file_range\`, \`grep_in_files\`, \`get_file_outline\`, \`run_linter\` | File system and code editing |
| \`web\` | \`web_search\`, \`get_webpage\`, \`browser_agent\` | Web search and browsing |
| \`media\` | \`take_screenshot\` | Screen capture |
| \`ai\` | \`remember_note\`, \`search_memory\`, \`save_customer_name\` | Long-term memory (RAG) and customer memory |
| \`google\` | 8 tools | Gmail, Calendar, Drive, YouTube |
| \`meta\` | \`create_skill\`, \`toggle_skill\`, \`list_skills\`, \`delete_skill\` | Manage skills |
| \`swarm\` | \`create_swarm\`, \`start_swarm\`, \`stop_swarm\`, \`delete_swarm\`, \`list_swarms\` | Multi-agent swarms |
| \`iot\` | 8 tools | Smart home control via the Home Assistant plugin |
| \`content\` / \`social\` | 12 tools | Content Automation plugin (social posts, memes, videos) |
| \`custom_flow\` | \`flow_<id>\` | An agent's active flows (only inside that agent) |
| \`mcp\` | dynamic | MCP server tools |

---

## System Tools

### \`run_command\`
Execute any OS command in the system shell.

**Risk:** High | **Sandbox:** Yes

\`\`\`python
run_command(
    command: str,                  # The shell command to execute
    timeout: int = 0,              # Max seconds to wait (0 = no limit). Ignored when background=True
    working_directory: str = None, # Optional working directory
    background: bool = False,      # Fire-and-forget (servers, tunnels, watchers)
)
\`\`\`

**Notes:**
- Goes through the security policy first: always-blocked patterns, \`blocked_patterns\`, \`blocked_paths\`, and the execution mode (\`confirmation\` asks you, \`auto\` only allows whitelisted executables, \`yolo\` runs everything)
- Always use non-interactive flags: \`--yes\`, \`-y\`, \`-f\` where applicable
- Use \`background=True\` for long-running processes (dev servers, tunnels, file watchers)
- Output is truncated to \`security.max_output_length\` (50,000 chars by default)
- Output streams in real time into the conversation's terminal panel in the dashboard

**Examples:**
\`\`\`
"list all files in my downloads folder"
→ run_command("ls ~/Downloads")

"start a local web server"
→ run_command("python -m http.server 8000", background=True)
\`\`\`

---

### \`run_python\`
Execute Python code in a persistent interactive (Jupyter) kernel.

**Risk:** High

\`\`\`python
run_python(
    code: str,            # Python code to execute (can be multiple lines)
    reset: bool = False,  # Restart the kernel (clears variables) before execution
)
\`\`\`

**Notes:**
- State persists between calls — imports, variables, and functions survive
- Has access to all installed packages
- Matplotlib plots are captured automatically and sent to the chat as images

---

### \`system_info\`
Get information about the host system.

**Risk:** Low

\`\`\`python
system_info(
    detail: str = "summary"  # "summary", "cpu", "memory", "disk", "network", "processes", "full"
)
\`\`\`

---

## File Tools

### \`read_file\`
Read the contents of a file.

**Risk:** Medium

\`\`\`python
read_file(
    path: str,            # Absolute or relative file path
    max_lines: int = 500  # 0 = read the entire file
)
\`\`\`

### \`write_file\`
Create or overwrite a file (parent directories are created automatically).

**Risk:** High

\`\`\`python
write_file(
    path: str,            # File path to write
    content: str,         # File content
    append: bool = False  # Append instead of overwrite
)
\`\`\`

### \`list_directory\`
List files and directories at a path.

**Risk:** Low

\`\`\`python
list_directory(
    path: str = ".",          # Directory path
    show_hidden: bool = False # Include hidden files
)
\`\`\`

### \`search_files\`
Find files by name pattern in a directory tree.

**Risk:** Low

\`\`\`python
search_files(
    directory: str,       # Root directory to search from
    pattern: str,         # File name pattern (e.g. "*.py", "config*")
    max_results: int = 50
)
\`\`\`

### \`send_file_to_chat\`
Upload a local file so the user can download it from the chat. **Always included in tool selection.**

**Risk:** Low

\`\`\`python
send_file_to_chat(
    path: str             # Path to the file to send
)
\`\`\`

**Notes:**
- Must be called after generating a file — the file must exist on disk
- Returns an \`/api/media/...\` link; the dashboard renders image previews, and Telegram/Discord/WhatsApp receive the file as an attachment
- Always call this after generating any output file the user requested

---

## Code Editing Tools

Surgical editing tools for working on source code without rewriting whole files.

### \`edit_file\`
Replace an **exact** string in a file. Fails with a clear error if \`old_string\` is not found or matches more than once.

**Risk:** High

\`\`\`python
edit_file(
    path: str,
    old_string: str,   # Must match character-for-character, including indentation
    new_string: str,
)
\`\`\`

### \`read_file_range\`
Read a range of lines with line numbers (use it before \`edit_file\`).

**Risk:** Low

\`\`\`python
read_file_range(
    path: str,
    start_line: int,     # 1-indexed
    end_line: int = -1,  # inclusive; -1 = end of file
)
\`\`\`

### \`grep_in_files\`
Regex search inside files, with context lines.

**Risk:** Low

\`\`\`python
grep_in_files(
    pattern: str,               # Python regex
    directory: str = ".",
    file_pattern: str = "*",    # e.g. "*.py"
    context_lines: int = 2,
    case_sensitive: bool = True,
    max_results: int = 30,
)
\`\`\`

### \`get_file_outline\`
Structural outline of a source file (classes, functions, methods with line numbers). Python is parsed with the AST; JavaScript/TypeScript and other languages use regex.

**Risk:** Low

\`\`\`python
get_file_outline(path: str)
\`\`\`

### \`run_linter\`
Run a linter and return diagnostics — \`ruff\` for Python, \`eslint\` (if available) for JavaScript/TypeScript.

**Risk:** Medium

\`\`\`python
run_linter(
    path: str,
    fix: bool = False   # Auto-fix safe issues (ruff --fix)
)
\`\`\`

---

## Web Tools

### \`web_search\`
Search the web with DuckDuckGo.

**Risk:** Medium

\`\`\`python
web_search(
    query: str,
    max_results: int = 5
)
\`\`\`

### \`get_webpage\`
Fetch a URL and return its readable text (HTML stripped).

**Risk:** Medium

\`\`\`python
get_webpage(
    url: str,
    max_length: int = 5000   # Max characters returned
)
\`\`\`

### \`browser_agent\`
Control a persistent, headless Chromium browser (Playwright). The browser stays open between calls, so multi-step navigation works.

**Risk:** High

\`\`\`python
browser_agent(
    action: str,        # "goto", "read_page", "click", "fill", "screenshot", "extract_html"
    url: str = "",      # for "goto"
    selector: str = "", # CSS selector for "click", "fill", "extract_html"
    value: str = "",    # text for "fill"
)
\`\`\`

**Example:**
\`\`\`
"find the price of the first result for 'mechanical keyboard' on example-shop.com"
→ browser_agent(action="goto", url="https://example-shop.com")
→ browser_agent(action="fill", selector="input[name=q]", value="mechanical keyboard")
→ browser_agent(action="click", selector="button[type=submit]")
→ browser_agent(action="read_page")
\`\`\`

Disable it for deployments that don't need it with \`features.browser_agent: false\`.

---

## Media Tools

### \`take_screenshot\`
Capture the screen and save it as a media file.

**Risk:** Medium

\`\`\`python
take_screenshot(
    monitor: int = 0    # 0 = all monitors, 1 = primary, 2 = second…
)
\`\`\`

**Returns:** Path to the saved screenshot. Use \`send_file_to_chat\` to deliver it.

### \`stitch_generate_ui\`
Generate an HTML UI screen from a description with Google Stitch. Requires \`STITCH_API_KEY\` in \`config/.env\`.

**Risk:** Low

\`\`\`python
stitch_generate_ui(
    prompt: str,                    # Detailed description of the UI
    device: str = "DESKTOP",        # "DESKTOP", "MOBILE", "TABLET"
    model: str = "GEMINI_3_1_PRO",  # or "GEMINI_3_FLASH"
)
\`\`\`

---

## AI / Memory Tools

### \`remember_note\`
Store a fact or note in long-term vector memory (RAG).

**Risk:** Low

\`\`\`python
remember_note(
    note: str           # Text to store in memory
)
\`\`\`

### \`search_memory\`
Query long-term vector memory for relevant information.

**Risk:** Low

\`\`\`python
search_memory(
    query: str,
    max_results: int = 5
)
\`\`\`

### \`save_customer_name\`
Remember the customer's name for this conversation — kept even after an agent's memory TTL resets the context, so the agent can keep greeting them by name.

**Risk:** Low

\`\`\`python
save_customer_name(name: str)
\`\`\`

### \`save_user_profile\`
Used once during onboarding: saves the user's name, the assistant's name, behavior instructions, grammatical gender and language, and ends onboarding mode.

**Risk:** Low

\`\`\`python
save_user_profile(user_name: str, assistant_name: str, behaviors: str, gender: str, language: str)
\`\`\`

### \`add_resurrection_path\`
Add a folder to [Code Resurrection](./23-code-resurrection.md) indexing.

**Risk:** Low

\`\`\`python
add_resurrection_path(path: str)   # absolute path
\`\`\`

---

## Google Workspace Tools

All Google tools require OAuth2 credentials (\`config/google_credentials.json\`, see [Gmail Setup](./GMAIL_SETUP.md)).

### \`gmail_read\`
Read emails from Gmail. **Risk:** Medium

\`\`\`python
gmail_read(
    query: str = "",       # Gmail search query (e.g. "from:boss@company.com", "is:unread")
    max_results: int = 10
)
\`\`\`

### \`gmail_send\`
Send an email via Gmail. **Risk:** High

\`\`\`python
gmail_send(
    to: str,
    subject: str,
    body: str
)
\`\`\`

### \`calendar_list\`
List upcoming Google Calendar events. **Risk:** Low

\`\`\`python
calendar_list(
    max_results: int = 10,
    days_ahead: int = 7
)
\`\`\`

### \`calendar_create\`
Create a Google Calendar event. **Risk:** Medium

\`\`\`python
calendar_create(
    summary: str,          # Event title
    start_time: str,       # ISO 8601 (e.g. "2026-06-15T14:00:00")
    end_time: str,         # ISO 8601
    description: str = "",
    location: str = ""
)
\`\`\`

### \`drive_list\`
List files in Google Drive. **Risk:** Low

\`\`\`python
drive_list(
    query: str = "",        # e.g. 'name contains "report"', 'mimeType="application/pdf"'
    max_results: int = 20
)
\`\`\`

### \`drive_search\`
Search Drive files by name. **Risk:** Low

\`\`\`python
drive_search(name: str)
\`\`\`

### \`drive_upload\`
Upload a local file to Google Drive. **Risk:** Medium

\`\`\`python
drive_upload(
    file_path: str,
    folder_id: str = ""   # Target folder (default: root)
)
\`\`\`

### \`youtube_search\`
Search YouTube for videos. **Risk:** Low

\`\`\`python
youtube_search(
    query: str,
    max_results: int = 5
)
\`\`\`

---

## Agent & Flow Tools

### \`create_agent\`
Create an agent. **Risk:** Low

\`\`\`python
create_agent(
    name: str,
    description: str,
    system_prompt: str,
    allowed_tools: str = "none"   # "all", "none", or a JSON list of tool names
)
\`\`\`

### \`list_agents\`
List all agents with their tool policy and webhook URL. **Risk:** Low

### \`delete_agent\`
Delete an agent by ID. **Risk:** High

\`\`\`python
delete_agent(agent_id: int)
\`\`\`

### \`create_or_update_agent_flow\`
Create or update one of an agent's [flows](./28-agent-flows.md) by generating its graph directly — this is what the flow editor's chat panel uses.

**Risk:** Low

\`\`\`python
create_or_update_agent_flow(
    name: str,
    graph_json: dict,        # {"nodes": [...], "edges": [...]}
    description: str = "",
    flow_id: int = None,     # update this flow instead of creating a new one
    agent_id: int = None,    # auto-detected when called inside an agent's chat
)
\`\`\`

The graph must have exactly one \`start\` node and at least one \`end\` node; it is validated before saving.

---

## Scheduling Tools (Cron)

See [Cron Scheduler](./19-cron-scheduler.md).

| Tool | Risk | Parameters |
|------|------|-----------|
| \`list_cron_jobs\` | Low | — |
| \`create_cron_job\` | Medium | \`name\`, \`cron_expr\`, \`action_type\` (\`analyze_patterns\` / \`run_skill\` / \`run_routine\` / \`custom_command\` / \`send_message\`), \`action_payload\`, \`description\`, \`enabled=True\` |
| \`update_cron_job\` | Medium | \`job_id\` + any of \`name\`, \`cron_expr\`, \`action_type\`, \`action_payload\`, \`description\` |
| \`toggle_cron_job\` | Low | \`job_id\`, \`enabled\` (omit to flip) |
| \`trigger_cron_job\` | Medium | \`job_id\` — runs it now and returns the output |
| \`delete_cron_job\` | Medium | \`job_id\` |

---

## Swarm Tools

See [Swarms](./22-swarms.md).

| Tool | Risk | Parameters |
|------|------|-----------|
| \`create_swarm\` | Medium | \`goal\`, \`name\`, \`global_model\`, \`context\`, \`auto_start=False\` |
| \`start_swarm\` | Medium | \`swarm_id\` |
| \`stop_swarm\` | Medium | \`swarm_id\` |
| \`delete_swarm\` | High | \`swarm_id\` |
| \`list_swarms\` | Low | — |

---

## Platform Tools

Let the agent manage OpenACM itself from chat.

| Tool | Risk | What it does |
|------|------|-------------|
| \`get_openacm_config\` | Low | Active model, security mode, local router status and other key settings |
| \`switch_llm_model(model)\` | Low | Change the active model (LiteLLM string such as \`anthropic/claude-sonnet-4-6\`) |
| \`update_security_mode(mode)\` | Medium | Set \`confirmation\`, \`auto\` or \`yolo\` |
| \`list_mcp_servers\` | Low | Configured MCP servers and their status |
| \`add_mcp_server(name, transport, command, args, url, api_key, auto_connect)\` | Medium | Add an MCP server (\`stdio\`, \`sse\` or \`streamable_http\`) |
| \`connect_mcp_server(name)\` | Medium | Connect and load its tools |
| \`disconnect_mcp_server(name)\` | Low | Disconnect and unload its tools |
| \`list_routines\` | Low | Routines detected from your activity |
| \`execute_routine(routine_id)\` | Medium | Open the apps of a routine |

---

## Skill Tools

### \`create_skill\`
Generate a new skill with the LLM. Two phases: a preview first, then \`apply=True\` after you confirm.

**Risk:** Medium

\`\`\`python
create_skill(
    name: str,               # kebab-case (e.g. "python-expert")
    description: str,        # 1-2 sentences
    use_cases: str,          # 2-3 example scenarios
    category: str = "custom",# "security", "development", "ai", "custom"
    apply: bool = False      # True only after the user confirmed the preview
)
\`\`\`

### \`toggle_skill\`
Activate or deactivate a skill. **Risk:** Low

\`\`\`python
toggle_skill(name: str)
\`\`\`

### \`list_skills\`
List skills and their status. **Risk:** Low

\`\`\`python
list_skills(show_inactive: bool = True)
\`\`\`

### \`delete_skill\`
Permanently delete a custom skill (built-in skills can only be deactivated). **Risk:** High

\`\`\`python
delete_skill(name: str, confirm: bool = False)   # confirm must be True
\`\`\`

---

## IoT / Smart Home Tools (Home Assistant plugin)

Control smart home devices through a [Home Assistant](https://www.home-assistant.io/) instance — configure the URL and a Long-Lived Access Token from \`/plugins\` (see [Home Assistant Setup](./HOME_ASSISTANT_SETUP.md)). No per-vendor setup in OpenACM: Home Assistant's own integrations (Tuya, Xiaomi, LG WebOS, and hundreds more) already normalize every device behind one API.

### \`ha_devices\`
List entities, optionally filtered by domain and/or area.

\`\`\`python
ha_devices(
    domain: str = "",   # e.g. "light", "switch", "climate", "cover", "media_player", "vacuum"
    area: str = ""      # e.g. "Sala" — see ha_areas()
)
\`\`\`

### \`ha_areas\`
List Home Assistant areas/rooms.

### \`ha_status\`
Get the current state and attributes of one entity — by exact \`entity_id\` or friendly name.

\`\`\`python
ha_status(
    entity_id: str       # e.g. "light.sala" or "Luz Sala"
)
\`\`\`

### \`ha_control\`
Control one or more entities, or a whole Home Assistant area, in one call.

\`\`\`python
ha_control(
    action: str,                    # turn_on, turn_off, toggle, set_brightness, set_color_temp,
                                     # set_color, set_temperature, open, close, stop, set_volume
    entity_id: str | list = None,   # single id, list of ids, or omit if using \`area\`
    area: str = "",                  # area id/slug — only with turn_on/turn_off/toggle
    brightness: int = None,          # 0-100, for set_brightness
    kelvin: int = None,              # 2000-6500, for set_color_temp
    red: int = None, green: int = None, blue: int = None,  # 0-255, for set_color
    temperature: float = None,       # for set_temperature
    volume: float = None,            # 0.0-1.0, for set_volume
)
\`\`\`

### \`ha_scenes\` / \`ha_activate_scene\`
List scenes, and activate one by name.

\`\`\`python
ha_activate_scene(
    name: str             # e.g. "Modo Noche"
)
\`\`\`

### \`ha_list_services\` / \`ha_call_service\`
For device types \`ha_control\` doesn't cover (vacuum, fan, lock, alarm panel, humidifier…): discover a domain's services, then call one directly. \`ha_call_service\` is Medium risk.

\`\`\`python
ha_list_services(domain: str)                                  # e.g. "vacuum"
ha_call_service(entity_id: str, service: str, data: dict = {}) # e.g. service="return_to_base"
\`\`\`

**Example:**
\`\`\`
"Apaga todas las luces de la sala"
→ ha_control(area="sala", action="turn_off")   # one call, whole area

"Apaga las luces, cierra las cortinas, y activa modo noche"
→ ha_control(entity_id=["light.sala", "light.cocina"], action="turn_off")
→ ha_control(entity_id="cover.sala", action="close")
→ ha_activate_scene("Modo Noche")
\`\`\`

---

## Content & Social Tools (Content Automation plugin)

| Tool | Risk | What it does |
|------|------|-------------|
| \`capture_content_moment\` | Low | Screenshot the current moment, analyse it with vision and queue post drafts for approval |
| \`generate_content_for_moment\` | Low | Generate drafts for an already-captured moment |
| \`list_content_moments\` | Low | List captured moments (optionally by date) |
| \`generate_meme\` | Low | Meme image, \`local\` (Pillow) or \`api\` mode |
| \`create_slideshow_video\` | Medium | MP4 slideshow from images (ffmpeg) |
| \`check_content_deps\` | Medium | Check/install Pillow, ffmpeg, praw |
| \`queue_content_for_approval\` | Low | Manually queue a post |
| \`list_pending_approvals\` | Low | Posts waiting for approval |
| \`save_social_credentials\` | Medium | Store Facebook Page / Reddit credentials |
| \`verify_social_credentials\` | Low | Test stored credentials |
| \`post_to_facebook\` | High | Publish to a Facebook Page |
| \`post_to_reddit\` | High | Submit to a subreddit |

Nothing is published automatically — drafts wait for your approval on the **Content** page.

---

## MCP Tools

Tools from connected MCP servers are dynamically registered with the naming pattern:

\`\`\`
mcp__{server_name}__{tool_name}
\`\`\`

For example, a server named \`filesystem\` with a tool \`read_file\` would be accessible as:

\`\`\`
mcp__filesystem__read_file
\`\`\`

MCP tools appear in the Tool Registry and in the \`/tools\` dashboard page. They are selected via the same semantic similarity system as built-in tools.

See [MCP Integration](./13-mcp.md) for setup instructions.

---

## Tool modules that are not registered by default

\`src/openacm/tools/\` also contains \`tool_creator.py\` (\`create_tool\`, \`edit_tool\`, \`delete_tool\`), \`list_tools.py\` (\`list_tools\`) and \`set_workspace.py\` (\`set_workspace\`). In v0.4.7 these modules are **not** registered at startup (\`app.py\` does not call \`register_module\` on them), so the LLM cannot call them. Pinning a working directory is available through the \`/workspace\` slash command instead.

---

## Creating Custom Tools

Add a module with \`@tool\`-decorated async functions to \`src/openacm/tools/\` and register it in \`app.py\`, or ship it inside a [plugin](./24-plugins.md) (\`get_tool_modules()\`), which needs no core changes. See [Extending OpenACM](./17-extending.md) for the full guide.

`
  },
  {
    "slug": "06-skills-system",
    "title": "Skills System",
    "section": "Documentation",
    "content": `
# Skills System

Skills are markdown files that change how OpenACM **thinks and behaves** — not what it can do. When an active skill is relevant to the current message, its content is injected into the system prompt before the LLM call, giving it domain expertise, specialized behavior, or a custom persona.

---

## Skills vs Tools

| | Skills | Tools |
|--|--------|-------|
| What they are | Markdown instructions | Python async functions |
| What they do | Change LLM behavior | Execute code and actions |
| How they're stored | \`.md\` files + SQLite | \`.py\` modules + registry |
| Runtime effect | Injected into system prompt | Called by LLM as function |
| Created with | \`create_skill\` tool, Skills page, or a \`.md\` file | A \`@tool\` module or a plugin |

---

## Skill File Format

Skills live in \`skills/{category}/\` as markdown files.

\`\`\`markdown
---
name: blender-modeling
description: Expert 3D modeling guidance for Blender
category: custom
---

# Blender 3D Modeling Expert

You are now a Blender expert. When the user asks about 3D modeling:

## Key Behaviors
- Always suggest using the correct Blender shortcut keys
- Use \`bpy\` Python API when scripting is needed
- Prefer modifier-based workflows over manual editing
- Always mention the Blender version compatibility

## Common Workflows
- Creating objects: Add menu (Shift+A) → choose primitive
- Sculpting: Tab to switch to Sculpt Mode, use dynamic topology
- Rigging: Armature objects, parent with automatic weights
...
\`\`\`

The frontmatter (\`---\`) is optional but recommended. Only simple \`key: value\` lines for \`name\`, \`description\` and \`category\` are read; without it the skill takes its name from the file name and its category from the folder.

---

## Shipped Skills

The repository ships these skill files in \`skills/\`:

| Name | Category | Description |
|------|----------|-------------|
| \`agent-creator\` | agents | Expertise in designing and creating autonomous agents |
| \`blender-modeling\` | custom | 3D modeling guidance for Blender (\`bpy\`) |
| \`file-generator\` | custom | Best practices for generating various file formats |
| \`video-capture\` | custom | Screen recording and video automation workflows |
| \`flutter-app-creator\` | development | Flutter/Dart app scaffolding and development |
| \`unity-mpc-skill\` | development | Unity game development via Unity MCP |

On startup every \`skills/<category>/*.md\` file that is not yet in the database is added to it. (Files placed directly in \`skills/\` — not in a category folder — are not synced.)

\`core/skill_manager_default_skills.py\` also defines six default skills — \`security-auditor\`, \`code-reviewer\`, \`api-designer\`, \`rag-optimizer\`, \`fastapi-expert\`, \`database-architect\` — which are written to disk and marked \`is_builtin\` **only when the skills table is completely empty** at startup. Built-in skills can be deactivated but not deleted.

---

## Creating Skills

### Via Chat
\`\`\`
You: Create a skill called "python-expert" that makes you an expert Python developer focused on clean code, type hints, and modern Python 3.12+ features
\`\`\`

OpenACM will call \`create_skill\` and write the markdown.

### Via Dashboard
Go to **Skills** → **New Skill** and fill in the form.

### Manually
Create a \`.md\` file in \`skills/{category}/\`:

\`\`\`bash
skills/
  custom/
    my-skill.md
  development/
    python-expert.md
  agents/
    research-specialist.md
\`\`\`

OpenACM syncs the \`skills/\` directory to the database on startup. New files are automatically discovered.

---

## Activating Skills

A skill has an **active** flag. Turn it on or off:

1. **Via dashboard** — toggle the skill on the Skills page
2. **Via chat** — \`toggle_skill("python-expert")\` flips it
3. **Via API** — \`POST /api/skills/{id}/toggle\`

Being active doesn't mean a skill is sent on every request — see matching below.

---

## Matching (when a skill is injected)

For each message, the SkillManager looks at the **active** skills and injects only the relevant ones:

- The six default skills have built-in keyword lists (e.g. \`code-reviewer\` matches "review", "refactor", "revisa"…; \`database-architect\` matches "sql", "schema", "database"…).
- Any skill is injected when the message mentions its name (e.g. "blender-modeling" or "blender modeling").
- If nothing matches, no skill content is added.

Each injected skill is capped at 1,200 characters, wrapped in a "Specialized Context (for this query only)" block. The matched skills are shown in the chat UI with a badge (\`skill.active\` event).

### Agent, worker and flow skills

Besides global skills, an **agent** can enable specific global skills and have its own private skills (Agents → Skills tab, or \`POST /api/agents/{id}/skills/generate\`); swarm **workers** can have private skills too; and each agent **flow** can have one skill that explains to the agent when and how to use that flow (see [Agent Flows](./28-agent-flows.md)).

---

## Skill Categories

| Category | Purpose |
|----------|---------|
| \`agents\` | Multi-agent system skills |
| \`ai\` | AI/ML related skills |
| \`custom\` | User-created general skills |
| \`development\` | Programming language/framework expertise |
| \`generated\` | Skills generated by OpenACM for agents, workers and flows |
| \`security\` | Security-focused behaviors |

---

## Writing Effective Skills

### Do
- Be specific about behaviors and response patterns
- Include example questions and ideal responses
- Describe what to prioritize and what to avoid
- Include domain-specific terminology the LLM should know
- Add workflow checklists for complex tasks

### Don't
- Duplicate OpenACM's core identity (already in base context)
- Describe tools — the LLM already knows about its tools
- Make the skill too long — 500 words max is a good target
- Contradict OpenACM's core rules (always use tools, etc.)

### Example: Good Skill

\`\`\`markdown
# Python Expert

When writing Python code:

## Style Requirements
- Always use type hints (Python 3.10+ syntax: \`str | None\` not \`Optional[str]\`)
- Prefer \`pathlib.Path\` over \`os.path\`
- Use f-strings, never \`.format()\` or \`%\`
- Add docstrings to all public functions
- Follow PEP 8 with 88-char line length (Black formatter style)

## Code Patterns
- Use \`dataclasses\` or \`pydantic\` for data models
- Use \`asyncio\` for I/O operations
- Use \`contextlib.suppress()\` instead of \`try/except/pass\`
- Prefer list comprehensions for simple transformations

## Before Writing Code
1. Confirm the Python version target
2. Check if a standard library solution exists before adding dependencies
3. Write the type signature first
\`\`\`

---

## Skill Lifecycle

\`\`\`
File created in skills/<category>/ ──► Synced to DB on next startup (is_builtin=false)
create_skill / Skills page         ──► Written to skills/<category>/ + DB immediately
     │
     ▼
Skill marked active (dashboard, chat or API)
     │
     ▼
Message matches the skill (keywords or name)
     │
     ▼
Brain injects skill content (≤1,200 chars) into the system prompt
     │
     ▼
LLM call made with skill context → skill badge shown in chat UI
\`\`\`

---

## Combining Skills

Multiple skills can be active simultaneously. All matching skill contents are concatenated into the system prompt. Be aware of potential conflicts — two skills with contradictory instructions will confuse the LLM.

**Good combination:** \`python-expert\` + \`security-focused\` — complementary domains

**Bad combination:** \`formal-tone\` + \`casual-pirate-persona\` — contradictory

---

## Skill API

| Endpoint | Description |
|----------|-------------|
| \`GET /api/skills\` | List all skills |
| \`POST /api/skills\` | Create a skill |
| \`PUT /api/skills/{id}\` | Update a skill |
| \`DELETE /api/skills/{id}\` | Delete a skill |
| \`POST /api/skills/{id}/toggle\` | Enable/disable |
| \`GET /api/skills/active\` | List currently active skills |
| \`POST /api/skills/generate\` | AI-generated skill from description |

`
  },
  {
    "slug": "07-agents",
    "title": "Agents",
    "section": "Documentation",
    "content": `
# Agents

Agents are specialized assistants that run on OpenACM's shared infrastructure (LLM router, tool registry, memory) but have their own system prompt, a restricted set of tools, a knowledge base, a memory policy, their own channels (Telegram bot, WhatsApp number) and their own visual flows. While the main OpenACM agent is a generalist, agents are specialists — for example a customer-service bot for a store, or a research assistant.

---

## How Agents Work

Each agent has:
- **Name and description** — displayed in the dashboard
- **System prompt** — defines the agent's persona, rules and expertise
- **Tools access** (\`allowed_tools\`) — \`"all"\`, \`"none"\` (text only), or a JSON list of tool names
- **Knowledge base** — text snippets and uploaded files injected into its prompt
- **Skills** — global skills enabled for it, plus its own private skills
- **Flows** — visual automations it can call as tools (see [Agent Flows](./28-agent-flows.md))
- **Channels** — optional Telegram bot, WhatsApp Business number (Cloud API) or WhatsApp Web bridge
- **Memory policy** — remember forever, or reset context after N hours of inactivity
- **Inactivity follow-up** — optional nudge message if the customer goes silent
- **Webhook secret** — for the \`/api/agents/{id}/chat\` API

When an agent receives a message, \`AgentRunner\` runs it through the same agentic loop as the main agent (with at most 10 tool iterations per message), using a fresh copy of the agent's configuration so edits in the dashboard take effect immediately. The tool allowlist is enforced at the registry level, not just in the prompt. Each agent's conversations live in their own channel namespace (\`agent_<id>\` by default), isolated from the main chat and from other agents.

---

## Creating an Agent

### Via Dashboard
**Agents** → **New Agent** → fill in the form. You can also describe the agent you want (optionally attaching a document) and let the LLM generate the name, description and system prompt (\`POST /api/agents/generate\`).

### Via Chat
\`\`\`
You: Create an agent called "ResearchBot" that specializes in finding
     and summarizing online information. Give it access to all tools.
     It should be concise, cite sources, and prefer primary sources.
\`\`\`

The main agent uses the \`create_agent\` tool (\`allowed_tools\` is \`"all"\` or \`"none"\` from chat; restrict it to a list from the dashboard).

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/agents \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "ResearchBot",
    "description": "Finds and summarizes information",
    "system_prompt": "You are a research specialist. Always cite sources. Prefer academic and primary sources.",
    "allowed_tools": "[\\"web_search\\", \\"get_webpage\\", \\"remember_note\\"]",
    "memory_mode": "persistent"
  }'
\`\`\`

\`name\` and \`system_prompt\` are required. The creation response includes the agent's \`webhook_secret\` (it is stripped from later reads; fetch it again with \`GET /api/agents/{id}/secret\`).

---

## Tools Access

| Value | Meaning |
|-------|---------|
| \`"all"\` | Every registered tool |
| \`"none"\` | No tools — text-only answers (flows are disabled too) |
| \`["web_search", "get_webpage"]\` (JSON string) | Only those tools |

An agent's **active flows** are always added on top of its allowlist as \`flow_<id>\` tools (unless tools are \`"none"\`).

---

## Knowledge Base

The **Knowledge** tab stores reference material for the agent: business hours, prices, FAQs, policies…

- Add **text** entries (title + content) or upload **files** — plain text is read directly; PDFs, Office documents and other binary formats are converted to text with MarkItDown.
- On every message, all entries are injected at the top of the agent's system prompt under a "Base de conocimiento" section, capped at 40,000 characters.

API: \`GET/POST /api/agents/{id}/knowledge\`, \`POST /api/agents/{id}/knowledge/text\`, \`POST /api/agents/{id}/knowledge/file\`, \`PATCH/DELETE /api/agents/{id}/knowledge/{kid}\`.

---

## Memory Policy

| \`memory_mode\` | Behavior |
|---------------|----------|
| \`persistent\` (default) | The agent remembers each conversation forever (subject to normal compaction) |
| \`session_ttl\` | If the last message of a conversation is older than \`memory_ttl_hours\` (default 24), the context starts fresh. Old messages stay in SQLite for audit; they are just not reloaded |

### Customer name

Independently of the memory policy, the \`save_customer_name\` tool stores the customer's name per conversation. It survives every reset and is injected into the agent's prompt so it can keep greeting the customer by name.

---

## Inactivity Follow-up

Set \`inactivity_timeout_minutes\` (0 = off) and optionally \`inactivity_message\`. After the agent replies, a timer starts; if the customer does not write again before it expires, the agent proactively sends the follow-up message on the same channel (Telegram / WhatsApp) and records it in the conversation. Any new customer message cancels the timer.

---

## Channels

Each agent can have one active channel of each type (**Agents → Channels**):

| Type | Required config | Notes |
|------|-----------------|-------|
| \`telegram\` | \`token\` | The agent gets its own Telegram bot (create it with @BotFather) |
| \`whatsapp\` | \`access_token\`, \`phone_number_id\` (+ \`verify_token\`, \`app_secret\`) | Official Meta WhatsApp Cloud API. Messages arrive through the shared \`/webhooks/whatsapp\` webhook and are routed to the agent by \`phone_number_id\` |
| \`whatsapp_web\` | \`bridge_url\` | Unofficial whatsapp-web.js bridge; each agent needs its own bridge instance |

Channels start automatically with OpenACM and can be restarted from the dashboard (\`POST /api/agents/{id}/channels/{cid}/restart\`). Secrets are masked in API responses. See [WhatsApp Setup](./WHATSAPP_SETUP.md) for the Meta side.

In the dashboard **Chat** page, conversations coming from agent channels are grouped into one folder per agent. Uncheck **show in chat** (\`show_in_chat: false\`) to hide an agent's folder.

---

## Skills

The **Skills** tab of an agent lets you:
- Enable global skills for this agent only (\`POST/DELETE /api/agents/{id}/skills/{skill_id}\`)
- Generate private skills with the LLM (\`POST /api/agents/{id}/skills/generate\`) that only this agent sees

---

## Flows and Connections

The **Flows** tab opens the visual flow editor. Every active flow becomes a tool the agent can call. Flows can use **connections** (currently WooCommerce stores: URL + consumer key/secret) configured per agent. See [Agent Flows](./28-agent-flows.md).

---

## Messaging an Agent

### Via its channels
Customers message the agent's Telegram bot or WhatsApp number directly.

### Via the dashboard
Use the agent's **Test** panel (\`POST /api/agents/{id}/test\`) to chat with it; flow chat panels use the same endpoint.

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/agents/1/chat \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "X-Agent-Secret: <webhook_secret>" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "What are your opening hours?", "user_id": "customer-42"}'
\`\`\`

Response: \`{"response": "...", "agent": "ResearchBot"}\`. The agent must be active (\`is_active\`); the \`X-Agent-Secret\` header must match its webhook secret. Like every \`/api/*\` route, this endpoint is also behind the dashboard token.

---

## Use Cases

### Customer Service Bot
\`\`\`
Agent: "StoreBot"
Channels: WhatsApp Business
Knowledge: opening hours, shipping policy, return policy
Flows: "search products" (WooCommerce node)
Memory: session_ttl, 24 h · Inactivity follow-up: 10 min
Prompt: "You are the assistant of Acme Store. Answer only with information from the knowledge base and the product search."
\`\`\`

### Specialized Bots
Give friends or colleagues Telegram bots with limited, safe capabilities:

\`\`\`
Agent: "ScheduleBot"
Tools: ["calendar_list", "calendar_create", "gmail_read"]
Prompt: "Help users manage their schedule. Only create events they explicitly confirm."
\`\`\`

### Research Assistants
\`\`\`
Agent: "ResearchBot"
Tools: ["web_search", "get_webpage", "remember_note", "search_memory"]
Prompt: "Research topics thoroughly. Store key findings in memory. Synthesize, don't just copy."
\`\`\`

### IoT Controller
\`\`\`
Agent: "HomeBot"
Tools: ["ha_devices", "ha_control", "ha_status"]
Prompt: "Control smart home devices. Always confirm before turning off devices that might be in use."
\`\`\`

---

## Agent vs Main Agent

| Feature | Main Agent | Agent |
|---------|-----------|-----------|
| Tool access | All registered tools | Allowlist + its own flows |
| Memory | Shared conversation DB | Separate per-agent conversations, optional TTL |
| System prompt | Config default + skills | Custom per-agent + knowledge base + agent skills |
| Channels | Web, Console, global Telegram/Discord/WhatsApp | Own Telegram bot / WhatsApp number |
| Max tool iterations | \`assistant.max_tool_iterations\` (25) | 10 |

---

## Security Considerations

- Agents are isolated by tool allowlist — they cannot call tools outside their allowed list (plus their own flows)
- Agent conversations are stored separately in the database (by agent channel)
- If you give an agent \`run_command\` (or \`"all"\`), it has the same OS access as the main agent — anyone who can message its public Telegram/WhatsApp channel can then drive it. Keep customer-facing agents on a minimal allowlist
- The \`run_command\` confirmation prompt appears in the dashboard, not in the customer's chat

`
  },
  {
    "slug": "08-channels",
    "title": "Channels",
    "section": "Documentation",
    "content": `
# Channels

OpenACM is channel-agnostic. The same AI brain handles messages from all channels identically. Channels are responsible for receiving messages, delivering responses, and translating platform-specific features.

Besides the global channels described here, every [agent](./07-agents.md#channels) can have its own Telegram bot and WhatsApp number.

---

## Web Dashboard

The built-in browser interface. No extra setup required — always available at \`http://127.0.0.1:47821\`.

**Features:**
- Real-time responses, with partial text shown while tools run
- File upload (images, PDFs, audio, Office documents, text files)
- Inline image preview and file download
- Conversation history with encryption indicator
- Multi-conversation sidebar: web conversations, external channel conversations, and one folder per agent (collapsible, remembered across sessions, paginated)
- Tool execution log (toggle on/off)
- Interactive terminal per conversation (real PTY) that also mirrors the AI's commands
- Cancel button to abort the current request

**Conversation identity:** Web conversations use \`channel_id=web\`; each new conversation gets its own user id (\`web_<timestamp>\`). Conversations persist in the database and can be resumed by selecting them from the sidebar.

---

## Console

The interactive terminal built into the OpenACM startup process. No extra setup.

**Features:**
- Type messages directly in the terminal
- Full ANSI color output
- Console-only commands: \`/models\`, \`/tools\`, \`/config\`
- Shared slash commands: \`/new\`, \`/clear\`, \`/reset\`, \`/compact\`, \`/model\`, \`/stats\`, \`/export\`, \`/workspace\`, \`/help\`

**Usage:**
\`\`\`
You> take a screenshot
You> what's my disk usage?
You> /models
You> quit
\`\`\`

Console conversations use \`channel_id=console\`, \`user_id=console\`. When OpenACM runs without a TTY (Docker, systemd) the console is skipped and the process just keeps the web server and channels alive.

There is also \`openacm-cli\`, a separate REPL that connects to a running OpenACM over HTTP/WebSocket (it's what you can launch inside the dashboard terminal).

---

## Telegram

OpenACM runs as a Telegram bot. Any message to the bot is processed by the agent.

### Setup

1. Create a bot via [@BotFather](https://t.me/BotFather) → \`/newbot\`
2. Copy the token
3. Add to \`config/.env\`:
   \`\`\`env
   TELEGRAM_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
   \`\`\`
4. Restart OpenACM. When \`TELEGRAM_TOKEN\` is set the channel **auto-enables**; you can also enable it explicitly in \`config/local.yaml\`:
   \`\`\`yaml
   channels:
     telegram:
       enabled: true
       allowed_users: []   # restrict by Telegram user ID if needed
   \`\`\`

You can also paste the token in the onboarding wizard or **Configuration** — the bot is (re)started immediately without a restart.

### Restricting Access
\`\`\`yaml
channels:
  telegram:
    allowed_users:
      - "123456789"   # Find your ID via @userinfobot — quote it, IDs are strings
\`\`\`

### File Support
- Send images → OpenACM analyzes them (with vision-capable models)
- Send audio/voice → transcribed with the OpenAI Whisper API (if \`OPENAI_API_KEY\` is set), local faster-whisper, or MarkItDown as a last resort
- Send documents → text extracted and added to context

### Tool logs
By default external channels also receive short tool-execution messages. Turn this off in **Configuration** (\`POST /api/config/verbose_channels\`, \`OPENACM_VERBOSE_CHANNELS=false\`).

### Agent Bots
Each agent can have its own Telegram bot (**Agents → Channels → Telegram**). This gives specialists their own dedicated bot without sharing the main agent.

---

## Discord

OpenACM runs as a Discord bot, responding to mentions, DMs and a command prefix.

### Setup

1. Create an application at [discord.com/developers](https://discord.com/developers)
2. Add a Bot, enable Message Content Intent
3. Copy the bot token
4. Add to \`config/.env\`:
   \`\`\`env
   DISCORD_TOKEN=...
   \`\`\`
5. Enable in \`config/local.yaml\` (Discord is not auto-enabled):
   \`\`\`yaml
   channels:
     discord:
       enabled: true
       command_prefix: "!"
       respond_to_mentions: true
       respond_to_dms: true
   \`\`\`

### Features
- Responds to \`@OpenACM <message>\` mentions
- Responds to direct messages
- Optional command prefix (e.g., \`!ask what's my IP?\`)
- Files produced by tools are uploaded as Discord attachments

> The config model also has an \`allowed_guilds\` list, but in v0.4.7 the Discord channel does not enforce it. Restrict the bot by only inviting it to servers you trust.

---

## WhatsApp

OpenACM supports two WhatsApp modes, selected with \`channels.whatsapp.mode\`:

| Mode | How it works | Recommended |
|------|--------------|-------------|
| \`cloud_api\` (default) | Official **Meta WhatsApp Cloud API**. Meta POSTs incoming messages to your public \`https://<your-domain>/webhooks/whatsapp\` | ✅ Yes — no ban risk |
| \`bridge\` | Legacy local HTTP bridge (e.g. whatsapp-web.js) at \`bridge_url\` | Unofficial, ban risk |

### Cloud API setup (summary)

1. Create a Meta app with the WhatsApp product and note the access token, phone number ID and app secret
2. Put the credentials in \`config/.env\`:
   \`\`\`env
   WHATSAPP_ACCESS_TOKEN=EAAG...
   WHATSAPP_PHONE_NUMBER_ID=123456789012345
   WHATSAPP_VERIFY_TOKEN=any-string-you-choose
   WHATSAPP_APP_SECRET=...
   \`\`\`
3. Expose OpenACM over HTTPS (e.g. Cloudflare Tunnel) and set the webhook in Meta to \`https://<your-domain>/webhooks/whatsapp\` with the same verify token
4. The channel auto-enables once \`WHATSAPP_ACCESS_TOKEN\` and \`WHATSAPP_PHONE_NUMBER_ID\` are present

Incoming webhook bodies are validated against \`WHATSAPP_APP_SECRET\` (\`X-Hub-Signature-256\`). The full step-by-step guide is in [WhatsApp Setup](./WHATSAPP_SETUP.md).

### Bridge mode

\`\`\`yaml
channels:
  whatsapp:
    enabled: true
    mode: bridge
    bridge_url: "http://localhost:3001"
    rate_limit_per_minute: 20
\`\`\`

**Note:** WhatsApp's Terms of Service restrict unofficial automation. Prefer the Cloud API.

---

## Channel IDs and User IDs

Each conversation is identified by \`channel_id:user_id\`:

| Channel | channel_id | user_id |
|---------|-----------|---------|
| Web | \`web\` | \`web\` / \`web_<timestamp>\` |
| Console | \`console\` | \`console\` |
| Telegram | Telegram chat ID | Telegram user ID |
| Discord | Discord channel ID | Discord user ID |
| WhatsApp | Sender phone number | Sender phone number |
| Agents (API/test) | \`agent_<id>\` | caller-provided |
| Cron \`send_message\` jobs | \`cron\` | \`cron\` |

This pair is the conversation key — same pair = same conversation history.

---

## Adding Custom Channels

Any messaging platform can be added by implementing \`BaseChannel\`. See [Extending OpenACM](./17-extending.md#adding-custom-channels) for details.

`
  },
  {
    "slug": "09-llm-providers",
    "title": "LLM Providers",
    "section": "Documentation",
    "content": `
# LLM Providers

OpenACM uses **LiteLLM** as a unified LLM interface, supporting 100+ providers. All providers are accessed through the same internal API regardless of who hosts them.

---

## How providers are configured

- **Provider settings** (\`base_url\`, \`default_model\`) live under \`llm.providers\` in \`config/default.yaml\`; put your changes in \`config/local.yaml\`, which overrides it and is not touched by updates.
- **API keys** are always read from environment variables named **\`<PROVIDER_ID>_API_KEY\`** (uppercase) — e.g. \`OPENAI_API_KEY\`, \`OPENCODE_GO_API_KEY\`. Put them in \`config/.env\`, or enter them in the onboarding wizard / **Configuration**, which writes \`config/.env\` for you. An \`api_key\` field inside the YAML is not used.
- **\`llm.default_provider\`** selects the provider used at startup. Once you pick a model in the dashboard (or with \`/model\`), that choice is persisted in the database and restored on restart.

---

## Built-in Providers

These providers are preconfigured in \`config/default.yaml\`:

| Provider id | Default model | Base URL | API key env var |
|-------------|---------------|----------|-----------------|
| \`opencode_go\` (default) | \`kimi-k2.5\` | \`https://opencode.ai/zen/go/v1\` | \`OPENCODE_GO_API_KEY\` |
| \`openai\` | \`gpt-4o\` | LiteLLM default | \`OPENAI_API_KEY\` |
| \`anthropic\` | \`claude-sonnet-4-20250514\` | LiteLLM default | \`ANTHROPIC_API_KEY\` |
| \`gemini\` | \`gemini-2.5-flash\` | LiteLLM default | \`GEMINI_API_KEY\` |
| \`xai\` | \`grok-4.20-0309-non-reasoning\` | \`https://api.x.ai/v1\` | \`XAI_API_KEY\` |
| \`openrouter\` | \`openrouter/auto\` | \`https://openrouter.ai/api/v1\` | \`OPENROUTER_API_KEY\` |
| \`ollama\` | \`llama3.2\` | \`http://localhost:11434\` | — |

### Ollama (Local)
Run models 100% locally. No API key. No internet. No cost.

\`\`\`yaml
# config/local.yaml
llm:
  default_provider: ollama
  providers:
    ollama:
      base_url: "http://localhost:11434"
      default_model: "llama3.2"
\`\`\`

Ollama is called through its OpenAI-compatible \`/v1\` endpoint. \`GET /api/ollama/status\` reports whether Ollama is running and which models are installed.

**Recommended models for OpenACM:**
| Model | Size | Best for |
|-------|------|----------|
| \`llama3.2\` | 2GB | Fast general purpose |
| \`llama3.1:8b\` | 5GB | Better reasoning |
| \`llama3.3:70b\` | 40GB | Best quality local |
| \`qwen2.5-coder\` | 4GB | Code tasks |
| \`mistral\` | 4GB | Instruction following |
| \`deepseek-r1\` | 7GB+ | Complex reasoning |

Install models: \`ollama pull llama3.2\`

---

### OpenAI

\`\`\`yaml
llm:
  default_provider: openai
  providers:
    openai:
      default_model: "gpt-4o"
\`\`\`
\`\`\`env
OPENAI_API_KEY=sk-...
\`\`\`

---

### Anthropic (Claude)

\`\`\`yaml
llm:
  default_provider: anthropic
  providers:
    anthropic:
      default_model: "claude-sonnet-4-20250514"
\`\`\`
\`\`\`env
ANTHROPIC_API_KEY=sk-ant-...
\`\`\`

---

### Google Gemini

\`\`\`yaml
llm:
  default_provider: gemini
  providers:
    gemini:
      default_model: "gemini-2.5-flash"
\`\`\`
\`\`\`env
GEMINI_API_KEY=AIza...
\`\`\`

---

### OpenCode Go, xAI, OpenRouter

These are OpenAI-compatible endpoints preconfigured with a \`base_url\`. Just add the key (\`OPENCODE_GO_API_KEY\`, \`XAI_API_KEY\`, \`OPENROUTER_API_KEY\`) and select the provider. For OpenCode Go, OpenACM sends a per-conversation \`x-opencode-session\` header.

---

### Any other LiteLLM provider

Add an entry with a \`base_url\` for any OpenAI-compatible API (Groq, Together, Mistral, DeepSeek…), and the matching \`<ID>_API_KEY\`:

\`\`\`yaml
llm:
  providers:
    groq:
      base_url: "https://api.groq.com/openai/v1"
      default_model: "llama-3.3-70b-versatile"
\`\`\`
\`\`\`env
GROQ_API_KEY=gsk_...
\`\`\`

---

## Custom Providers (OpenAI-Compatible)

Any server that speaks the OpenAI API can be added as a custom provider from the dashboard, with its key stored alongside it. This includes:
- **LM Studio** (local model server)
- **vLLM** (self-hosted high-performance inference)
- **LocalAI** (local model server)
- **Kobold.cpp** (local GGUF model runner)
- **Perplexity AI**
- **DeepSeek API**
- **Fireworks AI**

### Via Dashboard
Go to **Configuration** → **Custom Providers** → **Add Provider**. The provider id is derived from the name (snake_case).

### Via \`config/custom_providers.json\`
\`\`\`json
[
  {
    "id": "lm_studio",
    "name": "LM Studio",
    "base_url": "http://localhost:1234/v1",
    "default_model": "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF",
    "api_key": ""
  },
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "base_url": "https://api.deepseek.com/v1",
    "default_model": "deepseek-chat",
    "api_key": "sk-..."
  }
]
\`\`\`

On startup each custom provider is injected into the live config and its \`api_key\` is exported as \`<ID>_API_KEY\`. The file is git-ignored because it may contain keys.

---

## CLI Providers

If the \`claude\`, \`gemini\` or \`opencode\` CLI is installed and logged in, OpenACM auto-detects it at startup and adds \`cli_claude\` / \`cli_gemini\` / \`cli_opencode\` as providers — no API key needed. See [CLI Providers](./21-cli-providers.md).

---

## Switching Models

### Mid-Conversation (Chat)
\`\`\`
You> /model anthropic/claude-sonnet-4-6
You> /model ollama/llama3.2
You> /model my_custom_provider/my-model
\`\`\`

A \`provider/model\` string also switches the provider. The agent can do the same with the \`switch_llm_model\` tool.

### Via Dashboard
Go to **Configuration** → **Model** → pick a provider and model (\`GET /api/config/available_models\` lists the models the current provider exposes).

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/config/model \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "Content-Type: application/json" \\
  -d '{"provider": "ollama", "model": "llama3.2"}'
\`\`\`

The selected model is persisted — it survives restarts.

---

## Per-model Parameters

\`temperature\`, \`max_tokens\` and \`top_p\` can be saved per provider + model from the dashboard or via \`PATCH /api/config/model-params\` (\`{"provider": "...", "model": "...", "temperature": 0.3}\`). They are persisted in the database.

---

## Context Window Overrides

OpenACM sizes compaction and truncation from each model's context window, as reported by LiteLLM (128K is assumed when unknown). For models LiteLLM doesn't know, set it yourself:

\`\`\`yaml
llm:
  model_context_overrides:
    kimi: 131072         # substring of the model name → tokens
    deepseek-r1: 65536
\`\`\`

---

## Timeouts and Retries

- \`llm.timeout\` — seconds to wait for any LLM response (\`0\` = no timeout, the default)
- Transient failures (5xx, dropped connections) and **HTTP 429 rate limits** are retried with exponential backoff and jitter; a \`Retry-After\` header is honored

---

## Provider Profiles

Some providers have quirks that OpenACM handles automatically:

| Provider | Quirk | How OpenACM handles it |
|----------|-------|----------------------|
| Gemini | Strict message format; tool limits | Message normalization, max 15 tools per call |
| Ollama / local models | Weak native tool calling | Tool-use enforcement message, max 10 tools per call |
| OpenCode Go | Proxy fails with \`tool_choice="required"\` | Always \`auto\`, no enforcement |
| Unknown / custom | — | Conservative defaults (enforcement on, max 15 tools) |
| Thinking models (DeepSeek R1, Kimi) | Emit reasoning tokens / \`<think>\` tags | Tags stripped from the answer; reasoning streamed to the dashboard and stripped from old context |

---

## Token Usage Tracking

All LLM calls are logged to the database with:
- Model and provider
- Prompt tokens, completion tokens, total tokens
- Estimated cost (from LiteLLM's pricing table; 0 when unknown)
- Elapsed milliseconds

View in the dashboard: **Dashboard** (tokens over time, totals) or \`/stats\` in chat.

---

## Choosing a Provider

| Priority | Recommendation |
|----------|---------------|
| Privacy first | Ollama (local) |
| Best quality | Anthropic Claude or OpenAI GPT-4o-class models |
| Low cost, good tool use | OpenCode Go (Kimi) or Gemini Flash |
| No API billing | A CLI provider using your existing subscription |
| Code tasks | Claude, GPT, or Ollama \`qwen2.5-coder\` |
| Reasoning | DeepSeek R1 or OpenAI o-series |

See also [LLM Pricing Reference](./LLM_PRICING_REFERENCE.md).

`
  },
  {
    "slug": "10-api-reference",
    "title": "API Reference",
    "section": "Documentation",
    "content": `
# API Reference

OpenACM exposes a REST API and several WebSocket endpoints. All endpoints (except the public ones listed below) require authentication.

**Base URL:** \`http://127.0.0.1:47821\` (configurable with \`web.host\` / \`web.port\`)

Interactive OpenAPI docs (Swagger UI) are served at **\`/api/docs\`**.

---

## Authentication

All protected endpoints require the dashboard token (the \`DASHBOARD_TOKEN\` value in \`config/.env\`, printed at startup) as a Bearer token or query parameter:

\`\`\`http
Authorization: Bearer <dashboard-token>
\`\`\`

Or as a query parameter:

\`\`\`http
GET /api/conversations?token=<dashboard-token>
\`\`\`

WebSocket endpoints take the token as \`?token=<dashboard-token>\`.

**Public endpoints (no dashboard token):**
- \`GET /api/ping\`
- \`GET|POST /api/auth/check\`
- \`GET /api/system/info\`
- \`GET /api/config/google/callback\` (Google OAuth redirect)
- \`POST /api/webhooks/{slug}\` — each [webhook connector](./29-webhook-connectors.md) authenticates the request itself
- API paths a plugin declares public via \`get_public_api_paths()\` (routes that verify their own signature)
- \`GET|POST /webhooks/whatsapp\` — Meta WhatsApp webhook (outside \`/api/\`; POSTs are verified with \`WHATSAPP_APP_SECRET\`)
- The dashboard SPA and static assets

A request without a valid token gets \`401 {"error": "Unauthorized. Provide a valid token."}\`.

---

## System

### \`GET /api/ping\`
Health check. Returns immediately.

\`\`\`json
{ "ok": true }
\`\`\`

### \`GET /api/system/info\`
Version and system flags.

\`\`\`json
{ "version": "0.4.7", "messages_encrypted": true }
\`\`\`

### \`POST /api/system/restart\`
Restart the OpenACM process (replaces the process image via \`os.execv\`). Returns before the restart completes.

\`\`\`json
{ "status": "restarting" }
\`\`\`

### \`POST /api/auth/check\`
Verify a dashboard token (\`GET /api/auth/check?token=...\` also works).

**Request:**
\`\`\`json
{ "token": "<dashboard-token>" }
\`\`\`

**Response:** \`200 {"valid": true}\` or \`401 {"valid": false}\`.

### \`GET /api/system/pick-folder\`
Open a native folder picker on the host (desktop use). Returns \`{"path": "..."}\`.

---

## Statistics

| Endpoint | Description |
|----------|-------------|
| \`GET /api/stats\` | Session totals: requests, tokens, cost, tool calls, conversations, current provider/model |
| \`GET /api/stats/history?days=30\` | Daily token and request usage |
| \`GET /api/stats/channels\` | Per-channel message counts |
| \`GET /api/stats/detailed\` | Token/cost breakdown: totals, by model, today, history |

---

## Conversations

### \`GET /api/conversations\`
List conversations with agent, channel and customer metadata. \`?include_hidden=true\` also returns conversations of agents with \`show_in_chat: false\`.

### \`GET /api/conversations/{channel_id}/{user_id}\`
Get conversation history.

**Query params:**
- \`limit\` (int, default 50) — max messages to return

### \`DELETE /api/conversations/{channel_id}/{user_id}\`
Delete all messages for a conversation (memory + database).

\`\`\`json
{ "status": "ok", "deleted_rows": 18 }
\`\`\`

---

## Chat

### \`POST /api/chat/upload\`
Upload a file to attach to the next message.

**Request:** \`multipart/form-data\` with a \`file\` field.

**Response:**
\`\`\`json
{
  "file_id": "3f2a9c1e.png",
  "filename": "screenshot.png",
  "size": 284920,
  "content_type": "image/png"
}
\`\`\`

Pass the returned \`file_id\` in the \`attachments\` array of the next \`/ws/chat\` message.

### \`POST /api/chat/command\`
Execute a slash command via REST.

**Request:**
\`\`\`json
{ "command": "/new", "user_id": "web_xxx", "channel_id": "web" }
\`\`\`

**Response:**
\`\`\`json
{ "text": "Conversation cleared.", "data": null }
\`\`\`

### \`GET /api/terminal/history\`
Recent terminal output for the dashboard terminal panel.

---

## Media

### \`GET /api/media\`
List files in \`data/media/\`.

### \`GET /api/media/{file_name}\`
Serve a media file. Images, video, audio and PDFs render inline; other files download.

**Query params:**
- \`download=true\` — force download (\`Content-Disposition: attachment\`)

---

## Tools

### \`GET /api/tools\`
List all registered tools.

\`\`\`json
[
  {
    "name": "run_command",
    "description": "[OpenACM Tool] Execute commands directly in the operating system terminal...",
    "risk_level": "high",
    "parameters": { "type": "object", "properties": { "command": { "type": "string" } } },
    "category": "general"
  }
]
\`\`\`

### \`GET /api/tools/executions?limit=50\`
Recent tool execution log (tool, arguments, truncated result, success, elapsed ms).

### \`POST /api/tool/confirm\`
Resolve a pending \`run_command\` confirmation (the dashboard's approval dialog uses this).

\`\`\`json
{ "confirm_id": "…", "approved": true, "always_session": false, "command": "ls -la" }
\`\`\`

---

## Configuration

| Endpoint | Description |
|----------|-------------|
| \`GET /api/config\` | Full configuration (API keys masked) |
| \`GET /api/config/status\` | Whether setup is still needed (no provider configured) |
| \`GET /api/config/providers\` | Which providers have credentials, plus Telegram/WhatsApp/Stitch flags |
| \`POST /api/config/setup\` | Write keys to \`config/.env\` (e.g. \`{"OPENAI_API_KEY": "sk-..."}\`) and hot-restart Telegram/WhatsApp when their keys change |
| \`GET /api/config/model\` | Current model: \`{"model": "...", "provider": "..."}\` |
| \`POST /api/config/model\` | Switch model: \`{"provider": "ollama", "model": "llama3.2"}\` (persisted) |
| \`GET /api/config/available_models\` | Models exposed by the current provider's API |
| \`GET /api/config/model-params\` | Stored \`temperature\` / \`max_tokens\` / \`top_p\` (current model, or \`?provider=&model=\`) |
| \`PATCH /api/config/model-params\` | Save params: \`{"provider", "model", "temperature", "max_tokens", "top_p"}\` |
| \`GET /api/config/custom_providers\` | List custom OpenAI-compatible providers (keys masked, \`has_key\`) |
| \`POST /api/config/custom_providers\` | Add one: \`{"name", "base_url", "default_model", "api_key"}\` |
| \`PUT /api/config/custom_providers/{id}\` | Update one |
| \`DELETE /api/config/custom_providers/{id}\` | Delete one |
| \`PATCH /api/config/security\` | \`{"execution_mode": "confirmation" \\| "auto" \\| "yolo"}\` (persisted) |
| \`GET /api/config/assistant\` / \`PATCH /api/config/assistant\` | Assistant identity (name, system prompt…) |
| \`GET /api/config/local_router\` / \`POST /api/config/local_router\` | Local router status/stats; set \`enabled\`, \`confidence_threshold\` (0.5–1.0) at runtime |
| \`GET /api/config/rag_threshold\` / \`POST /api/config/rag_threshold\` | RAG relevance threshold (persisted to \`config/local.yaml\`) |
| \`GET /api/config/compaction\` / \`POST /api/config/compaction\` | \`compact_ratio\`, \`compact_keep_recent\` (persisted to \`config/local.yaml\`) |
| \`GET/POST/DELETE /api/config/resurrection_paths\` | Code Resurrection folders (\`{"path": "..."}\`) |
| \`POST /api/config/verbose_channels\` | \`{"enabled": false}\` stops sending tool logs to external channels |
| \`GET /api/config/debug_mode\` / \`POST /api/config/debug_mode\` | Toggle DEBUG-level logging |
| \`GET /api/config/client-profile\` | Client profile (\`active\`, \`name\`, \`allowed_pages\`) |
| \`GET /api/ollama/status\` | Whether Ollama is running and its models |
| \`GET /api/cli/status?binary=claude\` | Whether a CLI binary is on PATH |

### Google OAuth

| Endpoint | Description |
|----------|-------------|
| \`GET /api/config/google\` | Whether credentials/token exist |
| \`POST /api/config/google\` | Upload the OAuth client JSON: \`{"credentials_json": "..."}\` → \`config/google_credentials.json\` |
| \`DELETE /api/config/google\` | Remove credentials and token |
| \`POST /api/config/google/start_auth\` | Start the OAuth flow → \`{"url": "<Google consent URL>", "state": "..."}\` |
| \`GET /api/config/google/callback\` | OAuth redirect target (public); stores \`config/google_token.json\` |

---

## Memory

| Endpoint | Description |
|----------|-------------|
| \`GET /api/memory/stats\` | RAG stats: total documents, breakdown by type, folder size |
| \`DELETE /api/memory/all\` | Delete **all** documents from the vector store |

Notes are added by the agent with \`remember_note\`; there is no REST endpoint to add individual notes.

---

## Skills

| Endpoint | Description |
|----------|-------------|
| \`GET /api/skills\` | List all skills (\`id\`, \`name\`, \`description\`, \`category\`, \`is_active\`, \`is_builtin\`…) |
| \`GET /api/skills/active\` | Currently active skills |
| \`POST /api/skills\` | Create: \`{"name", "description", "content", "category"}\` |
| \`PUT /api/skills/{skill_id}\` | Update |
| \`DELETE /api/skills/{skill_id}\` | Delete |
| \`POST /api/skills/{skill_id}/toggle\` | Flip active/inactive → \`{"status": "ok", "toggled": true}\` |
| \`POST /api/skills/generate\` | Generate a skill with the LLM from a description |

---

## Agents

### Core

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents\` | List agents (webhook secret stripped) |
| \`POST /api/agents\` | Create (see body below); the response includes \`webhook_secret\` |
| \`GET /api/agents/{id}\` | Get one |
| \`PUT /api/agents/{id}\` | Update any of: \`name\`, \`description\`, \`system_prompt\`, \`allowed_tools\`, \`is_active\`, \`memory_mode\`, \`memory_ttl_hours\`, \`inactivity_timeout_minutes\`, \`inactivity_message\`, \`show_in_chat\` |
| \`DELETE /api/agents/{id}\` | Delete (stops its channels) |
| \`GET /api/agents/{id}/secret\` | \`{"webhook_secret": "..."}\` |
| \`POST /api/agents/generate\` | Generate name/description/prompt from a description (JSON, or multipart with optional \`file\` documents) |
| \`POST /api/agents/{id}/test\` | Chat with the agent from the dashboard: \`{"message", "channel_id"?, "extra_system_context"?}\` → \`{"response"}\` |

**Create body:**
\`\`\`json
{
  "name": "StoreBot",
  "description": "Answers customer questions",
  "system_prompt": "You are the assistant of Acme Store...",
  "allowed_tools": "all",
  "memory_mode": "session_ttl",
  "memory_ttl_hours": 24,
  "inactivity_timeout_minutes": 10,
  "inactivity_message": "Are you still there?",
  "show_in_chat": true
}
\`\`\`

### \`POST /api/agents/{agent_id}/chat\`
Send a message to an agent from another system.

**Headers:** dashboard token **and** \`X-Agent-Secret: <webhook_secret>\`

**Request:**
\`\`\`json
{ "message": "What are your opening hours?", "user_id": "customer-42" }
\`\`\`

**Response:**
\`\`\`json
{ "response": "We are open from 9am to 6pm.", "agent": "StoreBot" }
\`\`\`

Errors: \`401\` wrong secret, \`403\` agent disabled, \`404\` unknown agent.

### Skills

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents/{id}/skills\` | \`{"global_skills": [... "enabled"], "private_skills": [...]}\` |
| \`POST /api/agents/{id}/skills/{skill_id}\` | Enable a global skill for this agent |
| \`DELETE /api/agents/{id}/skills/{skill_id}\` | Disable it |
| \`POST /api/agents/{id}/skills/generate\` | Generate a private skill: \`{"name", "description", "use_cases"}\` |

### Knowledge base

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents/{id}/knowledge\` | List entries (content omitted, \`char_count\` included) |
| \`POST /api/agents/{id}/knowledge/text\` | \`{"title", "content"}\` |
| \`POST /api/agents/{id}/knowledge/file\` | Multipart \`file\` (+ optional \`title\`); text is extracted |
| \`PATCH /api/agents/{id}/knowledge/{kid}\` | Update \`title\` / \`content\` |
| \`DELETE /api/agents/{id}/knowledge/{kid}\` | Delete |

### Channels

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents/{id}/channels\` | List (secrets masked, \`is_connected\`) |
| \`POST /api/agents/{id}/channels\` | \`{"type": "telegram" \\| "whatsapp" \\| "whatsapp_web", "config": {...}}\` |
| \`PATCH /api/agents/{id}/channels/{cid}\` | Update config / \`is_active\` |
| \`DELETE /api/agents/{id}/channels/{cid}\` | Delete (stops it) |
| \`POST /api/agents/{id}/channels/{cid}/restart\` | Restart → \`{"ok": true, "connected": true}\` |

Required config: \`telegram\` → \`token\`; \`whatsapp\` → \`access_token\`, \`phone_number_id\`; \`whatsapp_web\` → \`bridge_url\`.

### Flows

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents/{id}/flows\` | List flows |
| \`GET /api/agents/{id}/flows/{flow_id}\` | Get one (includes \`graph_json\`) |
| \`POST /api/agents/{id}/flows\` | Create \`{"name", "description", "graph_json"?}\` — without a graph, a valid Start→End skeleton is created |
| \`PUT /api/agents/{id}/flows/{flow_id}\` | Update \`name\`, \`description\`, \`graph_json\`, \`is_active\` (graph is validated, \`400\` if invalid) |
| \`DELETE /api/agents/{id}/flows/{flow_id}\` | Delete |
| \`POST /api/agents/{id}/flows/{flow_id}/test\` | Run it: \`{"params": {...}, "graph_json"?: "<unsaved graph>"}\` → \`{"result", "outputs", "error"}\` |
| \`GET/POST/PUT/DELETE /api/agents/{id}/flows/{flow_id}/skill\` | The flow's skill (one per flow; \`409\` if it already exists on POST) |
| \`POST /api/agents/{id}/flows/{flow_id}/skill/generate\` | Generate the flow's skill with the LLM |

### Connections

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents/{id}/connections\` | List |
| \`POST /api/agents/{id}/connections\` | \`{"name", "type": "woocommerce", "url", "consumer_key", "consumer_secret"}\` |
| \`PUT /api/agents/{id}/connections/{cid}\` | Update |
| \`DELETE /api/agents/{id}/connections/{cid}\` | Delete |

---

## Webhook Connectors

| Endpoint | Auth | Description |
|----------|------|-------------|
| \`POST /api/webhooks/{slug}\` | Connector's own scheme | Run the connector's flow with the request; returns \`{"result": "..."}\` |
| \`GET /api/webhook-connectors\` | Dashboard token | List (secrets masked as \`***\`) |
| \`GET /api/webhook-connectors/{id}\` | Dashboard token | Get one |
| \`POST /api/webhook-connectors\` | Dashboard token | Create \`{"slug", "name", "auth_scheme", "auth_config", "flow_id", "dedupe_header"?}\` |
| \`PATCH /api/webhook-connectors/{id}\` | Dashboard token | Update (sending \`"***"\` keeps a stored secret) |
| \`DELETE /api/webhook-connectors/{id}\` | Dashboard token | Delete |
| \`GET /api/webhook-connectors/{id}/events\` | Dashboard token | Audit log + stats |

See [Webhook Connectors](./29-webhook-connectors.md) for auth schemes and status codes.

---

## MCP Servers

| Endpoint | Description |
|----------|-------------|
| \`GET /api/mcp/servers\` | Configured servers with connection status and tools |
| \`POST /api/mcp/servers\` | Add: \`{"name", "transport", "command", "args", "env", "url", "api_key", "headers", "auto_connect"}\` |
| \`PUT /api/mcp/servers/{name}\` | Update |
| \`DELETE /api/mcp/servers/{name}\` | Remove (disconnects if connected) |
| \`POST /api/mcp/servers/{name}/connect\` | Connect → \`{"status": "ok" \\| "error", "connected", "error", "tools"}\` |
| \`POST /api/mcp/servers/{name}/disconnect\` | Disconnect → \`{"status": "ok", "disconnected": "<name>"}\` |

---

## Cron Scheduler

| Endpoint | Description |
|----------|-------------|
| \`GET /api/cron/jobs\` | List jobs |
| \`POST /api/cron/jobs\` | Create \`{"name", "description", "cron_expr", "action_type", "action_payload", "is_enabled"}\` |
| \`GET /api/cron/jobs/{id}\` | Get one |
| \`PUT /api/cron/jobs/{id}\` | Update (only the fields sent) |
| \`DELETE /api/cron/jobs/{id}\` | Delete (and its run history) |
| \`POST /api/cron/jobs/{id}/trigger\` | Run now |
| \`POST /api/cron/jobs/{id}/toggle\` | Enable/disable |
| \`GET /api/cron/runs?job_id=&limit=50\` | Run history \`{"runs": [...]}\` |
| \`GET /api/cron/status\` | Scheduler status |

Details in [Cron Scheduler](./19-cron-scheduler.md).

---

## Routines & Activity

| Endpoint | Description |
|----------|-------------|
| \`GET /api/routines\` | Detected routines |
| \`POST /api/routines/{id}/execute\` | Launch a routine's apps → \`{"status": "ok", "results": [...]}\` |
| \`PUT /api/routines/{id}\` | Update (name, trigger, active…) |
| \`DELETE /api/routines/{id}\` | Delete |
| \`POST /api/routines/analyze\` | Run the pattern analyzer → \`{"status": "ok", "new_routines": 2, "routines": [...]}\` |
| \`GET /api/activity/stats\` | \`{"apps": [...], "total_hours": 12.5, "session_count": 284}\` |
| \`GET /api/activity/sessions?limit=30\` | Recent app focus sessions (decrypted) |
| \`GET /api/watcher/status\` | \`{"running", "current_app", "current_title", "current_project", "sessions_recorded", "encrypted", "key_path"}\` |
| \`POST /api/watcher/toggle\` | Start/stop the activity watcher → \`{"running": false}\` |

---

## Swarms

| Endpoint | Description |
|----------|-------------|
| \`GET /api/swarms\` | List |
| \`POST /api/swarms\` | Create (multipart: \`name\`, \`goal\`, \`global_model\`, files) |
| \`GET /api/swarms/{id}\` | Detail with workers and tasks |
| \`DELETE /api/swarms/{id}\` | Delete |
| \`POST /api/swarms/{id}/clarify\` | Generate clarification questions |
| \`POST /api/swarms/{id}/clarify/answer\` | Answer them and plan |
| \`POST /api/swarms/{id}/plan\` | Plan the team and tasks |
| \`POST /api/swarms/{id}/start\` / \`stop\` | Start/resume, or pause |
| \`POST /api/swarms/{id}/tasks/{tid}/retry\` | Retry a failed task (optional guidance) |
| \`POST /api/swarms/{id}/tasks/{tid}/complete\` | Mark a failed task done with a user-provided result |
| \`PUT /api/swarms/{id}/workers/{wid}\` | Update a worker (e.g. model) |
| \`GET/POST/DELETE /api/swarms/{id}/workers/{wid}/skills[...]\` | Worker skills (list, generate, enable/disable) |
| \`GET /api/swarms/{id}/messages\` | Activity feed |
| \`GET /api/swarms/{id}/conversations[/{channel}/{user}]\` | Worker conversations |
| \`POST /api/swarms/{id}/message\` | Send feedback to the swarm |
| \`POST /api/swarms/{id}/complete\` | Mark completed |
| \`POST /api/swarms/{id}/check-reuse\` / \`reset\` | Check whether the team fits a new goal / reset the swarm for re-use |
| \`GET/POST /api/swarm-templates\`, \`DELETE /api/swarm-templates/{id}\` | Saved swarm templates (usable from cron \`run_swarm_template\`) |
| \`WS /ws/swarms/{id}\` | Real-time swarm events |

Details in [Swarms](./22-swarms.md).

---

## Voice

| Endpoint | Description |
|----------|-------------|
| \`GET/PATCH /api/voice/config\` | Voice settings |
| \`GET /api/voice/providers\` | TTS providers (Kokoro, browser, OpenAI, ElevenLabs) |
| \`GET /api/voice/voices\` | Voices of the configured TTS provider |
| \`POST /api/voice/tts\` | Synthesize speech server-side |
| \`GET /api/voice/daemon/status\` | Voice daemon state and dependency check |
| \`POST /api/voice/daemon/start\` / \`stop\` | Start/stop the always-on daemon |
| \`POST /api/voice/daemon/install\` | Install optional voice deps (streams pip output) |
| \`GET /api/voice/server-tts/voices\` | edge-tts voices for server-side TTS |
| \`GET /api/voice/devices\` | Audio input devices on the server |
| \`GET /api/voice/model/status\` | Availability of server-side voice models |

See [Voice](./30-voice.md).

---

## Plugins

| Endpoint | Description |
|----------|-------------|
| \`GET /api/plugins\` | All plugins with enabled flag, config schema presence and \`has_custom_ui\` |
| \`GET /api/plugins/nav\` | Sidebar items contributed by enabled plugins |
| \`POST /api/plugins/{name}/toggle\` | Enable/disable (applies after restart) |
| \`GET /api/plugins/{name}/config\` | Config schema + saved values (passwords masked) |
| \`POST /api/plugins/{name}/config\` | Save config (\`"***"\` keeps a stored password) |
| \`GET /api/plugins/docs\` | Plugin authoring guide (Markdown) |

Plugin routers are mounted under \`/api/\` — e.g. \`/api/gmail-classifier/*\` ([Gmail Classifier](./31-gmail-classifier.md)) and \`/api/home-assistant/*\` (\`devices\`, \`areas\`, \`devices/{entity_id}/control\`, \`scenes\`, \`scenes/{entity_id}/activate\`).

---

## Content Automation

| Endpoint | Description |
|----------|-------------|
| \`GET /api/content/queue\` | Queued posts |
| \`POST /api/content/queue/{id}/approve\` / \`reject\` | Approve (publish) or reject |
| \`DELETE /api/content/queue/{id}\` | Delete |
| \`GET /api/content/pending-count\` | Number of posts waiting for approval |
| \`GET /api/content/sessions\` | Captured content sessions |
| \`GET/POST /api/social/credentials\`, \`POST /api/social/credentials/{platform}/verify\`, \`DELETE /api/social/credentials/{platform}\` | Facebook / Reddit credentials |

---

## Debug

### \`GET /api/debug/traces?limit=20\`
Most recent agentic loop traces (newest first).

\`\`\`json
[
  {
    "user_message": "take a screenshot",
    "iterations": [
      {
        "iteration": 1,
        "message_count": 4,
        "context_chars": 2400,
        "llm_elapsed_ms": 834,
        "tool_calls": [
          { "tool": "take_screenshot", "result_chars": 45, "elapsed_ms": 312 }
        ]
      }
    ],
    "total_elapsed_ms": 1842,
    "outcome": "success"
  }
]
\`\`\`

\`outcome\` is \`running\`, \`success\`, \`error\` or \`timeout\`.

### \`DELETE /api/debug/traces\`
Clear stored traces.

---

## WhatsApp Cloud API Webhook

| Endpoint | Description |
|----------|-------------|
| \`GET /webhooks/whatsapp\` | Meta's verification handshake (\`hub.verify_token\` must match the global or an agent's verify token) |
| \`POST /webhooks/whatsapp\` | Incoming messages; validated with \`X-Hub-Signature-256\` and routed to an agent channel by \`phone_number_id\`, or to the global channel |

---

## WebSocket: Chat (\`/ws/chat\`)

Connect with token:
\`\`\`
ws://127.0.0.1:47821/ws/chat?token=<dashboard-token>
\`\`\`

### Client → Server

**Send a message:**
\`\`\`json
{
  "message": "Take a screenshot of my screen",
  "target_user_id": "web",
  "target_channel_id": "web",
  "attachments": []
}
\`\`\`

\`user_id\` / \`channel_id\` are accepted as aliases. Messages starting with \`/\` are handled as slash commands.

**Cancel current request** (stops the active agentic task for this channel):
\`\`\`json
{
  "type": "cancel",
  "target_user_id": "web",
  "target_channel_id": "web"
}
\`\`\`

### Server → Client

**Response message:**
\`\`\`json
{
  "type": "response",
  "content": "Here's your screenshot!",
  "attachments": ["screenshot_1775274080.png"]
}
\`\`\`

**Error:**
\`\`\`json
{
  "type": "error",
  "content": "Connection to LLM failed"
}
\`\`\`

**Command result:**
\`\`\`json
{
  "type": "command",
  "content": "Conversation cleared.",
  "data": null
}
\`\`\`

If no chat client is connected when a response is ready, it is buffered and delivered to the next client that connects.

---

## WebSocket: Events (\`/ws/events\`)

Connect with token:
\`\`\`
ws://127.0.0.1:47821/ws/events?token=<dashboard-token>
\`\`\`

Server-only stream. Every event is sent as \`{"type": "<event name>", ...payload}\`. Event names: \`message.received\`, \`message.sent\`, \`message.thinking\`, \`message.reasoning\`, \`message.reasoning_stream\`, \`tool.called\`, \`tool.result\`, \`tool.confirmation_needed\`, \`tool.validation\`, \`llm.request\`, \`llm.response\`, \`router.learned\`, \`skill.active\`, \`memory.recall\`, \`memory.compacted\`, \`context:stats\`, \`swarm:*\`, \`content:*\`, \`voice:daemon_state\`, \`ha:state_changed\`.

**Thinking status:**
\`\`\`json
{
  "type": "message.thinking",
  "status": "processing",
  "message": "🔄 Step 2/25...",
  "iteration": 2,
  "user_id": "web_xxx",
  "channel_id": "web",
  "channel_type": "web"
}
\`\`\`

**Tool called:**
\`\`\`json
{
  "type": "tool.called",
  "tool": "web_search",
  "arguments": "{\\"query\\": \\"AI news\\"}",
  "user_id": "web_xxx",
  "channel_id": "web",
  "channel_type": "web"
}
\`\`\`

**Tool result:**
\`\`\`json
{
  "type": "tool.result",
  "tool": "web_search",
  "result": "1. OpenAI releases...",
  "user_id": "web_xxx",
  "channel_id": "web",
  "channel_type": "web"
}
\`\`\`

**Message sent (partial):**
\`\`\`json
{
  "type": "message.sent",
  "content": "I'll search for that now...",
  "partial": true,
  "channel_type": "web",
  "channel_id": "web"
}
\`\`\`

**Memory recall:**
\`\`\`json
{
  "type": "memory.recall",
  "status": "found",
  "count": 2,
  "channel_id": "web",
  "channel_type": "web"
}
\`\`\`

**Skill active:**
\`\`\`json
{
  "type": "skill.active",
  "skills": ["code-reviewer"],
  "channel_id": "web",
  "channel_type": "web"
}
\`\`\`

---

## WebSocket: Terminal (\`/ws/terminal\`)

Connect with token and channel:
\`\`\`
ws://127.0.0.1:47821/ws/terminal?token=<dashboard-token>&channel=web
\`\`\`

**\`channel\`** — the chat channel ID this terminal belongs to (e.g. \`web\`, a Telegram chat id). Each channel gets its own persistent PTY shell session. The session survives WebSocket reconnects, so SSH connections and running processes are not interrupted.

The terminal is a **full interactive PTY** (Windows: ConPTY via \`pywinpty\`; Linux/Mac: \`pty\` module). The frontend renders it with [xterm.js](https://xtermjs.org/) for proper ANSI color support, prompt display, and keyboard handling.

### Client → Server

**User input** (keystroke data, exactly as xterm.js produces it):
\`\`\`json
{"type": "input", "data": "ls -la\\n"}
\`\`\`

**Signal** (Ctrl+C):
\`\`\`json
{"type": "signal"}
\`\`\`

**Terminal resize** (sent automatically when the panel resizes):
\`\`\`json
{"type": "resize", "cols": 220, "rows": 50}
\`\`\`

### Server → Client

**Shell output** (raw PTY bytes, includes ANSI escape codes):
\`\`\`json
{"type": "output", "data": "\\u001b[32muser@host\\u001b[0m:/home/user$ "}
\`\`\`

**AI tool command** (shown in magenta in the terminal):
\`\`\`json
{"type": "ai_command", "tool": "run_command", "data": "npm install"}
\`\`\`

**AI tool streaming output**:
\`\`\`json
{"type": "ai_output", "tool": "run_command", "data": "added 142 packages in 3.2s\\n"}
\`\`\`

**Shell exited**:
\`\`\`json
{"type": "exit", "data": "shell process exited"}
\`\`\`

**Error** (e.g. PTY failed to start):
\`\`\`json
{"type": "error", "data": "Failed to start shell: ..."}
\`\`\`

---

## WebSocket: Swarm (\`/ws/swarms/{id}\`)

Real-time events for one swarm (\`swarm:updated\`, \`swarm:task_updated\`, \`swarm:message\`, …). See [Swarms](./22-swarms.md#events).

---

## Error Codes

| HTTP Code | Meaning |
|-----------|---------|
| 200 | Success |
| 400 | Bad request (missing field, invalid flow graph, invalid JSON) |
| 401 | Missing or invalid token / secret / webhook signature |
| 403 | Forbidden (e.g. agent disabled) |
| 404 | Resource not found |
| 409 | Conflict (duplicate connector slug, flow already has a skill) |
| 422 | Validation error (invalid request body) |
| 500 | Server error (e.g. misconfigured webhook connector flow) |
| 502 | A webhook connector's flow failed at runtime |
| 503 | Service not available (Brain or Database not initialized) |

`
  },
  {
    "slug": "11-configuration",
    "title": "Configuration",
    "section": "Documentation",
    "content": `
# Configuration

OpenACM is configured through YAML files in \`config/\` plus environment variables. Most settings can also be changed from the dashboard (**Configuration**) or the terminal wizard (\`openacm-setup\`), which write these same files.

---

## Where configuration comes from

| Source | Committed? | Purpose |
|--------|-----------|---------|
| \`config/default.yaml\` | Yes | Base configuration shipped with OpenACM |
| \`config/local.yaml\` | No (git-ignored) | Your overrides — deep-merged on top of \`default.yaml\`. The dashboard and wizard write here |
| \`config/.env\` | No (git-ignored) | API keys, tokens and secrets (loaded into the environment at startup) |
| Environment variables | — | Override \`.env\`; referenced from YAML with \`\${VAR_NAME}\` |
| Database settings | — | Runtime choices persisted in SQLite: selected model, per-model params, security mode, plugin settings |

**Priority:** env vars > \`config/.env\` > \`local.yaml\` > \`default.yaml\` > built-in defaults. A YAML value written as \`"\${VAR_NAME}"\` is replaced by that environment variable.

> Prefer \`config/local.yaml\` for your changes. \`update.sh\`/\`update.bat\` pull new versions of \`default.yaml\`, while \`local.yaml\` is never touched.

---

## Full Configuration Schema

Defaults shown are the built-in defaults; where the shipped \`default.yaml\` sets something different it is noted.

\`\`\`yaml
assistant:
  name: "ACM"                        # Agent display name
  system_prompt: "You are ACM..."    # Base persona/instructions (default.yaml ships a longer one)
  max_context_messages: 50           # Max messages kept in the active context window
  max_tool_iterations: 20            # Max agentic loop iterations per request (default.yaml: 25)
  response_timeout: 120              # Seconds
  rag_relevance_threshold: 0.5       # Max cosine distance for automatic memory recall (0 = identical, 1 = unrelated)
  compact_ratio: 0.60                # Compact when context reaches this fraction of the model's window
  compact_keep_recent: 6             # Messages kept verbatim after compaction
  onboarding_completed: false        # Set by the onboarding flow

llm:
  default_provider: "opencode_go"    # built-in default is "ollama"; default.yaml sets opencode_go
  timeout: 0                         # Seconds to wait for any LLM response; 0 = no timeout
  model_context_overrides: {}        # e.g. {"kimi": 131072} — context window for models LiteLLM doesn't know
  providers:
    opencode_go:
      base_url: "https://opencode.ai/zen/go/v1"
      default_model: "kimi-k2.5"
    openai:
      default_model: "gpt-4o"
    anthropic:
      default_model: "claude-sonnet-4-20250514"
    gemini:
      default_model: "gemini-2.5-flash"
    xai:
      base_url: "https://api.x.ai/v1"
      default_model: "grok-4.20-0309-non-reasoning"
    openrouter:
      base_url: "https://openrouter.ai/api/v1"
      default_model: "openrouter/auto"
    ollama:
      base_url: "http://localhost:11434"
      default_model: "llama3.2"
    # CLI providers (cli_claude, cli_gemini, cli_opencode) are added automatically
    # when their binary is on PATH — see 21-cli-providers.md

security:
  execution_mode: "confirmation"     # "confirmation" | "auto" | "yolo"
  whitelisted_commands: [ls, dir, cat, git, python, pip, npm, node, ...]  # the only commands allowed in auto mode
  blocked_patterns:                  # Substrings (case-insensitive) that block a command
    - "rm -rf /"
    - "mkfs"
    - "shutdown"
  blocked_paths:                     # Paths the agent cannot touch (file tools and shell commands)
    - "/etc/shadow"
    - "config/"
    - "data/openacm.db"
    - "data/vectordb"
  max_command_timeout: 120           # Seconds; 0 = no limit (default.yaml: 0)
  max_output_length: 50000           # Max characters of command output kept

web:
  host: "127.0.0.1"                  # Bind address (use 0.0.0.0 for network/Docker access)
  port: 47821                        # Dashboard port
  auth_enabled: true

channels:
  discord:
    enabled: false
    token: ""                        # or DISCORD_TOKEN in .env
    command_prefix: "!"
    respond_to_mentions: true
    respond_to_dms: true
    allowed_guilds: []               # present in the schema, not enforced in v0.4.7

  telegram:
    enabled: false                   # auto-enabled when TELEGRAM_TOKEN is set
    token: ""                        # or TELEGRAM_TOKEN in .env
    allowed_users: []                # Empty = all users; list user IDs as strings to restrict

  whatsapp:
    enabled: false                   # auto-enabled once credentials are present
    mode: "cloud_api"                # "cloud_api" (official Meta API) | "bridge" (legacy)
    rate_limit_per_minute: 20
    access_token: ""                 # prefer WHATSAPP_ACCESS_TOKEN in .env
    phone_number_id: ""              # prefer WHATSAPP_PHONE_NUMBER_ID
    verify_token: ""                 # prefer WHATSAPP_VERIFY_TOKEN
    app_secret: ""                   # prefer WHATSAPP_APP_SECRET
    graph_api_version: "v21.0"
    bridge_url: "http://localhost:3001"   # only for mode: bridge

storage:
  database_path: "data/openacm.db"
  workspace_path: "workspace"        # Where generated files are saved
  log_conversations: true
  log_tool_executions: true

local_router:
  enabled: true                      # Enable LocalRouter (intent classification)
  observation_mode: false            # true = observe only; false = fast-path active
  confidence_threshold: 0.88         # Minimum confidence to use fast-path

resurrection_paths: []               # Folders indexed by Code Resurrection

features:                            # Heavy/optional subsystems (both default to true)
  browser_agent: true                # false = don't register the Playwright browser_agent tool
  voice: true                        # false = don't create the voice daemon at all

client_profile:                      # Restrict the dashboard for a client deployment
  active: false
  name: "Cliente"
  allowed_pages: []                  # e.g. ["/chat", "/gmail-classifier", "/swarms"]
\`\`\`

Relative \`database_path\` and \`workspace_path\` are resolved against the project root.

### The \`A:\` block

The onboarding flow (\`save_user_profile\`) and the setup wizard save your profile to \`config/local.yaml\` under a key named \`A:\` (assistant name, the generated system prompt, \`onboarding_completed\`, …). At load time \`A:\` is merged over \`assistant:\`, so both forms work.

---

## Environment Variables

Create \`config/.env\` (the setup script copies \`config/.env.example\`):

\`\`\`env
# ── LLM Providers (pattern: <PROVIDER_ID>_API_KEY) ───────────────────────────
OPENCODE_GO_API_KEY=...
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GEMINI_API_KEY=AIzaSy...
XAI_API_KEY=xai-...
OPENROUTER_API_KEY=sk-or-...
# Any provider you add under llm.providers, e.g. GROQ_API_KEY=gsk_...

# ── Messaging Channels ────────────────────────────────────────────────────────
TELEGRAM_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
DISCORD_TOKEN=...
WHATSAPP_ACCESS_TOKEN=EAAG...
WHATSAPP_PHONE_NUMBER_ID=123456789012345
WHATSAPP_VERIFY_TOKEN=any-string-you-choose
WHATSAPP_APP_SECRET=...
# WHATSAPP_MODE=cloud_api            # or bridge
# WHATSAPP_BRIDGE_URL=http://localhost:3001

# ── Web Dashboard ─────────────────────────────────────────────────────────────
DASHBOARD_TOKEN=                     # auto-generated and written here on first start

# ── Optional ──────────────────────────────────────────────────────────────────
STITCH_API_KEY=...                   # Google Stitch UI generation tool
ELEVENLABS_API_KEY=...               # ElevenLabs TTS provider
STABILITY_API_KEY=...                # image-generation mode of generate_meme
OPENACM_VERBOSE_CHANNELS=true        # send tool logs to external channels
\`\`\`

Google Workspace does not use environment variables: upload the OAuth client JSON in **Configuration → Google Services** (stored as \`config/google_credentials.json\`; the token is saved to \`config/google_token.json\`). See [Gmail Setup](./GMAIL_SETUP.md).

OpenACM also sets some variables for its own components at runtime (\`OPENACM_PORT\`, \`OPENACM_WORKSPACE\`, \`OPENACM_PROJECT_ROOT\`) — you don't need to set them.

---

## Other files in \`config/\`

| File | Contents |
|------|----------|
| \`custom_providers.json\` | Custom OpenAI-compatible providers (see below) |
| \`mcp_servers.json\` | MCP server definitions |
| \`activity.key\` | Local encryption key for messages and activity data — back it up with the database |
| \`google_credentials.json\` / \`google_token.json\` | Google OAuth |

All of these are git-ignored.

---

## Custom LLM Providers

Any OpenAI-compatible API endpoint can be added as a custom provider through the dashboard (**Configuration → Custom Providers**) or by editing \`config/custom_providers.json\` directly.

\`\`\`json
[
  {
    "id": "lm_studio",
    "name": "LM Studio",
    "base_url": "http://localhost:1234/v1",
    "default_model": "local-model-identifier",
    "api_key": ""
  },
  {
    "id": "groq_custom",
    "name": "Groq (custom)",
    "base_url": "https://api.groq.com/openai/v1",
    "default_model": "llama-3.3-70b-versatile",
    "api_key": "gsk_..."
  }
]
\`\`\`

Custom providers appear alongside built-in providers in model switching.

---

## MCP Server Configuration

Stored in \`config/mcp_servers.json\` (managed by the **MCP** page):

\`\`\`json
{
  "servers": [
    {
      "name": "filesystem",
      "transport": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user"],
      "env": {},
      "auto_connect": true
    },
    {
      "name": "remote-api",
      "transport": "sse",
      "url": "http://localhost:8000/sse",
      "auto_connect": false
    }
  ]
}
\`\`\`

See [MCP Integration](./13-mcp.md).

---

## Security Configuration Details

### Execution Modes

The execution mode applies to shell commands run through \`run_command\`.

**\`confirmation\`** (default) — Safest. Every command is shown in the dashboard for approval before it runs.

**\`auto\`** — Only commands whose executable is listed in \`whitelisted_commands\` run; anything else is rejected. Blocked patterns and paths are still enforced.

**\`yolo\`** — Every command runs immediately (hardcoded blocks, blocked patterns and blocked paths still apply). Useful for automated pipelines where you've reviewed what the agent will do.

The mode can be changed at runtime from the dashboard, with \`PATCH /api/config/security\`, or with the \`update_security_mode\` tool; the choice is persisted in the database and restored on restart.

### Blocked Patterns

Patterns are matched as case-insensitive substrings against command strings before execution. Use with caution — too-aggressive blocking can break legitimate tasks (note that the shipped list includes short words such as \`format\` and \`shutdown\`).

\`\`\`yaml
security:
  blocked_patterns:
    - "rm -rf /"          # Prevent recursive root deletion
    - "dd if=/dev"        # Prevent disk wipe
    - "mkfs"
\`\`\`

### Blocked Paths

Paths the agent cannot read or write with file tools, and that may not appear in shell commands. The shipped defaults also protect OpenACM's own \`config/\` folder, database and vector store.

\`\`\`yaml
security:
  blocked_paths:
    - "/etc/passwd"
    - "C:/Users/me/AppData/Roaming/credentials"
\`\`\`

---

## Web Dashboard Access

By default, the dashboard is only accessible from \`localhost\`. To expose it on your network:

\`\`\`yaml
web:
  host: "0.0.0.0"   # Bind to all interfaces
  port: 47821
\`\`\`

> ⚠️ **Warning:** Exposing OpenACM to the network gives anyone with the token full access to your computer. Use a VPN or reverse proxy with HTTPS if accessing remotely. See [Deploy on a VPS](./DEPLOY_VPS.md).

---

## Workspace Directory

All files generated by OpenACM (reports, code, etc.) are saved to the workspace directory unless another path is given. Each conversation can pin its own working directory with \`/workspace <path>\`.

\`\`\`yaml
storage:
  workspace_path: "workspace"   # Relative to OpenACM root
\`\`\`

Files sent to the chat are copied to \`data/media/\` and served via \`/api/media/\`.

---

## LocalRouter Configuration

The LocalRouter is the offline intent classifier. By default fast-path execution is **on** (\`observation_mode: false\`): recognized simple intents above the threshold skip the LLM. Set \`observation_mode: true\` to only classify silently.

\`\`\`yaml
local_router:
  enabled: true
  observation_mode: false       # Allow fast-path execution
  confidence_threshold: 0.88    # How confident before skipping LLM
\`\`\`

It can also be toggled at runtime from **Configuration → Local Intent Router** (\`POST /api/config/local_router\`).

**Threshold guidance:**
- \`0.95+\` — Very conservative, rarely skips LLM. Almost no misclassifications.
- \`0.88\` — Default. Good balance for recognized intents like screenshots and system info.
- \`0.80\` — More aggressive fast-pathing. May occasionally misclassify.

---

## Memory & Compaction

\`\`\`yaml
assistant:
  rag_relevance_threshold: 0.5   # lower = stricter automatic memory recall
  compact_ratio: 0.60            # compact at 60% of the model's context window
  compact_keep_recent: 6
llm:
  model_context_overrides:
    kimi: 131072
\`\`\`

Both RAG and compaction settings are editable in **Configuration → Memory & RAG** and are saved to \`config/local.yaml\`. See [Memory & RAG](./14-memory-rag.md).

---

## Client Deployments: \`features\` and \`client_profile\`

For deployments that ship OpenACM to a client, two blocks (added to \`config/local.yaml\`, then restart) trim the product down:

\`\`\`yaml
features:
  browser_agent: false   # skip the Playwright-based browser_agent tool
  voice: false           # don't start the voice daemon (STT/TTS) at all

client_profile:
  active: true
  name: "Conjunto Residencial Los Pinos"
  allowed_pages:
    - /chat
    - /gmail-classifier
    - /swarms
\`\`\`

With \`client_profile.active: true\`, only the listed pages are shown in the sidebar and reachable in the dashboard (\`GET /api/config/client-profile\`). Remove the block to lift the restriction. See [Docker](./32-docker.md#versioned-client-images) for versioned client images.

---

## Agent Persona

The \`system_prompt\` in \`assistant\` config sets the base persona for the main OpenACM agent. The OpenACM identity context is always prepended, so you don't need to repeat capability descriptions. Use this for personality and domain-specific instructions:

\`\`\`yaml
assistant:
  name: "Jarvis"
  system_prompt: |
    You are Jarvis, a highly capable AI assistant.
    Always respond in a professional tone.
    Prefer concise answers unless detail is specifically requested.
    When executing code, always explain what you're about to do first.
\`\`\`

The name and prompt can also be edited in **Configuration → Assistant Identity**.

`
  },
  {
    "slug": "12-security",
    "title": "Security",
    "section": "Documentation",
    "content": `
# Security

OpenACM gives the AI real, direct access to your computer. This is a deliberate design choice — it's what makes OpenACM powerful. But it also means security needs to be taken seriously.

---

## Threat Model

OpenACM is designed to be run by you, for yourself, on your own hardware. The threat model assumes:

- **Trusted operator** (you) — you control the config, the tools, and the LLM
- **Untrusted inputs** — messages from Telegram, Discord, WhatsApp and agent channels should be treated with appropriate caution if those channels are public or shared
- **LLM mistakes** — the LLM might misinterpret a request and take an unintended action

OpenACM is **not** designed to be a multi-tenant service where untrusted users have direct access.

---

## Execution Modes

The \`security.execution_mode\` setting controls how OpenACM runs **shell commands** (the \`run_command\` tool). Other tools are not gated by the mode — control what an agent can do with its tool allowlist.

### \`confirmation\` (default)
Every command is sent to the dashboard for approval (\`tool.confirmation_needed\` event → approve/deny dialog, \`POST /api/tool/confirm\`). You can also approve a command for the rest of the session. Best default for most users.

### \`auto\`
Only commands whose executable (first word, e.g. \`git\`, \`ls\`, \`python\`) is in \`security.whitelisted_commands\` run — without asking. Anything else is rejected with "not in the whitelist". Blocked patterns and paths still apply.

### \`yolo\`
Every command runs without asking. Hardcoded blocks, blocked patterns and blocked paths still apply. Use only in fully automated pipelines where you've reviewed the agent's behavior.

The mode can be changed from the dashboard, \`PATCH /api/config/security\`, or the \`update_security_mode\` tool; it is persisted in the database and restored at startup.

---

## Hardcoded Blocks (cannot be overridden)

These patterns are always blocked regardless of execution mode (they either escalate privileges — which would hang the subprocess on a UAC/sudo prompt — or touch credential files):

- **Windows privilege escalation:** \`runas\`, \`gsudo\`, \`net user … /add\`, \`net localgroup administrators … /add\`
- **Linux/macOS privilege escalation:** \`sudo -s\`, \`sudo -i\`, \`su -\`, setuid/setgid \`chmod\` (e.g. \`chmod 4755\`), \`chown root\`
- **Credential files:** \`/etc/shadow\`, \`/etc/passwd\`

Even in \`yolo\` mode, these cannot be executed.

---

## Configurable Blocks

Add custom patterns to block in \`config/local.yaml\` (it replaces the list from \`default.yaml\`, so copy the entries you want to keep):

\`\`\`yaml
security:
  blocked_patterns:
    - "rm -rf /"
    - "mkfs"
    - "dd if=/dev/zero of=/dev"
  blocked_paths:
    - "/etc/passwd"
    - "~/.ssh/config"
\`\`\`

Patterns are matched as case-insensitive substrings against command strings before execution. Every entry of \`blocked_paths\` is also checked against shell commands (so \`cat config/.env\` is blocked when \`config/\` is listed) and against the paths used by file tools. The shipped defaults block OpenACM's own \`config/\`, \`data/openacm.db\`, \`data/vectordb\` and \`data/logs\`.

---

## Tool Risk Levels

Every tool is annotated with a risk level:

| Level | Examples |
|-------|----------|
| \`low\` | \`list_directory\`, \`system_info\`, \`search_memory\`, \`ha_control\` |
| \`medium\` | \`read_file\`, \`web_search\`, \`take_screenshot\`, \`calendar_create\`, \`ha_call_service\` |
| \`high\` | \`run_command\`, \`run_python\`, \`write_file\`, \`edit_file\`, \`browser_agent\`, \`gmail_send\`, \`delete_agent\` |

Risk levels are shown in the dashboard and in \`/tools\` so you can decide which tools to give each agent. The approval prompt itself is driven by the execution mode (shell commands), not by the risk level.

---

## Sandbox

Shell commands run through the \`Sandbox\` component, which enforces:

| Limit | Default | Config Key |
|-------|---------|------------|
| Execution timeout | 120 s built-in (the shipped \`default.yaml\` sets \`0\` = no limit) | \`security.max_command_timeout\` |
| Output size | 50,000 chars | \`security.max_output_length\` |
| Environment injection | \`CI=true\`, \`npm_config_yes=true\` | Hardcoded, so tools skip interactive prompts |

If a command exceeds the timeout, it's forcefully terminated. Output over the size limit is truncated. The sandbox is not an OS-level jail — commands run as the OpenACM user.

---

## Encryption at Rest

### Conversation Messages
All conversation messages are encrypted before writing to SQLite using Fernet (AES-128-CBC + HMAC-SHA256). The key is generated on first start and stored locally at \`config/activity.key\` (git-ignored).

Without the key file, the stored messages are unreadable. If you delete the key, old messages become unrecoverable — back it up together with \`data/openacm.db\`.

### Activity Data
OS activity sessions (app names, window titles, process names) are encrypted with the same key.

### What is NOT encrypted
- Tool execution logs (arguments, results)
- LLM usage statistics (token counts, model names)
- Skill definitions, agents, flows, knowledge base entries
- Agent channel credentials, webhook connector secrets and plugin settings (stored in SQLite; masked in API responses)
- The ChromaDB vector store (\`data/vectordb/\`)
- Files in \`data/media/\`
- \`config/.env\` (protect it with file permissions)

---

## Dashboard Authentication

The web dashboard and every \`/api/*\` route are protected by a token. On first run a random token is generated, saved as \`DASHBOARD_TOKEN\` in \`config/.env\`, and printed to the terminal. If \`DASHBOARD_TOKEN\` is already set, that value is used.

The token can be:
- Stored in your browser (the dashboard saves it after login)
- Passed as a Bearer header
- Passed as a \`?token=\` query parameter (WebSockets always use the query parameter)

Tokens are compared in constant time. If no \`DASHBOARD_TOKEN\` is configured, **both** the HTTP API and the WebSocket endpoints reject every request — the API is never silently open.

To reset the token, remove the \`DASHBOARD_TOKEN=\` line from \`config/.env\` (or set a new value) and restart OpenACM.

Public exceptions to the token check are listed in the [API Reference](./10-api-reference.md#authentication).

---

## Public Webhook Connectors (\`/api/webhooks/*\`)

Every route under \`/api/\` requires the dashboard token, with one deliberate exception: \`POST /api/webhooks/{slug}\`. Third-party services (payment providers, CRMs, form backends) can't send a dashboard token, so this prefix is exempt from \`TokenAuthMiddleware\` and **each connector authenticates its own requests** according to the \`auth_scheme\` chosen when it was created. The admin routes that manage connectors — \`/api/webhook-connectors*\` — are *not* exempt and still require the dashboard token.

A slug is therefore not a secret. The only thing protecting a connector is its configured scheme, so never create one with credentials you wouldn't put on the public internet. Every attempt — accepted or rejected — is written to \`webhook_connector_events\` with a status of \`ok\`, \`auth_failed\`, \`bad_request\` or \`flow_error\`; bodies stored on the \`auth_failed\` path are truncated to 8 KB. Secrets are masked as \`"***"\` on every API response; sending \`"***"\` back in a \`PATCH\` leaves the stored value untouched.

### The \`hmac_sha256\` contract

This is the scheme to prefer — it authenticates the *body*, not just the caller, so a replayed or tampered payload fails.

The sender computes:

\`\`\`
signature = HMAC-SHA256(secret, "<timestamp>." + <raw body bytes>)
header value = "sha256=" + hex(signature)
\`\`\`

Note that the signed message is the timestamp, a literal \`.\`, and the **raw** request bytes — not a re-serialized JSON object. Signing a pretty-printed or key-reordered copy of the body will not verify.

\`auth_config\` for this scheme:

| Key | Meaning |
|---|---|
| \`secret\` | Shared secret, used as the HMAC key |
| \`timestamp_header\` | Header carrying the Unix timestamp (seconds), e.g. \`X-Timestamp\` |
| \`signature_header\` | Header carrying \`sha256=<hex>\`, e.g. \`X-Signature\` |
| \`max_skew_seconds\` | Accepted clock skew in either direction (default \`300\`) |

A request is rejected if either header is missing, the timestamp isn't an integer, it is more than \`max_skew_seconds\` away from now, or the signature doesn't match. The comparison uses \`hmac.compare_digest\` (constant time). The other two schemes — \`bearer_token\` (an \`Authorization: Bearer <token>\` style header) and \`static_header_secret\` (a fixed header value) — use the same constant-time comparison but only authenticate the caller, not the payload.

Verification never raises: any malformed header, body or stored config resolves to "rejected" (\`401\`) and an \`auth_failed\` audit row, so a malformed request can't 500 the route and slip past the audit trail.

---

## Channel Security

### Telegram
By default, any Telegram user who knows your bot's username can message OpenACM. Restrict access with an allowlist:

\`\`\`yaml
channels:
  telegram:
    enabled: true
    token: "\${TELEGRAM_TOKEN}"
    allowed_users:
      - "123456789"   # Your Telegram user ID (as a string)
      - "987654321"   # Another allowed user
\`\`\`

Find your Telegram user ID by messaging \`@userinfobot\`.

### Discord
The config has an \`allowed_guilds\` list, but v0.4.7 does not enforce it — anyone who can mention the bot or DM it can talk to OpenACM. Only invite the bot to servers you control, or leave Discord disabled.

### WhatsApp
The \`/webhooks/whatsapp\` endpoint is public by design (Meta must reach it). POST bodies are checked against \`WHATSAPP_APP_SECRET\` (\`X-Hub-Signature-256\`) — always set the app secret.

### Agent channels
An agent's Telegram bot / WhatsApp number is usually public. Give customer-facing agents a minimal tool allowlist — never \`run_command\` or \`"all"\`.

### Web Dashboard
The dashboard is only accessible from \`localhost\` by default (\`host: "127.0.0.1"\`). To expose it on your network, set \`host: "0.0.0.0"\` — but use a reverse proxy with HTTPS and keep the token secret.

---

## Network Exposure

If you expose OpenACM to the internet (via port forwarding, ngrok, etc.), be aware:

1. Anyone with the token has full control of your computer
2. Use HTTPS — never expose over plain HTTP on the public internet
3. Consider adding IP allowlisting at the reverse proxy level
4. Rotate the token regularly

Recommended reverse proxy setup with nginx:

\`\`\`nginx
server {
    listen 443 ssl;
    server_name acm.yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/acm.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/acm.yourdomain.com/privkey.pem;
    
    location / {
        proxy_pass http://127.0.0.1:47821;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
\`\`\`

---

## Recommendations by Use Case

| Use Case | Recommended Settings |
|----------|---------------------|
| Personal laptop (just me) | \`execution_mode: confirmation\` (or \`auto\` with a curated whitelist), \`host: 127.0.0.1\` |
| Shared household server | \`execution_mode: confirmation\`, Telegram \`allowed_users\`, \`host: 0.0.0.0\` + HTTPS |
| Automated pipeline (no humans) | \`execution_mode: yolo\`, no external channels, localhost only |
| Public Telegram bot | \`execution_mode: confirmation\`, \`allowed_users\` strictly set, limited tool set |
| Customer-facing agent (WhatsApp/Telegram) | Agent with a minimal allowlist (or \`none\` + flows), \`memory_mode: session_ttl\` |

---

## Error Handling

API endpoints don't echo exception details (stack traces, library error messages) back to clients — agent errors return a generic message, and the details are written to the server logs (\`data/logs/\`). Check the logs or the **Traces** page when something fails.

---

## Dependencies

Security floors are pinned for vulnerable packages: direct dependencies in \`pyproject.toml\` (e.g. \`litellm>=1.84.0\`, \`mcp>=1.28.1,<2\`, \`chromadb>=1.5.9\`, \`Pillow>=12.3.0\`, \`pypdf>=6.16.1\`, \`cryptography>=50\`) and transitive ones through \`[tool.uv] constraint-dependencies\`. Keep them current with \`update.sh\` / \`openacm update\`, which re-syncs dependencies.

---

## Audit Log

Every tool execution is logged to the database with:
- Timestamp
- User and channel that triggered it
- Tool name and arguments
- Result (truncated to 5KB)
- Success/failure flag
- Execution time in milliseconds

View this log in the dashboard under **Tools → Execution Log**, or query via \`GET /api/tools/executions\`.

`
  },
  {
    "slug": "13-mcp",
    "title": "MCP Integration",
    "section": "Documentation",
    "content": `
# MCP Integration

OpenACM supports the **Model Context Protocol (MCP)** — an open standard for connecting AI models to external tool servers. Any MCP-compatible server can expose its tools to OpenACM with zero code changes.

---

## What is MCP?

MCP is a protocol that lets external processes (running locally or remotely) expose tools to an AI agent over a standardized interface. OpenACM acts as an MCP **client** — it connects to MCP servers and registers their tools alongside its built-in tools.

Benefits:
- Drop-in tools from any MCP server without writing OpenACM-specific code
- Use existing MCP ecosystems (file system servers, browser automation, code execution sandboxes, etc.)
- Build specialized tool servers once and reuse across any MCP-compatible agent

---

## Transports

OpenACM supports three MCP transport types:

| Transport | When to use |
|-----------|------------|
| \`stdio\` | Local servers — spawned as child processes, communicate over stdin/stdout |
| \`sse\` | Remote servers — HTTP + Server-Sent Events |
| \`streamable_http\` | Modern HTTP transport (e.g., Unity MCP, newer MCP servers) |

---

## Connecting an MCP Server

### Via Dashboard
Go to **MCP** → **Add Server** and fill in the form. Click **Connect** to activate immediately.

### Via Chat
The agent has platform tools for this — \`add_mcp_server\`, \`connect_mcp_server\`, \`disconnect_mcp_server\`, \`list_mcp_servers\`:

\`\`\`
You: Add the filesystem MCP server for /home/me/projects and connect it
\`\`\`

### Via \`config/mcp_servers.json\`

\`\`\`json
{
  "servers": [
    {
      "name": "filesystem",
      "transport": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user"],
      "auto_connect": true
    },
    {
      "name": "unity-mcp",
      "transport": "streamable_http",
      "url": "http://localhost:6400/mcp",
      "auto_connect": true
    },
    {
      "name": "my-remote-server",
      "transport": "sse",
      "url": "https://mcp.example.com/sse",
      "api_key": "Bearer sk-...",
      "auto_connect": false
    }
  ]
}
\`\`\`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| \`name\` | string | Unique identifier for the server |
| \`transport\` | string | \`stdio\`, \`sse\`, or \`streamable_http\` |
| \`command\` | string | (stdio) Executable to run |
| \`args\` | array | (stdio) Arguments to the command |
| \`env\` | object | (stdio) Extra environment variables |
| \`url\` | string | (sse/http) Server URL |
| \`api_key\` | string | (sse/http) Sent as \`Authorization: Bearer <key>\` |
| \`headers\` | object | (sse/http) Additional HTTP headers |
| \`auto_connect\` | bool | Connect automatically on startup |

---

## Tool Naming Convention

When a server is connected, its tools are automatically registered with the pattern:

\`\`\`
mcp__{server_name}__{tool_name}
\`\`\`

**Examples:**
- Server \`filesystem\`, tool \`read_file\` → \`mcp__filesystem__read_file\`
- Server \`unity-mcp\`, tool \`create_gameobject\` → \`mcp__unity_mcp__create_gameobject\`
- Server \`my-server\`, tool \`do_thing\` → \`mcp__my_server__do_thing\`

Special characters in names are replaced with \`_\`.

The tool description in the registry is prefixed with \`[MCP:{server_name}]\` so you can identify MCP tools at a glance.

---

## Managing Connections

### Via Dashboard
Go to **MCP** → click **Connect** / **Disconnect** per server. Connected servers show their tool count and status.

### Via API

\`\`\`bash
# Connect
curl -X POST http://localhost:47821/api/mcp/servers/filesystem/connect \\
  -H "Authorization: Bearer <dashboard-token>"

# Disconnect
curl -X POST http://localhost:47821/api/mcp/servers/filesystem/disconnect \\
  -H "Authorization: Bearer <dashboard-token>"

# Status
curl http://localhost:47821/api/mcp/servers \\
  -H "Authorization: Bearer <dashboard-token>"
\`\`\`

Response from status:
\`\`\`json
[
  {
    "name": "filesystem",
    "transport": "stdio",
    "connected": true,
    "tools": [
      {"name": "read_file", "description": "Read a file", "inputSchema": {...}},
      {"name": "write_file", "description": "Write a file", "inputSchema": {...}}
    ],
    "error": null
  }
]
\`\`\`

---

## Building a Custom MCP Server

You can expose any external service or internal API as an MCP server that OpenACM can call.

### Python Example (stdio)

\`\`\`python
# my_mcp_server.py
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
import asyncio

server = Server("my-server")

@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="get_stock_price",
            description="Get the current price of a stock symbol",
            inputSchema={
                "type": "object",
                "properties": {
                    "symbol": {
                        "type": "string",
                        "description": "Stock ticker (e.g. AAPL)"
                    }
                },
                "required": ["symbol"]
            }
        )
    ]

@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_stock_price":
        symbol = arguments["symbol"]
        price = await fetch_price_from_api(symbol)  # your logic here
        return [TextContent(type="text", text=f"{symbol}: \${price:.2f}")]

async def main():
    async with stdio_server() as streams:
        await server.run(*streams, server.create_initialization_options())

if __name__ == "__main__":
    asyncio.run(main())
\`\`\`

Register it in OpenACM (an entry of the \`servers\` array in \`config/mcp_servers.json\`, or the same fields in the dashboard form):
\`\`\`json
{
  "name": "stocks",
  "transport": "stdio",
  "command": "python",
  "args": ["my_mcp_server.py"],
  "auto_connect": true
}
\`\`\`

### Streamable HTTP Example

For servers that should stay running independently:

\`\`\`python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("my-http-server")

@mcp.tool()
async def do_something(param: str) -> str:
    return f"Result: {param}"

mcp.run(transport="streamable-http", host="0.0.0.0", port=8080)
\`\`\`

Then connect via:
\`\`\`json
{
  "name": "my-http-server",
  "transport": "streamable_http",
  "url": "http://localhost:8080/mcp",
  "auto_connect": true
}
\`\`\`

---

## Security Considerations

- MCP tools are assigned \`risk_level="medium"\` by default and the \`mcp\` category
- They go through the same security sandbox as built-in tools
- For \`stdio\` servers, the subprocess inherits the OS user of the OpenACM process
- If a server requires an API key, it's stored in \`config/mcp_servers.json\` — secure this file the same way you secure \`config/.env\`
- Review what a server exposes before connecting — you're trusting its code to execute on behalf of the agent

---

## Lifecycle

On startup, OpenACM:
1. Loads \`config/mcp_servers.json\`
2. Connects to all servers where \`auto_connect: true\`
3. Registers their tools in the global ToolRegistry

On disconnect (or server crash):
1. Tools are unregistered from the registry
2. The agent can no longer call them
3. Reconnect manually via dashboard or API

---

## Popular MCP Servers

| Server | Install | What it provides |
|--------|---------|-----------------|
| \`@modelcontextprotocol/server-filesystem\` | \`npx -y ...\` | File system read/write |
| \`@modelcontextprotocol/server-brave-search\` | \`npx -y ...\` | Brave web search |
| \`@modelcontextprotocol/server-github\` | \`npx -y ...\` | GitHub API |
| \`@modelcontextprotocol/server-sqlite\` | \`npx -y ...\` | SQLite query/modify |
| Unity MCP | Separate install | Unity 3D scene control |

Find more at the [MCP server registry](https://modelcontextprotocol.io/servers).

`
  },
  {
    "slug": "14-memory-rag",
    "title": "Memory & RAG",
    "section": "Documentation",
    "content": `
# Memory & RAG

OpenACM uses two complementary memory systems: **short-term conversation memory** (in-memory + SQLite, per conversation) and **long-term vector memory** (ChromaDB RAG, persistent across conversations).

---

## Short-Term Memory (Conversation Context)

Every conversation is stored in a rolling window managed by \`MemoryManager\`. This is the message history the LLM sees on each request.

### How It Works

- Messages are stored in-memory (fast access) and persisted to SQLite (survives restarts)
- Each conversation is keyed by \`(user_id, channel_id)\` — same pair = same conversation
- On first access, history is loaded from SQLite into the in-memory cache
- On \`add_message()\`, the new message is written to both cache and SQLite

### Limits

| Limit | Default | Config |
|-------|---------|--------|
| Max messages in context | 50 | \`assistant.max_context_messages\` |
| Hard token ceiling | 85% of the model's context window | built-in |

When a limit is exceeded, the oldest messages are dropped from the context (never splitting an assistant tool-call from its tool results). They remain in the database for history purposes.

The model's context window comes from LiteLLM's model database (128K is assumed when unknown); override it with \`llm.model_context_overrides\`.

### Per-agent memory policy

Agents with \`memory_mode: session_ttl\` start a fresh context when the last message of a conversation is older than \`memory_ttl_hours\`. Old messages are kept in SQLite but not reloaded. See [Agents](./07-agents.md#memory-policy).

### Encryption at Rest

Message content is encrypted in SQLite with **Fernet** via the same \`ActivityEncryptor\` used for activity data. The key is generated locally at \`config/activity.key\`. Messages are decrypted transparently on read.

The dashboard shows a lock icon when encryption is enabled (\`GET /api/system/info\` → \`messages_encrypted\`).

---

## Conversation Compaction

To prevent token waste, OpenACM automatically summarizes long conversations.

**Trigger:** when the estimated tokens of a conversation reach \`assistant.compact_ratio\` (default **0.60**) of the model's context window — so a 128K model compacts much later than a 8K one. After a compaction, it won't fire again until at least a further 10% of that threshold (minimum 1,000 tokens) has accumulated. \`/compact\` forces a compaction at any time.

**What happens:**
1. All messages except the system prompt and the last \`compact_keep_recent\` (default **6**) are extracted
2. A transcript is built (user/assistant messages, tool calls with abbreviated arguments, tool results)
3. An LLM call generates a detailed summary: what was worked on, actions taken (with exact file paths and commands), key decisions and findings, and current state (done / pending / blockers) — in the user's language
4. The old messages are replaced in-memory with the summary
5. The last messages remain intact

Compaction runs before the next LLM call; the conversation is paused while it runs. Each conversation compacts at most once at a time. A \`memory.compacted\` event is emitted when it finishes.

Both settings can be edited in **Configuration → Memory & RAG** (\`POST /api/config/compaction\`), which saves them to \`config/local.yaml\`:

\`\`\`yaml
assistant:
  compact_ratio: 0.60
  compact_keep_recent: 6
\`\`\`

---

## Context Optimization

Beyond compaction, the Brain applies additional optimizations to a copy of the messages before each LLM call (the stored history is never modified). For messages older than the last **6**:

- **Tool results** are emptied (only the \`tool_call_id\` is kept for structure)
- **Tool-call arguments** in assistant messages are stripped (only function name + id kept)
- **Reasoning content** from thinking models (DeepSeek R1, Kimi, o-series) is removed

Images in user messages other than the latest one are replaced with a \`[IMAGE: … — already processed]\` placeholder. See [Token Optimization](./20-token-optimization.md).

---

## Long-Term Memory (RAG)

The RAG (Retrieval-Augmented Generation) system lets OpenACM store and retrieve information across conversations using vector embeddings.

### Architecture

\`\`\`
Agent saves note → split into chunks → embed → upsert into ChromaDB
User message     → embed → cosine search (top 5) → fragments under the distance threshold → injected into the prompt
\`\`\`

**Embedding model:** \`all-MiniLM-L6-v2\` (sentence-transformers, runs locally)

**Vector store:** ChromaDB, persistent at \`data/vectordb/\`, collection \`openacm_memory\` (cosine distance)

**Chunking:** Chonkie \`SentenceChunker\` (500-character chunks, 50 overlap) with a paragraph-split fallback.

### Automatic recall

On each message the Brain queries the store (top 5) and injects up to **2** fragments whose distance is below \`assistant.rag_relevance_threshold\` (default **0.5**; lower = stricter) as a system message. Results are cached per conversation while consecutive messages are similar. A \`memory.recall\` event lights up the memory indicator in the dashboard.

### Using Long-Term Memory

#### Via Chat (Natural Language)
\`\`\`
You> Remember that the production DB host is db.example.com:5432
You> What do you remember about the production database?
\`\`\`

#### Via Tools

**\`remember_note\`** — Save information to long-term memory:
\`\`\`json
{
  "tool": "remember_note",
  "arguments": {
    "note": "The production DB host is db.example.com:5432"
  }
}
\`\`\`

**\`search_memory\`** — Retrieve relevant information:
\`\`\`json
{
  "tool": "search_memory",
  "arguments": {
    "query": "production database connection",
    "max_results": 5
  }
}
\`\`\`

### What to Store

Long-term memory is best for:
- Facts that span multiple sessions (preferences, project context)
- Findings from research that should be reusable
- User preferences and configuration decisions
- Notes about people, projects, or systems

It's not designed for:
- Large documents (use file system tools or an agent's knowledge base instead)
- Frequently-changing data (the indexed version becomes stale)
- Everything — be selective; retrieval is only as useful as the signal-to-noise ratio

Chunk ids are derived from a hash of the content, so saving the same note twice doesn't create duplicates. [Code Resurrection](./23-code-resurrection.md) also writes into the same store.

### Via API

\`\`\`bash
# Stats: total documents, breakdown by type, folder size
curl http://localhost:47821/api/memory/stats \\
  -H "Authorization: Bearer <dashboard-token>"

# Delete ALL long-term memory
curl -X DELETE http://localhost:47821/api/memory/all \\
  -H "Authorization: Bearer <dashboard-token>"

# Relevance threshold
curl -X POST http://localhost:47821/api/config/rag_threshold \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "Content-Type: application/json" \\
  -d '{"threshold": 0.4}'
\`\`\`

---

## Semantic Tool Selection

A separate, multilingual model — \`paraphrase-multilingual-MiniLM-L12-v2\`, shared with the LocalRouter — powers **semantic tool selection**: choosing which tools to include in each LLM call based on relevance to the user's message.

**How it works:**
1. At startup, all tool descriptions are embedded as \`"name: description"\` strings
2. Each incoming message is embedded
3. Cosine similarity is computed between the message and every tool embedding
4. Tools above threshold \`0.28\` are included in the request
5. Tools below threshold are excluded (saving tokens and reducing distraction)

**Language agnostic:** The multilingual model handles messages in Spanish, English, French, German, and 50+ other languages without any translation step.

**Always-included tools:** \`send_file_to_chat\`, \`run_command\`, \`read_file\`, \`write_file\`, \`web_search\`.

**Fallback:** Until the embedding model has loaded (first seconds after startup), a keyword-matching fallback is used.

---

## Data Locations

| Data | Location |
|------|---------|
| Conversation messages (SQLite) | \`data/openacm.db\` (table: \`messages\`) |
| App activity (SQLite) | \`data/openacm.db\` (table: \`app_activities\`) |
| Customer names | \`data/openacm.db\` (table: \`customer_names\`) |
| ChromaDB vector store | \`data/vectordb/\` |
| Encryption key | \`config/activity.key\` |

---

## Privacy

- Conversation content is encrypted at rest with the local key in \`config/activity.key\`
- ChromaDB stores plain text (vector + content) — it is local only, never sent anywhere by itself
- Recalled fragments are sent to your LLM provider as part of the prompt
- The embedding models run locally — no text is sent to external services for embedding
- To clear long-term memory: **Configuration → Memory & RAG** or \`DELETE /api/memory/all\`. To wipe everything: stop OpenACM and delete \`data/openacm.db\` and \`data/vectordb/\`

`
  },
  {
    "slug": "15-activity-routines",
    "title": "Activity Watcher & Routines",
    "section": "Documentation",
    "content": `
# Activity Watcher & Routines

OpenACM passively monitors what applications you use on your computer and learns your recurring work patterns. It surfaces these as **Routines** — named patterns that can be triggered manually or automatically.

---

## Activity Watcher

The Activity Watcher runs silently in the background, tracking which application has focus and for how long.

### How It Works

Every **2 seconds**, the watcher queries the OS for the currently active window:
- **Window title** and **process name** are recorded
- When you switch to a different app, the previous focus session is flushed to the database
- Sessions shorter than **5 seconds** are ignored (accidental switches)
- System UI processes are filtered out (\`explorer.exe\`, \`Dock\`, \`xfwm4\`, etc.)

### Platform Support

| Platform | Method | Requirements |
|----------|--------|-------------|
| **Windows** | \`ctypes\` (user32) + \`psutil\` | Built-in, no extras |
| **macOS** | \`osascript\` subprocess | Built-in, no extras |
| **Linux** | \`xdotool\` + \`psutil\` | \`xdotool\` must be installed |

Linux: \`sudo apt install xdotool\` (Debian/Ubuntu) or \`sudo pacman -S xdotool\` (Arch). \`setup.sh\` installs it on apt-based systems. On a headless server (or in the Docker image) there is no active window to observe, so the watcher records nothing.

### What Is Recorded

Each focus session stored in the database contains:
- \`app_name\` — human-readable name (e.g., "Chrome", "Visual Studio Code")
- \`process_name\` — raw process name (e.g., \`chrome.exe\`, \`code\`)
- \`window_title\` — title bar text at time of focus
- \`focus_seconds\` — how long the window was active
- \`session_start\` / \`session_end\` — ISO timestamps
- \`day_of_week\` — 0=Monday, 6=Sunday
- \`hour_of_day\` — 0–23

### Enabling / Disabling

The watcher starts automatically when OpenACM starts (there is no config key to disable it). Stop/start it at runtime from the **Routines** page or via API — \`POST /api/watcher/toggle\` flips the current state:

\`\`\`bash
# Toggle (start ↔ stop)
curl -X POST http://localhost:47821/api/watcher/toggle \\
  -H "Authorization: Bearer <dashboard-token>"

# Status
curl http://localhost:47821/api/watcher/status \\
  -H "Authorization: Bearer <dashboard-token>"

# Aggregated stats / recent sessions
curl http://localhost:47821/api/activity/stats -H "Authorization: Bearer <dashboard-token>"
curl "http://localhost:47821/api/activity/sessions?limit=30" -H "Authorization: Bearer <dashboard-token>"
\`\`\`

A toggle does not persist across restarts.

---

## Pattern Analyzer

The Pattern Analyzer processes raw activity data to find **recurring app co-occurrence patterns** — groups of apps you consistently use together.

### Detection Strategy

1. **Work session grouping:** Activity records are grouped into logical work sessions. A new session begins when there's a gap > **30 minutes** between app switches.

2. **Significant apps:** Within each session, only apps with > **30 seconds** of focus time are considered.

3. **Co-occurrence counting:** Every pair (and set) of apps that appear together in a session is counted. A pattern must repeat at least **3 times** to qualify.

4. **Time consistency:** If a pattern occurs at a consistent time of day (within ±2.5 hours), it gets a \`time_based\` trigger. Otherwise it's \`manual\`.

5. **LLM enrichment:** If an LLM is available, each pattern's name and description are generated by the LLM based on the apps and timing context (in Spanish by default).

### Running Analysis

Analysis runs when you trigger it — from **Routines → Analyze now**, the API, or on a schedule by creating a [cron job](./19-cron-scheduler.md) with the \`analyze_patterns\` action (e.g. \`0 2 * * *\`). Trigger manually:

\`\`\`bash
curl -X POST http://localhost:47821/api/routines/analyze \\
  -H "Authorization: Bearer <dashboard-token>"
\`\`\`

Returns \`{"status": "ok", "new_routines": N, "routines": [...]}\`.

---

## Routines

A Routine is a saved pattern with:
- **Name** — human-friendly label (LLM-generated or algorithmic)
- **Description** — one-sentence summary of the work context
- **Apps** — list of apps in the pattern
- **Trigger type** — \`time_based\` or \`manual\`
- **Trigger data** — hour, minute, days of week (for time-based)
- **Confidence** — \`0.0–1.0\` based on occurrence frequency
- **Occurrence count** — how many times the pattern was observed
- **Status** — \`pending\` (just detected), \`active\` (scheduled) or \`inactive\`

### Viewing Routines

**Dashboard:** Go to **Routines** to see all detected patterns with confidence scores, app lists, and trigger times.

**API:**
\`\`\`bash
# List all
curl http://localhost:47821/api/routines \\
  -H "Authorization: Bearer <dashboard-token>"
\`\`\`

Example response:
\`\`\`json
{
  "id": 3,
  "name": "Tarde de trabajo — VS Code + Chrome + Slack",
  "description": "Sesión de desarrollo web con revisión de documentación",
  "trigger_type": "time_based",
  "trigger_data": {"hour": 15, "minute": 0, "days_of_week": [0, 1, 2, 3, 4]},
  "apps": [
    {"app_name": "Visual Studio Code", "process_name": "code"},
    {"app_name": "Chrome", "process_name": "chrome"},
    {"app_name": "Slack", "process_name": "slack"}
  ],
  "confidence": 0.86,
  "occurrence_count": 8,
  "status": "pending",
  "run_count": 0
}
\`\`\`

Routines are created by the analyzer; there is no endpoint to create one by hand.

### Running, Activating, Updating & Deleting

\`\`\`bash
# Run now (opens the routine's apps)
curl -X POST http://localhost:47821/api/routines/3/execute \\
  -H "Authorization: Bearer <dashboard-token>"

# Update: name, status, trigger_type, trigger_data, apps
curl -X PUT http://localhost:47821/api/routines/3 \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "New Name", "trigger_data": {"hour": 10, "minute": 30, "days_of_week": [1, 3]}}'

# Delete
curl -X DELETE http://localhost:47821/api/routines/3 \\
  -H "Authorization: Bearer <dashboard-token>"
\`\`\`

**Activating a routine** (\`"status": "active"\`) that has a \`time_based\` trigger automatically creates a cron job ("Rutina: …") that runs it at that time; setting it back to \`inactive\`/\`pending\` deletes that job. From chat, the agent can use \`list_routines\` and \`execute_routine\`.

---

## Workflow Tracker

Separate from the activity watcher, the **Workflow Tracker** observes the agent's own tool call sequences and suggests automation when the same sequence repeats.

### How It Works

After each agentic turn (one user message → one agent response), the tool sequence used is recorded. If the same sequence of tool calls is used **3 or more times** (and the conversation has at least 5 turns of history), the tracker suggests automating it:

\`\`\`
[Workflow Suggestion]
You've run this sequence 3 times:
  web_search → get_webpage → remember_note

Want me to create a "research and save" skill that automates this?
\`\`\`

Suggestions expire after 3 turns if the user doesn't act on them.

**Cooldown:** at most one suggestion every 24 hours per user/channel; a dismissed pattern is not suggested again for 7 days.

**Filtered operations:** Noise tools (e.g. \`system_info\`, list tools) are ignored.

---

## Privacy

- Activity data (app names, window titles, focus times) is stored in the local SQLite database only
- Window titles can contain sensitive information — be aware of this if you share your \`data/openacm.db\`
- The watcher never reads file contents, keystrokes, or screen content — only what OS window management APIs expose (active app name and window title)
- App names, window titles and process names are encrypted at rest with the local key in \`config/activity.key\`
- To stop recording: toggle the watcher off (**Routines** page or \`POST /api/watcher/toggle\`) — it restarts with OpenACM
- To clear all history: \`DELETE FROM app_activities\` in the SQLite database, or delete \`data/openacm.db\`

---

## Example: Daily Activity Report

Once activity data is collected, you can ask OpenACM directly:

\`\`\`
You> What apps did I use the most today?
You> How long did I spend in VS Code this week?
You> What does my typical Tuesday morning look like?
You> When do I usually stop working?
\`\`\`

The agent can query its own activity database and provide personalized insights about your computer usage patterns.

`
  },
  {
    "slug": "16-dashboard",
    "title": "Dashboard",
    "section": "Documentation",
    "content": `
# Dashboard

The OpenACM dashboard is a built-in web interface available at \`http://127.0.0.1:47821\` (or whatever host/port you configure). It requires no extra setup — it starts with OpenACM. It is a Next.js app exported to static files and served by the FastAPI server.

---

## Accessing the Dashboard

1. Start OpenACM (\`openacm start\`, \`run.bat\` / \`./run.sh\`, or \`python -m openacm\`)
2. Open your browser to \`http://127.0.0.1:47821\`
3. Enter the dashboard token printed in the terminal (also stored as \`DASHBOARD_TOKEN\` in \`config/.env\`)

The token is stored in your browser and sent automatically on all API calls and WebSocket connections. On a fresh install you are taken to the **Onboarding** wizard to choose an LLM provider.

---

## Pages Overview

The sidebar shows the core pages plus items contributed by enabled plugins. With a [client profile](./11-configuration.md#client-deployments-features-and-client_profile) active, only the allowed pages are shown.

### Dashboard

Real-time overview:
- **Token Analytics** — tokens and cost over a selectable date range, by model
- **Stats cards** — requests, tokens, tool calls, conversations, current provider/model
- **Live events** and recent files

---

### Chat

The primary interface. Full-featured chat with the OpenACM agent.

**Features:**
- **Live responses** — partial text appears while tools run, plus a thinking indicator and (for reasoning models) the model's reasoning
- **Cancel button** — while the agent is thinking, the send button turns into a red ✕ button; clicking it cancels the current request immediately
- **Conversation sidebar** — web conversations, external-channel conversations (Telegram, WhatsApp, Discord, with channel icons) and **one folder per agent**; folders remember whether they are open or collapsed, and long lists are paginated
- **New conversation** — each session gets a unique ID; history persists
- **Delete conversation** — hover over a conversation in the sidebar to reveal the delete button
- **Tool execution log** — toggle to see each tool call and its result inline
- **Command approvals** — in \`confirmation\` mode, commands the agent wants to run pop up for approve/deny
- **File uploads** — drag-and-drop or click to attach images, PDFs, audio, Office documents, text files
- **Image preview** — images sent by the agent render inline with a download button
- **Terminal panel** — a real interactive shell per conversation that also shows the AI's commands and their live output
- **Encryption badge** — a lock icon when messages are encrypted at rest
- **Context indicator** — live context-window usage
- **Model indicator** — shows current provider and model

**Slash commands** (type in the chat input):
\`\`\`
/new                          Start a fresh conversation
/reset                        Emergency reset of this conversation's memory
/compact                      Summarize the conversation now
/model ollama/llama3.2        Switch to a different model mid-conversation
/stats                        Token usage and request counts
/export                       Export the conversation
/workspace <path>|clear       Pin or clear the working directory
/help                         Show all commands
\`\`\`

**File upload behavior:**
- Images → sent as vision input to the LLM (if model supports it)
- Audio/voice → transcribed (OpenAI Whisper API, local faster-whisper, or MarkItDown) and injected as text
- Documents (PDF, Office, text) → content extracted (Docling / pypdf / MarkItDown) and added to context

---

### Swarms

Create a swarm from a goal (optionally with context files), answer the clarification questions, review the planned team and tasks, start/pause it, change worker models, and follow the activity feed in real time. See [Swarms](./22-swarms.md).

---

### Daemon

Controls the always-on **voice daemon**: engine status and missing dependencies (with an install button), microphone selection, wake word / assistant name, TTS provider and voice, enable/disable voice, and the animated companion skins. See [Voice](./30-voice.md).

---

### Routines

Activity-watcher status (current app, hours monitored, sessions, top apps) and the routines detected by the pattern analyzer.

**For each routine:**
- Name and description (LLM-generated)
- App list
- Trigger type (\`time_based\` or \`manual\`), time and days
- Confidence score and occurrence count

**Actions:** **Analyze now**, run, activate/deactivate (activating a time-based routine schedules a cron job), edit, delete; start/stop the watcher.

---

### Cron

Create jobs with a cron expression (with presets and a human-readable preview), choose the action, run a job now, enable/disable it, and browse the execution history. See [Cron Scheduler](./19-cron-scheduler.md).

---

### Tools

Lists all registered tools (built-in, plugin and MCP) with name, description, category, risk level and parameter schema, plus the **Execution log** (arguments, result, timing, success) of recent tool calls.

---

### Skills

Lists all skills with category and active status. Create a skill manually (name, description, category, content) or describe the skill you need and let the LLM generate it; edit, toggle and delete skills. See [Skills System](./06-skills-system.md).

---

### Agents

Lists agents; create one manually or generate it from a description. Each agent has tabs for:
- **Config** — name, description, system prompt, **Tools access** (all / none), **Memory** policy (persistent or reset after N hours), inactivity follow-up, show in chat
- **Knowledge** — text entries and uploaded files
- **Channels** — Telegram, WhatsApp Business (Cloud API) or WhatsApp Web bridge, with connection status and restart
- **Herramientas** (Tools) — pick exactly which tools the agent may use, grouped by category
- **Skills** — enable system skills for this agent, or generate private ones
- **Flujos** (Flows) — list, create, import/export and activate flows; opens the visual **flow editor** with an inspector, WooCommerce connections, a test panel ("Probar flujo") and a chat panel that builds the flow for you

See [Agents](./07-agents.md) and [Agent Flows](./28-agent-flows.md).

---

### MCP

Lists all configured MCP servers with their connection status.

**For each server:**
- Name, transport type, command/URL
- Connected/Disconnected status with error message if failed
- Tool list

**Actions:**
- **Add Server** → form to register a new MCP server
- **Connect / Disconnect** → toggle connection per server
- **Delete** → remove server configuration

---

### Connectors

Lists [webhook connectors](./29-webhook-connectors.md) with their public URL (\`/api/webhooks/{slug}\`) and auth scheme, lets you turn each one on/off, and shows its activity log (received time, status, result). Connectors are created through the API.

---

### Traces

The loop debugger: for each recent request, every agentic iteration with message count, context size, LLM time, tool calls and their timings, and the outcome (success / error / timeout).

---

### Configuration

- **Assistant Identity** — name and personality
- **Model** — active provider/model and per-model parameters; **Custom Providers** (OpenAI-compatible endpoints); CLI providers
- **Voice Interface** — wake word, TTS provider and language
- **Memory & RAG** — RAG relevance threshold, compaction ratio / keep-recent, memory stats and wipe
- **Local Intent Router** — enable/disable and confidence threshold
- **WhatsApp** — Cloud API credentials or bridge URL
- **Google Services** — upload OAuth credentials and authorize Gmail/Calendar/Drive/YouTube
- **Google Stitch** — API key for UI generation
- **Security** — execution mode (\`confirmation\`, \`auto\`, \`yolo\`), debug logging
- **Code Resurrection** — folders to index
- **Advanced** — raw config view

---

### Plugins

Every discovered plugin with an enable/disable toggle (applies after restart — a banner offers to restart), a settings form for plugins that declare a config schema, and a button that opens a plugin's own dashboard embedded inside the app (\`/plugins/view\`). See [Plugins](./24-plugins.md).

### Plugin pages

- **Gmail** (\`/gmail-classifier\`) — [Gmail Classifier](./31-gmail-classifier.md)
- **Home Assistant** (\`/home-assistant\`) — devices grouped by type with live state, areas and scenes
- **Content** (\`/content\`) — approve or reject social posts queued by the Content Automation plugin

---

## WebSocket Protocol

The dashboard communicates with the backend via WebSockets (\`/ws/chat\`, \`/ws/events\`, \`/ws/terminal\`, \`/ws/swarms/{id}\`), all authenticated with \`?token=\`. Message formats are documented in the [API Reference](./10-api-reference.md#websocket-chat-wschat).

---

## Production Considerations

By default, the dashboard binds to \`127.0.0.1\` (localhost only). To expose it on a network:

\`\`\`yaml
# config/local.yaml
web:
  host: "0.0.0.0"
  port: 47821
\`\`\`

**If exposing to a network:**
1. Keep \`DASHBOARD_TOKEN\` secret (it is the only credential — there is no user management)
2. Put the server behind a reverse proxy (nginx, Caddy, Nginx Proxy Manager) with HTTPS and WebSocket support
3. Restrict access by IP at the network level
4. Do not expose it to the public internet without HTTPS

The dashboard has full agent access — anyone with the token can execute tools, read files, and run commands on your machine. See [Deploy on a VPS](./DEPLOY_VPS.md).

`
  },
  {
    "slug": "17-extending",
    "title": "Extending OpenACM",
    "section": "Documentation",
    "content": `
# Extending OpenACM

OpenACM is designed to be extended. Skills, agents, flows, cron jobs, swarms and MCP servers can be added at runtime from the dashboard or from chat; new tools, channels and whole features are added in Python — ideally as a [plugin](./24-plugins.md), which needs no changes to the core.

| Want to… | Use |
|----------|-----|
| Change how the AI behaves in a domain | [Skill](#creating-skills) |
| Build a specialized assistant | [Agent](#creating-agents) |
| Chain HTTP/store calls without code | [Flow](./28-agent-flows.md) |
| Let an external service trigger OpenACM | [Webhook connector](./29-webhook-connectors.md) |
| Add tools written in any language | [MCP server](#connecting-mcp-servers) |
| Add Python tools + API routes + UI + settings | [Plugin](./24-plugins.md) |
| Add a new messaging platform | [Custom channel](#adding-custom-channels) |

> **Runtime tool creation:** \`src/openacm/tools/tool_creator.py\` contains \`create_tool\` / \`edit_tool\` / \`delete_tool\` (a two-phase validate-then-apply flow), but in v0.4.7 that module is not registered at startup, so the agent cannot create Python tools from chat. Write a tool module or a plugin instead.

---

## Tool Code Structure

All tools are Python async functions. Here's the minimal structure:

\`\`\`python
from openacm.tools.base import tool

@tool(
    name="my_tool",
    description="Brief description of what this tool does",
    parameters={
        "type": "object",
        "properties": {
            "param1": {
                "type": "string",
                "description": "What param1 is for"
            },
            "param2": {
                "type": "integer",
                "description": "What param2 is for",
                "default": 10
            }
        },
        "required": ["param1"]
    },
    risk_level="low",      # "low", "medium", or "high"
    category="general",    # Category for semantic tool selection
)
async def my_tool(
    param1: str,
    param2: int = 10,
    _brain=None,
    **kwargs,          # absorbs the other injected context and unknown params
) -> str:
    """Implementation here. Must return a string."""
    result = f"Got: {param1}, {param2}"
    return result
\`\`\`

**Key rules:**
- Must be \`async def\`
- Must return a \`str\` (anything else is converted with \`str()\`)
- Parameters matching the schema are passed as keyword arguments
- Context is injected automatically as keyword arguments: \`_sandbox\`, \`_event_bus\`, \`_brain\`, \`_user_id\`, \`_channel_id\`, \`_channel_type\`, \`_confirm_callback\` — end the signature with \`**kwargs\`
- Shared managers are reachable through \`_brain.tool_registry\` (\`cron_scheduler\`, \`swarm_manager\`, \`mcp_manager\`, \`app_config\`)
- Exceptions are caught by the registry and returned to the LLM as \`Error: ...\`, but returning a clear error string yourself gives better results

---

## Tool Categories

Choose a category to help with semantic tool selection:

| Category | When to use |
|----------|-------------|
| \`general\` | Always available; utility tools |
| \`system\` | OS commands, processes, system management |
| \`file\` | File system operations |
| \`web\` | HTTP, scraping, web services |
| \`ai\` | Memory, embeddings, ML operations |
| \`media\` | Images, audio, video, screen |
| \`google\` | Google Workspace APIs |
| \`meta\` | Tools that manage skills |
| \`swarm\` | Multi-agent swarms |
| \`iot\` | Smart home, IoT devices |
| \`content\` / \`social\` | Content generation and social media |
| \`mcp\` | MCP server tools (auto-assigned) |
| \`custom_flow\` | Agent flows (auto-assigned) |

Keyword fallbacks used before the embedding model is loaded live in \`src/openacm/tools/intent_keywords.py\` (plugins add theirs with \`get_intent_keywords()\`).

---

## Adding Tools to Source

For tools you want to include permanently:

1. Create \`src/openacm/tools/my_module.py\`
2. Define tools using the \`@tool\` decorator
3. Register the module in \`src/openacm/app.py\`:

\`\`\`python
from openacm.tools import my_module
self.tool_registry.register_module(my_module)
\`\`\`

The module is loaded on next startup and available forever. To ship tools without touching \`app.py\`, return the module from a plugin's \`get_tool_modules()\` instead — see [Plugins](./24-plugins.md).

---

## Creating Skills

Skills are markdown files that shape LLM behavior.

### Via chat
\`\`\`
You: Create a skill for Rust development expertise. 
     It should emphasize memory safety, ownership rules, 
     and idiomatic Rust patterns.
\`\`\`

### Manually
Create \`skills/development/rust-expert.md\`:

\`\`\`markdown
# Rust Development Expert

When writing Rust code:

## Core Principles
- Always think about ownership and lifetimes first
- Prefer \`&str\` over \`String\` for read-only string parameters
- Use \`Result<T, E>\` for fallible operations, never \`unwrap()\` in library code
- Leverage the type system to make invalid states unrepresentable

## Common Patterns
- Error handling: \`thiserror\` for library errors, \`anyhow\` for application errors
- Async: \`tokio\` runtime, \`async-trait\` for async trait methods
- Serialization: \`serde\` with \`derive(Serialize, Deserialize)\`
- CLI: \`clap\` with derive macros

## Code Quality
- Run \`clippy\` before finalizing any code
- All public items must have doc comments (\`///\`)
- Write unit tests in the same file (\`#[cfg(test)]\`)
\`\`\`

Restart OpenACM to sync the new file into the database (files must be inside a category folder such as \`skills/development/\`). Skills created from the dashboard or with \`create_skill\` are available immediately.

---

## Creating Agents

Agents are isolated instances with their own persona and tool set.

### Via dashboard
1. Go to **Agents** → **New Agent**
2. Set name, description, and system prompt
3. Choose which tools the agent can access
4. Optionally add knowledge, channels (Telegram / WhatsApp) and flows

### Via chat
\`\`\`
You: Create an agent called "ResearchBot" that specializes in finding
     and summarizing information, with access to all tools.
     Give it a concise, academic tone.
\`\`\`

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/agents \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "ResearchBot",
    "description": "Finds and summarizes information",
    "system_prompt": "You are a research specialist. Be concise and cite sources.",
    "allowed_tools": "[\\"web_search\\", \\"get_webpage\\", \\"remember_note\\"]"
  }'
\`\`\`

---

## Connecting MCP Servers

Model Context Protocol servers expose tools that OpenACM can use.

### Configuration
Add an entry to the \`servers\` array of \`config/mcp_servers.json\`:

\`\`\`json
{
  "name": "my-server",
  "transport": "stdio",
  "command": "python",
  "args": ["-m", "my_mcp_server"],
  "env": {
    "API_KEY": "xxx"
  },
  "auto_connect": true
}
\`\`\`

### Via dashboard
Go to **MCP** → **Add Server** and fill in the form.

### Tools are auto-named
A tool called \`read_file\` from server \`filesystem\` becomes \`mcp__filesystem__read_file\` in OpenACM's tool registry.

---

## Building a Custom MCP Server

You can build an MCP server that exposes any external service as tools OpenACM can use.

\`\`\`python
# my_mcp_server.py
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

server = Server("my-server")

@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="get_stock_price",
            description="Get the current price of a stock symbol",
            inputSchema={
                "type": "object",
                "properties": {
                    "symbol": {"type": "string", "description": "Stock ticker symbol"}
                },
                "required": ["symbol"]
            }
        )
    ]

@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_stock_price":
        # Your implementation here
        price = await fetch_stock_price(arguments["symbol"])
        return [TextContent(type="text", text=f"\${price:.2f}")]

async def main():
    async with stdio_server() as streams:
        await server.run(*streams, server.create_initialization_options())

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
\`\`\`

Then add it to OpenACM:
\`\`\`json
{
  "name": "stocks",
  "transport": "stdio",
  "command": "python",
  "args": ["my_mcp_server.py"],
  "auto_connect": true
}
\`\`\`

---

## Adding Custom Channels

Implement the \`BaseChannel\` abstract class (\`name\` and \`is_connected\` are abstract properties; \`start\`, \`stop\` and \`send_message\` are abstract methods; \`ready_event\` must be set once connected — or on failure — because startup waits up to 15 s for it):

\`\`\`python
# src/openacm/channels/my_channel.py
import asyncio
from openacm.channels.base import BaseChannel

class MyChannel(BaseChannel):
    def __init__(self, config, brain, event_bus):
        self.config = config
        self.brain = brain
        self.event_bus = event_bus
        self._connected = False
        self.ready_event = asyncio.Event()

    @property
    def name(self) -> str:
        return "mychannel"

    @property
    def is_connected(self) -> bool:
        return self._connected

    async def start(self):
        # Connect to your platform
        self._connected = True
        self.ready_event.set()

        # Listen for incoming messages
        async for message in self.receive_messages():
            response = await self.brain.process_message(
                content=message.text,
                user_id=message.user_id,
                channel_id=message.chat_id,
                channel_type=self.name,
            )
            await self.send_message(message.chat_id, response)

    async def stop(self):
        self._connected = False

    async def send_message(self, target_id: str, content: str, **kwargs) -> bool:
        # Send response to your platform
        return True
\`\`\`

Register it in \`OpenACM._init_channels()\` in \`app.py\`:
\`\`\`python
from openacm.channels.my_channel import MyChannel
channel = MyChannel(config, self.brain, self.event_bus)
self._channels.append(channel)
channel_tasks.append(asyncio.create_task(channel.start()))
\`\`\`

---

## Modifying the System Prompt

The base OpenACM identity context is in \`src/openacm/core/acm_context.py\`. You can:

1. **Customize the assistant persona** via \`assistant.system_prompt\` in config
2. **Add persistent behavior** via skills (active skills are appended to the system prompt)
3. **Edit the base context** directly in \`acm_context.py\` for deep behavioral changes

The system prompt structure on each request:
\`\`\`
[Pinned workspace note (if /workspace is set)]
[OPENACM base context (short version after first message)]
[User's custom system_prompt from config]
[Matching skill content (if any)]
[List of connected MCP servers (if any)]
[Plugin context extensions (get_context_extension)]
\`\`\`

Relevant long-term memory fragments are added as a separate system message.

`
  },
  {
    "slug": "18-roadmap",
    "title": "Roadmap",
    "section": "Documentation",
    "content": `
# Roadmap

OpenACM is actively developed. This document describes what's planned, what's in progress, and the long-term vision.

**Current version:** v0.4.7 — functional, pre-1.0 (breaking changes may still happen between minor versions). See the [CHANGELOG](../CHANGELOG.md) for release notes.

---

## Shipped

### Foundations (v0.1)
- ✅ Core agentic loop with multi-tool support
- ✅ Built-in tools (system, file, web, Google, browser, Python kernel)
- ✅ Web dashboard (Next.js) with real-time updates
- ✅ Telegram, Discord, WhatsApp channel support
- ✅ Skills system (markdown behavior instructions)
- ✅ MCP server integration (stdio, SSE, streamable HTTP)
- ✅ LocalRouter (offline intent classifier, multilingual)
- ✅ RAG / vector memory (ChromaDB)
- ✅ Conversation compaction (auto-summarization)
- ✅ Semantic tool selection (multilingual embeddings)
- ✅ Conversation encryption at rest
- ✅ Activity watcher, routine detection and workflow tracker
- ✅ Custom LLM provider support (OpenAI-compatible endpoints) and CLI providers
- ✅ Dashboard: stats, charts, model switching, debug traces
- ✅ Cron scheduler with visual management UI and LLM tools
- ✅ Per-channel PTY terminal (xterm.js + pywinpty/pty)
- ✅ Cancel button — abort any in-progress AI request from the chat UI

### Since then (v0.2 – v0.4.7)
- ✅ Multi-agent **swarms** with planning, peer messaging, shared knowledge and templates
- ✅ **Plugin system** (built-in + pip entry points) with settings forms and embedded plugin dashboards
- ✅ **Home Assistant** plugin (replacing per-vendor IoT integrations), **Gmail Classifier** and **Content Automation** plugins
- ✅ **Voice**: always-on voice daemon (faster-whisper STT, wake word, TTS) and in-browser Kokoro TTS
- ✅ **Agents 2.0**: knowledge base, per-agent Telegram/WhatsApp channels, private skills, memory TTL policy, customer names, inactivity follow-ups, chat grouping
- ✅ **Visual flows** with an Unreal-style node editor, data pins, variables, loops, WooCommerce node, JSON import/export and an AI chat builder
- ✅ **Webhook connectors**: public, signed webhooks (HMAC / bearer / static header) that run a flow, with audit log
- ✅ Official **WhatsApp Cloud API** channel
- ✅ Surgical **code-editing tools** (\`edit_file\`, \`grep_in_files\`, \`get_file_outline\`, \`run_linter\`)
- ✅ Persistent browser session for the browser agent
- ✅ Terminal setup wizard (\`openacm-setup\`) and console manager (\`openacm-manage\`)
- ✅ Docker image, versioned GHCR releases, \`features\` toggles and \`client_profile\` for client deployments
- ✅ LLM 429 rate-limit retries with backoff

---

## Short-term

### Smarter Fast-Path
- More intent categories (file operations, web search patterns)
- Per-user learned fast paths (personalized to each channel)
- Fast-path for common IoT commands (reduces ~800ms LLM overhead)

### Better Tool Results in Context
- Structured tool result display in chat (tables, code blocks, collapsible sections)
- Large tool outputs stored in RAG instead of full context

### Plugin ecosystem
- Community-contributed plugins installable via pip (the entry-point mechanism already exists)
- Plugin registry

### Voice
- Voice-only Telegram mode

---

## Medium-term

### Web Automation Improvements
- Browser profiles (saved login sessions for common sites)
- Record-and-replay for browser workflows

### Advanced Agent Features
- Agent marketplace / template library
- Agent health monitoring dashboard
- More flow node types and connection types beyond WooCommerce

### Knowledge Management
- File upload to the global RAG (index documents, PDFs, codebases)
- Structured knowledge bases (named collections, namespaced search)
- Knowledge graph visualization

### Better IoT
- Matter protocol support
- Automation rules built from the dashboard

---

## Long-term Vision

### OpenACM Cloud (Optional)
- Hosted option for users who don't want to self-host
- Data stays encrypted and user-controlled
- Agent sharing marketplace

### OpenACM Mobile
- iOS and Android native apps
- Voice-first interface
- Push notifications from agents
- Location-aware context

### Autonomous Operation Mode
- Proactive agent — acts without being asked based on detected patterns
- "Morning briefing" routine that runs automatically
- Anomaly detection ("your disk is 90% full, want me to clean it?")

### Multi-Computer Support
- Connect multiple machines to one OpenACM instance
- Execute tools on specific machines by name
- Aggregate activity data across devices

### OpenACM for Teams
- Multi-user support with per-user permissions
- Shared agents and skills
- Team knowledge base (shared RAG)
- Audit log with user attribution

### Developer Platform
- OpenACM SDK for building tool packs
- REST API for embedding OpenACM in other applications
- Zapier/Make.com integration

---

## Contributing

OpenACM is open source and contributions are welcome.

**Where to start:**
- Check open issues on GitHub for \`good first issue\` labels
- Tool contributions — if you've built a useful tool, submit it
- Translations — help localize the dashboard
- Documentation improvements

**Development setup:**
\`\`\`bash
git clone https://github.com/Json55Hdz/OpenACM.git
cd OpenACM
uv venv --seed && source .venv/bin/activate
uv pip install -e ".[dev]"
cd frontend && npm install && cd ..
pytest
\`\`\`

**Code style:**
- Python: \`ruff\` (line length 100, Python 3.12 target)
- TypeScript: \`eslint\` (\`npm run lint\` in \`frontend/\`)
- All new tools must have risk levels and categories annotated
- New API endpoints must be documented in \`docs/10-api-reference.md\`

---

## Versioning

OpenACM follows semantic versioning:

- \`0.x.y\` — Pre-stable. Breaking changes may occur between minor versions.
- \`1.0.0\` — First stable release. Breaking changes only in major versions.

The database schema is automatically migrated on startup. Config format changes are documented in release notes.

`
  },
  {
    "slug": "19-cron-scheduler",
    "title": "Cron Scheduler",
    "section": "Documentation",
    "content": `
# Cron Scheduler

OpenACM includes a built-in asyncio-based cron scheduler that runs recurring background jobs on a configurable schedule — with no external cron library required.

---

## Overview

The Cron Scheduler allows you to automate tasks inside OpenACM that should run on a time-based schedule. Examples:

- Run pattern analysis every night at 2 AM
- Execute a skill every weekday morning
- Run a shell script on the first of each month
- Launch a detected routine every Monday at 9 AM

The scheduler starts automatically with OpenACM, polls every 30 seconds for due jobs, and fires them concurrently without blocking the main loop.

---

## Cron Expression Format

Jobs use standard 5-field cron expressions:

\`\`\`
MIN  HOUR  DOM  MONTH  DOW
\`\`\`

| Field | Range | Special |
|-------|-------|---------|
| MIN | 0–59 | \`*\`, \`*/N\`, \`N-M\`, \`N,M\` |
| HOUR | 0–23 | same |
| DOM | 1–31 | same |
| MONTH | 1–12 | same |
| DOW | 0–6 (0=Sun) | same |

> **Time zone:** schedules are computed in **UTC** (\`next_run\` is stored as a UTC timestamp). Convert your local time when writing an expression — e.g. 9:00 in Bogotá (UTC-5) is \`0 14 * * *\`.

### Examples

| Expression | Meaning |
|------------|---------|
| \`0 9 * * 1-5\` | Every weekday at 9:00 AM |
| \`*/5 * * * *\` | Every 5 minutes |
| \`0 0 * * *\` | Every day at midnight |
| \`0 8 * * 1\` | Every Monday at 8:00 AM |
| \`30 14 1 * *\` | 1st of each month at 14:30 |
| \`@hourly\` | Every hour (shortcut) |
| \`@daily\` | Every day at midnight (shortcut) |
| \`@weekly\` | Every Sunday at midnight (shortcut) |
| \`@monthly\` | Every 1st of month at midnight (shortcut) |

---

## Action Types

Each cron job has an **action type** that determines what runs when the schedule fires.

### \`analyze_patterns\`
Runs the OS activity pattern analyzer to detect new routines from recent app usage.

\`\`\`json
{ "action_payload": {} }
\`\`\`

No configuration needed.

### \`run_skill\`
Sends \`/skill <skill_name>\` to the main agent (conversation \`cron:cron\`) and stores the reply.

\`\`\`json
{
  "action_payload": {
    "skill_name": "daily_summary"
  }
}
\`\`\`

### \`run_routine\`
Launches a detected routine by ID, opening all its configured apps.

\`\`\`json
{
  "action_payload": {
    "routine_id": 3
  }
}
\`\`\`

### \`custom_command\`
Runs an arbitrary shell command.

\`\`\`json
{
  "action_payload": {
    "command": "python /scripts/backup.py",
    "shell": true,
    "timeout": 60
  }
}
\`\`\`

| Field | Default | Description |
|-------|---------|-------------|
| \`command\` | required | The command to run |
| \`shell\` | \`true\` | Run via shell (allows pipes, env vars) |
| \`timeout\` | \`30\` | Max seconds before killing the process |

A non-zero exit code marks the run as an error. Output is truncated to 2,000 characters. Note that this runs the command directly — it does **not** go through the agent's security policy or confirmation mode.

### \`send_message\`
Sends a prompt to the main agent as if a user had typed it (conversation \`cron:cron\`) and stores the reply as the run output. Use it for "every morning, summarize…" style jobs.

\`\`\`json
{
  "action_payload": {
    "message": "Summarize today's unread emails"
  }
}
\`\`\`

### \`run_swarm_template\`
Creates a swarm from a saved swarm template and starts it. \`{date}\` in the goal is replaced with today's date.

\`\`\`json
{
  "action_payload": {
    "template_id": 2,
    "goal_override": "Write the daily market report for {date}"
  }
}
\`\`\`

> **Where each action can be created:** the REST API, the dashboard and \`openacm-manage\` accept \`analyze_patterns\`, \`run_skill\`, \`run_routine\` and \`custom_command\`. The agent's \`create_cron_job\` tool additionally accepts \`send_message\`. \`run_swarm_template\` jobs are executed by the scheduler but can only be created by writing the job row directly (e.g. from a plugin). Activating a time-based routine creates a \`run_routine\` job automatically.

---

## Dashboard UI

Navigate to **Cron Scheduler** in the sidebar (clock icon).

### Creating a job
1. Click **New Job**
2. Enter a name and optional description
3. Type a cron expression, or click a **quick preset**
4. The human-readable description updates live as you type
5. Select an action type and fill in its configuration
6. Toggle enabled and save

### Managing jobs
Each job card shows:
- Cron expression with human-readable translation
- Last run time and status
- Next scheduled run time
- Run count
- Last output (expandable)

Actions per card:
- **Toggle** (enable/disable)
- **Run now** (trigger immediately, regardless of schedule)
- **Edit**
- **Delete**

### Execution History
Click **Execution History** at the bottom of the page to expand the run log. Each entry shows the job name, timestamp, trigger source (scheduler or manual), status, and truncated output.

---

## REST API Reference

All endpoints require the standard \`Authorization: Bearer <token>\` header.

### List jobs
\`\`\`
GET /api/cron/jobs
\`\`\`
Returns an array of jobs.

### Create job
\`\`\`
POST /api/cron/jobs
Content-Type: application/json

{
  "name": "Daily Analysis",
  "description": "Run pattern analysis every night",
  "cron_expr": "0 2 * * *",
  "action_type": "analyze_patterns",
  "action_payload": {},
  "is_enabled": true
}
\`\`\`

### Get job
\`\`\`
GET /api/cron/jobs/{job_id}
\`\`\`

### Update job
\`\`\`
PUT /api/cron/jobs/{job_id}
Content-Type: application/json

{
  "name": "New name",
  "cron_expr": "0 3 * * *",
  "is_enabled": false
}
\`\`\`
Only the fields you include are updated. If \`cron_expr\` changes, \`next_run\` is automatically recomputed.

### Delete job
\`\`\`
DELETE /api/cron/jobs/{job_id}
\`\`\`
Deletes the job and all its run history.

### Trigger immediately
\`\`\`
POST /api/cron/jobs/{job_id}/trigger
\`\`\`
Fires the job right now and returns the result:
\`\`\`json
{
  "status": "success",
  "output": "Pattern analysis complete. 2 new routine(s) detected.",
  "error": "",
  "elapsed_ms": 1234,
  "next_run": "2026-04-05T02:00:00+00:00"
}
\`\`\`

### Toggle enabled/disabled
\`\`\`
POST /api/cron/jobs/{job_id}/toggle
\`\`\`
Returns \`{ "status": "ok", "is_enabled": true }\`.

### Run history
\`\`\`
GET /api/cron/runs?job_id=3&limit=50
\`\`\`
\`job_id\` is optional. Returns \`{ "runs": [...] }\`.

### Scheduler status
\`\`\`
GET /api/cron/status
\`\`\`
\`\`\`json
{
  "running": true,
  "job_count": 4,
  "enabled_count": 3,
  "next_job_name": "Daily Analysis",
  "next_job_at": "2026-04-05T02:00:00+00:00"
}
\`\`\`

---

## Architecture

The scheduler lives in \`src/openacm/watchers/cron_scheduler.py\` as the \`CronScheduler\` class.

\`\`\`
app.py
 └─ _init_watchers()
     └─ CronScheduler(database, brain).start()
         └─ asyncio.Task: _loop()
             ├─ _sync_jobs()   ← reloads DB every 30 s
             └─ _fire_job()    ← asyncio.create_task per due job
\`\`\`

**Key design decisions:**

- **No external library.** The cron expression parser is pure Python using set arithmetic. Supports \`*\`, \`*/N\`, \`N-M\`, \`N,M\`, and \`@shortcuts\`.
- **30-second poll.** Jobs fire within ±30 seconds of their scheduled time. This is intentional — sub-minute precision is rarely needed for background automation.
- **Concurrent execution.** Each due job runs as an independent \`asyncio.Task\` so slow jobs don't delay others.
- **Persistent run log.** Every execution writes to the \`cron_job_runs\` table. The job row stores a summary (\`last_status\`, \`last_output\`, \`last_run\`, \`next_run\`).
- **DB sync on every poll.** Changes made via the API (create/update/toggle/delete) take effect within 30 seconds without a restart.

---

## Database Schema

### \`cron_jobs\`
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key |
| name | TEXT | Job name |
| description | TEXT | Optional description |
| cron_expr | TEXT | 5-field cron or @shortcut |
| action_type | TEXT | \`run_skill\` / \`run_routine\` / \`analyze_patterns\` / \`custom_command\` / \`send_message\` / \`run_swarm_template\` |
| action_payload | TEXT | JSON configuration for the action |
| is_enabled | INTEGER | 1 = enabled, 0 = disabled |
| last_run | TEXT | ISO datetime of last execution |
| next_run | TEXT | ISO datetime of next scheduled execution |
| run_count | INTEGER | Total number of times fired |
| last_status | TEXT | \`pending\` / \`success\` / \`error\` / \`running\` |
| last_output | TEXT | Truncated output of last run |
| created_at | DATETIME | Creation timestamp |
| updated_at | DATETIME | Last update timestamp |

### \`cron_job_runs\`
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key |
| job_id | INTEGER | FK → cron_jobs.id (CASCADE DELETE) |
| started_at | TEXT | ISO datetime when execution started |
| finished_at | TEXT | ISO datetime when execution ended |
| status | TEXT | \`running\` / \`success\` / \`error\` |
| output | TEXT | Stdout/result (truncated to 4000 chars) |
| error | TEXT | Error message if failed |
| triggered_by | TEXT | \`scheduler\` or \`manual\` |

---

## Limitations

- **Precision:** Jobs fire within ~30 seconds of the scheduled time, not exactly at the second.
- **Missed jobs:** If OpenACM was stopped when a job was due, the missed execution is NOT replayed on restart. The scheduler simply computes the next future occurrence.
- **Single node:** No distributed locking — intended for single-instance deployments.
- **Cron precision minimum:** The minimum effective interval is ~30 seconds (one poll cycle). Using \`* * * * *\` (every minute) will fire approximately every 30–90 seconds in practice.

`
  },
  {
    "slug": "20-token-optimization",
    "title": "Token Optimization",
    "section": "Documentation",
    "content": `
# Token Optimization

OpenACM has a multi-layer token optimization system built into its core. Every LLM call is automatically processed through a pipeline of techniques that reduce token consumption without affecting quality. This document explains each layer, where it lives in the codebase, and how they compose together.

---

## Why It Matters

Every token sent to an LLM has a cost — in money, in latency, and in context window pressure. A naive agentic system that dumps the full conversation history + all tool schemas + full tool outputs on every call will burn tokens rapidly. OpenACM approaches this problem at every layer of the pipeline:

\`\`\`
User message
    │
    ▼  [Layer 1] Local Router — skip LLM entirely for known intents (0 tokens)
    │
    ▼  [Layer 2] Semantic Tool Selection — only send relevant tools (~3K saved/call)
    │
    ▼  [Layer 3] Slim Tool Schemas — strip param descriptions from schemas (40-70% schema savings)
    │
    ▼  LLM Call
    │
    ▼  Tool execution
    │
    ▼  [Layer 4] Output Compressor — smart-compress tool results before context (30-80% result savings)
    │
    ▼  [Layer 5] Old Message Stripping — null old tool results + strip arg blobs
    │
    ▼  [Layer 6] Conversation Compaction — LLM-summarize history at 60% of the context window
    │
    ▼  [Layer 7] Token Budget Cap — hard ceiling at 85% of the model's context window
\`\`\`

---

## Layer 1: Local Router (Fast Path)

**File:** \`src/openacm/core/local_router.py\`, \`src/openacm/core/fast_path.py\`  
**Token savings:** 100% of LLM input+output for matched requests

The LocalRouter classifies incoming messages against a set of learned intents. When confidence is above the threshold (default: \`0.88\`), the Brain skips the LLM entirely and dispatches directly to a \`fast_path\` handler.

\`\`\`python
# brain_loop.py — agentic loop entry point
_router_result = await asyncio.wait_for(asyncio.shield(_router_task), timeout=0.15)
if _router_result and _router_result.is_fast_path_eligible:
    fast_response = await self._execute_fast_path(...)
    return fast_response  # ← never touches the LLM
\`\`\`

**What gets fast-pathed:**
- Conversational messages ("hola", "gracias", "ok")
- Frequently repeated intents the router has learned (e.g. "abre Blender" → \`run_command start blender\`)
- System info queries, time/date questions

**Passive learning:** After each agentic turn, the Brain inspects which tool was called and teaches the LocalRouter. Over time, repeated patterns are handled locally without LLM involvement.

---

## Layer 2: Semantic Tool Selection

**File:** \`src/openacm/tools/registry.py\`  
**Token savings:** ~1,000–5,000 tokens per call depending on tool count

Sending all registered tools to the LLM on every call is wasteful. The ToolRegistry uses \`paraphrase-multilingual-MiniLM-L12-v2\` embeddings (the same model as the LocalRouter) to compute cosine similarity between the user's message and each tool's description. Only tools above the threshold are included.

\`\`\`
Threshold: SEMANTIC_TOOL_THRESHOLD = 0.28

"toma una captura de pantalla"
  → screenshot        similarity: 0.82  ✓ included
  → send_file_to_chat similarity: —     ✓ always included (ALWAYS_INCLUDE_TOOLS)
  → web_search        similarity: 0.09  ✗ excluded
  → gmail_send        similarity: 0.04  ✗ excluded
  → ...
\`\`\`

**Conversational shortcut:** Messages ≤80 characters with no action keywords skip embedding entirely and send 0 tools (\`tools=None\`). This saves the full schema payload (~3K tokens) plus avoids triggering the LLM's tool-calling mode.

**Always-included tools** (regardless of similarity):
\`\`\`python
ALWAYS_INCLUDE_TOOLS = {"send_file_to_chat", "run_command", "read_file", "write_file", "web_search"}
\`\`\`

Tool embeddings are computed once at startup and cached in memory.

---

## Layer 3: Slim Tool Schemas

**File:** \`src/openacm/tools/base.py\` → \`ToolDefinition.to_slim_schema()\`  
**Token savings:** 40–70% of tool schema tokens

When the Brain has already selected the relevant tools via semantic similarity, it doesn't need full parameter documentation in the schema — the LLM knows which tool to use and only needs the bare structure to call it correctly.

\`to_slim_schema()\` strips two things:
1. **Description trimmed to the first sentence** — the LLM doesn't need the full multi-line docstring once it's selected the tool
2. **\`description\` fields removed from parameter properties** — the parameter names + types are sufficient for correct invocation

\`\`\`python
# Full schema sent on first message (before tool selection warms up):
{
  "name": "run_command",
  "description": "[OpenACM Tool] Execute commands directly in the operating system terminal. ...(200 chars)...",
  "parameters": {
    "properties": {
      "command": {"type": "string", "description": "The shell command to execute. ..."},
      "background": {"type": "boolean", "description": "Run in background without waiting..."},
      ...
    }
  }
}

# Slim schema after semantic selection:
{
  "name": "run_command",
  "description": "[OpenACM Tool] Execute commands directly in the operating system terminal.",
  "parameters": {
    "properties": {
      "command": {"type": "string"},
      "background": {"type": "boolean"},
      ...
    }
  }
}
\`\`\`

---

## Layer 4: Output Compressor

**File:** \`src/openacm/core/output_compressor.py\`  
**Token savings:** 30–80% of tool result tokens

Tool results are compressed before being stored in the LLM context. Unlike naive head+tail truncation, the compressor is **context-aware** — it knows which tool produced the output and applies a strategy matched to that tool's output format.

### Compressors by tool type

| Tool | Strategy |
|------|----------|
| \`run_command\` | Drop progress bars, pip \`Collecting\`/\`Using cached\` lines, deduplicate consecutive identical lines |
| \`run_python\` | Same as \`run_command\` |
| \`read_file\` | Strip decorative separators only (conservative — file content is important) |
| \`web_search\` | Re-emit JSON results as compact \`[N] title / url / snippet\` format, trim snippets to 300 chars |
| \`system_info\` | Drop empty \`key:\` lines with no value |
| everything else | Generic: collapse separator lines, strip trailing whitespace, collapse blank lines |

### Critical content is never removed

Lines matching any of these patterns are always kept, regardless of compressor:

\`\`\`
error, exception, traceback, warning, fail, fatal, critical
success, done, finished, complete, result, output
installed, upgraded, removed
exit code, returncode, OK, PASS, FAIL
\`\`\`

### Example

\`\`\`
# pip install output — BEFORE (544 chars):
Collecting requests
  Downloading requests-2.31.0-py3-none-any.whl (62 kB)
     62.6/62.6 kB 1.2 MB/s eta 0:00:00
Collecting charset-normalizer<4,>=2
  Downloading charset_normalizer-3.3.2 (99 kB)
Using cached urllib3-2.2.1-py3-none-any.whl (121 kB)
Using cached certifi-2024.2.2-py3-none-any.whl (163 kB)
Installing collected packages: urllib3, certifi, requests
Successfully installed certifi-2024.2.2 requests-2.31.0

# AFTER compression (377 chars — 31% saved):
Downloading requests-2.31.0-py3-none-any.whl (62 kB)
     62.6/62.6 kB 1.2 MB/s eta 0:00:00
  Downloading charset_normalizer-3.3.2 (99 kB)
Installing collected packages: urllib3, certifi, requests
Successfully installed certifi-2024.2.2 requests-2.31.0
\`\`\`

\`\`\`
# Repeated spinner lines — BEFORE (61 chars):
Processing...
Processing...
Processing...
Processing...
Done!

# AFTER (19 chars — 69% saved):
Processing...
Done!
\`\`\`

### Integration in brain_loop.py

\`\`\`python
# brain_loop.py — after tool execution, before adding to memory
result_for_memory, _orig_len, _comp_len = compress_output(str(result), tool_name)
if _orig_len != _comp_len:
    log.debug("Tool output compressed", tool=tool_name,
              summary=compression_summary(_orig_len, _comp_len))

# Hard cap still applies after compression
if len(result_for_memory) > MAX_TOOL_RESULT_CHARS:  # 6000 chars
    head = result_for_memory[:3500]
    tail = result_for_memory[-1000:]
    result_for_memory = head + f"\\n... [{omitted} chars omitted] ...\\n" + tail
\`\`\`

The compressor runs first. The hard cap (head+tail at 6000 chars) is a safety net that only triggers if compression alone wasn't enough.

---

## Layer 5: Old Message Stripping

**File:** \`src/openacm/core/brain_loop.py\` → \`_prepare_messages_for_llm()\`  
**Token savings:** Hundreds to thousands of tokens in long conversations

Before each LLM call, \`_prepare_messages_for_llm()\` strips redundant content from messages older than the last 6 (\`_RECENT_MSG_WINDOW = 6\`):

| Old message type | What gets stripped |
|------------------|--------------------|
| \`tool\` role (result messages) | Content set to \`""\` — the LLM already processed this result; only \`tool_call_id\` is needed to maintain conversation structure |
| \`assistant\` role with tool calls | \`arguments\` JSON blob replaced with \`{}\` — only the function \`name\` + \`id\` are needed for back-reference |
| Any message with \`reasoning_content\` | Reasoning content stripped entirely — thinking model outputs can be thousands of tokens per message |

Additionally, base64 images in user messages other than the latest one are replaced with a short \`[IMAGE: … — already processed]\` placeholder.

The original messages in memory are never mutated — a shallow copy is made only when a strip is needed. This means conversation history in SQLite stays complete for debugging and display.

\`\`\`python
_RECENT_MSG_WINDOW = 6   # full detail kept for last N messages
_OLD_REASONING_MAX = 0   # reasoning_content stripped from all older messages
\`\`\`

---

## Layer 6: Conversation Compaction

**File:** \`src/openacm/core/memory.py\` → \`MemoryManager._compact()\`  
**Token savings:** ~60–80% of old conversation tokens after trigger

When a conversation's estimated tokens reach **\`compact_ratio\` × the model's context window** (default \`0.60\`), a compaction is scheduled and runs before the next LLM call:

1. Takes all messages except the system prompt and the last \`compact_keep_recent\` (default 6)
2. Sends a transcript to the LLM with a structured summarization prompt (\`PROMPT_COMPACT_SYSTEM\` in \`core/messages.py\`): what was worked on, actions taken with exact paths, key decisions, current state
3. Replaces those messages with the summary
4. Keeps the recent messages verbatim for continuity

Because the trigger is relative to the real context window, a 128K model doesn't compact every few messages while a small local model compacts early. After a compaction, auto-compaction won't re-fire until at least 10% more of the threshold (min. 1,000 tokens) has accumulated. A per-conversation lock (\`_compacting: set[str]\`) prevents double-firing. \`/compact\` forces it.

---

## Layer 7: Token Budget Cap

**File:** \`src/openacm/core/memory.py\`  
**Token savings:** Hard ceiling — prevents context window overflow

On every message added, a token budget enforcer removes the oldest messages (never the system prompt) until the estimated total is under the ceiling:

\`\`\`python
TRUNCATE_RATIO = 0.85  # never exceed 85% of the model's context window
\`\`\`

\`max_context_messages\` (default 50) also caps the number of messages kept in context. This is the last line of defense. In practice, layers 1–6 keep conversations well under this ceiling for most use cases.

---

## Combined Effect

In a typical 30-minute session with moderate tool use, the savings stack like this:

| Layer | Scenario | Estimated savings |
|-------|----------|-------------------|
| Local Router | 30% of messages are conversational/repeated | ~15,000 tokens |
| Semantic tool selection | 25 tools registered, 3 relevant per call | ~4,000 tokens/call |
| Slim schemas | 3 tools × 60% schema reduction | ~900 tokens/call |
| Output compressor | \`pip install\`, verbose commands | 30–70% of result tokens |
| Old message stripping | 10+ tool calls in history | ~5,000 tokens |
| Conversation compaction | At 60% of the context window | Most of the old history, one-time |

No configuration required — all layers are active by default.

---

## Tuning

Thresholds are configurable in \`config/local.yaml\` (or from **Configuration** in the dashboard):

\`\`\`yaml
local_router:
  enabled: true
  confidence_threshold: 0.88  # lower = more fast-paths, higher = safer

assistant:
  compact_ratio: 0.60          # fraction of the context window that triggers compaction
  compact_keep_recent: 6       # messages kept verbatim after compaction
  max_context_messages: 50     # max messages kept in context

llm:
  model_context_overrides:     # context window for models LiteLLM doesn't know
    kimi: 131072
\`\`\`

The output compressor, slim schemas, semantic threshold (\`SEMANTIC_TOOL_THRESHOLD\` in \`constants.py\`) and the 85% ceiling have no config keys — they are always applied.

`
  },
  {
    "slug": "21-cli-providers",
    "title": "CLI Providers",
    "section": "Documentation",
    "content": `
# CLI Providers

Connect OpenACM to AI models through locally-installed CLI tools — no API key required.

---

## Why CLI providers?

Some providers (Anthropic, Google) restrict third-party API access or require billing even when you have a personal account. Their official CLI tools (\`claude\`, \`gemini\`) authenticate via your browser session, bypassing API key requirements entirely.

CLI providers let you use these models at no extra cost, authenticated as your own account.

---

## How it works

1. OpenACM formats the full conversation (messages + tool schemas) as structured text
2. The text is piped to the CLI binary via \`stdin\` (for \`opencode\`, only the last user message is passed as an argument)
3. The CLI response is parsed (plain text, or a JSON event stream for \`opencode\`) — tool calls use \`<tool_call>\` XML tags
4. The result is returned in the same format as any other provider

All existing features work: tool execution, memory, file ops, browser control, cron jobs, etc.

---

## Setup

### 1. Install the CLI

**Claude:**
\`\`\`bash
npm install -g @anthropic-ai/claude-code
claude          # first-run login flow
\`\`\`

**Gemini:**
\`\`\`bash
npm install -g @google/gemini-cli
gemini          # first-run login flow
\`\`\`

**OpenCode:**
\`\`\`bash
npm install -g opencode-ai
opencode        # first-run login flow
\`\`\`

### 2. Restart OpenACM

That's it. OpenACM auto-detects binaries on PATH at startup and adds these providers:

| Provider id | Binary | Args |
|-------------|--------|------|
| \`cli_claude\` | \`claude\` | \`--print\` |
| \`cli_gemini\` | \`gemini\` | \`--yolo -p\` |
| \`cli_opencode\` | \`opencode\` | \`run --format json\` (message as argument, JSONL output) |

\`GET /api/cli/status?binary=claude\` tells you whether a binary is on PATH.

\`\`\`bash
python -m openacm
\`\`\`

### 3. Select the provider in Settings

Go to **Settings → Model** — the CLI provider appears automatically with its model chip. Click it to activate.

---

## Advanced: override defaults

To change timeout, args, or any other option, add an explicit entry under \`llm.providers\` in \`config/local.yaml\`. A configured entry takes precedence over auto-detection.

\`\`\`yaml
llm:
  default_provider: "cli_claude"
  providers:
    cli_claude:
      type: "cli"
      binary: "claude"
      args: ["--print"]
      default_model: "claude"
      timeout: 600       # longer timeout for complex tasks
\`\`\`

---

## Configuration options

| Key | Description | Default |
|-----|-------------|---------|
| \`type\` | Must be \`"cli"\` | — |
| \`binary\` | CLI executable name (must be on PATH) | \`"claude"\` |
| \`args\` | Arguments passed to the binary | \`["--print"]\` |
| \`default_model\` | Display name shown in the UI | binary name |
| \`timeout\` | Max seconds to wait for a response | \`300\` |
| \`input_mode\` | \`stdin\` (pipe the whole formatted conversation) or \`arg\` (pass only the last user message as a positional argument) | \`stdin\` |
| \`output_format\` | \`text\` or \`jsonl\` (parse a JSON event stream) | \`text\` |

---

## Tool calling protocol

Since CLI tools don't natively support OpenAI tool schemas, OpenACM injects tool definitions as plain text before the last user message:

\`\`\`
[AVAILABLE TOOLS]
You can call tools by outputting <tool_call> tags with JSON:
<tool_call>{"name": "tool_name", "arguments": {"arg": "value"}}</tool_call>

Available tools:
- run_command: Execute a shell command
    • command (string, required): ...
...
[/AVAILABLE TOOLS]

[USER]
List the files in the current directory.

[ASSISTANT]
\`\`\`

The model responds with \`<tool_call>\` blocks that OpenACM parses and executes.

---

## Limitations

- **No streaming** — CLI providers return the full response at once
- **Token counts are estimated** — (~4 chars/token), not exact
- **Login required** — if the CLI session expires, restart it manually
- **Performance** — CLI startup adds ~1–2s overhead per request
- **Multi-modal** — images in conversation history are replaced with \`[image omitted]\`

`
  },
  {
    "slug": "22-swarms",
    "title": "Multi-Agent Swarms",
    "section": "Documentation",
    "content": `
# Multi-Agent Swarms

OpenACM includes a full multi-agent swarm system that lets you launch a coordinated team of specialist AI workers to tackle complex, multi-step projects — all running in parallel, each with its own isolated workspace and optional model override.

---

## Overview

A **swarm** is a self-organizing team of AI agents (workers) that:

- Is planned automatically by an orchestrator agent from a plain-language goal
- Runs all tasks in parallel (up to 3 simultaneous workers by default)
- Communicates peer-to-peer via built-in swarm tools
- Has a fully isolated workspace separate from normal chat workspaces
- Emits granular events on every state change for real-time UI updates
- Produces a final synthesis summary once all tasks are complete

Typical use cases:

- Building a software project (researcher + architect + developer + reviewer)
- Analyzing a corpus of documents simultaneously
- Generating multi-section reports with parallel writers
- Research pipelines with fact-checkers and summarizers

---

## Creating a Swarm

### From the Chat (Brain)

Ask the Brain in natural language:

> "Create a swarm to build a REST API for a todo app with auth"

The Brain calls the \`create_swarm\` tool, which plans the team and tasks automatically. You can also say:

> "Start it immediately" → sets \`auto_start: true\`

### From the Dashboard

1. Go to **Swarms** in the sidebar
2. Click **New Swarm**
3. Fill in:
   - **Goal** — detailed description of what the team should accomplish
   - **Name** — optional display name
   - **Global Model** — LiteLLM model string applied to all workers (e.g. \`anthropic/claude-opus-4-6\`)
   - **Context Files** — drag and drop any files the team needs to understand the project
4. Click **Create** — the orchestrator may first ask **clarification questions** about the goal; answer them (or skip) and the team is planned

---

## Planning

When a swarm is created, an orchestrator LLM call:

0. (Optional) reviews the goal and context and asks clarification questions (\`/clarify\`, \`/clarify/answer\`)
1. Designs a team of 3–6 specialist workers with names, roles, and descriptions
2. Assigns a task to each worker with a title, description, and dependencies
3. Stores workers and tasks in the database with status \`planned\`

The result is visible in the Workers and Tasks tabs before execution starts.

---

## Execution

Clicking **Start** (or \`auto_start: true\`) triggers \`_run_swarm\`:

1. Tasks with no unmet dependencies are collected as "ready"
2. All ready tasks fire **in parallel** (throttled to 3 concurrent workers via \`asyncio.Semaphore\`)
3. Each worker gets its own \`Brain\` instance with:
   - An isolated workspace at \`workspace/swarms/{name}_{id}/workers/{worker}/\`
   - Its own model override (worker-specific > swarm global > system default)
   - Swarm communication tools injected into its tool registry
4. Task results are saved to \`swarm_tasks.result\` and to the Activity Feed
5. Completed task titles unlock dependent tasks in the next round
6. Rounds continue until no pending tasks remain
7. A final synthesis is produced by the orchestrator and saved as a \`synthesis\` activity entry

### Parallel Execution

Workers truly run concurrently via \`asyncio.gather\`. The semaphore prevents SQLite lock contention by limiting simultaneous workers to 3. Change \`SWARM_MAX_PARALLEL_WORKERS\` in \`src/openacm/constants.py\` to tune it. Failed tasks are retried automatically (\`SWARM_MAX_TASK_RETRIES = 2\`); after that you can retry them with guidance or mark them complete from the dashboard.

---

## Per-Worker Model Selection

Each worker can use a different LLM:

- Set a **Global Model** at swarm creation time → all workers use it
- In the Workers tab, click the pencil icon on any worker card → type a LiteLLM model string → Save
- Per-worker model overrides the global model

Model strings follow LiteLLM format: \`provider/model-name\`, e.g.:
- \`anthropic/claude-opus-4-6\`
- \`openai/gpt-4o\`
- \`groq/llama-3.3-70b-versatile\`
- \`ollama/qwen2.5:32b\`

---

## Workspace Isolation

Each swarm worker writes to its own directory:

\`\`\`
workspace/
  swarms/
    {swarm_name}_{swarm_id}/
      context/            # uploaded context files
      workers/
        {worker_name}/
          ... (any files the worker creates)
\`\`\`

This is completely separate from normal chat workspaces (\`workspace/\`). Workers cannot accidentally read or overwrite each other's outputs unless they explicitly use swarm messaging to share content.

---

## Worker Communication

Workers get a set of injected swarm tools for communication and coordination:

### \`swarm_send_message\`
Send a direct message to a specific teammate by name.

\`\`\`
to_worker: "Reviewer"
message: "Here is my draft for review: ..."
\`\`\`

### \`swarm_broadcast\`
Send a message visible to all workers in the swarm.

\`\`\`
message: "I found a critical dependency — everyone should use lodash ^4.17"
\`\`\`

### \`swarm_read_messages\`
Read all messages sent directly to you plus broadcasts and user feedback.

Messages are stored in \`swarm_messages\` and appear in the Activity Feed in real time.

### \`swarm_create_task\`
Create a new task dynamically — useful when a worker discovers additional work or when reacting to user feedback.

\`\`\`
title: "Add rate limiting"
description: "The API endpoint needs rate limiting per the user's request"
assign_to: "BackendDev"  # optional
\`\`\`

### Other worker tools

| Tool | Purpose |
|------|---------|
| \`swarm_post_update\` | Post a progress update to the shared bulletin board all workers read at the start of their tasks |
| \`swarm_ask_user\` | Ask you a question; it appears in the Activity feed for you to answer |
| \`swarm_report_bug\` | Report one bug found during QA in a file owned by another worker (one call per bug); triggers a fix cycle (max 5) |
| \`swarm_store_knowledge\` / \`swarm_query_knowledge\` | Shared knowledge base: store decisions (API shapes, schemas, file ownership) and search what teammates stored |
| \`swarm_spawn_subswarm\` | Spawn a child swarm for a large sub-goal; blocks until it finishes (max 5 minutes) |

Workers can also have private skills (**Workers** tab → skills), generated with the LLM.

---

## Activity Feed

The **Activity** tab inside a swarm detail shows a unified chronological timeline:

| Type | Color | Description |
|------|-------|-------------|
| \`task_result\` | Green | Worker output when a task completes (collapsible) |
| \`task_failed\` | Red | Error output when a task fails |
| \`synthesis\` | Amber | Final orchestrator summary (collapsible) |
| \`broadcast\` | Violet | Worker broadcast to all teammates |
| \`message\` | Gray | Direct worker-to-worker message with arrow |
| \`user\` | Blue | Feedback you sent to the swarm |

Long outputs (task results, synthesis) are collapsed to 300 characters with a "show full output" toggle.

---

## User Feedback

You can send messages to a running (or paused) swarm from the input box at the bottom of the swarm detail page:

1. The message is stored as a \`user\` type entry in \`swarm_messages\`
2. The orchestrator worker is automatically invoked with the feedback
3. The orchestrator can call \`swarm_create_task\` to spawn new work
4. If new pending tasks are created and the swarm is not already running, status resets to \`planned\` so you can restart

Workers that call \`swarm_read_messages\` will see your feedback in their context on the next execution round.

---

## Swarm States

| Status | Meaning |
|--------|---------|
| \`draft\` | Just created, not yet planned |
| \`planning\` | Orchestrator is designing the team |
| \`planned\` | Ready to start, workers and tasks exist |
| \`running\` | Actively executing tasks |
| \`paused\` | Execution stopped (can resume with Start) |
| \`completed\` | All tasks done, synthesis produced |
| \`failed\` | Unrecoverable error during execution |

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/api/swarms\` | List all swarms |
| \`POST\` | \`/api/swarms\` | Create a swarm (multipart with optional files) |
| \`GET\` | \`/api/swarms/{id}\` | Get swarm detail with workers and tasks |
| \`DELETE\` | \`/api/swarms/{id}\` | Delete swarm and all data |
| \`POST\` | \`/api/swarms/{id}/clarify\` | Generate clarification questions |
| \`POST\` | \`/api/swarms/{id}/clarify/answer\` | Submit answers, then plan |
| \`POST\` | \`/api/swarms/{id}/plan\` | Trigger planning |
| \`POST\` | \`/api/swarms/{id}/start\` | Start or resume execution |
| \`POST\` | \`/api/swarms/{id}/stop\` | Pause execution |
| \`POST\` | \`/api/swarms/{id}/tasks/{tid}/retry\` | Reset a failed task to pending (optionally with guidance) |
| \`POST\` | \`/api/swarms/{id}/tasks/{tid}/complete\` | Mark a failed task completed with your own result |
| \`PUT\` | \`/api/swarms/{id}/workers/{wid}\` | Update worker (e.g. change model) |
| \`GET\` | \`/api/swarms/{id}/workers/{wid}/skills\` | Worker skills (\`POST …/skills/generate\`, \`POST/DELETE …/skills/{skill_id}\`) |
| \`GET\` | \`/api/swarms/{id}/messages\` | Get full activity feed |
| \`GET\` | \`/api/swarms/{id}/conversations\` | Worker conversations (and \`…/conversations/{channel}/{user}\`) |
| \`POST\` | \`/api/swarms/{id}/message\` | Send user feedback to swarm |
| \`POST\` | \`/api/swarms/{id}/complete\` | Mark the swarm completed |
| \`POST\` | \`/api/swarms/{id}/check-reuse\` | Check if the existing team suits a new goal |
| \`POST\` | \`/api/swarms/{id}/reset\` | Reset for re-use (keeps workers/task definitions; multipart, accepts new files) |
| \`GET/POST/DELETE\` | \`/api/swarm-templates\` | Saved swarm templates |
| \`WS\` | \`/ws/swarms/{id}\` | WebSocket for real-time events |

### Create Swarm (multipart)

\`\`\`
POST /api/swarms
Content-Type: multipart/form-data

name=My Swarm
goal=Build a REST API with auth and tests
global_model=anthropic/claude-opus-4-6
files[]=spec.pdf
files[]=architecture.md
\`\`\`

### Send User Feedback

\`\`\`
POST /api/swarms/{id}/message
Content-Type: application/json

{ "message": "Please add rate limiting to all endpoints" }
\`\`\`

---

## Events

The swarm engine emits named events on every state change. All are broadcast to WebSocket clients connected to \`/ws/swarms/{id}\` and can also be consumed server-side via the event bus.

| Event | Trigger |
|-------|---------|
| \`swarm:updated\` | Swarm status changes |
| \`swarm:running\` | Execution started |
| \`swarm:round\` | New parallel execution round |
| \`swarm:worker_thinking\` | Worker begins a task |
| \`swarm:worker_done\` | Worker completes a task |
| \`swarm:worker_error\` | Worker task fails |
| \`swarm:worker_status\` | Worker status changes |
| \`swarm:task_updated\` | Task status changes |
| \`swarm:message\` | Peer-to-peer message sent |
| \`swarm:task_created\` | New task created dynamically |
| \`swarm:user_message\` | User feedback received |
| \`swarm:orchestrator_reacted\` | Orchestrator processed feedback |
| \`swarm:synthesizing\` | Final synthesis starting |
| \`swarm:completed\` | All tasks done |
| \`swarm:failed\` | Execution error |
| \`swarm:paused\` | Execution paused |
| \`swarm:plan_ready\` | Planning complete |
| \`swarm:stalled\` | No ready tasks, possible dependency deadlock |
| \`swarm:paused_mid_run\` | Paused while tasks were running |

---

## Database Schema

Core tables (plus \`swarm_templates\` and \`worker_skills\`):

\`\`\`sql
swarms          (id, name, goal, status, global_model, shared_context, context_files, ...)
swarm_workers   (id, swarm_id, name, role, description, system_prompt, model, status, workspace_path, ...)
swarm_tasks     (id, swarm_id, worker_id, title, description, depends_on, status, result, ...)
swarm_messages  (id, swarm_id, from_worker_id, to_worker_id, content, message_type, created_at)
\`\`\`

\`message_type\` values: \`user\`, \`message\`, \`broadcast\`, \`task_result\`, \`task_failed\`, \`synthesis\`

---

## Brain Tools

The normal chat Brain has five swarm tools:

| Tool | Description |
|------|-------------|
| \`create_swarm\` | Create and plan a swarm from a goal description (\`auto_start\` to run it right away) |
| \`start_swarm\` | Start execution of a planned/paused swarm by ID |
| \`stop_swarm\` | Pause a running swarm |
| \`delete_swarm\` | Delete a swarm and all its data |
| \`list_swarms\` | List all swarms and their current status |

## Templates

Save a swarm's team as a **template** (\`POST /api/swarm-templates\`) to re-create it later. A cron job with the \`run_swarm_template\` action creates and starts a swarm from a template on a schedule, replacing \`{date}\` in the goal with the current date (see [Cron Scheduler](./19-cron-scheduler.md)). \`openacm-manage swarms\` lets you drive swarms from the terminal.

Example prompts:
- *"Create a swarm to write a marketing campaign for a fitness app, start it automatically"*
- *"List my swarms"*
- *"Start swarm 3"*

`
  },
  {
    "slug": "23-code-resurrection",
    "title": "23 - Code Resurrection (Segundo Cerebro de Código)",
    "section": "Documentation",
    "content": `
# 23 - Code Resurrection (Segundo Cerebro de Código)

## ¿Qué es Code Resurrection?
"Code Resurrection" es una característica única de OpenACM que actúa como un Segundo Cerebro de Código local. Le permite al agente "leer" tus repositorios y proyectos de código antiguos de forma silenciosa en segundo plano (mientras no lo estás usando activamente). 

Cuando le pides a OpenACM que construya una nueva característica, el RAG Engine (basado en ChromaDB) ahora puede recuperar automáticamente referencias dentro de tu viejo código para resolver problemas basándose en tu propio estilo y en soluciones que ya programaste en el pasado (por ejemplo, integraciones a APIs complejas que hiciste hace 2 años y de las cuales ya no te acuerdas).

## Arquitectura Autónoma y Segura

### 1. Ingesta Silenciosa (Idle Watcher)
OpenACM contiene un *background watcher* (\`resurrection_watcher.py\`) que usa una lógica asíncrona inteligente. El proceso **solo funciona cuando OpenACM está en IDLE**. Si el LLM empieza a pensar o procesar un mensaje para ti, la indexación se pausa automáticamente. Además, procesa archivos lentamente (con throttling) para no provocar ningún impacto en el rendimiento de tu CPU/RAM, permitiéndote jugar o compilar sin lag.

### 2. Filtro Anti-Basura Multinivel
Indexar proyectos de software normalmente llenaría la base de datos de basura inservible. El Watcher de OpenACM está programado para **ignorar proactivamente** elementos pesados de los motores más comunes:
- **Node.js**: Ignora la carpeta \`node_modules\`, directorio \`.next\`, \`dist\`, \`build\`.
- **Python**: Ignora directorios como \`.venv\`, \`__pycache__\`, \`.pytest_cache\`.
- **Unity**: Excluye brutalmente \`Library/\`, \`Temp/\`, \`Logs/\`, \`Builds/\`.
- **Unreal Engine**: Omite \`Binaries/\`, \`Intermediate/\`, \`Saved/\`.
- **.NET / C#**: Omite carpetas \`bin\` y \`obj\`.
- **Cachés de modelos ML**: \`models\`, \`weights\`, \`checkpoints\`, \`.cache\`, \`.huggingface\`, etc.

Además, **solo indexa código fuente** — extensiones \`.py\`, \`.js\`, \`.jsx\`, \`.ts\`, \`.tsx\`, \`.cs\`, \`.cpp\`, \`.h\`, \`.c\`, \`.rs\`, \`.go\`, \`.rb\`, \`.php\`, \`.java\`, \`.kt\`, \`.swift\`, \`.lua\`, \`.sh\`, \`.bash\`, \`.ps1\` — y omite archivos de más de 500 KB. JSON, markup y estilos no se indexan.

### 3. Chunking y Eliminación Inteligente
En lugar de pasar todo un archivo fuente inmenso de 2,000 líneas que mermaría la densidad semántica de los vectores, OpenACM divide los archivos automáticamente en pequeños **bloques superpuestos (overlapping)** de código. El progreso se guarda en \`data/resurrection_state.json\` y se hace un reescaneo completo **una vez por semana**. Y lo más importante: si modificas un archivo en tu editor, OpenACM eliminará los *embeddings* de tu versión anterior antes de ingestar la nueva, **manteniendo limpia tu Base de Datos** de versiones obsoletas o código muerto.

### 4. Filtro Anti-Junior (Garantía de Calidad)
**¿Qué pasa si mi código del 2021 era muy malo y no usaba Clean Code?**
OpenACM lo tiene previsto. El código recuperado de proyectos antiguos es inyectado al LLM no para que haga un "Copy-Paste" ciego, sino con una instrucción fuerte (System Prompt) de que **él es el Senior Developer**. Su trabajo es extraer la **lógica de negocio abstracta** y las reglas del dominio de ese código viejo, pero proveerte la solución siempre refactorizada usando los estándares modernos.

## ⚠️ Advertencia de Privacidad y Seguridad

> [!CAUTION]
> **Secretos y Tokens Hardcodeados**
> OpenACM está diseñado con seguridad estructural (Secure by Design): como solo indexa extensiones de código fuente, el Watcher **nunca lee archivos \`.env\`, \`.pem\`, \`.key\`** ni configuraciones. Todo lo que RAG indexa se guarda **solo en tu base de datos vectorial local** (\`data/vectordb\`, sin cifrar). Nunca se envía un proyecto entero a internet.
> 
> **PERO OJO:** Si dentro de un archivo de código legítimo (ej. \`database.py\` o \`config.js\`) cometiste el error en el pasado de dejar un token AWS o un password *hardcodeado* en el texto sin formato, esa línea será almacenada en tu base de datos Vectorial Local. Si a futuro le pides a un LLM online (como OpenAI o Claude) que te ayude con ese código, el sistema sacará el fragmento de la base local y **sí lo enviará en el prompt hacia la nube** para procesar la respuesta.
> 
> *Solución: Trata siempre de usar proveedores locales (vía Ollama) si vas a trabajar sobre repositorios gubernamentales o con credenciales hardcodeadas sucias.*

## ¿Cómo activarlo?

### Vía Chat (Flujo Autónomo)
Si la característica no está activa, OpenACM mismo te la "ofrecerá" cuando tu conversación con él llegue a una conclusión amigable. Solo necesitas responderle en el chat con la ruta de tu proyecto:
> "Indexa mis juegos de \`D:\\UnityProjects\`"

El LLM detectará tu intención, correrá internamente la herramienta \`add_resurrection_path\`, guardará la configuración y activará el Watcher sin que tengas que tocar nada de la interfaz.

### Vía Dashboard
1. Abre el Dashboard web (por defecto \`http://127.0.0.1:47821\`).
2. Ve a la pestaña de **Configuración**.
3. En la sección de **Code Resurrection**, agrega explícitamente las rutas raíz de tus proyectos.

### Vía configuración o API
Las rutas se guardan en \`resurrection_paths\` (en \`config/local.yaml\`):

\`\`\`yaml
resurrection_paths:
  - D:\\UnityProjects
  - /home/yo/proyectos
\`\`\`

También puedes usar \`GET/POST/DELETE /api/config/resurrection_paths\` con \`{"path": "..."}\`; el \`GET\` devuelve además cuántos archivos están indexados.

---
**Nota:** El proceso de indexación de repositorios masivos puede tardar horas. No te preocupes si no ves el contexto de forma inmediata en las siguientes preguntas; la paciencia es clave para que OpenACM siga siendo imperceptible para tu PC mientras arma tu copia de seguridad mental paso a paso.

`
  },
  {
    "slug": "24-plugins",
    "title": "Plugin System",
    "section": "Documentation",
    "content": `
# Plugin System

OpenACM's plugin system lets you bundle tools, skills, API routes, intent keywords, LLM context, frontend nav items, a settings form and even a custom dashboard into a single self-contained package — without touching core source files. Plugins are auto-discovered at startup and can also be installed as regular pip packages.

## Built-in Plugins

| Plugin | Name | What it adds |
|--------|------|--------------|
| Content Automation | \`content_automation\` | Content capture / social posting tools, \`/content\` approval page, background session watcher |
| Gmail Classifier | \`gmail_classifier\` | AI email categorization, replies and digests, \`/gmail-classifier\` page and \`/api/gmail-classifier/*\` routes — see [Gmail Classifier](./31-gmail-classifier.md) |
| Home Assistant | \`home_assistant\` | 8 \`ha_*\` tools, \`/home-assistant\` page, live device state over WebSocket, settings form (URL + token) — see [Home Assistant Setup](./HOME_ASSISTANT_SETUP.md) |

All plugins are **enabled by default**; disable any of them on the \`/plugins\` page.

---

## How It Works

At startup, \`app.py\` calls:

\`\`\`
PluginManager.load_builtin_plugins()   ← scans openacm/plugins/*/ + "openacm.plugins" entry points
PluginManager.load_enabled_state(db)   ← reads each plugin's enabled flag (default: enabled)
PluginManager.start_all(...)           ← registers tools/keywords/skills, calls on_start() on each enabled plugin
\`\`\`

Plugin API routers are mounted under \`/api/\` when the web server is created.

Each plugin subdirectory inside \`src/openacm/plugins/\` that exposes a module-level \`PLUGIN\` instance is loaded automatically. No registration code needed in \`app.py\`.

---

## Plugin Base Class

All plugins inherit from \`openacm.plugins.Plugin\`:

\`\`\`python
from openacm.plugins import Plugin

class MyPlugin(Plugin):
    name        = "my_feature"   # unique, snake_case
    version     = "1.0.0"
    description = "Short description"
    author      = "You"

    # ── Tools ──────────────────────────────────────────────
    def get_tool_modules(self) -> list:
        """Return Python modules that contain @tool-decorated functions."""
        from openacm.plugins.my_feature import tools
        return [tools]

    # ── Skills ─────────────────────────────────────────────
    def get_skills(self) -> list[dict]:
        """Skill definitions auto-loaded into the DB at startup (skipped if name exists)."""
        return [
            {
                "name":        "my-skill",
                "description": "What it does",
                "content":     "# My Skill\\n...",
                "category":    "general",
            }
        ]

    # ── API routes ──────────────────────────────────────────
    def get_api_router(self):
        """Return a FastAPI APIRouter mounted under /api/."""
        from fastapi import APIRouter
        router = APIRouter(prefix="/my-feature")

        @router.get("/status")
        async def status():
            return {"ok": True}

        return router

    # ── Public (self-authenticated) routes ─────────────────
    def get_public_api_paths(self) -> list[str]:
        """Routes (relative to /api) that skip the dashboard token because they
        verify the caller themselves, e.g. an HMAC-signed third-party webhook."""
        return []

    # ── LLM system prompt ──────────────────────────────────
    def get_context_extension(self) -> str:
        """Short markdown snippet appended to the system prompt on every message."""
        return (
            "## My Feature\\n"
            "When the user asks about X, call \`my_tool\`."
        )

    # ── Intent routing ─────────────────────────────────────
    def get_intent_keywords(self) -> dict[str, list[str]]:
        """Keywords that trigger inclusion of this plugin's tools in LLM calls."""
        return {
            "my_feature": ["keyword1", "keyword2", "palabra clave"],
        }

    # ── Frontend sidebar ───────────────────────────────────
    def get_nav_items(self) -> list[dict]:
        """Sidebar navigation items added to the frontend automatically."""
        return [
            {
                "path":    "/my-page",
                "label":   "My Feature",
                "icon":    "Star",          # any lucide-react icon name
                "section": "main",          # "main" or "bottom"
            }
        ]

    # ── Lifecycle ──────────────────────────────────────────
    async def on_start(self, *, tool_registry, database, event_bus,
                       llm_router, brain, skill_manager,
                       activity_watcher, cron_scheduler, swarm_manager,
                       workspace_root, config, **_) -> None:
        """Called after all core systems are up. Inject dependencies here."""

    async def on_stop(self) -> None:
        """Called on shutdown. Clean up connections, background tasks, etc."""


PLUGIN = MyPlugin()
\`\`\`

Every method has a safe default (returns \`[]\`, \`""\`, \`None\`, or does nothing), so you only override what you need.

---

## Creating a Plugin (Step by Step)

### 1. Create the package

\`\`\`
src/openacm/plugins/
└── my_feature/
    ├── __init__.py      ← defines PLUGIN
    └── tools.py         ← @tool-decorated functions
\`\`\`

### 2. Write your tools (\`tools.py\`)

\`\`\`python
from openacm.tools.base import tool

@tool(
    name="my_tool",
    description="Does something useful",
    parameters={
        "type": "object",
        "properties": {
            "input": {"type": "string", "description": "The input value"},
        },
        "required": ["input"],
    },
    risk_level="low",
    category="my_feature",
)
async def my_tool(input: str, _sandbox=None, _brain=None, **_) -> str:
    return f"Processed: {input}"
\`\`\`

### 3. Define the plugin (\`__init__.py\`)

\`\`\`python
from openacm.plugins import Plugin

class MyFeaturePlugin(Plugin):
    name = "my_feature"
    version = "1.0.0"
    description = "Example plugin"

    def get_tool_modules(self):
        from openacm.plugins.my_feature import tools
        return [tools]

    def get_intent_keywords(self):
        return {"my_feature": ["my keyword", "mi palabra"]}

    def get_nav_items(self):
        return [{"path": "/my-feature", "label": "My Feature", "icon": "Star"}]

    async def on_start(self, *, database=None, event_bus=None, **_):
        # Store references your tools need
        from openacm.plugins.my_feature import tools
        tools._database = database

    async def on_stop(self):
        pass


PLUGIN = MyFeaturePlugin()
\`\`\`

### 4. Done — no registration needed

OpenACM auto-discovers your plugin on next startup. The tools are registered, keywords are merged into the intent router, and the nav item appears in the sidebar.

---

## Skills

Skills are markdown documents that get injected into the LLM system prompt when active. Plugins can ship skills that auto-load into the DB at startup:

\`\`\`python
def get_skills(self) -> list[dict]:
    return [
        {
            "name":        "my-skill",           # unique name — skipped if already exists
            "description": "Enables X behavior",
            "content":     "# My Skill\\n\\nWhen the user asks about X, do Y.",
            "category":    "development",         # freeform label shown in dashboard
        }
    ]
\`\`\`

- Skills are inserted once (on first load). If the name already exists in the DB it is not overwritten, so users can edit them freely.
- Users can activate/deactivate them from the dashboard Skills page like any other skill.

---

## API Routes

Plugins can expose their own FastAPI endpoints, mounted automatically under \`/api/\`:

\`\`\`python
def get_api_router(self):
    from fastapi import APIRouter
    router = APIRouter(prefix="/my-feature")

    @router.get("/status")
    async def status():
        return {"ok": True}

    @router.post("/do-thing")
    async def do_thing(body: dict):
        ...
        return {"result": "done"}

    return router
\`\`\`

Routes defined with \`prefix="/my-feature"\` are available at \`/api/my-feature/status\`, \`/api/my-feature/do-thing\`, etc.

Plugin routers are mounted when the FastAPI app is created, after all plugins have started — so dependencies injected in \`on_start()\` are available inside route handlers via closure.

---

## Intent Keywords

Intent keywords control when your plugin's tools are sent to the LLM. The tool router matches them against the user's message before calling the LLM — only relevant tools are included in each call (cheaper, faster, less noise).

\`\`\`python
def get_intent_keywords(self):
    return {
        # Category name (new or existing)
        "my_feature": [
            "keyword",          # English
            "palabra clave",    # Spanish — multi-language supported
            "action verb",
        ],
    }
\`\`\`

If you use an existing category name (e.g. \`"system"\`, \`"file"\`, \`"web"\`), your keywords are **merged** into that category's list. If you use a new name, a new category is created.

---

## LLM Context Extension

The string returned by \`get_context_extension()\` is appended to the system prompt on every message. Keep it short — it costs tokens on every call.

\`\`\`python
def get_context_extension(self) -> str:
    return (
        "## My Feature\\n"
        "Call \`my_tool\` when the user asks about X. "
        "Never call it for Y."
    )
\`\`\`

Use it to tell the LLM:
- When to call your tools
- Any constraints or caveats
- Output format expectations

---

## Frontend Nav Items

The sidebar fetches \`/api/plugins/nav\` on mount and renders any items returned:

\`\`\`python
def get_nav_items(self) -> list[dict]:
    return [
        {
            "path":    "/my-page",     # Must match a Next.js route under frontend/app/
            "label":   "My Page",      # Display name
            "icon":    "Zap",          # lucide-react icon (https://lucide.dev/icons)
            "section": "main",         # "main" (top area) or "bottom" (settings area)
        }
    ]
\`\`\`

The frontend page itself (\`frontend/app/my-page/page.tsx\`) still needs to be created manually.

---

## Dashboard Settings & Custom UI

The \`/plugins\` dashboard page can render a generic settings form and/or link out to a plugin's own page — no Next.js code required for either.

### \`get_config_schema()\`

Return a list of field definitions and the dashboard's "Configurar" button + form does the rest:

\`\`\`python
def get_config_schema(self) -> list[dict]:
    return [
        {
            "key":      "url",
            "label":    "Home Assistant URL",
            "type":     "text",        # "text" | "password" | "number" | "boolean"
            "required": True,
            "help":     "e.g. http://homeassistant.local:8123",
        },
        {
            "key":      "token",
            "label":    "Long-Lived Access Token",
            "type":     "password",
            "required": True,
            "help":     "",
        },
    ]
\`\`\`

- \`GET /api/plugins/{name}/config\` returns this schema plus the plugin's currently saved values (password-type values come back masked as \`"***"\`).
- \`POST /api/plugins/{name}/config\` validates required fields and saves the rest — resubmitting \`"***"\` for a password field keeps its existing value instead of overwriting it.
- Inside your plugin, read a saved value back with:

\`\`\`python
url = await self.get_setting("url", default=None)
\`\`\`

\`get_setting()\` reads straight from the \`plugin_state\` table via \`self._database\`. It works even without a \`get_config_schema()\` — any plugin can persist and read arbitrary settings this way.

> **Note on \`number\`/\`boolean\` fields:** the dashboard form serializes every field value as a string when it POSTs (e.g. \`"true"\`/\`"false"\` for a \`boolean\` field, \`"42"\` for a \`number\` field), and \`get_setting()\` returns whatever was stored — a string. If your plugin needs an actual \`int\`/\`bool\`, cast it yourself: \`int(await self.get_setting("port", default="0"))\` or \`(await self.get_setting("enabled", default="false")) == "true"\`.

### \`has_custom_ui()\`

Some plugins need a richer view than the generic config form allows, but without paying the cost of a \`frontend/app/\` page + rebuild (see [Frontend Pages](#frontend-pages)). Return \`True\` to tell the dashboard your plugin has one:

\`\`\`python
def has_custom_ui(self) -> bool:
    return True
\`\`\`

This only sets a flag the dashboard reads (via \`GET /api/plugins\` → \`has_custom_ui\`) — you're still responsible for serving the page. Your \`get_api_router()\` must expose a \`GET /ui\` route returning self-contained HTML (inline CSS/JS, no external assets), and the router's prefix must be \`/plugins/{name}\` so the route resolves at \`/api/plugins/{name}/ui\`. The button next to your plugin on \`/plugins\` opens \`/plugins/view?name={name}\`, which embeds that page in an iframe inside the normal app shell (sidebar and header stay visible; the token is never put in a visible URL):

\`\`\`python
def get_api_router(self):
    from fastapi import APIRouter
    from fastapi.responses import HTMLResponse
    router = APIRouter(prefix=f"/plugins/{self.name}")

    @router.get("/ui")
    async def ui():
        return HTMLResponse("<html>...</html>")

    return router
\`\`\`

### Toggling a Plugin On/Off

Every plugin card on \`/plugins\` has an enabled/disabled checkbox, backed by \`POST /api/plugins/{name}/toggle\`. Flipping it only writes the flag to the \`plugin_state\` table — it does **not** hot-reload anything. Tools, keywords, nav items, and API routers are all wired once at startup (\`PluginManager.start_all()\`), so the change takes effect on the **next restart**, not immediately. The dashboard shows a "restart to apply plugin changes" banner after a toggle to make this explicit.

---

## Lifecycle Hooks

### \`on_start(**app_context)\`

Called once, after all core systems are initialized. Use it to:
- Start background watchers or schedulers
- Inject \`database\`, \`event_bus\`, \`llm_router\`, etc. into your tool modules
- Subscribe to EventBus events

**If you override \`on_start()\`, call \`await super().on_start(**app_context)\` first.** The base implementation is what stores \`self._database\` — skip it and \`get_setting()\` will silently keep returning your \`default=\` value forever, even after the user saves settings from the dashboard.

Available kwargs:

| Name | Type | Description |
|---|---|---|
| \`config\` | \`AppConfig\` | Full app config (Pydantic model) |
| \`database\` | \`Database\` | SQLite database instance |
| \`event_bus\` | \`EventBus\` | Pub/sub event system |
| \`llm_router\` | \`LLMRouter\` | LLM call interface |
| \`brain\` | \`Brain\` | Message processing core |
| \`tool_registry\` | \`ToolRegistry\` | Live tool registry |
| \`skill_manager\` | \`SkillManager\` | Skills system |
| \`activity_watcher\` | \`ActivityWatcher\` | OS activity watcher |
| \`cron_scheduler\` | \`CronScheduler\` | Cron job scheduler |
| \`swarm_manager\` | \`SwarmManager\` | Multi-agent swarm system |
| \`workspace_root\` | \`Path\` | Base workspace directory |

### \`on_stop()\`

Called on graceful shutdown. Stop your background tasks here.

---

## Public Webhook Routes

By default every plugin route under \`/api/\` requires the dashboard token. If a route receives calls from a third party that can't send it (e.g. a signed webhook), list it in \`get_public_api_paths()\` — paths are relative to \`/api\`, so \`"/my-feature/webhook"\` exempts \`/api/my-feature/webhook\`. Only do this for routes that verify the request themselves (HMAC signature, shared secret…). For simple cases, prefer a [webhook connector](./29-webhook-connectors.md), which needs no code.

---

## Real Example: Content Automation Plugin

\`src/openacm/plugins/content/\` (\`content_automation\`) is the simplest built-in plugin. It:

- Registers \`capture_content_moment\`, \`generate_content_for_moment\`, \`list_content_moments\`, etc. from \`content_gen_tool.py\` and \`social_media_tool.py\`
- Adds achievement keywords (\`"funcionó"\`, \`"it works"\`, \`"listo"\`, etc.) to trigger content tools
- Injects a system prompt hint telling the LLM to call \`capture_content_moment\` silently when something share-worthy happens
- Adds a \`/content\` nav item to the sidebar
- Starts a \`ContentSessionWatcher\` background task in \`on_start()\`

---

## pip-Installable Plugins

Plugins can be distributed as pip packages and registered via Python entry points — no code changes to OpenACM required:

\`\`\`toml
# pyproject.toml of your package
[project.entry-points."openacm.plugins"]
my_feature = "my_package:PLUGIN"
\`\`\`

After \`pip install my-package\`, OpenACM discovers and loads it automatically on next startup alongside built-in plugins.

---

## Frontend Pages

Plugin frontend pages (Next.js routes) must currently be placed physically inside \`frontend/app/\`. There is no dynamic frontend loading — Next.js compiles pages at build time.

**Recommended workflow:**
1. Create \`frontend/app/my-feature/page.tsx\`
2. Register the nav item via \`get_nav_items()\` — the sidebar picks it up automatically at runtime
3. The page fetches data from your plugin's API routes (\`/api/my-feature/...\`)

This keeps the backend fully plug-and-play while the frontend requires a project rebuild when adding new pages.

---

## Summary

| What | Where | Status |
|---|---|---|
| Tools | \`get_tool_modules()\` → \`@tool\` modules | ✅ Plug-and-play |
| Skills | \`get_skills()\` → auto-loaded to DB | ✅ Plug-and-play |
| API routes | \`get_api_router()\` → mounted under \`/api/\` | ✅ Plug-and-play |
| LLM behavior | \`get_context_extension()\` | ✅ Plug-and-play |
| Intent routing | \`get_intent_keywords()\` | ✅ Plug-and-play |
| Frontend nav | \`get_nav_items()\` → \`/api/plugins/nav\` | ✅ Plug-and-play |
| Frontend pages | \`frontend/app/my-page/page.tsx\` | ⚠️ Manual (requires rebuild) |
| Dashboard settings form | \`get_config_schema()\` → \`/plugins\` config modal | ✅ Plug-and-play |
| Custom plugin UI | \`has_custom_ui()\` + \`GET /ui\` → embedded at \`/plugins/view\` | ✅ Plug-and-play |
| Public webhook routes | \`get_public_api_paths()\` | ✅ Plug-and-play |
| Enable/disable | \`/plugins\` toggle → \`plugin_state\` table | ⚠️ Requires restart |
| PyPI install | \`entry-points."openacm.plugins"\` | ✅ Supported |
| Startup/shutdown | \`on_start()\` / \`on_stop()\` | ✅ Plug-and-play |

`
  },
  {
    "slug": "25-third-party-integrations",
    "title": "Third-Party Integrations",
    "section": "Documentation",
    "content": `
# Third-Party Integrations

OpenACM integrates a set of curated MIT-licensed libraries that enhance core capabilities without requiring architectural changes. All four are listed as regular dependencies in \`pyproject.toml\`, so a normal install includes them; the code still falls back gracefully if any is unavailable or fails.

---

## MarkItDown

**Repo:** https://github.com/microsoft/markitdown  
**License:** MIT  
**Install:** \`pip install "markitdown[docx,xlsx,pptx,audio-transcription]"\`

### What it does

Converts any file format to clean Markdown optimized for LLM consumption. Used as the universal file handler for chat attachments and for files uploaded to an agent's knowledge base.

### Integration point

\`src/openacm/core/brain_multimodal.py\` — attachment processing pipeline (office/binary files, and the last-resort audio transcription step); \`src/openacm/utils/knowledge_file.py\` — agent knowledge base uploads.

| Format | Without MarkItDown | With MarkItDown |
|---|---|---|
| \`.docx\` | \`[File attached: doc.docx]\` | Full document content as Markdown |
| \`.xlsx\` | \`[File attached: sheet.xlsx]\` | Tables rendered as Markdown |
| \`.pptx\` | \`[File attached: slides.pptx]\` | Slide content as text |
| \`.zip\` | \`[File attached: archive.zip]\` | Extracts and converts contents |
| Audio | Falls through to Whisper chain | \`speech_recognition\` fallback |
| Images (no vision model) | \`[Image attached: ...]\` | EXIF metadata + OCR text |

### Fallback behavior

If MarkItDown fails or is not installed, the attachment is shown as \`[File attached: filename (ext)]\`. Nothing breaks.

---

## Chonkie

**Repo:** https://github.com/chonkie-inc/chonkie  
**License:** MIT  
**Install:** \`pip install "chonkie[sentence]"\`

### What it does

A lightweight RAG chunking library with multiple strategies: token-based, sentence-based, semantic, and neural. Replaces naive paragraph/sentence splitting with linguistically aware chunking that improves retrieval quality in ChromaDB.

### Integration point

\`src/openacm/core/rag.py\` — \`_split_text()\` method, used whenever text is ingested into the vector store (conversation memory, notes, document ingestion via \`ingest()\`).

**Strategy used:** \`SentenceChunker\` — splits on sentence boundaries, respects semantic units, applies overlap between chunks.

\`\`\`
chunk_size:    500 characters
chunk_overlap: 50 characters
\`\`\`

### Why it matters

The naive split cut text at fixed character counts, often splitting mid-sentence and losing context at chunk boundaries. Chonkie ensures each chunk is a complete semantic unit, which directly improves the relevance of RAG-retrieved results.

### Fallback behavior

If chonkie is not installed or fails, \`_split_text()\` falls back to the original paragraph/sentence splitting logic transparently.

> **Note:** The Code Resurrection watcher (\`resurrection_watcher.py\`) uses line-based chunking (150 lines, 20-line overlap) and bypasses \`_split_text()\` entirely via \`ingest_raw_chunks()\` — chonkie does not affect it.

---

## Docling

**Repo:** https://github.com/DS4SD/docling  
**License:** MIT  
**Author:** IBM Research  
**Install:** \`pip install "docling>=2.0"\`

### What it does

Layout-aware document parsing for PDFs, Word, PowerPoint, Excel, HTML, and more. Unlike \`pypdf\` which extracts raw character streams, docling understands document structure: multi-column layouts, tables, headings, figures, and form fields. Output is structured Markdown.

### Integration point

\`src/openacm/core/brain_multimodal.py\` — \`_extract_pdf_text()\` method (mixed into \`Brain\`), called when a \`.pdf\` attachment is processed. Falls back to \`pypdf\`.

**Priority chain:**
1. **docling** — layout-aware, handles tables and columns correctly
2. **pypdf** — basic text extraction fallback (always installed)

### Why it matters

\`pypdf\` on a multi-column PDF or a table-heavy document produces garbled text where columns run together. Docling reproduces the logical reading order and renders tables as Markdown tables the LLM can actually use.

### Fallback behavior

If docling fails (missing dep, corrupted PDF, etc.), \`_extract_pdf_text()\` falls back to \`pypdf\` automatically. A debug log entry is emitted.

---

## Instructor

**Repo:** https://github.com/jxnl/instructor  
**License:** MIT  
**Install:** \`pip install "instructor>=1.0"\`

### What it does

Structured LLM outputs with Pydantic validation and automatic retries. Wraps \`litellm\` (already used by OpenACM) to return typed Python objects instead of raw strings.

### Integration point

\`src/openacm/core/brain_multimodal.py\` — \`Brain.structured_extract()\` async method.

\`\`\`python
from pydantic import BaseModel

class Sentiment(BaseModel):
    label: str        # "positive" | "negative" | "neutral"
    score: float      # 0.0 – 1.0

result = await brain.structured_extract(
    text="I really loved this product!",
    schema=Sentiment,
    system="Classify the sentiment of the user message.",
)
# result.label == "positive"
# result.score == 0.95
\`\`\`

### When to use it

Use \`structured_extract()\` inside custom tools or skills when you need the LLM to return data in a specific shape — for example, extracting entities from a document, classifying intent, or generating structured metadata.

The method handles:
- Automatic retries (up to 2) when the model returns malformed JSON
- Falls back to \`None\` if instructor is not installed or the call fails
- Uses the currently active model from \`llm_router\`

### Fallback behavior

If instructor is not installed, \`structured_extract()\` logs a warning and returns \`None\`. Tools that use it should handle \`None\` gracefully.

`
  },
  {
    "slug": "27-cli-setup",
    "title": "CLI Setup Wizard",
    "section": "Documentation",
    "content": `
# CLI Setup Wizard

OpenACM incluye un wizard de configuración completamente funcional desde consola, ideal para servidores Linux headless, VPS, o cualquier entorno sin GUI.

---

## Lanzar el wizard

\`\`\`bash
# Menú principal (acceso directo a cualquier sección)
openacm-setup

# Configuración guiada paso a paso (recomendado para primera vez)
openacm-setup --guided
openacm-setup -g

# Alternativa directa sin instalar
python -m openacm.cli.setup_wizard
python -m openacm.cli.setup_wizard --guided
\`\`\`

---

## Modos de operación

### Menú principal

Muestra el estado actual de todas las secciones (✓/✗) y permite saltar a cualquiera directamente.

\`\`\`
┌─────────────────────────────────────────────────┐
│  OpenACM Setup Wizard                           │
│  Configura tu agente sin necesitar el navegador │
└─────────────────────────────────────────────────┘

  ✓  Proveedores LLM         3 built-in + 1 custom
  ✓  Modelo por defecto      opencode_go
  ✗  Canales                 —
  ✓  Perfil de usuario       Cortana
  ✗  Google Services         —
  ✓  Local Router            habilitado
  ...

  [G]  Configuración guiada (paso a paso)

  [ 1]  Proveedores LLM  (API keys)
  [ 2]  Modelo por defecto + parámetros
  ...
  [0]  Salir
\`\`\`

### Configuración guiada (\`--guided\`)

Recorre todas las secciones en orden lógico. En cada paso puedes:

| Tecla | Acción |
|-------|--------|
| \`Enter\` / \`N\` | Siguiente sección |
| \`P\` | Sección anterior |
| \`M\` | Volver al menú principal |

---

## Secciones

### 1 · Proveedores LLM

Configura las API keys de los proveedores de IA. Se guardan en \`config/.env\`.

| Proveedor | Variable |
|-----------|----------|
| OpenAI | \`OPENAI_API_KEY\` |
| Anthropic | \`ANTHROPIC_API_KEY\` |
| Google Gemini | \`GEMINI_API_KEY\` |
| xAI (Grok) | \`XAI_API_KEY\` |
| OpenRouter | \`OPENROUTER_API_KEY\` |
| OpenCode.GO | \`OPENCODE_GO_API_KEY\` |
| Ollama | *(no requiere key — local)* |

**Controles:** Enter = mantener actual · \`x\` = borrar

---

### 2 · Modelo por defecto + parámetros

Selecciona el proveedor y modelo que OpenACM usará por defecto, y opcionalmente ajusta:

- **Temperature** (0.0–2.0) — creatividad vs. determinismo
- **Max tokens** — límite de respuesta
- **Top-p** (0.0–1.0) — diversidad de tokens

Se guarda en \`config/local.yaml\` bajo \`llm.default_provider\` y \`llm.providers.{id}\`.

---

### 3 · Canales

Conecta OpenACM a Telegram y/o Discord.

| Canal | Variable |
|-------|----------|
| Telegram | \`TELEGRAM_TOKEN\` |
| Discord | \`DISCORD_TOKEN\` |

- **Telegram:** obtén el token con \`@BotFather\` → \`/newbot\`
- **Discord:** \`discord.com/developers/applications\` → Bot → Token

---

### 4 · Perfil de usuario

Personaliza la identidad del asistente:

- **Nombre del asistente** — cómo se llama (ej: "Cortana")
- **Tu nombre** — cómo te llama a ti
- **Comportamiento / personalidad** — instrucciones de tono, idioma, estilo

Se guarda en \`config/local.yaml\` bajo la clave \`A\` con \`onboarding_completed: true\`.

---

### 5 · Google Services

Conecta Gmail, Drive, Calendar, Sheets y YouTube.

**Paso 1 — Credenciales:** El wizard te guía para obtener el JSON de OAuth2 de Google Cloud Console y lo guarda en \`config/google_credentials.json\`.

**Paso 2 — Token OAuth2:** Requiere abrir un navegador al menos una vez. Opciones para servidores headless:

\`\`\`bash
# Opción A: SSH port-forward (recomendado)
ssh -L 47821:localhost:47821 usuario@servidor
# Luego abre http://localhost:47821 en tu navegador local
# y completa el paso de Google en el onboarding web.

# Opción B: desde otro dispositivo en la misma red
# Abre http://IP-DEL-SERVIDOR:47821 desde tu celular o laptop
\`\`\`

El token se guarda automáticamente en \`config/google_token.json\`.

---

### 6 · Proveedores personalizados

Agrega cualquier API compatible con OpenAI (LM Studio, vLLM, Ollama API, etc.).

Campos requeridos:
- **Nombre** — identificador visible
- **Base URL** — ej: \`http://localhost:1234/v1\`
- **Modelo por defecto**

Campos opcionales:
- **API Key** — si la API lo requiere
- **Modelos adicionales** — lista separada por comas

Se guardan en \`config/custom_providers.json\`.

---

### 7 · Local Router

El Local Router clasifica mensajes cortos sin consumir tokens del LLM (~5ms usando MiniLM embeddings locales).

| Parámetro | Descripción |
|-----------|-------------|
| \`enabled\` | Activar/desactivar el router |
| \`observation_mode\` | Solo registra decisiones, no enruta (útil para debugging) |
| \`confidence_threshold\` | 0.5–1.0 — qué tan seguro debe estar para enrutar sin LLM |

---

### 8 · Code Resurrection

Configura rutas que OpenACM indexa para recuperar contexto de sesiones de trabajo pasadas.

- Agrega rutas de proyectos, workspaces, o cualquier directorio relevante
- OpenACM las usa para reconstruir contexto cuando detecta que estás trabajando en algo familiar

---

### 9 · RAG & Compaction

| Parámetro | Rango | Descripción |
|-----------|-------|-------------|
| \`rag_relevance_threshold\` | 0.1–0.95 | Qué tan relevante debe ser un recuerdo para incluirlo |
| \`compact_threshold\` | 5–200 | Mensajes antes de compactar (ver nota) |
| \`compact_keep_recent\` | 2–20 | Mensajes recientes que se conservan completos |

**Valores por defecto:** threshold=0.5, compact=25, keep=6

> **Nota (v0.4.7):** el wizard todavía guarda \`compact_threshold\`, pero el runtime ya no lo usa: la compactación se dispara cuando la conversación llega a \`compact_ratio\` (por defecto 0.60) de la ventana de contexto del modelo. Para cambiarlo usa **Configuración → Memory & RAG** en el dashboard o escribe \`compact_ratio\` en \`config/local.yaml\`.

---

### 10 · Debug & Logging

| Parámetro | Descripción |
|-----------|-------------|
| Debug mode | Activa logs de nivel DEBUG en \`data/logs/\` |
| Verbose channels | Loguea todos los mensajes de Telegram/Discord |
| Modo de ejecución | \`confirmation\` \\| \`auto\` \\| \`yolo\` |

**Modos de ejecución:**
- \`confirmation\` — pide OK antes de ejecutar comandos (recomendado)
- \`auto\` — solo ejecuta (sin preguntar) los comandos de \`whitelisted_commands\`; rechaza el resto
- \`yolo\` — sin restricciones (solo para desarrollo local)

---

### 11 · Dashboard Token

Genera o regenera el token de autenticación para el web UI y el REPL.

\`\`\`bash
# El token se usa en:
# · http://localhost:47821  (web UI)
# · openacm-cli             (modo REPL interactivo)
\`\`\`

El token se guarda como \`DASHBOARD_TOKEN\` en \`config/.env\`.

---

## Configuración manual (sin wizard)

Si prefieres configurar sin el wizard, edita los archivos directamente:

### \`config/.env\`
\`\`\`env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GEMINI_API_KEY=AIza...
XAI_API_KEY=xai-...
OPENROUTER_API_KEY=sk-or-...
OPENCODE_GO_API_KEY=...
TELEGRAM_TOKEN=123456:ABC...
DISCORD_TOKEN=...
DASHBOARD_TOKEN=...  # opcional: si falta, OpenACM genera uno al arrancar y lo escribe aquí
\`\`\`

### \`config/local.yaml\`
\`\`\`yaml
A:
  name: "NombreAsistente"
  system_prompt: "Eres ... [USER INSTRUCTIONS - BEHAVIOR MODE]: My user's name is ..."
  onboarding_completed: true
  rag_relevance_threshold: 0.5
  compact_ratio: 0.60
  compact_keep_recent: 6

llm:
  default_provider: opencode_go
  providers:
    opencode_go:
      base_url: "https://opencode.ai/zen/go/v1"
      default_model: "kimi-k2.5"

security:
  execution_mode: confirmation

local_router:
  enabled: true
  confidence_threshold: 0.88

resurrection_paths:
  - /ruta/a/tu/proyecto
\`\`\`

---

## Setup en servidor Linux headless

Flujo recomendado para un VPS o servidor Ubuntu sin GUI:

\`\`\`bash
# 1. Instalar dependencias
sudo apt update && sudo apt install -y python3.12 python3.12-venv nodejs npm
# (el nodejs de apt puede ser < 20; alternativa más simple: ./setup.sh instala uv, Python 3.12 y Node 20)

# 2. Clonar e instalar
git clone https://github.com/Json55Hdz/OpenACM
cd OpenACM
python3.12 -m venv .venv && source .venv/bin/activate
pip install -e .

# 3. Buildear el frontend y copiarlo a src/openacm/web/static (solo una vez)
cd frontend && npm install && npm run deploy && cd ..

# 4. Correr el wizard de configuración
openacm-setup --guided

# 5. Para Google OAuth (si lo necesitas): port-forward desde tu máquina local
# ssh -L 47821:localhost:47821 usuario@servidor
# Luego abre http://localhost:47821 en tu navegador

# 6. Iniciar OpenACM
openacm
\`\`\`

---

---

## openacm-manage — Gestión desde consola

Para **usar** las funcionalidades del agente (swarms, cron, rutinas, etc.) mientras el servidor está corriendo:

\`\`\`bash
# Menú principal
openacm-manage

# Ir directo a una sección
openacm-manage swarms
openacm-manage cron
openacm-manage routines
openacm-manage skills
openacm-manage agents
openacm-manage stats
\`\`\`

> **Requisito:** OpenACM debe estar corriendo (\`openacm\`) antes de usar \`openacm-manage\`.

### Secciones del manager

| Tecla | Sección | Qué puedes hacer |
|-------|---------|-----------------|
| \`S\` | Swarms | Crear, planificar, iniciar, detener, monitorear, enviar mensajes |
| \`C\` | Cron Jobs | Crear jobs con expresiones cron, trigger manual, historial |
| \`R\` | Rutinas | Ver rutinas detectadas, ejecutar, activar/desactivar, analizar |
| \`K\` | Skills | Crear, generar con IA, activar/desactivar |
| \`A\` | Agentes | Crear, generar con IA, chatear/probar |
| \`T\` | Stats | Tokens, costos, memoria RAG, historial diario |

### Flujo típico de un Swarm

\`\`\`
openacm-manage swarms
→ [A] Crear nuevo swarm
→ Ingresa nombre y objetivo
→ El agente genera preguntas de clarificación → respondes
→ Se genera el plan (workers + tareas)
→ [I] Iniciar
→ [M] Monitorear en vivo (refresca cada 3s)
\`\`\`

### Crear un Cron Job

\`\`\`
openacm-manage cron
→ [A] Crear job
→ Nombre: "Reporte diario"
→ Expresión: 0 9 * * 1-5   (lun-vie a las 9:00 UTC — el scheduler usa UTC)
→ Tipo: custom_command
→ Comando: python scripts/backup.py   (comando de shell real, no un prompt)
→ Activar: sí
\`\`\`

---

## Archivos generados

| Archivo | Qué guarda |
|---------|-----------|
| \`config/.env\` | API keys, tokens, variables de entorno |
| \`config/local.yaml\` | Config local (sobreescribe default.yaml) |
| \`config/custom_providers.json\` | Proveedores OpenAI-compatibles |
| \`config/google_credentials.json\` | Credenciales OAuth2 de Google |
| \`config/google_token.json\` | Token de acceso de Google (generado tras OAuth) |
| \`data/debug_mode\` | \`true\` o \`false\` — activa logs detallados |

> **Nota:** \`config/.env\` y \`config/local.yaml\` están en \`.gitignore\`. Nunca los subas al repositorio.

`
  },
  {
    "slug": "28-agent-flows",
    "title": "Agent Flows",
    "section": "Documentation",
    "content": `
# Agent Flows

**Flows** are visual automations that belong to an [agent](./07-agents.md). A flow is a node graph — a Start node with parameters, some steps (HTTP calls, conditions, loops, WooCommerce product search, variables) and an End node that returns text. Every **active** flow becomes a tool the agent can call, so the LLM decides *when* to run it and the flow decides *exactly how*. A flow can also be triggered from outside through a [webhook connector](./29-webhook-connectors.md).

Flows run deterministically in \`FlowExecutor\` (\`src/openacm/core/flow_executor.py\`) — no LLM is involved while a flow executes.

---

## Where to find them

**Agents → (open an agent) → Flujos (Flows)**:
- **+ Nuevo flujo** creates a flow with a valid Start → End skeleton
- **Importar flujo** pastes a previously exported JSON
- The checkbox next to each flow marks it **active** (only active flows become tools)
- Clicking a flow opens the **flow editor**

---

## The Flow Editor

An Unreal-Blueprint-style node canvas (built on \`@xyflow/react\`):

- **Add nodes** by right-clicking the canvas (categories: FLUJO, LÓGICA, INTEGRACIONES, DATOS) or by dragging them in
- **Wire pins**: white *flow* pins define execution order; coloured *data* pins pass a value from one node's output into another node's input field
- **Inspector**: select a node to edit its config; text fields offer a variable picker populated with the real output shape of the last test run (including nested paths)
- **Guardar flujo** saves; the graph is validated on the server (\`400\` with the reasons if invalid)
- **▶ Probar flujo** runs the current canvas — even unsaved — with test parameters and shows each node's output and the final result
- **Exportar** downloads the flow as JSON (\`{"kind": "openacm-flow", "version": 1, "name", "description", "graph_json"}\`)
- **Chat panel**: describe what you want ("when the product isn't found, call this API…") and the agent builds or edits the flow for you with the \`create_or_update_agent_flow\` tool, using the current graph as context. Nodes without a position are laid out automatically
- **+ Skill**: attach a skill that explains to the agent when and how to use this flow (write it or generate it with AI)

---

## Node Types

| Node | Config | Flow pins | Data pins |
|------|--------|-----------|-----------|
| \`start\` | \`parameters: [{name, type: string\\|number\\|boolean, description, required}]\` | out: \`default\` | — (parameters are referenced as \`{{name}}\`) |
| \`http\` | \`url\`, \`method\` (GET/POST/PUT/DELETE), \`headers\`, \`body\` | in/out: \`default\` | in: \`url\`, \`body\` · out: \`response\` |
| \`conditional\` | \`field\`, \`operator\` (\`contains\`, \`equals\`, \`is_empty\`, \`is_error\`), \`value\` | in: \`default\` · out: \`true\`, \`false\` | in: \`field\`, \`value\` · out: \`result\` |
| \`woocommerce\` | \`connection_id\`, \`search_term\` | in/out: \`default\` | in: \`search_term\` · out: \`result\`, \`count\` |
| \`loop\` | \`max_iterations\` (default 200) | in: \`default\` · out: \`loop\` (per item), \`done\` | in: \`items\` (must be wired to a list) · out: \`item\`, \`index\` |
| \`set\` | \`name\` | none (pure node) | in: \`value\` (must be wired) · out: \`value\` — readable as \`{{name}}\` |
| \`get\` | \`name\` | none (pure node) | out: \`default\` |
| \`end\` | \`template\` | in: \`default\` | — returns the template with \`{{…}}\` substituted |

Rules enforced by the validator: exactly one \`start\`, at least one \`end\`, unique node ids, edges pointing at existing nodes, known node types, no flow-edge cycles (loops iterate through the \`loop\` node, never through a back-edge), and a flow-out pin can't be wired into a data-in pin.

### Behaviour notes

- **HTTP**: 15 s timeout; a non-2xx response is an error. The response is parsed as JSON when possible, otherwise kept as text.
- **Conditional**: \`contains\` / \`equals\` compare the resolved \`field\` with \`value\`; \`is_empty\` checks for an empty string; \`is_error\` checks whether the value starts with "error" — useful after an HTTP node.
- **Loop**: the chain wired to \`loop\` runs once per item; when that chain reaches a dead end the executor advances to the next item automatically (no back-wire needed), then follows \`done\`. Loops can be nested.
- **WooCommerce**: searches published products (up to 10) in the store of a WooCommerce **connection**, returning a formatted list (name, price, stock, link) and a count. Products without a price are reported as out of stock.
- A run is capped at 2,000 node visits as a safety net.

---

## Templates

Any text field that is not fed by a data wire can use templates:

| Template | Resolves to |
|----------|-------------|
| \`{{param}}\` | A Start parameter, or a variable saved by a \`set\` node |
| \`{{node_id}}\` | The whole output of a node |
| \`{{node_id.field}}\` | A field of a node's output (JSON) |
| \`{{node_id.items[0].name}}\` | Nested paths with array indexes and multiple hops |

---

## Connections

Flows reach external systems through per-agent **connections**. Currently the only type is **WooCommerce** (store URL + REST API consumer key/secret). Manage them from the flow editor or via \`/api/agents/{id}/connections\`. A \`woocommerce\` node references a connection by \`connection_id\`.

---

## Flows as Agent Tools

When an agent runs, each active flow is exposed to the LLM as a tool:

- **Name:** \`flow_<id>\`
- **Description:** the flow's description (or its name) — write it so the LLM knows when to use it
- **Parameters:** the Start node's parameters (with their types, descriptions and \`required\` flags)
- **Result:** the End node's rendered template (or an \`Error: …\` string)

Flow tools are added on top of the agent's tool allowlist (they are disabled only when the agent's tools are \`"none"\`). If the flow has a **skill**, that skill is injected into the prompt when the user's message is relevant to the flow's name/description.

### Example

"Search the store; if nothing is found, say so politely":

\`\`\`json
{
  "nodes": [
    {"id": "start", "type": "start", "config": {"parameters": [
      {"name": "query", "type": "string", "description": "What the customer is looking for", "required": true}
    ]}},
    {"id": "search", "type": "woocommerce", "config": {"connection_id": 1, "search_term": "{{query}}"}},
    {"id": "check", "type": "conditional", "config": {"field": "{{search.count}}", "operator": "equals", "value": "0"}},
    {"id": "none", "type": "end", "config": {"template": "No products found for {{query}}."}},
    {"id": "found", "type": "end", "config": {"template": "{{search.result}}"}}
  ],
  "edges": [
    {"from": "start", "to": "search", "fromHandle": "default", "toHandle": "default", "kind": "flow"},
    {"from": "search", "to": "check", "fromHandle": "default", "toHandle": "default", "kind": "flow"},
    {"from": "check", "to": "none", "fromHandle": "true", "toHandle": "default", "kind": "flow"},
    {"from": "check", "to": "found", "fromHandle": "false", "toHandle": "default", "kind": "flow"}
  ]
}
\`\`\`

---

## API

| Endpoint | Description |
|----------|-------------|
| \`GET /api/agents/{id}/flows\` | List flows |
| \`POST /api/agents/{id}/flows\` | Create (\`name\`, \`description\`, optional \`graph_json\` string) |
| \`PUT /api/agents/{id}/flows/{flow_id}\` | Update \`name\`, \`description\`, \`graph_json\`, \`is_active\` |
| \`DELETE /api/agents/{id}/flows/{flow_id}\` | Delete |
| \`POST /api/agents/{id}/flows/{flow_id}/test\` | Run with \`{"params": {...}, "graph_json"?}\` → \`{"result", "outputs", "error"}\` |
| \`…/flows/{flow_id}/skill\` (+ \`/generate\`) | The flow's skill |

\`graph_json\` is sent and stored as a JSON **string**. From chat, the main assistant can create or edit flows with the \`create_or_update_agent_flow\` tool (pass \`agent_id\`; inside an agent's own chat it is detected automatically).

`
  },
  {
    "slug": "29-webhook-connectors",
    "title": "Webhook Connectors",
    "section": "Documentation",
    "content": `
# Webhook Connectors

A **webhook connector** gives one of your [flows](./28-agent-flows.md) a public URL, so a third-party service — a payment provider, a CRM, a form backend, another server — can trigger it with an HTTP POST:

\`\`\`
POST https://<your-openacm>/api/webhooks/{slug}
\`\`\`

The connector authenticates the request with its own scheme (third parties can't send your dashboard token), runs the flow synchronously with the request's headers and body, and answers with the flow's result. Every attempt is written to an audit log.

---

## Creating a Connector

Connectors are created through the API (the **Connectors** page in the dashboard lists them, turns them on/off, and shows their activity):

\`\`\`bash
curl -X POST http://localhost:47821/api/webhook-connectors \\
  -H "Authorization: Bearer <dashboard-token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "slug": "payments",
    "name": "Payment notifications",
    "auth_scheme": "hmac_sha256",
    "auth_config": {
      "secret": "a-long-random-secret",
      "timestamp_header": "X-Timestamp",
      "signature_header": "X-Signature",
      "max_skew_seconds": 300
    },
    "flow_id": 7,
    "dedupe_header": "X-Event-Id"
  }'
\`\`\`

| Field | Required | Meaning |
|-------|----------|---------|
| \`slug\` | ✅ | Public URL segment — must be unique (\`409\` otherwise). It is **not** a secret |
| \`name\` | ✅ | Display name |
| \`auth_scheme\` | ✅ | \`hmac_sha256\`, \`bearer_token\` or \`static_header_secret\` |
| \`auth_config\` | ✅ | Scheme settings (see below) |
| \`flow_id\` | ✅ | The flow to run (any agent's flow) |
| \`dedupe_header\` | — | Header carrying a unique event id; a repeated id that already succeeded returns the stored result instead of running the flow again |

Secrets are masked as \`"***"\` in every response; sending \`"***"\` back in a \`PATCH\` keeps the stored value.

---

## Authentication Schemes

### \`hmac_sha256\` (recommended)

Authenticates the **body**, not just the caller, so tampered or replayed payloads fail.

\`\`\`
signature    = HMAC-SHA256(secret, "<timestamp>." + <raw body bytes>)
header value = "sha256=" + hex(signature)
\`\`\`

| \`auth_config\` key | Meaning |
|---|---|
| \`secret\` | Shared secret used as the HMAC key |
| \`timestamp_header\` | Header carrying the Unix timestamp (seconds) |
| \`signature_header\` | Header carrying \`sha256=<hex>\` |
| \`max_skew_seconds\` | Accepted clock skew in either direction (default \`300\`) |

Sign the **raw** request bytes — not a re-serialized JSON object.

**Sender example (Python):**
\`\`\`python
import hashlib, hmac, json, time, httpx

body = json.dumps({"order_id": 123, "status": "paid"}).encode()
ts = str(int(time.time()))
sig = hmac.new(b"a-long-random-secret", ts.encode() + b"." + body, hashlib.sha256).hexdigest()

httpx.post(
    "https://acm.example.com/api/webhooks/payments",
    content=body,
    headers={"Content-Type": "application/json", "X-Timestamp": ts,
             "X-Signature": f"sha256={sig}", "X-Event-Id": "evt_001"},
)
\`\`\`

### \`bearer_token\`

| \`auth_config\` key | Meaning |
|---|---|
| \`token\` | Expected token |
| \`header_name\` | Header to read (default \`Authorization\`); its value must be \`Bearer <token>\` |

### \`static_header_secret\`

| \`auth_config\` key | Meaning |
|---|---|
| \`header_name\` | Header to read |
| \`secret\` | Expected value |

All comparisons are constant-time. \`bearer_token\` and \`static_header_secret\` authenticate the caller only, not the payload.

---

## What the Flow Receives

The flow is run with two parameters:

| Parameter | Content |
|-----------|---------|
| \`headers\` | The request headers (object) |
| \`body\` | The parsed JSON body (object; \`{}\` for an empty body) |

Use templates such as \`{{body.order_id}}\` or \`{{body.customer.email}}\` in the flow's nodes (declaring \`body\` / \`headers\` as Start parameters documents them and lets you test the flow with sample data). The End node's text is returned to the caller.

> WooCommerce nodes need the per-agent connection lookup, which webhook-triggered runs don't have in v0.4.7 — use HTTP nodes in connector flows.

---

## Responses

| Status | When | Body |
|--------|------|------|
| \`200\` | Flow ran (or duplicate of a successful event) | \`{"result": "<End node text>"}\` |
| \`400\` | Body is not valid JSON | \`{"error": "Invalid JSON body"}\` |
| \`401\` | Authentication failed (any reason) | \`{"error": "Invalid credentials"}\` |
| \`404\` | Unknown slug or connector disabled | — |
| \`500\` | The configured flow is missing or structurally invalid | generic detail (reasons only in the audit log) |
| \`502\` | The flow failed at runtime (e.g. an HTTP node errored) | \`{"error": "<flow error>"}\` |

The flow runs inline, within the request.

---

## Audit Log

Every attempt is stored in \`webhook_connector_events\` with status \`ok\`, \`auth_failed\`, \`bad_request\` or \`flow_error\`, the body (truncated to 8 KB for failed-auth attempts), the result or error, and the duration. View it on the **Connectors** page or with:

\`\`\`bash
curl http://localhost:47821/api/webhook-connectors/1/events \\
  -H "Authorization: Bearer <dashboard-token>"
# → {"events": [...], "stats": {...}}
\`\`\`

---

## Admin API

| Endpoint | Description |
|----------|-------------|
| \`GET /api/webhook-connectors\` | List |
| \`GET /api/webhook-connectors/{id}\` | Get one |
| \`POST /api/webhook-connectors\` | Create |
| \`PATCH /api/webhook-connectors/{id}\` | Update any field (e.g. \`{"enabled": 0}\`) |
| \`DELETE /api/webhook-connectors/{id}\` | Delete |
| \`GET /api/webhook-connectors/{id}/events\` | Audit log + stats |

The admin routes require the dashboard token; only \`POST /api/webhooks/{slug}\` is public. See also [Security → Public Webhook Connectors](./12-security.md#public-webhook-connectors-apiwebhooks).

---

## Exposing it to the Internet

The third party must reach \`https://<your-domain>/api/webhooks/{slug}\`. Put OpenACM behind a reverse proxy with HTTPS (see [Deploy on a VPS](./DEPLOY_VPS.md)) or a tunnel (e.g. Cloudflare Tunnel, as in [WhatsApp Setup](./WHATSAPP_SETUP.md)). If you only want to expose webhooks, configure the proxy to forward just \`/api/webhooks/\` paths.

`
  },
  {
    "slug": "30-voice",
    "title": "Voice",
    "section": "Documentation",
    "content": `
# Voice

OpenACM can talk. There are two independent pieces:

1. **Text-to-speech in the dashboard** — the browser reads the assistant's replies aloud with a selectable TTS provider.
2. **The voice daemon** — an optional, always-on, server-side pipeline: microphone → speech detection → faster-whisper transcription → wake word → agent → spoken reply. It is controlled from the **Daemon** page.

Both are optional. For deployments without audio (servers, Docker, client installs) disable the daemon entirely with:

\`\`\`yaml
# config/local.yaml
features:
  voice: false
\`\`\`

---

## TTS Providers (dashboard)

| Provider id | Name | Runs | Key |
|-------------|------|------|-----|
| \`kokoro\` | Kokoro (offline) | In the browser (\`kokoro-js\`, ~80 MB model download, English/Spanish voices) | — |
| \`browser\` | Browser built-in | Web Speech API with your OS voices | — |
| \`openai\` | OpenAI TTS | OpenAI API | \`OPENAI_API_KEY\` |
| \`elevenlabs\` | ElevenLabs | ElevenLabs API | \`ELEVENLABS_API_KEY\` |

Choose the provider, voice and language in **Configuration → Voice Interface** (or on the Daemon page). The assistant's grammatical gender (set during onboarding or via \`PATCH /api/config/assistant\`) picks a matching default voice.

---

## The Voice Daemon

### Requirements

The daemon runs on the machine where OpenACM runs and uses **its** microphone and speakers. It needs extra Python packages:

\`\`\`bash
pip install sounddevice faster-whisper numpy edge-tts
# or use the "install" button on the Daemon page (POST /api/voice/daemon/install)
\`\`\`

(\`pip install -e ".[voice]"\` installs \`sounddevice\`, \`faster-whisper\`, \`numpy\` and \`pyttsx3\`; add \`edge-tts\` for server-side speech.) At startup the console shows \`Voice daemon ready (sounddevice + faster-whisper)\` or lists what is missing.

### How it works

\`\`\`
microphone (16 kHz) → adaptive voice-activity detection → faster-whisper ("small" model)
      → wake word? → Brain (same agent as the chat) → edge-tts speech
\`\`\`

| Mode | Behavior |
|------|----------|
| \`passive\` | Transcribes utterances but only forwards them when the **wake word** is heard |
| \`active\` | Every utterance goes straight to the agent; returns to passive after ~6 s of silence |
| \`speaking\` | Playing the reply; saying the wake word interrupts it |

- The **wake word is the assistant's name** (\`assistant.name\`, e.g. "ACM" or whatever you named it during onboarding).
- The noise floor is calibrated at start; utterances end after ~2 s of silence (max ~30 s).
- Echo of its own voice is suppressed for a few seconds after speaking.
- Spoken replies use an edge-tts neural voice (\`GET /api/voice/server-tts/voices\`), e.g. \`es-MX-DaliaNeural\`.
- State changes are broadcast as \`voice:daemon_state\` events, which drive the animated companion on the Daemon page (with selectable skins).

### Controlling it

| Endpoint | Description |
|----------|-------------|
| \`GET /api/voice/daemon/status\` | Running state, mode and dependency check |
| \`POST /api/voice/daemon/start\` | Start (optional \`{"mic_device": <index or name>}\`; otherwise the saved device) |
| \`POST /api/voice/daemon/stop\` | Stop |
| \`GET /api/voice/devices\` | Audio input devices on the server |
| \`GET /api/voice/model/status\` | Availability of the server-side models |
| \`GET/PATCH /api/voice/config\` | Saved voice settings (provider, voices, microphone, STT language…) |

---

## Troubleshooting

- **"Missing dependencies: pip install …"** — install the listed packages into OpenACM's virtualenv and restart the daemon.
- **Nothing is transcribed** — check the selected microphone (\`/api/voice/devices\`) and that the process has microphone permission (macOS asks the first time).
- **It never reacts** — you're in passive mode: start the sentence with the assistant's name.
- **Running on a server** — there is usually no audio device; disable the daemon (\`features.voice: false\`) and use browser TTS only.

`
  },
  {
    "slug": "31-gmail-classifier",
    "title": "Gmail Classifier",
    "section": "Documentation",
    "content": `
# Gmail Classifier

The **Gmail Classifier** is a built-in [plugin](./24-plugins.md) (\`gmail_classifier\`) that reads your Gmail inbox, classifies every email into your own categories with the LLM, and helps you answer: reply suggestions, drafts, sending, auto-reply rules that learn from your edits, statistics, Excel reports and a daily digest delivered through an agent's Telegram/WhatsApp channel.

It lives at **Gmail** (\`/gmail-classifier\`) in the sidebar and exposes its API under \`/api/gmail-classifier/*\`.

---

## Setup

1. Create Google OAuth credentials and authorize OpenACM — see [Gmail Setup](./GMAIL_SETUP.md). The plugin shows its setup screen until \`config/google_token.json\` exists (\`GET /api/gmail-classifier/auth-status\`).
2. Open **Gmail** in the sidebar. On first start the plugin seeds a set of default categories (e.g. *Importantes*, *Legales*, …) that you can edit or delete.
3. Optionally import your existing Gmail labels as categories (\`POST /categories/import-labels\`) or let the LLM suggest the top categories from a sample of recent emails (\`POST /suggest-categories\`).
4. Run a first classification (**Process**) — for example over the last 30 days.

The plugin is enabled by default; disable it on the **Plugins** page if you don't use it.

---

## How Classification Works

- Emails are fetched from Gmail and sent to the LLM in **batches of 20**, using only the subject, the sender and a 200-character snippet — cheap even for large inboxes (see [LLM Pricing Reference](./LLM_PRICING_REFERENCE.md)).
- Each category has a description, a free-text **context** explaining what belongs there, **known senders** and **patterns** (e.g. \`subject_contains\`, \`sender_domain\`) that guide the model.
- Results are stored locally (\`gmail_emails\`); already-processed emails are skipped.
- Optional settings: \`auto_mark_read\`, \`auto_apply_label\` (create/apply the category as a Gmail label), and a default start date.
- You can re-categorize an email or a whole thread by hand.

### Scheduled processing

Set a cron expression (\`POST /api/gmail-classifier/cron\` with \`{"schedule": "*/30 * * * *"}\`) and the plugin processes new mail periodically in the background. \`POST /process\`, \`GET /process/status\` and \`POST /process/stop\` control a manual run.

---

## Reading and Replying

- **Threads view** with all messages of a conversation, HTML bodies (inline images resolved) and attachments
- **Suggest reply** — the LLM drafts an answer for an email
- **Drafts** — save or delete a Gmail draft
- **Reply** — send directly from OpenACM
- **Auto-reply** — enable categories for which reply suggestions are generated automatically (skipping no-reply senders), with a configurable model and timeout
- **Learning from you** — when you send or save a reply that differs meaningfully from the AI suggestion, it is stored as a **reply example** and used to write future suggestions in your style (manage them under \`/reply-examples\`)

---

## Statistics, Reports and Digest

| Feature | Endpoint |
|---------|----------|
| Aggregated stats for a date range | \`GET /api/gmail-classifier/stats\` |
| AI summary of today's inbox (counts by category + 2-3 urgent emails) | \`GET /api/gmail-classifier/summary\` |
| Excel report for a date range | \`GET /api/gmail-classifier/export/excel\` |

**Daily digest:** enable \`digest_enabled\`, set \`digest_time\`, \`digest_days\` (default Monday–Friday), and pick the **agent** (\`digest_agent_id\`) and **chat** (\`digest_chat_id\`) that should receive it. The summary is sent through that agent's Telegram/WhatsApp channel. \`POST /summary/test-send\` sends one immediately to test the configuration.

---

## Backup and Restore

\`GET /api/gmail-classifier/export\` downloads the plugin configuration (settings + categories) as JSON; \`POST /import\` restores it with a smart merge. Use it to copy your categories to another installation.

---

## API Summary

All routes are under \`/api/gmail-classifier\` and require the dashboard token.

| Area | Routes |
|------|--------|
| Categories | \`GET/POST /categories\`, \`PUT/DELETE /categories/{id}\`, \`POST /categories/import-labels\`, \`POST /suggest-categories\` |
| Emails & threads | \`GET /emails\`, \`GET /threads\`, \`GET /threads/{id}/messages\`, \`PATCH /threads/{id}/category\`, \`PATCH /emails/{id}/read\`, \`PATCH /emails/{id}/category\`, \`GET /emails/{id}/html\`, \`GET /emails/{id}/attachments[/{attachment_id}]\` |
| Replies | \`GET /emails/{id}/suggest-reply\`, \`POST /emails/{id}/reply\`, \`POST/DELETE /emails/{id}/draft\`, \`GET /reply-examples\`, \`PUT/DELETE /reply-examples/{id}\` |
| Processing | \`POST /process\`, \`GET /process/status\`, \`POST /process/stop\`, \`POST/DELETE /cron\` |
| Settings | \`GET/PUT /settings\`, \`GET /auth-status\` |
| Reports | \`GET /stats\`, \`GET /summary\`, \`POST /summary/test-send\`, \`GET /export/excel\` |
| Backup | \`GET /export\`, \`POST /import\` |

`
  },
  {
    "slug": "32-docker",
    "title": "Docker",
    "section": "Documentation",
    "content": `
# Docker

OpenACM ships a Docker setup in \`docker/\`:

- \`docker/Dockerfile\` — multi-stage build: stage 1 builds the Next.js dashboard with Node 20 (\`npm ci && npm run build\`); stage 2 is \`python:3.12-slim\` with \`uv\`, the Python package (\`uv pip install --system -e .\`), Playwright's Chromium, and the built dashboard copied into \`src/openacm/web/static\`. Runs \`python -m openacm\`.
- \`docker/docker-compose.yml\` — one \`openacm\` service that publishes port **8080**, mounts \`../data\` and \`../config\`, restarts \`unless-stopped\`, and health-checks \`http://localhost:8080/api/ping\`.
- \`.dockerignore\` (repo root) — keeps \`.venv/\`, \`.git/\`, secrets in \`config/\`, \`data/\`, \`node_modules\`, builds, \`docs/\` and \`tests/\` out of the image.

---

## Quick Start

\`\`\`bash
git clone https://github.com/Json55Hdz/OpenACM.git
cd OpenACM

# 1. Make OpenACM listen on 0.0.0.0:8080 inside the container
cat > config/local.yaml <<'EOF'
web:
  host: 0.0.0.0
  port: 8080
features:
  voice: false        # no microphone in a container
EOF

# 2. Build and start
docker compose -f docker/docker-compose.yml up -d --build

# 3. Get the dashboard token
docker logs openacm
\`\`\`

Open \`http://localhost:8080\` and paste the token.

> **Why step 1?** OpenACM binds to \`127.0.0.1:47821\` by default, which is unreachable from outside the container and doesn't match the port the compose file publishes and health-checks. \`config/\` is mounted from the host, so \`config/local.yaml\` is picked up by the container.

---

## Data and Configuration

| Host path | Container path | Contents |
|-----------|----------------|----------|
| \`./data\` | \`/app/data\` | SQLite database, vector store, media, logs |
| \`./config\` | \`/app/config\` | \`default.yaml\`, \`local.yaml\`, \`.env\` (API keys + \`DASHBOARD_TOKEN\`), \`activity.key\`, MCP/custom providers, Google OAuth files |

On first start OpenACM generates the dashboard token and writes it to \`config/.env\`, so it survives container re-creation. Add your API keys to \`config/.env\` (or through the onboarding wizard) and restart the container.

Useful commands:

\`\`\`bash
docker compose -f docker/docker-compose.yml logs -f      # follow logs
docker compose -f docker/docker-compose.yml restart      # restart after config changes
docker compose -f docker/docker-compose.yml up -d --build   # rebuild after git pull
\`\`\`

Without a TTY the interactive console is skipped; the process stays up for the web server and channels and shuts down cleanly on \`SIGTERM\` (\`docker stop\`).

---

## Notes and Limits

- **Browser agent:** Chromium is installed in the image and runs headless. If you don't need it, set \`features.browser_agent: false\` to save memory.
- **Voice:** there is no audio device in a container — keep \`features.voice: false\`.
- **Activity watcher / screenshots:** these observe a desktop session and do nothing useful in a headless container.
- **Shell commands** run inside the container, not on the host.
- **Memory:** plan for ~2 GB for the container (see [Getting Started → Requirements](./02-getting-started.md#requirements)).
- For HTTPS and a public domain, put a reverse proxy in front and bind the port to localhost (\`"127.0.0.1:8080:8080"\`) — see [Deploy on a VPS](./DEPLOY_VPS.md#alternativa-deploy-con-docker).

---

## Versioned Client Images

For client deployments the repository publishes versioned images instead of having servers \`git pull\`:

1. Tag a release: \`git tag vX.Y.Z && git push origin vX.Y.Z\`.
2. \`.github/workflows/release-image.yml\` builds \`docker/Dockerfile\` and pushes \`ghcr.io/<owner>/openacm:X.Y.Z\` and \`:latest\` to GitHub Container Registry (keep the package **private**; check its visibility after the first publish).
3. A client's own Dockerfile does \`FROM ghcr.io/<owner>/openacm:X.Y.Z\`, adds its plugin package and config, and builds the client image.
4. The client server only \`docker pull\`s its own image; updating means bumping the base tag explicitly.

Trim the product for a client with \`features\` (disable \`browser_agent\` / \`voice\`) and \`client_profile\` (restrict dashboard pages) in \`config/local.yaml\` — see [Configuration](./11-configuration.md#client-deployments-features-and-client_profile). Release steps are also described in [Contributing](./CONTRIBUTING.md#releasing).

`
  },
  {
    "slug": "deploy-vps",
    "title": "Guía de Deploy — OpenACM en Ubuntu VPS",
    "section": "Guides",
    "content": `
# Guía de Deploy — OpenACM en Ubuntu VPS

## Arquitectura recomendada

\`\`\`
Internet (80/443)
      │
      ▼
Nginx Proxy Manager   ← Docker, gestiona SSL + proxy desde GUI
      │
      ▼
OpenACM (bare metal)  ← Puerto 47821, gestionado por systemd
      │
      ▼
SQLite  ·  config/.env  ·  data/
\`\`\`

> **¿Por qué bare metal para OpenACM?**
> Playwright/Chromium (el agente web) tiene problemas en contenedores sin display — necesita flags especiales y más RAM. Correr OpenACM directamente en el host es más simple, más ligero y más fácil de debuggear. NPM maneja la parte "difícil" (SSL, proxy) desde Docker.

---

## Requisitos del servidor

| Recurso | Mínimo | Recomendado |
|---|---|---|
| **OS** | Ubuntu 22.04 LTS | Ubuntu 24.04 LTS |
| **RAM** | 3 GB *(mínimo para el host)* | 4 GB o más |
| **CPU** | 2 vCPUs | 3 vCPUs *(3 núcleos en adelante va sobrado)* |
| **Disco** | 20 GB SSD | 40 GB SSD |

> **Consumo de memoria:** En runtime, el contenedor de OpenACM (FastAPI + SPA + modelos de embeddings para RAG y router local) consume alrededor de **~1.8 GB de RAM**. Por ello, para un servidor Linux/VPS se requiere un mínimo de **3 GB de RAM** para dejar margen operativo a Ubuntu y Docker. Con **3 núcleos de procesador** y **4 GB de RAM** en adelante, el sistema corre con total fluidez (*easy*), incluso bajo alta concurrencia.
> **Con Playwright/Chromium activo**: +1 GB RAM si se usa navegación web automatizada intensiva.
> **Con Voice**: el daemon de voz (faster-whisper) necesita micrófono y RAM extra; en un VPS sin audio desactívalo con \`features.voice: false\` en \`config/local.yaml\` (Kokoro TTS corre en el navegador, no en el servidor).

---

## Checklist de deploy (en orden)

\`\`\`
[ ] 1. Preparar el VPS (apt, firewall UFW)
[ ] 2. Instalar Docker + Docker Compose
[ ] 3. Instalar y configurar Nginx Proxy Manager
[ ] 4. Clonar el repositorio
[ ] 5. Configurar config/.env con las API keys
[ ] 6. Instalar OpenACM con setup.sh
[ ] 7. Crear el servicio systemd
[ ] 8. Configurar el Proxy Host en NPM (dominio + SSL)
[ ] 9. Permisos del filesystem
[ ] 10. Configurar backup automático de SQLite
\`\`\`

---

## Paso 1 — Preparar el VPS

\`\`\`bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git sqlite3

# Firewall: solo abrir lo necesario
sudo ufw allow 22/tcp    # SSH — PRIMERO, antes de activar
sudo ufw allow 80/tcp    # HTTP (para certbot/NPM)
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
sudo ufw status
\`\`\`

> El puerto 47821 (OpenACM) **no debe estar abierto al exterior** — NPM hace el proxy.

---

## Paso 2 — Instalar Docker

\`\`\`bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker
docker --version && docker compose version
\`\`\`

---

## Paso 3 — Nginx Proxy Manager

\`\`\`bash
mkdir -p /opt/npm && cd /opt/npm

cat > docker-compose.yml << 'EOF'
services:
  npm:
    image: jc21/nginx-proxy-manager:latest
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
EOF

docker compose up -d
\`\`\`

La GUI de NPM queda en \`http://tu-ip:81\`.

**Credenciales iniciales:**
- Email: \`admin@example.com\`
- Password: \`changeme\`

> Cambia la contraseña inmediatamente al entrar.

**Después de configurar NPM**, cierra el puerto 81 para que la GUI no quede expuesta:
\`\`\`bash
sudo ufw deny 81/tcp
\`\`\`
Para acceder a la GUI después, usa un túnel SSH: \`ssh -L 8181:localhost:81 usuario@tu-servidor\`

---

## Paso 4 — Instalar OpenACM

\`\`\`bash
git clone https://github.com/Json55Hdz/OpenACM.git /opt/openacm
cd /opt/openacm
bash setup.sh
\`\`\`

El script instala todas las dependencias (uv, Python 3.12, Node 20, Chromium de Playwright), crea el \`.venv\` y configura el \`config/.env\` inicial. Al final pregunta si quieres iniciar OpenACM — responde \`n\`, lo arrancará systemd.

El dashboard no viene compilado en el repo (\`run.sh\` lo compila en cada arranque). Como el servicio systemd de abajo llama directamente a \`python -m openacm\`, compílalo una vez a mano:

\`\`\`bash
cd /opt/openacm/frontend && npm install && npm run deploy && cd ..
\`\`\`

(\`npm run deploy\` hace \`next build\` y copia \`frontend/dist/\` a \`src/openacm/web/static/\`. \`./update.sh\` también lo recompila en cada actualización.)

---

## Paso 5 — Configurar config/.env

\`\`\`bash
nano /opt/openacm/config/.env
\`\`\`

Valores mínimos:

\`\`\`env
# Al menos un provider LLM (patrón: <PROVIDER_ID>_API_KEY)
ANTHROPIC_API_KEY=sk-ant-...

# Token del dashboard — si lo dejas vacío, se auto-genera al primer arranque
# y OpenACM lo escribe aquí automáticamente (persiste entre reinicios)
DASHBOARD_TOKEN=
\`\`\`

Si usas un proveedor distinto al que trae \`config/default.yaml\` (\`opencode_go\`), selecciónalo en \`config/local.yaml\` (\`llm.default_provider\`) o desde el dashboard.

---

## Paso 6 — Servicio systemd

\`\`\`bash
sudo nano /etc/systemd/system/openacm.service
\`\`\`

\`\`\`ini
[Unit]
Description=OpenACM Autonomous Agent
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/opt/openacm
ExecStart=/opt/openacm/.venv/bin/python -m openacm
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
\`\`\`

\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl enable openacm
sudo systemctl start openacm

# Ver logs (el token aparece aquí)
sudo journalctl -u openacm -f
\`\`\`

El token también queda guardado en \`config/.env\` como \`DASHBOARD_TOKEN\` (\`grep DASHBOARD_TOKEN /opt/openacm/config/.env\`). Sin TTY, OpenACM omite la consola interactiva y se queda corriendo; \`systemctl stop\` lo detiene limpiamente (maneja SIGTERM).

---

## Paso 7 — Configurar Proxy Host en NPM

1. Abre la GUI de NPM en \`http://tu-ip:81\`
2. **Proxy Hosts → Add Proxy Host**
3. Configuración:
   - Domain Names: \`tu-dominio.com\`
   - Scheme: \`http\`
   - Forward Hostname/IP: \`127.0.0.1\` (o la IP privada del host)
   - Forward Port: \`47821\`
   - Activar: **Websockets Support** ← importante para el dashboard en tiempo real
4. Tab **SSL**:
   - SSL Certificate: Request a new SSL Certificate
   - Activar: **Force SSL**, **HTTP/2 Support**
   - Email para Let's Encrypt: tu email
5. Tab **Advanced** — pegar estas directivas para security headers y rate limiting:

\`\`\`nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; connect-src 'self' wss: https:; img-src 'self' data: blob: https:;" always;

# Rate limiting
limit_req_zone $binary_remote_addr zone=openacm:10m rate=20r/s;
limit_req zone=openacm burst=40 nodelay;
client_max_body_size 20M;
\`\`\`

6. Guardar → NPM obtiene el certificado automáticamente.

---

## Paso 8 — Permisos del filesystem

\`\`\`bash
sudo chown -R ubuntu:ubuntu /opt/openacm
chmod 700 /opt/openacm/config /opt/openacm/data 2>/dev/null || true
chmod 600 /opt/openacm/config/.env
chmod 600 /opt/openacm/config/google_credentials.json 2>/dev/null || true
chmod 600 /opt/openacm/config/google_token.json 2>/dev/null || true
chmod 600 /opt/openacm/config/activity.key 2>/dev/null || true
\`\`\`

Reemplaza \`ubuntu\` con el usuario real de tu VPS.

---

## Paso 9 — Backup automático de SQLite

\`\`\`bash
sudo tee /opt/openacm/scripts/backup.sh > /dev/null << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/openacm/backups"
DB_PATH="/opt/openacm/data/openacm.db"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p "$BACKUP_DIR"
sqlite3 "$DB_PATH" ".backup $BACKUP_DIR/openacm_$DATE.db"

# Mantener solo los últimos 7 backups
ls -t "$BACKUP_DIR"/openacm_*.db | tail -n +8 | xargs rm -f 2>/dev/null || true
echo "Backup OK: openacm_$DATE.db"
EOF

sudo chmod +x /opt/openacm/scripts/backup.sh

# Cron: backup diario a las 3am
(crontab -l 2>/dev/null; echo "0 3 * * * /opt/openacm/scripts/backup.sh >> /var/log/openacm-backup.log 2>&1") | crontab -
\`\`\`

---

## Comandos de operación

\`\`\`bash
# Estado del servicio
sudo systemctl status openacm

# Ver logs en tiempo real
sudo journalctl -u openacm -f

# Reiniciar
sudo systemctl restart openacm

# Actualizar a nueva versión (git pull + deps + rebuild del frontend)
cd /opt/openacm
./update.sh                  # responde "n" a "Restart OpenACM now?"
sudo systemctl restart openacm
\`\`\`

---

## Verificación post-deploy

\`\`\`bash
# HTTPS responde
curl -I https://tu-dominio.com/api/ping

# HTTP redirige a HTTPS
curl -I http://tu-dominio.com/api/ping

# Puerto 47821 NO accesible desde fuera
curl --connect-timeout 3 http://tu-dominio.com:47821/api/ping  # debe fallar

# Security headers presentes
curl -sI https://tu-dominio.com | grep -E "X-Frame|X-Content|Strict-Transport"

# Firewall
sudo ufw status
\`\`\`

---

## Problemas de seguridad pendientes en el código

Estos requieren cambios en el código fuente (no en infra):

| Problema | Impacto | Estado |
|---|---|---|
| OAuth token de Google en plaintext (\`config/google_token.json\`) | Medio | Pendiente — protege con \`chmod 600\` |
| Tokens de canales de agentes (Telegram/WhatsApp) en plaintext en la DB | Medio | Pendiente |
| Token del dashboard imprimido en logs de arranque | Bajo | Pendiente |
| WebSocket auth via query param (visible en logs de nginx) | Bajo | Aceptable con HTTPS |

---

---

## Alternativa: Deploy con Docker

> Usa esta sección si prefieres todo contenedorizado o si no vas a usar Playwright en el servidor.

### Preparar el Docker setup

El repo ya incluye un \`.dockerignore\` (excluye \`.venv/\`, \`.git/\`, secretos de \`config/\`, \`data/\`, \`node_modules\`, builds, \`docs/\` y \`tests/\`).

**Configurar el puerto de escucha.** El compose publica el puerto \`8080\`, pero OpenACM escucha por defecto en \`127.0.0.1:47821\`. Dentro del contenedor tiene que escuchar en \`0.0.0.0:8080\` — créalo en \`config/local.yaml\` (la carpeta \`config/\` se monta en el contenedor):

\`\`\`yaml
web:
  host: 0.0.0.0
  port: 8080
features:
  voice: false      # sin micrófono en el servidor
\`\`\`

**Editar \`docker/docker-compose.yml\`**:

\`\`\`yaml
services:
  openacm:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    container_name: openacm
    ports:
      - "127.0.0.1:8080:8080"   # solo localhost — NPM hace el proxy
    volumes:
      - ../data:/app/data
      - ../config:/app/config
    restart: unless-stopped
    environment:
      - PYTHONUNBUFFERED=1
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '2.0'
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/api/ping"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
\`\`\`

Nota: el \`docker/Dockerfile\` es multi-stage: compila el dashboard con Node 20 y luego instala el backend en \`python:3.12-slim\` con \`uv\` y el Chromium de Playwright (\`xdotool\`, inútil en un VPS headless, ya no se instala).

### Arrancar con Docker

\`\`\`bash
cd /opt/openacm/docker
docker compose build
docker compose up -d
docker logs openacm   # ver el token (también queda en config/.env)
\`\`\`

En NPM, el Forward Port sería \`8080\` en lugar de \`47821\`.

---

## Distribución para clientes: imagen privada versionada

Para deployments de cliente (ver \`docs/superpowers/specs/2026-08-18-client-deployment-strategy-design.md\`),
el server del cliente **nunca** clona este repo ni corre \`git pull\` en producción.
En su lugar:

1. Se etiqueta un release en este repo: \`git tag vX.Y.Z && git push origin vX.Y.Z\`.
2. El workflow \`.github/workflows/release-image.yml\` construye la imagen y la
   sube a \`ghcr.io/<owner>/openacm:X.Y.Z\` (registry **privado** — verifica en
   GitHub → Packages → openacm → Package settings que la visibilidad quedó en
   Private la primera vez que se publica).
3. El \`Dockerfile\` del cliente (en su propio repo privado, fuera de este repo)
   hace \`FROM ghcr.io/<owner>/openacm:X.Y.Z\`, copia su plugin package y su
   config, y construye su propia imagen.
4. El server del cliente solo hace \`docker pull\` de la imagen de **su** cliente,
   nunca de este repo.

Actualizar un cliente = subir el tag base que usa su \`Dockerfile\` a mano,
reconstruir su imagen, hacer push, y que el server haga \`docker pull\` del tag
nuevo. Nunca automático, nunca sigue \`main\`.

`
  },
  {
    "slug": "whatsapp-setup",
    "title": "Configuración de WhatsApp (Cloud API oficial de Meta)",
    "section": "Guides",
    "content": `
# Configuración de WhatsApp (Cloud API oficial de Meta)

Guía completa para conectar OpenACM a WhatsApp usando la **API oficial de Meta**
(WhatsApp Cloud API). Es la vía recomendada: **sin riesgo de que te baneen el
número**, a diferencia de whatsapp-web.js.

> **Resultado final:** los vecinos del conjunto le escriben a tu número de
> WhatsApp Business y el bot les responde de forma individual y automática.

---

## Índice

1. [Cómo funciona (en 1 minuto)](#1-cómo-funciona)
2. [Costos](#2-costos)
3. [Parte A — Meta / WhatsApp](#parte-a--meta--whatsapp)
4. [Parte B — URL pública con Cloudflare Tunnel](#parte-b--url-pública-con-cloudflare-tunnel)
5. [Parte C — Configurar OpenACM](#parte-c--configurar-openacm)
6. [Parte D — Conectar el webhook en Meta](#parte-d--conectar-el-webhook-en-meta)
7. [Parte E — Probar](#parte-e--probar)
8. [Parte F — Pasar a producción](#parte-f--pasar-a-producción)
9. [Reglas que NO debes romper](#9-reglas-que-no-debes-romper)
10. [Problemas comunes](#10-problemas-comunes)

---

## 1. Cómo funciona

- **Enviar** (bot → persona): OpenACM llama directo a la API de Meta por HTTPS. No
  necesita nada público.
- **Recibir** (persona → bot): Meta **empuja** cada mensaje a una **URL pública
  tuya** (un *webhook*). Por eso necesitas exponer OpenACM con una URL HTTPS fija
  → eso lo resuelve **Cloudflare Tunnel** (gratis y permanente).

\`\`\`
Vecino  ─►  WhatsApp/Meta  ─►  https://tudominio/webhooks/whatsapp  ─►  OpenACM (tu PC)
OpenACM ─►  Graph API de Meta  ─►  WhatsApp  ─►  Vecino
\`\`\`

---

## 2. Costos

| Concepto | Costo |
|---|---|
| Cuenta Meta for Developers | **Gratis** |
| WhatsApp Cloud API (la API en sí) | **Gratis** |
| Número de prueba de Meta | **Gratis** (limitado a 5 destinatarios) |
| **Conversaciones de servicio** (un usuario te escribe y respondes dentro de 24 h) | **Gratis e ilimitadas** (desde jul-2025) |
| Mensajes con **plantilla** que TÚ inicias (marketing / utilidad / autenticación) | **Se cobran por mensaje** (varía por país; en Colombia son centavos de USD) |
| Cloudflare Tunnel | **Gratis** |
| Dominio propio (para URL fija del túnel) | **~10 USD/año** (opcional pero recomendado) |
| Cuenta de WhatsApp Business | **Gratis** |

**Para tu caso (vecinos te escriben y el bot responde):** son **conversaciones de
servicio → gratis**. Solo pagarías si TÚ inicias conversaciones masivas con
plantillas (anuncios fuera de la ventana de 24 h).

> Nota: los precios de plantillas cambian y dependen del país. Revisa el precio
> actual en la [tabla oficial de Meta](https://developers.facebook.com/docs/whatsapp/pricing).

---

## Parte A — Meta / WhatsApp

### A.1 Crear la app

1. Entra a **https://developers.facebook.com/** e inicia sesión con tu Facebook.
2. Acepta registrarte como desarrollador si te lo pide.
3. Haz clic en **"Create App"** (o "Crear app") en el dashboard principal.
4. Caso de uso: elige **"Other"** → tipo **"Business"**.
5. Ponle un nombre (ej. \`OpenACM Conjunto\`) y créala.

### A.2 Agregar el producto WhatsApp

1. Dentro de la app, en **Add products**, busca **WhatsApp → Set up**.
2. Te pedirá asociar un **Meta Business Account** (créalo si no tienes uno; es gratis).
3. Al entrar a WhatsApp → **API Setup**, Meta te da automáticamente:
   - Un **número de prueba** (test number).
   - Un **Phone number ID**  ← lo necesitas.
   - Un **WhatsApp Business Account ID**.
   - Un **token temporal** (dura 24 h) ← sirve para probar ya mismo.

### A.3 Anotar los datos

De la pantalla **API Setup**, copia y guarda:

| Dato | Dónde va en OpenACM |
|---|---|
| **Temporary access token** | \`WHATSAPP_ACCESS_TOKEN\` |
| **Phone number ID** | \`WHATSAPP_PHONE_NUMBER_ID\` |

> El token temporal vence en 24 h. Para algo permanente, ver [Parte F](#parte-f--pasar-a-producción).

### A.4 Agregar tu número de prueba como destinatario

En **API Setup → "To"**, agrega tu número personal de WhatsApp para poder probar
(en modo prueba solo puedes mandar/recibir con hasta 5 números que registres).

### A.5 Obtener el App Secret

1. Ve a **App settings → Basic** (configuración de la app).
2. Copia el **App Secret** (dale "Show"). ← \`WHATSAPP_APP_SECRET\`
   - Sirve para que OpenACM verifique que los webhooks vienen de verdad de Meta.

### A.6 Inventar un Verify Token

Inventa una cadena cualquiera, por ejemplo \`openacm-conjunto-2026\`.  ← \`WHATSAPP_VERIFY_TOKEN\`
La usarás en OpenACM **y** en la config del webhook de Meta (deben coincidir).

---

## Parte B — URL pública con Cloudflare Tunnel

Necesitas una URL HTTPS fija que apunte a tu PC. Cloudflare Tunnel es gratis,
permanente y se instala como servicio de Windows.

> **Requisito para URL fija:** un dominio en Cloudflare. Si no tienes, compra uno
> barato (~10 USD/año) y agrégalo al plan **Free** de Cloudflare. (Existe un túnel
> rápido sin dominio que da una URL \`trycloudflare.com\`, pero **cambia cada vez que
> reinicias** → no sirve para un webhook permanente.)

### B.1 Instalar cloudflared

1. Descarga \`cloudflared\` para Windows: https://github.com/cloudflare/cloudflared/releases
   (archivo \`cloudflared-windows-amd64.exe\`, renómbralo a \`cloudflared.exe\`).
2. Abre PowerShell y autentícate:
   \`\`\`powershell
   cloudflared tunnel login
   \`\`\`
   Se abre el navegador → elige tu dominio.

### B.2 Crear el túnel

\`\`\`powershell
cloudflared tunnel create openacm
cloudflared tunnel route dns openacm wa.tudominio.com
\`\`\`
Esto crea el túnel y apunta \`wa.tudominio.com\` hacia él.

### B.3 Configurar qué expone

Crea el archivo \`C:\\Users\\TU_USUARIO\\.cloudflared\\config.yml\`:

\`\`\`yaml
tunnel: openacm
credentials-file: C:\\Users\\TU_USUARIO\\.cloudflared\\<ID-DEL-TUNEL>.json

ingress:
  - hostname: wa.tudominio.com
    service: http://localhost:47821   # puerto del servidor web de OpenACM
  - service: http_status:404
\`\`\`

> Ajusta \`47821\` si cambiaste el puerto (\`web.port\` en \`config/local.yaml\` / \`config/default.yaml\`; en Docker es \`8080\`).
>
> **Recomendado:** expón solo el webhook, no todo el dashboard. Cloudflare Tunnel permite filtrar por ruta:
>
> \`\`\`yaml
> ingress:
>   - hostname: wa.tudominio.com
>     path: ^/webhooks/whatsapp
>     service: http://localhost:47821
>   - service: http_status:404
> \`\`\`

### B.4 Correrlo como servicio (siempre encendido)

\`\`\`powershell
cloudflared service install
\`\`\`
Listo: tu webhook quedará en **\`https://wa.tudominio.com/webhooks/whatsapp\`**.

---

## Parte C — Configurar OpenACM

Edita (o crea) \`config/.env\` en la carpeta de OpenACM y agrega:

\`\`\`env
WHATSAPP_ACCESS_TOKEN=EAAG...tu_token
WHATSAPP_PHONE_NUMBER_ID=123456789012345
WHATSAPP_VERIFY_TOKEN=openacm-conjunto-2026
WHATSAPP_APP_SECRET=abcd1234...tu_app_secret
\`\`\`

> \`config/.env\` está en \`.gitignore\` — tus credenciales **nunca** se suben a git.
> Cada persona que instale OpenACM pone las suyas; el código es el mismo para todos.

Opcional — en \`config/local.yaml\` (o \`default.yaml\`) puedes dejarlo explícito:

\`\`\`yaml
channels:
  whatsapp:
    enabled: true
    mode: cloud_api
\`\`\`

> Con las variables de entorno puestas, OpenACM **auto-activa** el canal aunque
> \`enabled\` esté en \`false\`.

Reinicia OpenACM. En el log deberías ver \`WhatsApp Cloud API connected\`.

---

## Parte D — Conectar el webhook en Meta

1. En tu app de Meta → **WhatsApp → Configuration → Webhooks → Edit**.
2. **Callback URL:** \`https://wa.tudominio.com/webhooks/whatsapp\`
3. **Verify token:** el mismo que pusiste en \`WHATSAPP_VERIFY_TOKEN\`.
4. Clic en **Verify and save**. Meta llamará a tu URL; si todo está bien, queda en verde.
5. En **Webhook fields**, suscríbete a **\`messages\`** (clic en *Subscribe*).

---

## Parte E — Probar

1. Desde tu WhatsApp personal (el que registraste en A.4), escríbele al número de
   prueba de Meta.
2. El bot debería responder en segundos.
3. Si no responde, revisa [Problemas comunes](#10-problemas-comunes) y los logs de OpenACM.

---

## Parte F — Pasar a producción

El número de prueba sirve para validar, pero para el conjunto necesitas tu número real:

1. **Token permanente:** en *Business Settings → Users → System Users*, crea un
   System User, asígnale la app y genera un token permanente con permisos
   \`whatsapp_business_messaging\` y \`whatsapp_business_management\`. Reemplaza
   \`WHATSAPP_ACCESS_TOKEN\`.
2. **Número propio:** en **WhatsApp → API Setup → Add phone number**. Ese número
   **no puede estar registrado en WhatsApp normal** (si lo está, primero bórralo de
   la app de WhatsApp). Lo verificas por SMS/llamada.
3. **Verificación del negocio (Business Verification):** Meta la pide para subir los
   límites de envío. Necesitas datos del negocio/persona. Puedes empezar sin ella en
   un nivel básico (hasta ~250–1.000 conversaciones/día) y verificar después.
4. **Plantillas:** si quieres mandar anuncios a todos (fuera de la ventana de 24 h),
   crea y envía a aprobación **Message Templates** en el Business Manager.

---

## 9. Reglas que NO debes romper

- **Ventana de 24 horas:** puedes responder libre **dentro de las 24 h** desde el
  último mensaje del usuario. Fuera de eso, solo con plantillas aprobadas.
- **Opt-in:** la gente debe haber aceptado que le escribas.
- **Calidad:** si te reportan/bloquean mucho, Meta baja tu *quality rating* y limita
  tus envíos. Uso legítimo = sin problema.
- **Nada de spam.** Con esto **no te banean el número** (esa es la ventaja de la vía
  oficial), pero sí pueden restringir el envío si abusas.

---

## 10. Problemas comunes

| Síntoma | Causa probable / solución |
|---|---|
| Webhook no verifica (no se pone verde) | El \`verify_token\` no coincide, o la URL no es accesible. Prueba abrir \`https://wa.tudominio.com/webhooks/whatsapp\` en el navegador. |
| El bot no recibe mensajes | ¿Te suscribiste al campo **messages**? ¿El túnel está corriendo? ¿Apunta al puerto correcto de OpenACM? |
| \`signature invalid\` en los logs | El \`WHATSAPP_APP_SECRET\` está mal o vacío. |
| \`WhatsApp Cloud API credential check failed\` | Token vencido (el temporal dura 24 h) o \`phone_number_id\` incorrecto. |
| Envía pero no recibe | El webhook (recibir) no está conectado; enviar funciona sin túnel, recibir no. |
| Solo responde a 5 personas | Sigues en modo prueba. Pasa a producción (Parte F). |

---

**Resumen de credenciales que necesitas:**

\`\`\`env
WHATSAPP_ACCESS_TOKEN=      # A.3 (temporal) o F.1 (permanente)
WHATSAPP_PHONE_NUMBER_ID=   # A.3
WHATSAPP_VERIFY_TOKEN=      # A.6 (lo inventas tú)
WHATSAPP_APP_SECRET=        # A.5
\`\`\`

Webhook: \`https://TU-DOMINIO/webhooks/whatsapp\`

`
  },
  {
    "slug": "gmail-setup",
    "title": "Configuración de Gmail API para OpenACM",
    "section": "Guides",
    "content": `
# Configuración de Gmail API para OpenACM

## ¿Tiene costo?

**No. El Gmail API es completamente gratuito.**

| Operación | Cuota gratuita |
|---|---|
| Leer emails (\`messages.list\`, \`messages.get\`) | 1,000,000,000 unidades/día |
| Enviar emails (\`messages.send\`) | 500 emails/día (cuenta personal) |
| Modificar labels (marcar leído, aplicar etiquetas) | Incluido en la cuota |

Solo pagarías si activas otros servicios de pago en Google Cloud (VMs, BigQuery, etc.). Para Gmail API únicamente: **$0**.

---

## Pasos de configuración

### 1. Crear proyecto en Google Cloud

1. Ve a [console.cloud.google.com](https://console.cloud.google.com)
2. Haz clic en el selector de proyecto (arriba a la izquierda)
3. Selecciona **"Nuevo proyecto"**
4. Ponle un nombre (ej: \`OpenACM\`) → **Crear**

---

### 2. Activar la Gmail API

1. En el menú lateral: **APIs y servicios** → **Biblioteca**
2. Busca \`Gmail API\`
3. Haz clic en ella → **Habilitar**

---

### 3. Configurar la pantalla de consentimiento OAuth

1. **APIs y servicios** → **Pantalla de consentimiento de OAuth**
2. Tipo de usuario: **Externo** (aunque sea solo para ti)
3. Llena:
   - Nombre de la app: \`OpenACM\`
   - Email de soporte: tu Gmail
4. En la sección **"Usuarios de prueba"**: agrega tu propio Gmail
   > Esto es crítico — si no te agregas aquí, no podrás autorizar la app
5. Guarda y continúa (los demás campos son opcionales)

---

### 4. Crear las credenciales OAuth 2.0

1. **APIs y servicios** → **Credenciales**
2. **+ Crear credenciales** → **ID de cliente OAuth**
3. Tipo de aplicación: **Aplicación de escritorio**
4. Nombre: \`OpenACM Local\` → **Crear**
5. En la ventana que aparece, haz clic en **Descargar JSON**

---

### 5. Guardar el archivo en el proyecto

Tienes dos opciones:

- **Desde el dashboard (recomendado):** **Configuración → Google Services** → pega/sube el JSON descargado. Se guarda como \`config/google_credentials.json\`.
- **A mano:** renombra el archivo descargado y colócalo aquí (relativo a la raíz del proyecto):

\`\`\`
config/google_credentials.json
\`\`\`

---

### 6. Primera autorización

**Desde el dashboard:** en **Configuración → Google Services** pulsa el botón de autorizar. Se abre la pantalla de consentimiento de Google y, al aceptar, Google redirige a \`http://localhost:47821/api/config/google/callback\`, que guarda el token. Si OpenACM corre en un servidor, abre el dashboard a través de un túnel SSH (\`ssh -L 47821:localhost:47821 usuario@servidor\`) para que ese \`localhost\` apunte al servidor.

**Desde el chat:** la primera vez que uses cualquier herramienta de Gmail (ej: *"lee mis emails"*) sin token, el sistema abrirá el navegador de la máquina donde corre OpenACM con el flujo OAuth:

1. Selecciona tu cuenta de Gmail
2. Acepta los permisos solicitados
3. Cierra la ventana del navegador

El token se guarda en \`config/google_token.json\` y no necesitas repetir este paso.

---

## Permisos (scopes) que solicita el sistema

| Scope | Para qué se usa |
|---|---|
| \`gmail.modify\` | Leer emails, marcar leído/no leído, aplicar etiquetas |
| \`calendar\` | Crear y leer eventos del calendario |
| \`drive\` | Listar y subir archivos en Drive |
| \`youtube.readonly\` | Buscar videos en YouTube |

> Todos estos scopes son gratuitos y ya están configurados en \`src/openacm/tools/google_services.py\`.

---

## Archivos resultantes

\`\`\`
config/
├── google_credentials.json   ← descargas de Google Cloud (paso 4)
└── google_token.json         ← se genera automáticamente en el primer login
\`\`\`

Una vez que \`google_token.json\` existe, el plugin Gmail Classifier mostrará la interfaz completa en lugar de la pantalla de configuración.

---

## Solución de problemas

| Problema | Causa probable | Solución |
|---|---|---|
| "Access blocked" al autorizar | No te agregaste como usuario de prueba | Agrega tu Gmail en el paso 3 |
| "File not found: google_credentials.json" | Archivo en ruta incorrecta | Verifica que esté en \`config/google_credentials.json\` |
| El token expira | Token vencido | Elimina \`config/google_token.json\` y vuelve a autorizar |
| "Quota exceeded" | Muy poco probable en uso normal | Espera unos minutos e intenta de nuevo |

`
  },
  {
    "slug": "home-assistant-setup",
    "title": "Configuración de Home Assistant",
    "section": "Guides",
    "content": `
# Configuración de Home Assistant

Guía para instalar Home Assistant (si no lo tienes ya) y conectarlo al plugin
\`home_assistant\` de OpenACM, para controlar luces, enchufes, clima, cortinas,
reproductores y escenas por chat, voz, o desde el dashboard.

> **Resultado final:** le dices al agente "apaga las luces de la sala" o
> entras a \`/home-assistant\` en el dashboard y controlas tus dispositivos con
> un click — todo pasando por tu Home Assistant real, sin drivers propios de
> cada marca.

---

## Índice

1. [Cómo funciona](#1-cómo-funciona)
2. [Parte A — Instalar Home Assistant con Docker](#parte-a--instalar-home-assistant-con-docker)
3. [Parte B — Generar el Long-Lived Access Token](#parte-b--generar-el-long-lived-access-token)
4. [Parte C — Configurar el plugin en OpenACM](#parte-c--configurar-el-plugin-en-openacm)
5. [Parte D — Probar](#parte-d--probar)
6. [Sobre \`area\` — un detalle importante](#6-sobre-area--un-detalle-importante)
7. [Problemas comunes](#7-problemas-comunes)

---

## 1. Cómo funciona

OpenACM no habla directamente con tus dispositivos (bombillos Tuya, enchufes
Xiaomi, TV LG, etc.) — le habla a **Home Assistant**, y es Home Assistant
quien ya sabe hablar con cada marca por su cuenta. OpenACM solo necesita:

- La **URL** de tu Home Assistant (ej. \`http://homeassistant.local:8123\`).
- Un **Long-Lived Access Token** (una llave de acceso que generas una sola vez).

\`\`\`
Tú (chat/voz/dashboard) ─► OpenACM ─► Home Assistant ─► tus dispositivos reales
                                     (REST + WebSocket)
\`\`\`

La conexión es en dos vías: OpenACM llama a servicios de Home Assistant
(\`turn_on\`, \`set_temperature\`, etc.) y además mantiene un WebSocket abierto
para enterarse al instante cuando algo cambia (aunque lo hayas cambiado desde
la app de Home Assistant o un interruptor físico) — así el dashboard de
OpenACM siempre muestra el estado real, no uno desactualizado.

Si ya tienes Home Assistant corriendo, salta a la [Parte B](#parte-b--generar-el-long-lived-access-token).

---

## Parte A — Instalar Home Assistant con Docker

Si no tienes Home Assistant, la forma más simple de correrlo junto a OpenACM
es con Docker Compose.

**1. Crea una carpeta para sus datos** (fuera del repo de OpenACM, para que
sobreviva actualizaciones):

\`\`\`bash
mkdir -p ~/homeassistant/config
\`\`\`

**2. Agrega el servicio a tu \`docker-compose.yml\`** (puede ser el mismo
archivo donde corre OpenACM, o uno aparte):

\`\`\`yaml
services:
  homeassistant:
    container_name: homeassistant
    image: ghcr.io/home-assistant/home-assistant:stable
    restart: unless-stopped
    network_mode: host   # necesario para descubrir dispositivos en tu LAN
    volumes:
      - ~/homeassistant/config:/config
      - /etc/localtime:/etc/localtime:ro
\`\`\`

> \`network_mode: host\` es importante: muchos protocolos de descubrimiento de
> dispositivos IoT (SSDP, mDNS, etc.) no funcionan bien detrás del NAT normal
> de Docker. Si tu NAS/servidor no soporta \`network_mode: host\` (algunos
> sistemas como Synology lo restringen), puedes correr sin él, pero tendrás
> que agregar tus integraciones manualmente en vez de por auto-descubrimiento.

**3. Levanta el contenedor:**

\`\`\`bash
docker compose up -d homeassistant
\`\`\`

**4. Entra a la configuración inicial:** abre \`http://<tu-servidor>:8123\` en
el navegador, crea tu usuario administrador, y sigue el asistente (Home
Assistant detecta automáticamente muchos dispositivos en tu red — luces,
TVs, etc. — y te ofrece agregarlos ahí mismo).

**5. Agrega tus dispositivos/integraciones reales** desde
**Configuración → Dispositivos y servicios → Agregar integración** — busca la
marca de tus dispositivos (Tuya, Xiaomi Miio, LG WebOS, etc.). Esto reemplaza
completamente lo que antes hacían los drivers propios de OpenACM: Home
Assistant ya tiene soporte oficial y mejor mantenido para cientos de marcas.

---

## Parte B — Generar el Long-Lived Access Token

1. En Home Assistant, entra a tu **perfil de usuario** (ícono con tu nombre,
   abajo a la izquierda del menú).
2. Baja hasta la sección **"Tokens de acceso de larga duración"** (*Long-Lived
   Access Tokens*), al final de la pestaña "Seguridad".
3. Click en **"Crear token"**, dale un nombre (ej. \`openacm\`), y
   **cópialo de inmediato** — Home Assistant solo te lo muestra una vez.

Guarda ese token en un lugar seguro temporalmente (lo vas a pegar en el paso
siguiente).

---

## Parte C — Configurar el plugin en OpenACM

1. Abre el dashboard de OpenACM y entra a **\`/plugins\`**.
2. Busca \`home_assistant\` en la lista y haz click en **"Configurar"**.
3. Llena los dos campos:
   - **URL de Home Assistant**: ej. \`http://homeassistant.local:8123\` o
     \`http://<ip-de-tu-servidor>:8123\`.
   - **Long-Lived Access Token**: pega el token que generaste en la Parte B.
4. Guarda. Vas a ver el banner "Reinicia para aplicar" — reinicia OpenACM
   (botón en el mismo banner, o \`run.bat\`/tu proceso normal).

Al reiniciar, el plugin se conecta automáticamente y trae el estado de todos
tus dispositivos.

---

## Parte D — Probar

- **Dashboard:** entra a **\`/home-assistant\`** — deberías ver tus
  dispositivos agrupados por tipo (luces, enchufes, clima, etc.), con su
  estado actual. Prueba el botón de encender/apagar en alguno.
- **Tiempo real:** cambia algo desde la app real de Home Assistant (o un
  interruptor físico) y confirma que la página de OpenACM se actualiza sola
  en un par de segundos, sin refrescar.
- **Chat/voz**, prueba frases como:
  - "¿qué dispositivos tengo?"
  - "enciende la luz de la sala"
  - "pon la luz de la sala al 50% de brillo"
  - "¿cuál es el estado del termostato?"
  - "activa la escena modo noche" (si tienes una escena configurada)
  - "manda la aspiradora a la base" — para tipos de dispositivo que \`ha_control\`
    no cubre (aspiradoras, ventiladores, cerraduras, alarmas…) el agente usa
    \`ha_list_services\` para descubrir los servicios del dominio y
    \`ha_call_service\` para llamarlos.

Las 8 herramientas del plugin (\`ha_devices\`, \`ha_areas\`, \`ha_status\`,
\`ha_control\`, \`ha_scenes\`, \`ha_activate_scene\`, \`ha_list_services\`,
\`ha_call_service\`) están documentadas en la
[referencia de herramientas](./05-tools-reference.md#iot--smart-home-tools-home-assistant-plugin).

---

## 6. Sobre \`area\` — un detalle importante

Puedes decirle al agente "apaga todas las luces de la sala" para controlar
una zona completa en una sola acción, pero eso solo funciona bien si el
**área en Home Assistant** tiene el mismo identificador que usas al hablar.
Home Assistant identifica cada área por un **ID/slug** (ej. \`sala\`,
\`living_room\`), no por el nombre bonito que le pusiste — si le dices un
nombre que no coincide exactamente con ese ID, la acción "funciona" (no da
error) pero en realidad no mueve ningún dispositivo, porque no encontró esa
área.

Para evitar sorpresas: revisa el nombre exacto de tus áreas en
**Configuración → Áreas** dentro de Home Assistant, y úsalo tal cual al
hablarle al agente (o usa \`entity_id\`/nombres de dispositivos individuales,
que sí tienen coincidencia flexible por nombre).

---

## 7. Problemas comunes

| Problema | Causa probable / solución |
|---|---|
| El plugin queda "inactivo" después de guardar la config | Falta reiniciar OpenACM — los cambios de \`/plugins\` solo aplican al reiniciar. |
| "Token de Home Assistant inválido o expirado" | El token se borró o revocó desde Home Assistant (perfil → tokens). Genera uno nuevo y vuelve a guardarlo en \`/plugins\`. |
| El dashboard no muestra ningún dispositivo | Confirma que la URL es alcanzable desde donde corre OpenACM (mismo LAN/Docker network), y que agregaste al menos una integración/dispositivo dentro de Home Assistant mismo. |
| "apaga todas las luces de la sala" no hace nada mal | Revisa la sección [6](#6-sobre-area--un-detalle-importante) — probablemente el nombre del área no coincide con el ID real en Home Assistant. |
| Los cambios físicos (apagar desde un switch) tardan en reflejarse en OpenACM | Confirma que el WebSocket de Home Assistant sigue conectado — revisa los logs de OpenACM por mensajes de reconexión (\`HA WebSocket error, reconnecting\`). Si tu Home Assistant se reinició, la reconexión es automática (con espera creciente hasta 30s). |
| Quiero volver a usar los drivers viejos (Tuya/LG TV/Miio directos) | Ya no existen — fueron reemplazados por completo por este plugin. Configura esos dispositivos dentro de Home Assistant (que tiene mejor soporte oficial para cada marca) y todo vuelve a funcionar igual, vía Home Assistant. |

`
  },
  {
    "slug": "skills-tools-guide",
    "title": "OpenACM Skills & Tools File Structure",
    "section": "Guides",
    "content": `
# OpenACM Skills & Tools File Structure

## Overview

| Type | Location | Format | Activation |
|------|----------|--------|------------|
| **Skills** | \`./skills/{category}/\` | \`.md\` with frontmatter | Automatic on creation (DB + file) |
| **Tools** | \`src/openacm/tools/\` or a plugin | \`.py\` with \`@tool\` decorator | Registration + restart required |

---

## Skills - \`./skills/\`

Skills are **behavioral guides** for the LLM model. They are saved as Markdown files with metadata in the frontmatter.

### Directory Structure

\`\`\`
skills/
├── security/          # Security skills
│   └── security-auditor.md
├── development/       # Development skills
│   ├── code-reviewer.md
│   ├── fastapi-expert.md
│   └── database-architect.md
├── ai/               # AI/ML skills
│   └── rag-optimizer.md
├── custom/           # User custom skills
│   └── my-custom-skill.md
└── generated/        # AI-generated skills
    └── django-expert-20250327.md
\`\`\`

### SKILL.md File Format

\`\`\`markdown
---
name: "skill-name"
description: "Brief description of what it does"
category: "development"
created: "2025-03-27T10:30:00"
---

# Skill Name

## Overview
Detailed description and when to use this skill.

## Guidelines
Specific instructions, best practices, patterns to follow:
- Point 1
- Point 2
- Point 3

## Examples
Concrete examples:
- Example 1: Common scenario
- Example 2: Edge case

## Common Pitfalls
What to avoid:
- Anti-pattern 1
- Common mistake 2
\`\`\`

### Recommended Categories

- \`security\` - Auditing, vulnerabilities, security best practices
- \`development\` - Programming, API design, databases
- \`ai\` - Machine learning, RAG, prompt engineering
- \`custom\` - User custom skills
- \`generated\` - Skills automatically created by the system

### How to Create Skills

#### Option 1: From Chat (Automatic)
\`\`\`
You: Create a skill to be an expert in Django

[The bot, via the create_skill tool:]
1. Generates content with AI and shows you a preview
2. After you confirm (apply=true), saves to: skills/<category>/django-expert.md (category "custom" by default)
3. Saves metadata in SQLite
4. The skill is active and is injected whenever a message is relevant to it
\`\`\`

#### Option 2: Manually (File)
1. Create file: \`skills/custom/my-skill.md\`
2. Fill in with SKILL.md format
3. Restart OpenACM (syncs files in category folders to the DB)

#### Option 3: Web Dashboard
- Go to "Skills" section
- Click "+ New Skill"
- Complete the form
- Automatically saved to file + DB

---

## Tools - \`src/openacm/tools/\`

Tools are **executable Python functions** that OpenACM can call. They are saved as \`.py\` files with the \`@tool\` decorator.

### Directory Structure

\`\`\`
src/openacm/tools/
├── __init__.py
├── base.py                 # Base class and @tool decorator
├── registry.py            # ToolRegistry
│
├── system_cmd.py          # System commands
├── file_ops.py           # File operations
├── web_search.py         # Web search
├── browser_agent.py      # Browser automation
├── python_kernel.py      # Python execution
├── google_services.py    # Google integration
├── screenshot.py         # Screenshots
├── rag_tools.py          # RAG tools
├── system_info.py        # System information
│
├── code_editor.py        # edit_file, grep_in_files, get_file_outline, run_linter…
├── agent_tool.py / flow_tool.py / cron_tool.py / swarm_tool.py / platform_tools.py
├── intent_keywords.py    # Keyword fallback for tool selection
├── skill_creator.py      # Skill creator
└── tool_creator.py       # Tool creator (not registered by default in v0.4.7)
\`\`\`

### TOOL.py File Format

\`\`\`python
"""
tool-name.py - Short description

Longer description of the tool.
"""

import structlog
from openacm.tools.base import tool

log = structlog.get_logger()


@tool(
    name="tool_name",                 # Unique name in snake_case
    description="""                   # Description for the LLM (when to use it)
    Detailed description.
    Use when: (1) scenario 1, (2) scenario 2
    """,
    parameters={                      # JSON Schema for parameters
        "type": "object",
        "properties": {
            "param1": {
                "type": "string",
                "description": "Description of parameter 1"
            },
            "param2": {
                "type": "integer",
                "description": "Description of parameter 2"
            }
        },
        "required": ["param1"],       # Required parameters
    },
    risk_level="medium",              # low | medium | high
    needs_sandbox=False,              # True if it executes dangerous code
)
async def tool_name(
    param1: str,                      # Parameters with type hints
    param2: int = 0,                  # Default values
    _brain=None,                      # Dependency injection (optional)
    **kwargs
) -> str:
    """Main tool function."""

    # Your code here
    result = f"Processing {param1}..."

    return result


# Export functions
__all__ = ["tool_name"]
\`\`\`

### How to Create Tools

#### Option 1: From Chat — not available by default
\`tool_creator.py\` implements \`create_tool\` / \`edit_tool\` / \`delete_tool\`, but in v0.4.7 \`app.py\` does not register that module, so the agent cannot create tools from chat. Use option 2 or a [plugin](./24-plugins.md).

#### Option 2: Manually (Development)
1. Create file: \`src/openacm/tools/my_tool.py\`
2. Use the template above
3. Add import in \`app.py\`:
   \`\`\`python
   from openacm.tools import my_tool
   self.tool_registry.register_module(my_tool)
   \`\`\`
4. Restart OpenACM

#### Complete Tool Example

\`\`\`python
# src/openacm/tools/hello_world.py

"""
Hello World Tool - Basic example

Demonstrates how to create a simple tool.
"""

import structlog
from openacm.tools.base import tool

log = structlog.get_logger()


@tool(
    name="hello_world",
    description="""
    Greets the user by name.
    Use when: (1) the user asks for a greeting, (2) you want to demonstrate functionality
    """,
    parameters={
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the person to greet"
            },
            "language": {
                "type": "string",
                "description": "Greeting language (es/en/fr)",
                "enum": ["es", "en", "fr"]
            }
        },
        "required": ["name"],
    },
    risk_level="low",
    needs_sandbox=False,
)
async def hello_world(
    name: str,
    language: str = "en",
    **kwargs
) -> str:
    """Greet the user."""

    greetings = {
        "es": f"Hola, {name}!",
        "en": f"Hello, {name}!",
        "fr": f"Bonjour, {name}!"
    }

    return greetings.get(language, greetings["en"])


__all__ = ["hello_world"]
\`\`\`

---

## Key Differences: Skills vs Tools

| Aspect | Skills | Tools |
|--------|--------|-------|
| **What they are** | Behavioral guides | Executable functions |
| **Format** | Markdown (.md) | Python (.py) |
| **Location** | \`./skills/{cat}/\` | \`src/openacm/tools/\` |
| **Persistence** | File + SQLite | File only |
| **Activation** | Immediate | Restart required |
| **Created by** | LLM (skill_creator) | LLM (tool_creator) or manual |
| **Security** | Very safe (text) | Sandbox if needed |
| **Examples** | Django expert | Run command, web search |

---

## Quick Templates

### SKILL.md Template

\`\`\`markdown
---
name: "my-expert"
description: "Expert in X technology"
category: "development"
---

# My Expert

## Overview
You are an expert in [technology]. You help with [use cases].

## Guidelines
1. **Principle 1**: Explanation
2. **Principle 2**: Explanation
3. **Principle 3**: Explanation

## Examples
- **Scenario A**: How to approach it
- **Scenario B**: How to approach it

## Common Pitfalls
- Don't do this
- Avoid this
\`\`\`

### TOOL.py Template

\`\`\`python
"""my_tool.py - Description"""

import structlog
from openacm.tools.base import tool

log = structlog.get_logger()


@tool(
    name="my_tool",
    description="""Description for the LLM""",
    parameters={
        "type": "object",
        "properties": {
            "input": {"type": "string", "description": "Input"}
        },
        "required": ["input"],
    },
    risk_level="low",
    needs_sandbox=False,
)
async def my_tool(input: str, **kwargs) -> str:
    """Main function."""
    return f"Result: {input}"


__all__ = ["my_tool"]
\`\`\`

---

## Best Practices

### For Skills:
1. **Descriptive names**: \`django-expert\` is better than \`skill1\`
2. **Clear categories**: Use the 5 defined categories
3. **Actionable content**: The LLM should be able to apply it immediately
4. **Concrete examples**: Not vague descriptions
5. **Versioning**: Generated skills include a date

### For Tools:
1. **snake_case names**: \`file_analyzer\`, not \`FileAnalyzer\`
2. **Typed parameters**: Always use type hints
3. **Error handling**: Try/except with clear messages
4. **Logging**: Use structlog for debugging
5. **Documentation**: Clear description of when to use it
6. **Risk level**: Be honest (high if it uses subprocess)

---

## Common Workflows

### Workflow 1: Create Skill from Chat
\`\`\`
1. User: "Create a skill to be a GraphQL expert"
2. LLM generates complete content
3. Saves to: skills/generated/graphql-expert.md
4. Saves metadata in DB
5. Activates immediately
\`\`\`

### Workflow 2: Create Tool from Chat
\`\`\`
1. User: "Create a tool that validates emails"
2. LLM generates Python code
3. Saves to: src/openacm/tools/email_validator.py
4. Shows message: "Restart to activate"
5. User restarts OpenACM
6. Tool available
\`\`\`

### Workflow 3: Manual Development
\`\`\`
1. Developer creates local file
2. Saves to the correct location
3. Restarts OpenACM
4. System loads it automatically
\`\`\`

---

## Location Summary

\`\`\`
OpenACM/
├── skills/                          # SKILLS (Markdown)
│   ├── security/                    #    Security
│   ├── development/                 #    Development
│   ├── ai/                          #    AI/ML
│   ├── custom/                      #    Custom
│   └── generated/                   #    Auto-generated
│
├── src/openacm/tools/               # TOOLS (Python)
│   ├── base.py                      #    @tool decorator
│   ├── registry.py                  #    ToolRegistry
│   ├── skill_creator.py             #    Creates skills
│   ├── tool_creator.py              #    Creates tools
│   └── [other tools].py             #    System tools
│
├── src/openacm/core/                # Core
│   ├── skill_manager.py             #    Skill manager
│   ├── brain.py                     #    Uses active skills
│   └── llm_router.py                #    LLM Router
│
├── data/                            # Data
│   ├── openacm.db                   #    SQLite (skill metadata)
│   └── vectordb/                    #    ChromaDB
│
└── .opencode/                       # Skills for OpenCode
    └── skills/                      #    (Already installed)
        ├── skill-security-auditor/
        └── [other skills]/
\`\`\`

`
  },
  {
    "slug": "troubleshooting",
    "title": "OpenACM Troubleshooting Guide",
    "section": "Guides",
    "content": `
# OpenACM Troubleshooting Guide

> Most examples below are for Windows (\`.bat\`, \`.venv\\Scripts\\...\`). On macOS/Linux use \`./setup.sh\`, \`./run.sh\` and \`.venv/bin/...\`.

## First checks

- **Logs:** \`data/logs/\` (turn on **Configuration → Security → Debug mode**, or \`POST /api/config/debug_mode\`, for DEBUG-level logs)
- **Traces:** the **Traces** page shows every agentic iteration, tool timing and the error of a failed request
- **Health:** \`curl http://127.0.0.1:47821/api/ping\` → \`{"ok": true}\`
- **Nothing happens when the agent wants to run a command?** In the default \`confirmation\` mode the command waits for your approval in the dashboard. In \`auto\` mode, commands not listed in \`whitelisted_commands\` are rejected.

## Problem: "Gets stuck after a command"

If OpenACM executes a command or tool and then freezes (no response), try these solutions:

### Solution 1: Verify virtual environment Python

The most common problem is Windows using the system Python instead of the .venv one.

**Check which Python is being used:**
\`\`\`batch
.venv\\Scripts\\python.exe --version
python --version
\`\`\`

If the second command shows a different version, your PATH is misconfigured.

**Fix (temporary):**
\`\`\`batch
set PATH=%CD%\\.venv\\Scripts;%PATH%
python -m openacm
\`\`\`

**Fix (permanent):**
1. Search for "Environment variables" in the Start menu
2. Edit the user "Path" variable
3. Remove or move to the end any Python paths that are NOT .venv

### Solution 2: Temporarily disable antivirus

Some antivirus programs (Windows Defender, McAfee, etc.) block:
- Subprocess execution
- Playwright/Chromium
- WebSocket connections

**Try:** Temporarily disable your antivirus and run OpenACM.

### Solution 3: Run as Administrator

1. Right-click on \`run.bat\`
2. "Run as administrator"
3. Check if it works better

### Solution 4: Clean corrupted installation

\`\`\`batch
:: 1. Stop OpenACM if it's running
:: 2. Delete temporary folders
rmdir /s /q .venv
rmdir /s /q data\\media
rmdir /s /q data\\vectordb

:: 3. Reinstall
call setup.bat
\`\`\`

### Solution 5: Verify installed Python versions

\`\`\`batch
:: List all Python installations
where python
where python3
where uv

:: If there are multiple versions, force the project's one
.venv\\Scripts\\python.exe -m openacm
\`\`\`

---

## Problem: Browser timeout errors

\`\`\`
Page.goto: Timeout 30000ms exceeded
\`\`\`

### Causes:
1. Slow internet connection
2. Website is blocked by firewall
3. Playwright is not properly installed

### Solutions:

**Reinstall Playwright:**
\`\`\`batch
uv run playwright install chromium
:: or
.venv\\Scripts\\playwright install chromium
\`\`\`

**Check connection:**
\`\`\`batch
ping google.com
\`\`\`

**Disable proxy/firewall:**
Some corporate networks block Playwright.

---

## Problem: LLM 500 Error (opencode.ai)

\`\`\`
Server error '500 Internal Server Error'
\`\`\`

### This is NOT a problem with your installation

A 500 error means the OpenCode.ai server had an internal issue. This may be due to:
- Server maintenance
- Temporary overload
- Issues with the specific model

### Solutions:

1. **Wait a few minutes** and try again
2. **Switch models** — in chat: \`/model openai/gpt-4o\`, in the dashboard (**Configuration → Model**), or in \`config/local.yaml\`:
   \`\`\`yaml
   llm:
     default_provider: openai
     providers:
       openai:
         default_model: "gpt-4o"
   \`\`\`
3. **Verify your API key** in \`config/.env\` (\`OPENCODE_GO_API_KEY\` for OpenCode Go)

Transient 5xx errors and \`429 Too Many Requests\` are already retried automatically with exponential backoff; you only see the error once retries are exhausted.

---

## Problem: duckduckgo_search warning

\`\`\`
RuntimeWarning: This package has been renamed to \`ddgs\`!
\`\`\`

**Solution:** Already fixed in the latest version. If it persists:

\`\`\`batch
uv pip install "ddgs>=7.0"
\`\`\`

---

## Problem: "ModuleNotFoundError" when running

### Cause: The virtual environment was not activated correctly

### Quick fix:
\`\`\`batch
:: Instead of just run.bat, execute:
call .venv\\Scripts\\activate.bat
python -m openacm
\`\`\`

### Permanent fix:
Edit \`run.bat\` and ensure it uses absolute paths:
\`\`\`batch
set "PYTHON=%~dp0.venv\\Scripts\\python.exe"
"%PYTHON%" -m openacm
\`\`\`

---

## Problem: Dashboard shows "Unauthorized"

The token in your browser doesn't match \`DASHBOARD_TOKEN\` in \`config/.env\` (e.g. after regenerating it). Log out and paste the current token — it is printed in the terminal at startup.

---

## Problem: Docker container is running but the dashboard doesn't load

The compose file publishes port 8080, but OpenACM listens on \`127.0.0.1:47821\` unless told otherwise. Create \`config/local.yaml\` with:

\`\`\`yaml
web:
  host: 0.0.0.0
  port: 8080
\`\`\`

and restart the container. See [Docker](./32-docker.md).

---

## Problem: WhatsApp webhook doesn't verify / messages are ignored

See the troubleshooting table in [WhatsApp Setup](./WHATSAPP_SETUP.md). The most common causes are a verify token mismatch and an empty/wrong \`WHATSAPP_APP_SECRET\` (logs show \`signature invalid\`).

---

## Verification Checklist

Before reporting an issue, verify:

- [ ] You ran \`setup.bat\` fully without errors
- [ ] You have Python 3.12+ installed (check with \`python --version\`)
- [ ] The \`config/.env\` file exists and has your API keys
- [ ] Playwright is installed: \`.venv\\Scripts\\playwright --version\`
- [ ] No antivirus is blocking processes
- [ ] You have a stable internet connection
- [ ] You tried running as administrator (just to test)

---

## How to Report Issues

If nothing works, run this and share the output:

\`\`\`batch
echo === SYSTEM INFO === > debug.txt
echo. >> debug.txt
echo Python in PATH: >> debug.txt
where python >> debug.txt 2>&1
echo. >> debug.txt
echo Python version: >> debug.txt
python --version >> debug.txt 2>&1
echo. >> debug.txt
echo Version in .venv: >> debug.txt
.venv\\Scripts\\python.exe --version >> debug.txt 2>&1
echo. >> debug.txt
echo Environment variables: >> debug.txt
echo PATH=%PATH% >> debug.txt
echo. >> debug.txt
echo === .ENV CONTENTS === >> debug.txt
type config\\.env >> debug.txt 2>&1
\`\`\`

Share the \`debug.txt\` file (remove your API keys first!).

`
  },
  {
    "slug": "llm-pricing-reference",
    "title": "¿Cuánto cuesta usar IA en OpenACM?",
    "section": "Guides",
    "content": `
# ¿Cuánto cuesta usar IA en OpenACM?

> Precios actualizados a junio 2026.

---

## ¿Cómo funciona?

OpenACM puede conectarse a diferentes servicios de inteligencia artificial para procesar los correos. Tú eliges cuál usar según precio y calidad. Todos se conectan igual, solo cambias una línea de configuración.

---

## Servicios disponibles

### De pago (API)

Pagas según cuánto uses — sin suscripción mensual fija.

| Servicio | Empresa | Precio entrada | Precio salida | Ventaja principal |
|---|---|---|---|---|
| **Claude Haiku 4.5** | Anthropic | $1.00 / 1M tokens | $5.00 / 1M tokens | Mejor comprensión de español |
| **Claude Sonnet 4.6** | Anthropic | $3.00 / 1M tokens | $15.00 / 1M tokens | Muy alta precisión |
| **Claude Opus 4** | Anthropic | $5.00 / 1M tokens | $25.00 / 1M tokens | El más capaz de Anthropic |
| **GPT-4.1** | OpenAI | $2.00 / 1M tokens | $8.00 / 1M tokens | Muy conocido y confiable |
| **Gemini 2.5 Flash** | Google | $0.30 / 1M tokens | $2.50 / 1M tokens | Económico + tiene nivel gratis ⚠️ |
| **Gemini 2.5 Flash-Lite** | Google | $0.10 / 1M tokens | $0.40 / 1M tokens | El más barato de Google ⚠️ |
| **Mistral Medium 3.5** | Mistral AI | $1.50 / 1M tokens | $7.50 / 1M tokens | Empresa europea, datos en Europa |
| **DeepSeek v4 Flash** | DeepSeek | $0.14 / 1M tokens | $0.28 / 1M tokens | Muy barato, calidad sorprendente |
| **DeepSeek v4 Pro** | DeepSeek | $0.44 / 1M tokens | $0.87 / 1M tokens | Alta calidad a bajo precio |
| **Kimi K2.6** | Moonshot AI | $0.95 / 1M tokens | $4.00 / 1M tokens | Modelo incluido en OpenCode Go |

> **¿Qué es un token?** Aproximadamente 4 caracteres de texto. "Hola, ¿cómo estás?" son ~5 tokens.
>
> ⚠️ **Nota sobre modelos Flash (Google):** Los modelos Flash son más económicos porque son versiones más ligeras. Pueden cometer más errores de clasificación que modelos más completos como Claude Haiku o Kimi K2.6. Para correos de baja criticidad están bien; para correos importantes, mejor usar un modelo más robusto.

---

### Por suscripción mensual (CLI)

Estos funcionan como programas instalados en tu computadora. El costo de la IA ya está incluido en la suscripción — no pagas por correo ni por uso. Y lo mejor: **la misma suscripción te da acceso a un asistente de IA completo para programar, redactar, analizar archivos y mucho más**, no solo para los correos.

| Servicio | Empresa | Suscripción | Qué incluye además de los correos |
|---|---|---|---|
| **Claude Code** (Claude CLI) | Anthropic | ~$20–$100 / mes | Asistente de código, análisis de archivos, automatizaciones, agentes |
| **Gemini CLI** | Google | ~$20 / mes (Google One AI Premium) | Gemini en todos los productos Google, Workspace, generación de imágenes |
| **OpenCode Go** | Open Source | $10 / mes | Asistente de código en terminal — incluye acceso a **Kimi K2.6**, DeepSeek, y otros modelos de alta calidad |
| **Ollama** (local) | Comunidad | Gratis (hardware propio) | Modelos corriendo en tu propia máquina, sin internet, sin límites |

> **Clave:** Con Claude Code o Gemini CLI, el uso en OpenACM se descuenta del mismo plan que ya estás pagando para trabajar con IA todo el día. Los correos salen "de propina".

---

## ¿Cuánto gastaría con 300 correos al día?

El clasificador de correos procesa los mensajes en grupos de 20, lo que lo hace muy eficiente.

### ¿Por qué es tan barato el clasificador?

Puede parecer poco, pero hay dos razones concretas:

1. **Procesa 20 correos por llamada** (no uno por uno) → 300 correos al día = solo 15 llamadas al LLM
2. **Solo lee el asunto + remitente + un extracto de 200 caracteres** del correo, no el cuerpo completo

Si cada correo fuera una llamada individual leyendo el body completo, el costo sería 10–20x mayor. La eficiencia viene del diseño por lotes.

---

### Costo único de arranque (backfill del último mes)

La primera vez que se activa el plugin, lo ideal es procesar los últimos 30 días de correos para que el sistema tenga contexto histórico. Eso son **9,000 correos de una sola vez**.

| | Arranque (9,000 correos, única vez) | Operación mensual (300/día × 30 días) |
|---|---|---|
| Correos procesados | 9,000 | 9,000 |
| Llamadas al LLM | 450 | 450 |
| Tokens entrada | ~537,000 | ~537,000 |
| Tokens salida | ~124,000 | ~124,000 |

> El costo del backfill inicial es **exactamente igual** a un mes de operación normal — porque es la misma cantidad de correos. En la práctica, significa que el primer mes pagas el doble (arranque + operación), y del segundo mes en adelante solo pagas la operación mensual.

**Ejemplo con Claude Haiku 4.5:** primer mes ~$2.32 (arranque + operación), segundo mes en adelante ~$1.16/mes.

---

### Costo mensual en operación normal (30 días):

| Servicio | Costo al mes | Nota |
|---|---|---|
| 🥇 **Gemini 2.5 Flash** | **$0.00** | Nivel gratis de Google: hasta 250 requests/día — nuestros 300 correos solo usan 15 requests/día ✅ |
| 🥈 **DeepSeek v4 Flash** | **$0.11** | Menos de un dólar al mes |
| 🥉 **Gemini 2.5 Flash-Lite** | **$0.10** | El más barato de pago |
| **DeepSeek v4 Pro** | $0.34 | Buena relación calidad-precio |
| **Claude Haiku 4.5** | $1.16 | Mejor comprensión en español |
| **Kimi K2.6** *(via OpenCode Go)* | $1.00 | Alta calidad, incluido en suscripción de $10/mes |
| **Mistral Medium 3.5** | $1.73 | Opción si los datos deben estar en Europa |
| **GPT-4.1** | $2.06 | Alternativa sólida de OpenAI |
| **Claude Sonnet 4.6** | $3.47 | Alta precisión para correos complejos |
| **Claude Opus 4** | $5.78 | Máxima calidad, overkill para clasificación simple |

> **Fuente nivel gratis Gemini:** [aistudio.google.com/rate-limit](https://aistudio.google.com/rate-limit) — los límites exactos varían por cuenta. El límite publicado actualmente es 250 requests/día para Gemini 2.5 Flash.
>
> **Fuente precios Kimi K2.6:** [openrouter.ai/moonshotai/kimi-k2.6](https://openrouter.ai/moonshotai/kimi-k2.6)

---

## Funcionalidad adicional: Auto-redacción de respuestas

A diferencia del clasificador, la auto-redacción **no puede hacer batches** — cada correo necesita su propia llamada al LLM porque la respuesta es personalizada. Además, necesita leer el cuerpo completo del correo para redactar una respuesta coherente. Esto lo hace significativamente más caro.

**Supuestos por correo auto-redactado:**
- Instrucciones + contexto del sistema: ~500 tokens de entrada
- Cuerpo del correo (promedio): ~400 tokens de entrada
- Borrador de respuesta generado: ~200 tokens de salida
- **Total por correo: ~900 tokens entrada + ~200 tokens salida**

> No todos los correos van a necesitar auto-respuesta. El costo depende de qué porcentaje se activa esta función.

### Costo mensual de auto-redacción según volumen

| Correos auto-redactados/día | Claude Haiku 4.5 | Gemini 2.5 Flash | **Kimi K2.6 (OpenCode Go)** | DeepSeek v4 Flash |
|---|---|---|---|---|
| **30/día** (10% del total) | USD 1.71 | USD 0.69 | **Incluido en plan** | USD 0.16 |
| **90/día** (30% del total) | USD 5.13 | USD 2.08 | **Incluido en plan** | USD 0.49 |
| **150/día** (50% del total) | USD 8.55 | USD 3.47 | **Incluido en plan** | USD 0.82 |
| **300/día** (100% del total) | USD 17.10 | USD 6.93 | **Incluido en plan** | USD 1.64 |

> Con OpenCode Go (USD 10/mes), el uso de Kimi K2.6 para todos estos volúmenes cabe dentro del límite mensual del plan (USD 60 de consumo real). No se paga extra.

### Costo total combinado (clasificación + auto-redacción)

Asumiendo que el **30% de los correos** (90/día) reciben auto-respuesta:

| Modelo | Clasificación/mes | Auto-redacción/mes | **Total/mes** |
|---|---|---|---|
| **Kimi K2.6 (OpenCode Go)** | Incluido | Incluido | **USD 10.00 fijos** ⭐ |
| DeepSeek v4 Flash | USD 0.11 | USD 0.49 | **USD 0.60** |
| Gemini 2.5 Flash | USD 0.00 | USD 2.08 | **USD 2.08** |
| Claude Haiku 4.5 | USD 1.16 | USD 5.13 | **USD 6.29** |
| GPT-4.1 | USD 2.06 | USD 6.08 | **USD 8.14** |
| Claude Sonnet 4.6 | USD 3.47 | USD 20.25 | **USD 23.72** |

> **Nota importante:** La auto-redacción multiplica el costo mucho más que la clasificación. OpenCode Go a USD 10/mes fijos es la opción más predecible — sin sorpresas en la factura.

---

## Recomendación

### ⭐ Opción recomendada: OpenCode Go (USD 10/mes, todo incluido)

**OpenCode Go incluye los tokens en el plan** — no pagas API por separado. Por USD 10/mes tienes acceso a Kimi K2.6 y una docena de modelos más, con un límite de uso de USD 60/mes en consumo real de tokens.

Para nuestro caso (300 correos/día clasificados + 30% auto-redactados), el consumo estimado de tokens sería **~USD 6.13/mes** — estamos muy lejos del límite de USD 60, así que la suscripción básica sobra ampliamente.

| | Con OpenCode Go (USD 10/mes) |
|---|---|
| Clasificación de 300 correos/día | Incluido |
| Auto-redacción del 30% de correos | Incluido |
| Modelo usado | Kimi K2.6 (alta calidad) |
| Uso estimado del límite mensual | ~USD 6.13 de USD 60.00 (10%) |
| **Costo total mensual** | **USD 10.00 fijos** |
| Bonus | Asistente de código completo para el equipo |

**¿Por qué es la mejor opción a largo plazo?**
OpenACM está en constante crecimiento — cada nueva funcionalidad (resumen de correos, respuestas automáticas, alertas inteligentes, integración con calendarios, etc.) consume más tokens. Con OpenCode Go, activar cualquier funcionalidad nueva **no genera un costo adicional** mientras el consumo total no supere los USD 60/mes de tope. Con las funcionalidades actuales solo usamos el 10% de ese límite, lo que deja margen para seguir ampliando sin revisar presupuestos ni cambiar de plan.

Fuente: [opencode.ai/go](https://opencode.ai/go) · [opencode.ai/docs/go](https://opencode.ai/docs/go/)

---

### Otras opciones si no se quiere suscripción fija

**Solo clasificación (300 correos/día):**
- Gratis: Gemini 2.5 Flash (dentro del free tier de Google)
- Más económico de pago: DeepSeek v4 Flash (USD 0.11/mes)
- Mejor calidad en español: Claude Haiku 4.5 (USD 1.16/mes)

**Clasificación + auto-redacción (30% de correos):**
- Más económico: DeepSeek v4 Flash (USD 0.60/mes total)
- Más equilibrado: Gemini 2.5 Flash (USD 2.08/mes)
- Evitar Sonnet o Opus para auto-redacción masiva — escala rápido a más de USD 20/mes

---

> Los precios pueden variar. Fuentes verificadas: [Anthropic](https://docs.anthropic.com/en/docs/about-claude/pricing) · [Google](https://ai.google.dev/gemini-api/docs/pricing) · [OpenAI](https://developers.openai.com/api/docs/pricing) · [Mistral](https://mistral.ai/pricing/) · [DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) · [Kimi/OpenRouter](https://openrouter.ai/moonshotai/kimi-k2.6)

`
  },
  {
    "slug": "readme",
    "title": "Documentation Index",
    "section": "Project",
    "content": `
# OpenACM Documentation

> Official documentation for **OpenACM — Open Automated Computer Manager**

---

## Table of Contents

| Document | Description |
|----------|-------------|
| [Introduction](./01-introduction.md) | What is OpenACM, vision, philosophy, key differentiators |
| [Getting Started](./02-getting-started.md) | Installation, setup, first run, updating |
| [Architecture](./03-architecture.md) | System design, components, data flow |
| [Core Concepts](./04-core-concepts.md) | Brain, memory, tools, skills, agents |
| [Tools Reference](./05-tools-reference.md) | Every built-in tool, parameters, examples |
| [Skills System](./06-skills-system.md) | What skills are, creating them, built-in library |
| [Agents](./07-agents.md) | Agents, channels, knowledge base, memory policy, flows |
| [Channels](./08-channels.md) | Web, Console, Telegram, Discord, WhatsApp |
| [LLM Providers](./09-llm-providers.md) | Supported providers, model switching, custom endpoints |
| [API Reference](./10-api-reference.md) | REST endpoints + WebSocket protocols |
| [Configuration](./11-configuration.md) | Full config schema, \`local.yaml\`, environment variables |
| [Security](./12-security.md) | Execution modes, sandbox, encryption, public webhooks |
| [MCP Integration](./13-mcp.md) | Model Context Protocol server setup |
| [Memory & RAG](./14-memory-rag.md) | Short-term memory, compaction, long-term vector memory |
| [Activity & Routines](./15-activity-routines.md) | OS activity watcher, pattern detection, automation |
| [Dashboard](./16-dashboard.md) | Web UI guide, all pages |
| [Extending OpenACM](./17-extending.md) | Creating tools, skills, custom channels, MCP servers |
| [Roadmap](./18-roadmap.md) | What has shipped and what's coming next |
| [Cron Scheduler](./19-cron-scheduler.md) | Background job scheduler — recurring tasks, cron expressions, API |
| [Token Optimization](./20-token-optimization.md) | Multi-layer token reduction system — local router, semantic tools, output compressor, compaction |
| [CLI Providers](./21-cli-providers.md) | Connect via CLI binaries (claude, gemini, opencode) — no API key required |
| [Swarms](./22-swarms.md) | Multi-agent swarms, parallel workers, peer messaging |
| [Code Resurrection](./23-code-resurrection.md) | Background code indexer — RAG over your own projects |
| [Plugins](./24-plugins.md) | Plugin system — tools, routes, nav items, settings, lifecycle |
| [Third-Party Integrations](./25-third-party-integrations.md) | MarkItDown, Chonkie, Docling, Instructor — curated MIT libraries |
| [Dev Mode Plugin Plan](./26-dev-mode-plugin-plan.md) | Design plan (not implemented) for a developer-tools plugin |
| [CLI Setup Wizard](./27-cli-setup.md) | \`openacm-setup\` and \`openacm-manage\` terminal tools |
| [Agent Flows](./28-agent-flows.md) | Visual flow editor, node types, templates, testing, AI flow builder |
| [Webhook Connectors](./29-webhook-connectors.md) | Public signed webhooks that run a flow |
| [Voice](./30-voice.md) | Voice daemon (STT/TTS), TTS providers, wake word |
| [Gmail Classifier](./31-gmail-classifier.md) | Built-in plugin: AI email categorization, replies, digests |
| [Docker](./32-docker.md) | Running OpenACM in Docker and versioned client images |

### Guides

| Document | Description |
|----------|-------------|
| [Deploy on a VPS](./DEPLOY_VPS.md) | Ubuntu VPS deployment with Nginx Proxy Manager + systemd (Spanish) |
| [WhatsApp Setup](./WHATSAPP_SETUP.md) | Official Meta WhatsApp Cloud API setup (Spanish) |
| [Gmail Setup](./GMAIL_SETUP.md) | Google Cloud OAuth credentials for Gmail/Calendar/Drive (Spanish) |
| [Home Assistant Setup](./HOME_ASSISTANT_SETUP.md) | Home Assistant plugin setup (Spanish) |
| [Skills & Tools Guide](./SKILLS_TOOLS_GUIDE.md) | File structure for skills and tools |
| [Troubleshooting](./TROUBLESHOOTING.md) | Common problems and fixes |
| [LLM Pricing Reference](./LLM_PRICING_REFERENCE.md) | Cost reference for the Gmail Classifier workload (Spanish) |
| [Integration Roadmap](./ROADMAP_INTEGRATION.md) | Long-term architectural plans (Spanish) |
| [Security Policy](./SECURITY.md) | Security policy and vulnerability reporting |
| [Contributing](./CONTRIBUTING.md) | How to contribute and release |

---

## Quick Links

- **GitHub:** [github.com/Json55Hdz/OpenACM](https://github.com/Json55Hdz/OpenACM)
- **npm CLI:** [\`open-acm\`](https://www.npmjs.com/package/open-acm)
- **License:** MIT
- **Version:** 0.4.7

---

*OpenACM is an open-source, self-hosted autonomous AI agent that runs on your computer or server.*

`
  },
  {
    "slug": "contributing",
    "title": "Contributing to OpenACM",
    "section": "Project",
    "content": `
# Contributing to OpenACM

Thanks for your interest in contributing. Here's how to get started.

## Project author

OpenACM was created by [Jeison Hernandez](https://github.com/Json55Hdz) (JsonProductions).
All contributions are welcome, but the project direction is ultimately the author's call.

## Getting started

\`\`\`bash
git clone https://github.com/Json55Hdz/OpenACM.git
cd OpenACM

# Backend (Python 3.12)
uv venv --seed
uv pip install -e ".[dev]"
uv run python -m openacm        # or: uv run openacm

# Tests
uv run pytest                   # asyncio_mode = auto

# Frontend (Next.js, static export)
cd frontend
npm install
npm run lint
npm run deploy                  # next build + copy dist/ into src/openacm/web/static
\`\`\`

The dashboard calls the API with relative URLs and there is no dev proxy configured, so the simplest loop is \`npm run deploy\` and reload \`http://localhost:47821\`. (\`npm run dev\` serves the UI on \`:3000\`, but its API/WebSocket calls go to \`:3000\` too.)

Useful project conventions (see \`CLAUDE.md\` / \`AGENTS.md\` in the repo root):
- New tools are \`async\`, end with \`**kwargs\`, and get shared managers from \`_brain.tool_registry\`
- User-facing strings and LLM prompts live in \`src/openacm/core/messages.py\`
- Keyword fallbacks for tool selection live in \`src/openacm/tools/intent_keywords.py\`
- Tests use the mocked fixtures in \`tests/conftest.py\`

## How to contribute

1. Fork the repo
2. Create a branch: \`git checkout -b feature/your-feature\`
3. Make your changes
4. Open a Pull Request with a clear description of what it does and why

## What we're looking for

- Bug fixes
- New built-in tools (add them in \`src/openacm/tools/\`) or new plugins (\`src/openacm/plugins/\`)
- New MCP integrations or examples
- Frontend improvements
- Better documentation
- Cross-platform fixes (Linux/macOS compatibility)

## Guidelines

- Keep PRs focused — one thing at a time
- Follow the existing code style (Python: ruff, line length 100; TypeScript: ESLint)
- New API endpoints should be documented in \`docs/10-api-reference.md\`
- Don't commit \`config/.env\`, \`data/\`, or any API keys
- Add a brief description in the PR of how to test the change

## Reporting bugs

Open an issue with:
- What you did
- What you expected
- What happened (include logs if relevant)
- Your OS and Python/Node versions

## Releasing

Releases follow [Semantic Versioning](https://semver.org/) (\`vMAJOR.MINOR.PATCH\`).

1. Bump \`version\` in \`pyproject.toml\`.
2. Move the \`[Unreleased]\` entries in \`CHANGELOG.md\` under a new \`## [X.Y.Z] - YYYY-MM-DD\`
   heading, and start a fresh empty \`[Unreleased]\` section above it.
3. Commit: \`git commit -m "chore: release vX.Y.Z"\`.
4. Tag and push: \`git tag vX.Y.Z && git push origin vX.Y.Z\`.
5. Pushing the tag triggers \`.github/workflows/release-image.yml\`, which
   builds and pushes \`ghcr.io/<owner>/openacm:X.Y.Z\` to the private GHCR
   registry. Client deployments pin to this tag — see
   \`docs/DEPLOY_VPS.md\` → "Distribución para clientes".
6. On the first publish only, go to GitHub → Packages → openacm → Package
   settings and confirm the visibility is set to **Private** —
   \`GITHUB_TOKEN\` cannot set this automatically.

## License

By contributing, you agree that your contributions will be licensed under the same [MIT License](../LICENSE) that covers this project.
The copyright of the original codebase remains with Jeison David Hernandez Pena.

`
  },
  {
    "slug": "security",
    "title": "OpenACM Security Policy",
    "section": "Project",
    "content": `
# OpenACM Security Policy

## Threat Model and Security Analysis

**Last Audit:** March 2025
**Tool:** skill-security-auditor (Claude Skills)
**Verdict:** SECURE - All findings are BY DESIGN

> The audit below predates many features (agents with public channels, flows, webhook connectors, plugins). For the current security model — execution modes, hardcoded blocks, authentication and public endpoints — see [Security](./12-security.md).

---

## Audit Summary

| Category | Findings | By Design | Action Required |
|----------|----------|-----------|-----------------|
| NET-EXFIL | 4 | 4 (100%) | 0 |
| CRED-HARVEST | 4 | 4 (100%) | 0 |
| OBFUSCATION | 1 | 1 (100%) | 0 |
| DEPS-RUNTIME | 1 | 1 (100%) | 0* |
| **TOTAL** | **10** | **10 (100%)** | **0** |

*Optional recommendation implemented

---

## Security Components

### 1. Execution Sandbox

OpenACM implements a security sandbox in \`src/openacm/security/sandbox.py\` (with policies in \`security/policies.py\`) that:
- Checks every shell command against hardcoded privilege-escalation blocks, \`blocked_patterns\` and \`blocked_paths\`
- Applies the execution mode (\`confirmation\` / \`auto\` whitelist / \`yolo\`)
- Limits system commands to a configurable timeout and output size
- Logs all tool executions for auditing

**File:** \`src/openacm/security/sandbox.py\`

### 2. Secure Credential Management

All API keys and tokens are managed through:
- Environment variables (never hardcoded)
- Configuration files in \`config/\` (excluded from git)
- Conversation and activity data encrypted at rest with a local key (\`config/activity.key\`)

**Involved files:**
- \`src/openacm/core/config.py\` - Configuration loading
- \`src/openacm/security/crypto.py\` - Dashboard token generation
- \`src/openacm/web/routers/system.py\` - Dashboard authentication middleware

### 3. Channel Isolation

Each communication channel (Discord, Telegram, WhatsApp) operates with:
- Independent processes/tasks
- Separate security contexts
- Incoming message validation

---

## Critical Findings (By Design)

### External HTTP Communication

**Locations:**
- \`src/openacm/core/llm_router.py\`
- \`src/openacm/channels/whatsapp_channel.py\`
- \`src/openacm/tools/web_search.py\`
- \`src/openacm/web/server.py\`

**Description:**
OpenACM requires HTTP communication for:
- LLM APIs (OpenAI, Anthropic, Gemini, Ollama)
- Messaging APIs (WhatsApp Business, Telegram Bot, Discord)
- Web search (DuckDuckGo)
- External services (Google APIs)

**Mitigation:**
- Timeouts on outbound requests
- Bounded automatic retries (LLM calls)
- Tool calls logged to the database

### Environment Variable Access

**Locations:**
- \`src/openacm/core/config.py\`
- \`src/openacm/security/crypto.py\`
- \`src/openacm/web/server.py\`

**Description:**
API key loading via \`os.environ.get()\`

**Mitigation:**
- Keys are read from the environment; the only writes are the ones the operator triggers (dashboard setup / wizard writing \`config/.env\`, and the auto-generated \`DASHBOARD_TOKEN\`)
- No sensitive default values
- Clear documentation of required variables
- Example in \`config/.env.example\`

### Base64 Processing

**Location:**
- \`src/openacm/tools/python_kernel.py:144\`

**Description:**
Decoding base64-encoded PNG images from the Jupyter kernel

**Mitigation:**
- Only internally generated matplotlib images
- Does not process user input directly
- Format validation before decoding

---

## Security Policies

### Code Execution

- Allowed: System commands with sandbox
- Allowed: Python execution in isolated kernel (Jupyter)
- Blocked: No \`eval()\` or \`exec()\` of user input
- Blocked: No dynamic loading of unverified code

### File Access

- Allowed: Read/write wherever the OpenACM user can, except \`blocked_paths\`
- Blocked by default: OpenACM's own \`config/\`, \`data/openacm.db\`, \`data/vectordb\`, \`data/logs\`, \`/etc/shadow\`, \`/etc/passwd\`, \`C:\\Windows\\System32\`
- Add more (e.g. \`~/.ssh\`, \`~/.aws\`) to \`security.blocked_paths\`

### Network

- Allowed: Connections to the LLM providers, channels and integrations you configure
- Public inbound endpoints: \`/webhooks/whatsapp\` (signature-checked) and \`/api/webhooks/{slug}\` (per-connector auth); everything else under \`/api/\` requires the dashboard token
- The agent's network access is otherwise that of the OpenACM process — use execution modes, tool allowlists and host firewalls to restrict it

---

## Automatic Auditing

To run a security audit:

\`\`\`bash
# Audit source code
python skills/skill_security_auditor.py src/

# Audit with strict mode
python skills/skill_security_auditor.py src/ --strict

# JSON output for CI/CD
python skills/skill_security_auditor.py src/ --json
\`\`\`

---

## Reporting Vulnerabilities

If you discover a security vulnerability:

1. **DO NOT open a public issue**
2. Send an email to: [jeisondh55@gmail.com]
4. Include:
   - Detailed description
   - Steps to reproduce
   - Potential impact
   - Mitigation suggestions (optional)

**Expected response time:** 48-72 hours

---

## Sensitive Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| \`OPENAI_API_KEY\` | OpenAI API | Optional |
| \`ANTHROPIC_API_KEY\` | Anthropic API | Optional |
| \`GEMINI_API_KEY\` | Google Gemini API | Optional |
| \`DISCORD_TOKEN\` | Discord Bot | Optional |
| \`TELEGRAM_TOKEN\` | Telegram Bot | Optional |
| \`XAI_API_KEY\`, \`OPENROUTER_API_KEY\`, \`OPENCODE_GO_API_KEY\` | Other built-in LLM providers | Optional |
| \`WHATSAPP_ACCESS_TOKEN\`, \`WHATSAPP_PHONE_NUMBER_ID\`, \`WHATSAPP_VERIFY_TOKEN\`, \`WHATSAPP_APP_SECRET\` | WhatsApp Cloud API | Optional |
| \`STITCH_API_KEY\`, \`ELEVENLABS_API_KEY\` | Google Stitch, ElevenLabs TTS | Optional |
| \`DASHBOARD_TOKEN\` | Web authentication | Auto-generated on first start |

Google OAuth2 credentials are files, not variables: \`config/google_credentials.json\` and \`config/google_token.json\`.

All variables are loaded via \`os.environ.get()\` with empty default values, from \`config/.env\` or the process environment.

---

## Best Practices for Users

### 1. API Key Protection

\`\`\`bash
# Correct - Use .env file
export OPENAI_API_KEY="sk-..."
export DISCORD_TOKEN="..."

# Never commit the .env file
# It's included in .gitignore
\`\`\`

### 2. Security Sandbox

The execution mode is configured in \`config/default.yaml\` / \`config/local.yaml\` (or from the dashboard):

\`\`\`yaml
security:
  execution_mode: confirmation   # confirmation | auto | yolo
  max_command_timeout: 120       # seconds, 0 = no limit
  whitelisted_commands: [ls, git, python]   # used by auto mode
  blocked_paths:
    - config/
    - ~/.ssh
\`\`\`

### 3. Keep dependencies updated

\`pyproject.toml\` pins security floors for direct dependencies (e.g. \`litellm>=1.84.0\`, \`mcp>=1.28.1,<2\`, \`chromadb>=1.5.9\`, \`Pillow>=12.3.0\`, \`pypdf>=6.16.1\`, \`cryptography>=50\`) and for vulnerable transitive packages via \`[tool.uv] constraint-dependencies\`. Run \`./update.sh\` (or \`openacm update\`) regularly.

### 4. Dashboard Token

The token is automatically generated on first launch:
- Stored as \`DASHBOARD_TOKEN\` in \`config/.env\` (plain text — protect the file with \`chmod 600\`)
- Rotate it by changing/removing that line (or with \`openacm-setup\` → Dashboard Token) and restarting
- It does not expire
- It is compared in constant time; with no token configured, both the HTTP API and the WebSockets reject every request

---

## Audit History

| Date | Tool | Result | Findings |
|------|------|--------|----------|
| 2025-03-27 | skill-security-auditor | PASS | 10/10 By Design |
| 2026-09-28 | Dependabot + CodeQL review | Fixed | Vulnerable dependencies bumped (see below); SPA path traversal guard tightened; exception details no longer returned to clients; ReDoS in the TTS markdown cleaner fixed; constant-time token comparison; WebSockets reject connections when no \`DASHBOARD_TOKEN\` is set |

---

## References

- [skill-security-auditor Documentation](../skills/SKILL.md)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Python Security Best Practices](https://python-security.readthedocs.io/)

---

**Note:** This document is automatically updated after each security audit.

Last updated: September 2026

`
  },
  {
    "slug": "roadmap-integration",
    "title": "OpenACM — Integration & Evolution Roadmap",
    "section": "Project",
    "content": `
# OpenACM — Integration & Evolution Roadmap

Planes arquitectónicos para convertir OpenACM en una plataforma de integración universal.
Estas ideas surgieron del propio sistema analizando sus capacidades y limitaciones.

---

## Visión final — ¿Qué obtenemos con todo esto?

OpenACM deja de ser un "asistente con tools" y se convierte en algo cualitativamente diferente:

> **Un sistema operativo autónomo con IA en el centro, que vive en la nube, tiene ojos y manos en cualquier máquina o software del mundo, actúa sin que nadie se lo pida, y crece solo.**

La diferencia con cualquier chatbot o agente convencional:

| Chatbot / Agente normal | OpenACM completo |
|------------------------|-----------------|
| Reacciona cuando le hablas | Actúa solo mientras duermes |
| Vive en tu PC | Vive en la nube, alcanza cualquier máquina |
| Controla lo que tú le das | Controla cualquier software del planeta |
| Sus capacidades las defines tú | Genera sus propias capacidades |
| Un hilo de conversación | Múltiples agentes en paralelo |
| Olvida entre sesiones | Memoria de largo plazo y objetivos |
| Lo usas tú solo | Multi-tenant, múltiples clientes/usuarios |

---

### Escenarios reales

**Para un estudio de desarrollo de software**
\`\`\`
Dev hace push a GitHub
→ OpenACM revisa el código automáticamente
→ Corre los tests, detecta un bug crítico
→ Comenta en el PR con el problema específico
→ Avisa al equipo por Telegram
→ Si todo está bien, lo aprueba solo
→ Sin que nadie lo pidiera
\`\`\`

**Para una empresa de contabilidad**
\`\`\`
Cliente manda email con facturas adjuntas
→ OpenACM lee el email y los archivos
→ Sube los datos a Contpaqi / SAP via adapter
→ Genera el reporte de confirmación
→ Responde al cliente con el resumen
→ Tiempo total: menos de 2 minutos, cero intervención humana
\`\`\`

**Para un estudio de diseño / arquitectura**
\`\`\`
"Genera 5 variaciones de esta fachada en Blender
 y mándame las capturas cuando termines"
→ OpenACM orquesta 5 agentes en paralelo
→ Cada uno modela una variante
→ Los renderiza
→ Te manda las imágenes por WhatsApp
→ Tú estabas en una reunión
\`\`\`

**Para monitoreo y operaciones**
\`\`\`
03:00 AM — nadie está despierto

OpenACM detecta que el servidor de producción tarda más de normal
→ Investiga logs automáticamente
→ Identifica un query SQL lento
→ Genera el reporte del problema
→ Te manda WhatsApp con el diagnóstico
→ Si es crítico, ejecuta el rollback que tiene autorizado
\`\`\`

**Para uso personal**
\`\`\`
"Mientras duermo:
 - genera los reportes del mes
 - revisa si el competidor actualizó precios
 - si el vuelo que sigo baja de $300, cómpramelo
 - si el servidor cae, despiértame"

→ OpenACM trabaja toda la noche
→ Tú te despiertas con todo hecho
\`\`\`

**Para un cliente con software legacy**
\`\`\`
Cliente tiene un ERP de 2003 sin API, sin WebSocket, sin nada
→ Local Agent instalado en la máquina del cliente
→ OpenACM lo controla via GUI Automation como último recurso
→ Extrae datos, los procesa, genera reportes modernos
→ El cliente no tuvo que cambiar su software
\`\`\`

---

### Qué lo hace único vs alternativas

**vs AutoGPT / agentes genéricos:**
Arquitectura real con seguridad por capas, multi-tenant, canales de comunicación reales, y control de hardware local. No es un experimento — es infraestructura.

**vs n8n / Zapier / Make:**
OpenACM razona. No sigue un flujo fijo — decide qué hacer según el contexto. Y puede modificar sus propios flujos.

**vs soluciones enterprise (UiPath, Blue Prism):**
Costo radicalmente menor, sin licencias, open source, y con LLM en el centro para manejar casos no previstos.

**vs asistentes de voz (Alexa, Google Assistant):**
No depende de ningún proveedor. Corre en tu servidor. Tú controlas los datos. Y puede hacer cosas que ningún asistente comercial permite.

---

### La propiedad más importante: se extiende solo

Con el Self-Evolution Engine activo:

\`\`\`
Usuario: "conecta esto con el sistema de nómina de la empresa"

OpenACM no sabe cómo hacerlo → investiga la API del sistema
→ genera el adapter → lo prueba → lo registra
→ ejecuta la tarea original
→ la próxima vez ya sabe cómo hacerlo

Sin que nadie haya escrito una línea de código
\`\`\`

Esto es lo que lo separa de cualquier otra plataforma:
**no necesita un desarrollador para crecer.**

---

## Contexto: Qué ya existe

Antes de implementar, tener en cuenta lo que **ya está resuelto**:

| Capacidad | Archivo |
|-----------|---------|
| Creación dinámica de tools (existe, pero no se registra por defecto en v0.4.7) | \`src/openacm/tools/tool_creator.py\` |
| Creación dinámica de skills | \`src/openacm/tools/skill_creator.py\` |
| Skills generadas auto-guardadas | \`skills/generated/\` |
| WebSocket para UI | \`src/openacm/web/routers/chat.py\`, \`src/openacm/web/server.py\` |
| Ejecución de comandos CLI | \`src/openacm/tools/system_cmd.py\` |
| Operaciones de archivo y edición de código | \`src/openacm/tools/file_ops.py\`, \`src/openacm/tools/code_editor.py\` |
| Sistema de plugins | \`src/openacm/plugins/\` |
| Flujos visuales (nodos HTTP, condicionales, loops…) | \`src/openacm/core/flow_executor.py\` |
| Webhooks públicos firmados → flujo | \`src/openacm/web/routers/webhooks.py\`, \`src/openacm/core/webhook_auth.py\` |
| Swarms multi-agente | \`src/openacm/core/swarm_manager.py\` |
| Cron scheduler | \`src/openacm/watchers/cron_scheduler.py\` |
| Channels (Discord, Telegram, WhatsApp + canales por agente) | \`src/openacm/channels/\` |

> El control de Blender (\`blender_tool.py\`) mencionado en versiones anteriores de este documento ya no existe en el código.

No reinventar estas piezas — extenderlas.

---

## Plan 1 — Universal Integration Bus (UIB)

### Qué es
Un WebSocket endpoint dedicado (\`/ws/integration\`) separado del WebSocket de la UI, donde **programas externos** pueden conectarse a OpenACM como clientes.

### Para qué sirve
- Unity, Godot, apps custom pueden conectarse y darle herramientas al agente
- El agente puede llamar funciones del programa externo en tiempo real
- El programa externo puede llamar tools de OpenACM

### Protocolo (JSON simple)

\`\`\`json
// Programa externo → OpenACM: registrar su propia función
{ "type": "register_function", "name": "crear_objeto_3d", "schema": { ... } }

// Programa externo → OpenACM: llamar una tool de OpenACM
{ "type": "call_tool", "tool": "web_search", "args": { "query": "..." }, "id": "abc123" }

// OpenACM → Programa externo: resultado
{ "type": "result", "id": "abc123", "data": "..." }

// OpenACM → Programa externo: invocar función registrada
{ "type": "invoke", "name": "crear_objeto_3d", "args": { ... }, "id": "xyz" }
\`\`\`

### Archivos a crear
\`\`\`
src/openacm/web/api/integration_ws.py   ← endpoint WebSocket
src/openacm/core/integration_bus.py     ← lógica de registro y routing
\`\`\`

### Casos de uso
- Unity con un paquete C# que se conecta al bus
- App de contabilidad custom que expone sus funciones
- Claude Code CLI notificando a OpenACM que haga QA de cambios
- Cualquier script Python externo que quiera usar el agente

---

## Plan 2 — Adapter System

### Qué es
Una carpeta \`adapters/\` con conectores para programas específicos. Cada adapter sabe **cómo** hablar con su programa target, eligiendo el método más profundo disponible.

### Árbol de decisión de métodos de integración

\`\`\`
¿Cómo controlar un programa externo?

├── Tiene Python API / SDK nativa    → úsala directo
│     Ejemplos: Blender (bpy), Maya, FreeCAD, Rhino
│
├── Tiene WebSocket o HTTP API       → UIB / requests
│     Ejemplos: Unity con paquete, apps modernas, Odoo
│
├── Es aplicación Windows con COM    → win32com.client
│     Ejemplos: Excel, Word, AutoCAD, SAP GUI, Visio
│
├── Tiene interfaz de línea de comandos → system_cmd (ya existe)
│     Ejemplos: ffmpeg, git, ImageMagick, ERPs legacy
│
├── Intercambia información por archivos → file_ops (ya existe)
│     Ejemplos: Contpaqi (DBF), COI, algunos ERPs
│
├── Tiene base de datos accesible    → conexión directa SQL
│     Ejemplos: Odoo (PostgreSQL), ERPs con SQL Server
│
└── No tiene nada de lo anterior     → GUI Automation (último recurso)
      Herramientas: pyautogui + uiautomation
      OpenACM ya tiene screenshot.py como base
\`\`\`

### Estructura de un adapter

\`\`\`
adapters/
  excel/
    manifest.json      ← qué hace, versiones soportadas, método de integración
    bridge.py          ← lógica de conexión
    schema.yaml        ← tools que expone al agente
  unity/
    manifest.json
    bridge.py
    schema.yaml
  sap/
    ...
  contpaqi/
    ...
  generated/           ← adapters generados automáticamente por el agente
\`\`\`

### Formato de manifest.json

\`\`\`json
{
  "name": "excel",
  "description": "Control de Microsoft Excel",
  "method": "com",
  "requires": ["pywin32"],
  "platform": ["windows"],
  "tools": ["leer_celda", "escribir_celda", "ejecutar_macro", "exportar_pdf"]
}
\`\`\`

### Adapters prioritarios a implementar
1. **Excel / Office** (COM via win32com) — caso de uso universal
2. **Unity** (WebSocket via UIB) — ya tienen experiencia con Blender
3. **SAP GUI** (COM via win32com o SAP RFC) — empresarial
4. **GUI Automation genérico** (pyautogui + uiautomation) — fallback

---

## Plan 3 — Declarative Tools (YAML)

### Qué es
Definir tools sin escribir código Python. El sistema auto-genera el handler.

### Para qué sirve
Usuarios no técnicos pueden crear integraciones describiendo qué quieren, no cómo hacerlo.

### Formato propuesto

\`\`\`yaml
name: crear_factura_sap
description: Crea una factura en SAP con los datos proporcionados
adapter: sap
method: rfc
function: BAPI_BILLINGDOC_CREATEMULTIPLE
input:
  cliente:
    type: string
    description: ID del cliente en SAP
  monto:
    type: number
    description: Monto total de la factura
  concepto:
    type: string
    description: Descripción del concepto
\`\`\`

### Flujo
\`\`\`
archivo .yaml en adapters/sap/tools/
    → loader detecta el archivo
    → genera ToolDefinition automáticamente
    → registra en ToolRegistry
    → agente puede usarla sin reiniciar
\`\`\`

---

## Plan 4 — Self-Evolution Engine (Evolver)

### Qué es
Módulo que detecta cuándo OpenACM no puede resolver algo y genera el adapter/tool necesario **de forma autónoma**, sin que el usuario lo pida.

### Nota
\`tool_creator.py\` y \`skill_creator.py\` ya existen y hacen esto parcialmente. El Evolver es la capa que **detecta automáticamente** la necesidad sin que el usuario lo solicite explícitamente.

### Flujo propuesto

\`\`\`
Usuario: "abre Excel y ponme el total de ventas del mes"

1. Agente intenta ejecutar → no tiene tool para Excel
2. Evolver detecta: "necesito integración con Excel en Windows"
3. Evolver busca en adapters/: no existe adapter de Excel
4. Evolver genera adapter usando COM (win32com)
5. Guarda en adapters/generated/excel/
6. Registra las tools nuevas dinámicamente
7. Ejecuta la tarea original
8. La próxima vez ya tiene el adapter listo
\`\`\`

### Archivo a crear
\`\`\`
src/openacm/core/evolver.py
\`\`\`

---

## Plan 5 — GUI Automation (Fallback universal)

### Qué es
Cuando ningún otro método funciona, OpenACM puede controlar cualquier programa viendo la pantalla e interactuando con el teclado y mouse.

### Base existente
\`src/openacm/tools/screenshot.py\` ya existe — ve la pantalla.

### Lo que falta

\`\`\`python
# Herramientas necesarias:
# pyautogui    → mouse, teclado, posición absoluta
# uiautomation → lee árbol de elementos UI de Windows (botones, campos, menús)
# pygetwindow  → gestiona ventanas (focus, mover, redimensionar)
\`\`\`

### Tools a agregar en desktop_control_tool.py

\`\`\`
click(x, y)                     → click en coordenadas
click_element(name)             → click en elemento por nombre/texto
type_text(text)                 → escribir texto
get_window_elements(app_name)   → leer árbol UI de una ventana
focus_window(app_name)          → traer ventana al frente
drag(x1, y1, x2, y2)           → drag and drop
\`\`\`

### Flujo con visión
\`\`\`
Screenshot → LLM analiza qué hay en pantalla → decide acción → ejecuta → repite
\`\`\`

Este es el mismo approach de OpenAI Operator y Anthropic Computer Use.

---

## Plan 6 — Proactive Engine

### Qué es
El gap de autonomía más grande: OpenACM solo reacciona cuando alguien le escribe. El Proactive Engine le da la capacidad de **actuar por iniciativa propia** en base a tiempo o eventos.

### Tres tipos de comportamiento proactivo

**1. Cron Jobs (basado en tiempo)**
\`\`\`
Cada lunes 08:00  → genera reporte semanal → manda por email/Telegram
Cada 5 minutos    → verifica que el servidor del cliente responda
Cada día 23:59    → resume las tareas completadas del día
Cada mes          → genera factura automática
\`\`\`

**2. Watchers (basado en eventos del sistema)**
\`\`\`
Archivo nuevo en carpeta  → procésalo automáticamente
Git commit detectado      → corre tests y revisa código
Log con "ERROR"           → alerta inmediata al admin
Uso de CPU > 90%          → investiga qué proceso y notifica
\`\`\`

**3. Goal Tracking (objetivos de largo plazo)**
\`\`\`
"Monitorea el precio de X hasta que baje de $100"
"Avísame cuando el competidor actualice su sitio"
"Cada vez que llegue un email de cliente VIP, respóndelo"
\`\`\`

### Archivos a crear
\`\`\`
src/openacm/core/proactive_engine.py   ← scheduler + watcher + goal tracker
src/openacm/core/job_store.py          ← persistencia de jobs en DB
\`\`\`

### Nota importante
En local este engine se pausa si se apaga la PC. En servidor corre 24/7 — es donde cobra todo su valor.

---

## Plan 7 — Inbound Webhooks

### Qué es
Un endpoint público que permite que **cualquier servicio externo despierte a OpenACM** con un evento.

### Endpoint propuesto
\`\`\`
POST /webhook/{source}/{event}
\`\`\`

### Ejemplos de uso
\`\`\`
GitHub  → POST /webhook/github/push       → OpenACM revisa el commit
Stripe  → POST /webhook/stripe/payment    → OpenACM genera factura
Twilio  → POST /webhook/twilio/sms        → OpenACM responde el SMS
Cualquier ERP → POST /webhook/erp/venta   → OpenACM procesa la venta
\`\`\`

### Flujo interno
\`\`\`
Webhook recibido
    → valida firma/token del origen
    → identifica qué skill/agente manejar
    → ejecuta en background (no bloquea respuesta HTTP)
    → responde 200 OK inmediatamente
\`\`\`

### Archivos a crear
\`\`\`
src/openacm/web/api/webhooks.py    ← endpoints + validación de firmas
src/openacm/core/webhook_router.py ← mapeo source/event → handler
\`\`\`

---

## Plan 8 — Multi-agent Orchestration

### Qué es
\`AgentRunner\` ya existe pero no hay coordinador. Este plan añade un **orquestador** que divide tareas complejas entre agentes especializados y consolida los resultados.

### Diferencia con lo actual
\`\`\`
Ahora:    Un agente → hace todo secuencialmente
Con esto: Orquestador → divide → 3 agentes en paralelo → consolida
\`\`\`

### Ejemplo
\`\`\`
Tarea: "Analiza este proyecto y dime qué mejorar"

Orquestador divide:
  ├── Agente Seguridad   → revisa vulnerabilidades
  ├── Agente Performance → revisa cuellos de botella
  └── Agente Código      → revisa calidad y deuda técnica

Orquestador consolida → reporte unificado
\`\`\`

### Archivos a crear
\`\`\`
src/openacm/core/orchestrator.py   ← divide, asigna, consolida
\`\`\`

---

## Plan 9 — Long-term Memory & Goals

### Qué es
La memoria actual es solo historial de conversación. Este plan agrega una **memoria semántica persistente** separada de los chats.

### Tres capas de memoria

\`\`\`
Capa 1: Conversación     → ya existe (MemoryManager)
Capa 2: Hechos           → "El cliente X prefiere facturas en PDF"
                            "El servidor Y falla los lunes"
                            "La API de Z tiene rate limit de 100/min"
Capa 3: Objetivos activos → "Monitorear precio hasta que baje de $X"
                             "Recordarme el viernes sobre el contrato"
\`\`\`

### Diferencia con RAG
RAG (ya existe) busca en documentos. Esta memoria es sobre **decisiones, preferencias y patrones aprendidos** de la operación diaria.

### Archivo a crear
\`\`\`
src/openacm/core/long_term_memory.py
\`\`\`

---

## Plan 10 — Email Channel

### Qué es
Email como canal nativo, igual que Discord o Telegram. OpenACM recibe y responde emails.

### Dos modos

**Modo recepción via API (recomendado para empezar)**
\`\`\`
SendGrid Inbound Parse / Mailgun Routes
    → POST a /webhook/email/inbound
    → OpenACM procesa como mensaje normal
    → responde via SMTP
\`\`\`

**Modo servidor SMTP propio (avanzado, requiere dominio)**
\`\`\`
MX record apunta al servidor
    → OpenACM recibe emails directo
    → sin intermediarios
\`\`\`

### Archivo a crear
\`\`\`
src/openacm/channels/email_channel.py
\`\`\`

---

## Plan 11 — Voice Channel

### Qué es
Input y output de voz directamente en el browser, sin dependencias externas.

### Stack propuesto
\`\`\`
Input:   Web Speech API (STT nativo del browser, Chrome/Edge)
Output:  Web Speech Synthesis API (TTS nativo) o ElevenLabs para voz premium
\`\`\`

### Sin APIs de terceros para el caso básico
Chrome y Edge tienen reconocimiento de voz nativo. Funciona sin Google Cloud, sin cuentas, sin costo.

### Archivo a crear
\`\`\`
src/openacm/channels/voice_channel.py   ← lógica backend
frontend/components/VoiceInput.tsx      ← componente UI
\`\`\`

---

## Ventajas exclusivas de despliegue en servidor

El shift fundamental al montar en servidor:

> **De "asistente que ayuda cuando le hablas" → a "servicio autónomo que trabaja mientras duermes"**

| Capacidad | Local | Servidor |
|-----------|-------|----------|
| Proactive Engine | Se pausa si apagas la PC | Corre 24/7 |
| Webhooks | Necesita ngrok/tunnel | IP/dominio público real |
| Multi-usuario | Solo tú | Múltiples clientes simultáneos |
| Email channel | Limitado | MX record propio posible |
| Background jobs | Mueren con el proceso | Persistentes |
| SSL/HTTPS | Manual | Automático con Caddy |
| Escala | 1 instancia | Load balancer posible |

### Casos de uso que solo existen en servidor

\`\`\`
02:00 AM  → genera reporte de ventas del día → manda por email (nadie lo pidió)
Cada 5min → monitorea servidor del cliente → si cae, alerta en <1min
GitHub push → OpenACM revisa el código automáticamente → comenta en el PR
Cliente manda email → OpenACM responde en <30s → sin intervención humana
Precio baja de umbral → OpenACM compra / alerta / actúa → mientras duermes
\`\`\`

---

## Stack de servidor recomendado

### Configuración ideal para producción

\`\`\`yaml
# docker-compose.prod.yml

services:

  openacm:
    build: .
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgresql://openacm:pass@postgres/openacm
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  worker:
    build: .
    command: python -m openacm --worker   # proceso separado para jobs pesados
    restart: unless-stopped
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    # SQLite no escala en servidor, PostgreSQL es la base correcta

  redis:
    image: redis:7-alpine
    # Cola de jobs (Proactive Engine + background tasks)
    # Cache de sesiones y rate limiting

  caddy:
    image: caddy:2-alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
    # Reverse proxy + SSL automático con Let's Encrypt
    # Zero config para HTTPS

volumes:
  postgres_data:
\`\`\`

### Caddyfile (SSL automático)
\`\`\`
openacm.tudominio.com {
    reverse_proxy openacm:8080
}
\`\`\`
Un solo archivo. Caddy obtiene el certificado SSL solo, sin certbot, sin configuración manual.

### Por qué este stack

| Componente | Por qué |
|------------|---------|
| **PostgreSQL** | SQLite no soporta escrituras concurrentes. Con múltiples usuarios o workers, PostgreSQL es necesario. |
| **Redis** | Cola de jobs para el Proactive Engine y background tasks. También cache para reducir llamadas a la DB. |
| **Worker separado** | Los jobs largos (generar reportes, procesar archivos grandes, monitoreo) no deben bloquear las requests del usuario. |
| **Caddy** | SSL automático sin configuración. Más simple que nginx + certbot. Perfecto para un solo servidor. |

### Proveedor de servidor recomendado
Para empezar con costo mínimo y buena performance:

| Opción | Specs mínimos | Costo aprox |
|--------|--------------|-------------|
| **Hetzner CX22** | 2 vCPU, 4GB RAM, 40GB SSD | ~$4/mes |
| **DigitalOcean Basic** | 2 vCPU, 2GB RAM | ~$12/mes |
| **Contabo VPS S** | 4 vCPU, 8GB RAM | ~$5/mes |

Hetzner es la mejor relación precio/performance para Europa. Contabo para más RAM barata.

### Cambios necesarios en el código para soportar este stack

\`\`\`
src/openacm/storage/database.py   → agregar soporte PostgreSQL (además de SQLite)
src/openacm/core/job_queue.py     → cola de jobs con Redis (para worker separado)
src/openacm/core/config.py        → leer DATABASE_URL y REDIS_URL del entorno
\`\`\`

---

## Plan 13 — Swarm Compute (Enjambre de Ejecución)

### Qué es
La intersección del Plan 12 (Local Agent) y el Plan 8 (Multi-agent Orchestration). OpenACM no solo distribuye lógica de LLM entre agentes — distribuye **carga de trabajo real entre hardware físico**.

Todos los dispositivos con un Local Agent instalado forman un clúster unificado que el orquestador usa de forma transparente.

### El concepto

\`\`\`
Sin Swarm:   OpenACM → un agente → una máquina → hace todo secuencialmente

Con Swarm:   OpenACM → orquestador → detecta qué máquina tiene recursos
                                    → distribuye tareas al hardware disponible
                                    → las tareas corren en paralelo
                                    → consolida resultados
\`\`\`

### Caso de uso concreto

\`\`\`
Usuario: "compila el proyecto y renderiza este video 4K"

Orquestador consulta estado de todos los agentes conectados:
  ├── "mi-pc"   → CPU: 87% (compilando), RAM: 72%, GPU: 15%
  ├── "laptop"  → CPU: 12%, RAM: 38%, GPU: 78% (libre)
  └── "raspi"   → CPU: 45%, RAM: 60%, GPU: N/A

Decisión automática:
  → Build del proyecto    ── "mi-pc"  (ya tiene el código, sigue compilando)
  → Render 4K del video   ── "laptop" (GPU libre, CPU disponible)

Ejecución:
  → Transfiere el video a laptop
  → Ambas máquinas trabajan en paralelo
  → Orquestador espera ambos resultados
  → Consolida y responde al usuario

Tiempo total: el de la tarea más larga (no la suma de las dos)
\`\`\`

### Lo que hace el Local Agent adicionalmente

Además de ejecutar comandos, cada agente reporta su estado al servidor periódicamente:

\`\`\`json
{
  "agent": "laptop",
  "heartbeat": {
    "cpu_percent": 12.4,
    "ram_percent": 38.1,
    "gpu_percent": 78.0,
    "disk_free_gb": 120.5,
    "capabilities": ["run_command", "file_ops", "screenshot", "ffmpeg", "python"],
    "active_tasks": 0
  }
}
\`\`\`

\`system_info.py\` ya usa \`psutil\` — ya sabe leer CPU/RAM/disco. El agente solo necesita enviarlo al servidor cada N segundos.

### Resource-aware Scheduler

El orquestador ya existente (Plan 8) necesita una capa adicional: antes de asignar una tarea, consulta el heartbeat de los agentes y elige el más adecuado.

\`\`\`python
# Lógica de asignación (simplificada)

def pick_agent(task_type, agents):
    if task_type == "gpu_render":
        return max(agents, key=lambda a: a.gpu_free)
    if task_type == "compile":
        return max(agents, key=lambda a: a.cpu_free * a.ram_free)
    if task_type == "file_processing":
        return max(agents, key=lambda a: a.disk_free)
    return min(agents, key=lambda a: a.active_tasks)  # fallback: menos ocupado
\`\`\`

### Casos de uso

| Tarea | Quién la recibe | Por qué |
|-------|----------------|---------|
| Compilar código | Máquina con el repo | Evita transferencia de archivos |
| Render 3D / video | Máquina con GPU libre | Usa el hardware correcto |
| Procesar dataset grande | Máquina con más RAM | No satura la principal |
| Web scraping masivo | Cualquier máquina libre | Distribuye las requests |
| Tests paralelos | Todas las máquinas | Cada una corre un subset |
| Backup | Máquina con disco libre | No interrumpe trabajo activo |

### Transferencia de archivos entre agentes

El punto crítico: si laptop tiene que renderizar un video que está en mi-pc, hay que transferirlo.

\`\`\`
Opción A (simple):   via servidor central
  mi-pc → upload a OpenACM server → laptop descarga

Opción B (eficiente): peer-to-peer directo
  mi-pc ←→ laptop directo en la red local (más rápido, sin pasar por internet)
  El servidor solo coordina — no mueve los datos

Opción B es preferible para archivos grandes en red local
\`\`\`

### Comparación con alternativas

| Sistema | Complejidad | Requiere | OpenACM Swarm |
|---------|------------|---------|---------------|
| Kubernetes Jobs | Alta | Cluster k8s, Docker | Solo Local Agent |
| Apache Spark | Alta | JVM, configuración | Solo Local Agent |
| Ray (Python) | Media | Instalación específica | Solo Local Agent |
| **OpenACM Swarm** | **Baja** | **Local Agent ya instalado** | **Automático** |

No requiere infraestructura especial. Si el Local Agent está instalado para el Plan 12, el Swarm es gratis — solo hay que activar el scheduler en el orquestador.

### Archivos a modificar/crear

\`\`\`
src/openacm/core/orchestrator.py        ← agregar resource-aware scheduler
openacm-agent/agent.py                  ← agregar heartbeat periódico con psutil
src/openacm/core/swarm_registry.py      ← tabla de agentes + sus recursos actuales
\`\`\`

### Seguridad

Hereda todo el modelo del Plan 12. Adicionalmente:
- Las tareas distribuidas llevan la misma firma HMAC
- El agente destino verifica que tiene la capability requerida antes de aceptar
- Los archivos transferidos van cifrados (Fernet, ya existe en \`crypto.py\`)
- El audit log registra en qué máquina corrió cada tarea

---

## Plan 14 — MQTT

### Por qué el sistema lo sigue pidiendo
> Nota: este plan se escribió cuando OpenACM tenía drivers propios para Tuya, LG TV y Xiaomi. Hoy esos drivers fueron reemplazados por el plugin de Home Assistant (que ya soporta MQTT por su cuenta); el plan se conserva como referencia.

OpenACM ya controla dispositivos IoT (Tuya, LG TV, Xiaomi) pero con protocolos propietarios. MQTT es el protocolo estándar universal de IoT — miles de dispositivos lo hablan nativamente: Arduino, ESP32, Raspberry Pi, sensores industriales, Home Assistant, Node-RED, y cualquier sistema custom.

Sin MQTT, cada dispositivo nuevo requiere un driver nuevo. Con MQTT, cualquier cosa que publique en un topic ya es un ciudadano de primera clase en OpenACM.

### Dos modos de operación

**Modo subscriber — escuchar el mundo**
\`\`\`
OpenACM se suscribe a topics MQTT
→ Reacciona en tiempo real a eventos de sensores y dispositivos
→ Alimenta directamente el Proactive Engine
\`\`\`

**Modo publisher — controlar el mundo**
\`\`\`
OpenACM publica comandos en topics MQTT
→ Cualquier dispositivo suscrito los ejecuta
→ Sin necesidad de saber el protocolo propietario del dispositivo
\`\`\`

### Combinación con el Proactive Engine

Aquí es donde MQTT brilla:

\`\`\`
# Ejemplos de reglas automáticas

Sensor temperatura publica: {"temp": 32}
→ OpenACM detecta > 30°C
→ Publica en topic AC: {"power": "on", "temp": 22}
→ Manda notificación WhatsApp: "Encendí el AC, hacía 32°C"

Sensor de puerta publica: {"state": "open", "time": "03:14"}
→ OpenACM detecta hora inusual
→ Enciende luces, toma screenshot de cámara, notifica

Máquina industrial publica: {"status": "error", "code": "E42"}
→ OpenACM busca el código en el manual (RAG)
→ Crea ticket en el sistema de soporte
→ Alerta al técnico de turno por Telegram
\`\`\`

### Casos de uso reales

| Escenario | Publisher | Subscriber | Acción |
|-----------|-----------|------------|--------|
| Smart Home | Sensores, switches | OpenACM | Automatización con contexto e IA |
| Industria 4.0 | Sensores de producción | OpenACM | Detección de anomalías + alertas |
| Agricultura | Sensores de humedad/temp | OpenACM | Riego automático inteligente |
| Home Assistant | Home Assistant broker | OpenACM | Bridge bidireccional con HA |
| Arduino/ESP32 | Dispositivos custom | OpenACM | Control de hardware DIY |

### Integración con lo existente

\`\`\`
IoT actual:                      Con MQTT:
Tuya  → driver propio            Tuya  → driver propio  (sin cambios)
LG TV → driver propio            LG TV → driver propio  (sin cambios)
Xiaomi → driver propio           Xiaomi → driver propio (sin cambios)
                                 MQTT  → cualquier device nuevo (automático)
                                 Home Assistant → bridge completo
                                 Arduino/ESP32 → directo
\`\`\`

MQTT no reemplaza los drivers existentes — los complementa como protocolo universal para todo lo demás.

### Archivos a crear

\`\`\`
src/openacm/tools/iot/drivers/mqtt_driver.py   ← publisher + subscriber
src/openacm/core/mqtt_bus.py                   ← broker interno + routing a Proactive Engine
config/mqtt.yaml                               ← broker URL, topics, reglas
\`\`\`

### Config propuesta

\`\`\`yaml
# config/mqtt.yaml

broker:
  host: "localhost"        # o tu broker externo (Home Assistant, Mosquitto)
  port: 1883
  tls: false               # true para brokers públicos

subscriptions:
  - topic: "casa/sensores/#"     # wildcard — todos los sensores
    handler: proactive_engine    # dispara reglas del Proactive Engine

  - topic: "industria/maquinas/+"
    handler: alert_on_error      # alerta si hay error

publish_prefix: "openacm/"      # OpenACM publica bajo este prefijo
\`\`\`

---



| Fase | Plan | Local/Servidor | Impacto | Esfuerzo |
|------|------|---------------|---------|----------|
| 1 | UIB (WebSocket externo) | Ambos | Alto |  |
| 1 | COM Adapter para Excel | Local | Alto | |
| 1 | Voice Channel | Ambos | Alto |  |
| 2 | Adapter System (base) | Ambos | Alto |  |
| 2 | Inbound Webhooks | Servidor | Alto |  |
| 2 | Email Channel | Servidor | Alto |  |
| 3 | Proactive Engine | Servidor > Local | Muy Alto |  |
| 3 | Declarative YAML Tools | Ambos | Medio |  |
| 3 | Multi-agent Orchestration | Ambos | Alto |  |
| 4 | Long-term Memory | Ambos | Alto |  |
| 4 | Self-Evolution Engine | Ambos | Muy Alto |  |
| 4 | Stack servidor prod | Servidor | Infraestructura |  |
| 4 | MQTT | Ambos | Alto | ~2h |
| 4 | Swarm Compute | Ambos | Muy Alto |  (sobre Plan 8 + 12) |
| 5 | GUI Automation fallback | Local | Medio |  |

---

## Plan 12 — Local Agent

### Qué es
Un cliente ultraligero que corre en cualquier PC y se conecta al servidor OpenACM via WebSocket. Permite que el servidor controle la máquina local sin exponer ningún puerto, sin VPN, sin configuración de red.

### Arquitectura de conexión

\`\`\`
Servidor OpenACM (público)          PC Local (detrás de NAT/firewall)
         │                                      │
         │    ←── Local Agent inicia conexión ──│
         │         wss://openacm.dominio.com     │
         │                                      │
         │ ──── "ejecuta screenshot" ──────────►│
         │ ◄─── resultado ─────────────────────│
         │                                      │
         │ ──── "corre comando X" ─────────────►│ ← agente decide si es permitido
         │ ◄─── output ────────────────────────│
\`\`\`

El agente **inicia** la conexión (outbound). No abre puertos. Funciona detrás de cualquier firewall o NAT sin configuración.

### Multi-máquina natural

\`\`\`
Servidor OpenACM
    ├── agent:"mi-pc"        → tu escritorio en casa
    ├── agent:"laptop"       → tu laptop
    ├── agent:"oficina-mx"   → PC de la oficina
    └── agent:"cliente-sap"  → máquina con SAP del cliente
\`\`\`

### Archivo a crear
\`\`\`
openacm-agent/
  agent.py          ← cliente WebSocket + ejecutor local
  config.yaml       ← capacidades permitidas + límites
  install.sh        ← instala como servicio del sistema
\`\`\`

---

### Seguridad del Local Agent — el punto crítico

Aquí es donde brilla (y donde más duele si se hace mal).

**El problema fundamental:**
> Si el servidor se compromete, el atacante tiene un canal directo a tu PC.
> El agente local NO puede confiar ciegamente en el servidor.

Modelo: **Zero Trust hacia el servidor**.

---

#### Capa 1 — Transport (lo básico)

\`\`\`
WSS (WebSocket Secure) obligatorio — nunca WS en texto plano
Certificate pinning opcional — el agente verifica que el certificado
                               del servidor sea exactamente el esperado,
                               no solo que sea válido
\`\`\`

El \`crypto.py\` existente ya maneja Fernet para cifrado simétrico. Extenderlo para el canal del agente.

---

#### Capa 2 — Autenticación mutua

\`\`\`
Servidor → Agente:  JWT firmado con clave privada del servidor
Agente → Servidor:  Token único por máquina (generado en instalación)

Ambos se autentican mutuamente — ni el servidor acepta agentes
desconocidos, ni el agente acepta servidores sin firma válida.
\`\`\`

Token por máquina:
\`\`\`yaml
# config/agent-token.yaml  (generado en instalación, nunca viaja al servidor completo)
machine_id: "mi-pc-uuid-unico"
token_hash: "sha256 del token real"   ← el servidor guarda solo el hash
\`\`\`

---

#### Capa 3 — Capability Manifest (la más importante)

El agente declara explícitamente qué puede hacer. **Si no está en el manifest, se rechaza sin importar quién lo pida.**

\`\`\`yaml
# config/capabilities.yaml

capabilities:
  - name: screenshot
    risk: low
    confirmation: never

  - name: run_command
    risk: high
    confirmation: always          # ← requiere aprobación local antes de ejecutar
    allowed_commands:             # whitelist explícita
      - "git status"
      - "git pull"
      - "npm test"
      - "pytest"
    blocked_patterns:             # reusa policies.py existente
      - "rm -rf"
      - "format"
      - "del /f"
      - "DROP TABLE"

  - name: file_read
    risk: low
    confirmation: never
    allowed_paths:
      - "~/proyectos/"
      - "~/documentos/"
    blocked_paths:
      - "~/.ssh/"
      - "~/.aws/"
      - "/etc/"

  - name: file_write
    risk: medium
    confirmation: on_new_file     # confirma solo si el archivo no existía
    allowed_paths:
      - "~/proyectos/"
\`\`\`

El servidor puede pedir lo que quiera. El agente filtra contra este manifest antes de ejecutar cualquier cosa. Las \`policies.py\` existentes se reutilizan directamente aquí.

---

#### Capa 4 — Command Signing

Cada comando que envía el servidor viene firmado digitalmente:

\`\`\`json
{
  "type": "invoke",
  "capability": "run_command",
  "args": { "command": "git pull" },
  "id": "abc123",
  "timestamp": 1234567890,
  "signature": "HMAC-SHA256(payload, server_secret)"
}
\`\`\`

El agente verifica la firma antes de ejecutar. Si alguien intercepta la conexión y manda comandos falsos, la firma no valida y se rechaza.

Timestamp incluido para prevenir **replay attacks** — un comando capturado no puede enviarse de nuevo 5 minutos después.

---

#### Capa 5 — Audit Log local

Todo queda registrado localmente en la máquina, independiente del servidor:

\`\`\`
[2026-03-29 14:32:01] EJECUTADO   run_command "git pull"           OK  (solicitado por servidor)
[2026-03-29 14:35:22] RECHAZADO   run_command "rm -rf /tmp/test"   BLOCKED: blocked_pattern
[2026-03-29 14:40:11] CONFIRMADO  file_write  "nuevo_archivo.py"   OK  (aprobado por usuario local)
[2026-03-29 14:41:00] RECHAZADO   file_read   "~/.ssh/id_rsa"      BLOCKED: blocked_path
\`\`\`

El log vive en la máquina local. Incluso si el servidor es malicioso y borra sus propios logs, el agente tiene su registro independiente.

---

#### Capa 6 — Confirmación local para acciones destructivas

Para comandos con \`risk: high\` o \`confirmation: always\`, el agente puede mostrar una notificación nativa del sistema operativo:

\`\`\`
┌─────────────────────────────────────┐
│  OpenACM Local Agent                │
│                                     │
│  El servidor solicita ejecutar:     │
│  > git push origin main             │
│                                     │
│  [Permitir]  [Denegar]  [Ver log]   │
└─────────────────────────────────────┘
\`\`\`

El servidor espera respuesta. Si el usuario no responde en X segundos → denegado automáticamente.

---

#### Capa 7 — Kill Switch

Si detecta comportamiento anómalo (demasiadas peticiones, comandos fuera de patrón, firma inválida repetida):

\`\`\`python
# El agente se desconecta solo y requiere reconexión manual
# Notifica al usuario local que algo raro pasó
# Registra el incidente en el audit log
\`\`\`

---

### Resumen del modelo de seguridad

\`\`\`
Internet / Servidor comprometido
         │
         ▼
   ┌─────────────────────────────────────────┐
   │  WSS + Certificate Pinning              │  ← Capa 1: nadie intercepta
   │  Autenticación mutua + JWT              │  ← Capa 2: solo servidores legítimos
   │  Command Signing + Timestamp            │  ← Capa 3: no replay attacks
   │  Capability Manifest (whitelist)        │  ← Capa 4: scope limitado
   │  policies.py (blocked patterns)         │  ← Capa 5: comandos peligrosos
   │  Confirmación local (risk: high)        │  ← Capa 6: humano en el loop
   │  Audit Log local independiente          │  ← Capa 7: trazabilidad
   │  Kill Switch automático                 │  ← Capa 8: auto-protección
   └─────────────────────────────────────────┘
         │
         ▼
      Tu PC — solo ejecuta lo que está en el manifest

\`\`\`

### Reutilización de lo existente

| Componente existente | Rol en el agente |
|---------------------|-----------------|
| \`security/sandbox.py\` | Ejecuta comandos locales con los mismos límites |
| \`security/policies.py\` | Valida comandos contra blocked_patterns del manifest |
| \`security/crypto.py\` | Cifrado del canal + verificación de firmas |
| \`security/auth.py\` | Base para autenticación mutua |

No se escribe seguridad desde cero — se reutiliza y se extiende lo que ya existe.

---



- Los adapters deben ser **opcionales** — si el paquete requerido no está instalado, el adapter simplemente no carga
- El UIB debe tener **autenticación** igual que el dashboard (token-based)
- Los adapters generados por el Evolver van a \`adapters/generated/\` igual que skills y tools
- GUI Automation solo en Windows por ahora (uiautomation es Windows-only)
- Todos los adapters deben seguir el mismo patrón que los channels existentes en \`src/openacm/channels/\`
- Migrar de SQLite a PostgreSQL es condición necesaria antes de desplegar en servidor con múltiples usuarios
- El worker separado debe compartir el mismo codebase, solo cambia el comando de entrada

`
  },
  {
    "slug": "26-dev-mode-plugin-plan",
    "title": "Dev Mode Plugin — Implementation Plan",
    "section": "Project",
    "content": `
# Dev Mode Plugin — Implementation Plan

> **Status**: Planning · Not implemented  
> **Goal**: A first-party OpenACM plugin that mirrors every Claude Code tool and slash command as native OpenACM tools + skills, giving the LLM full programmer-grade capabilities from within any chat channel.

---

## 1. Overview

Claude Code gives the AI a rich set of developer tools (file system, shell, git, web, code intelligence, task management). OpenACM can expose the same surface through its plugin system, so a developer asking "refactor this file" or "run the tests and show me what broke" gets exactly the same power they'd have in the CLI — but integrated with channels, memory, swarms, cron, and the full OpenACM UI.

The plugin registers:
- **26 tools** covering every Claude Code tool category
- **10 skills** that replicate key Claude Code slash commands
- **1 FastAPI router** for read-only queries the frontend needs (file tree, git status, diagnostics)
- **1 frontend page** (\`/dev\`) — a developer dashboard
- **1 LLM context extension** — tells the AI it's in programmer mode and what it can do

---

## 2. File Structure

\`\`\`
src/openacm/plugins/dev_mode/
├── __init__.py                  ← Plugin class, registers everything
├── tools/
│   ├── __init__.py
│   ├── filesystem.py            ← read_file, write_file, edit_file, glob_files, grep_files
│   ├── execution.py             ← bash_exec, monitor_process, powershell_exec
│   ├── web.py                   ← web_fetch, web_search
│   ├── git.py                   ← git_status, git_diff, git_log, git_commit, git_ops
│   ├── notebook.py              ← notebook_read, notebook_edit
│   ├── planning.py              ← todo_write, task_create, task_list, task_update, create_plan
│   └── code_intel.py            ← get_diagnostics, go_to_definition, find_references
├── skills/
│   ├── dev-mode.md              ← Core programmer mode context (always active when plugin on)
│   ├── code-review.md           ← /review equivalent
│   ├── security-review.md       ← /security-review equivalent
│   ├── batch-changes.md         ← /batch equivalent
│   ├── project-init.md          ← /init equivalent
│   ├── debug-session.md         ← /debug equivalent
│   ├── simplify-code.md         ← /simplify equivalent
│   ├── generate-docs.md         ← documentation generation
│   ├── test-runner.md           ← run, analyze, and fix failing tests
│   └── git-workflow.md          ← smart git commit/branch/PR helper
└── router.py                    ← /api/dev/* endpoints for frontend

frontend/app/dev/
└── page.tsx                     ← Dev dashboard page

frontend/components/dev/
├── file-tree.tsx                ← Interactive file explorer
├── git-panel.tsx                ← Git status / diff viewer
├── todo-panel.tsx               ← Active todos from LLM session
└── diagnostics-panel.tsx        ← Code errors/warnings from LSP
\`\`\`

---

## 3. Tool Catalog

All tools follow the \`@tool(name, description, parameters, risk_level, category)\` pattern.  
Risk levels: \`low\` (auto-run) · \`medium\` (prompt in normal mode, auto in yolo) · \`high\` (always prompt unless yolo + explicit allow).

### 3.1 Filesystem Tools → \`filesystem.py\`

#### \`dev_read_file\`
\`\`\`python
name        = "dev_read_file"
description = "Read a file from the workspace. Supports offset/limit for large files."
risk_level  = "low"
category    = "file"
parameters  = {
    "path":   { "type": "string", "description": "Absolute or workspace-relative path" },
    "offset": { "type": "integer", "description": "Line number to start reading from" },
    "limit":  { "type": "integer", "description": "Max number of lines to return" }
}
required    = ["path"]
\`\`\`
Maps to: \`Read\` in Claude Code.

---

#### \`dev_write_file\`
\`\`\`python
name        = "dev_write_file"
description = "Create or fully overwrite a file. Use dev_edit_file for targeted changes."
risk_level  = "medium"
category    = "file"
parameters  = {
    "path":    { "type": "string" },
    "content": { "type": "string", "description": "Full file content to write" }
}
required    = ["path", "content"]
\`\`\`
Maps to: \`Write\` in Claude Code.

---

#### \`dev_edit_file\`
\`\`\`python
name        = "dev_edit_file"
description = "Replace an exact string in a file. Fails if old_string not found or not unique."
risk_level  = "medium"
category    = "file"
parameters  = {
    "path":        { "type": "string" },
    "old_string":  { "type": "string", "description": "Exact text to find and replace" },
    "new_string":  { "type": "string", "description": "Replacement text" },
    "replace_all": { "type": "boolean", "description": "Replace every occurrence (default false)" }
}
required    = ["path", "old_string", "new_string"]
\`\`\`
Maps to: \`Edit\` in Claude Code.

---

#### \`dev_glob\`
\`\`\`python
name        = "dev_glob"
description = "Find files matching a glob pattern, sorted by modification time."
risk_level  = "low"
category    = "file"
parameters  = {
    "pattern": { "type": "string", "description": "Glob pattern, e.g. src/**/*.tsx" },
    "path":    { "type": "string", "description": "Root directory to search in (defaults to workspace)" }
}
required    = ["pattern"]
\`\`\`
Maps to: \`Glob\` in Claude Code. Implementation: \`pathlib.Path.glob\` / \`fnmatch\`.

---

#### \`dev_grep\`
\`\`\`python
name        = "dev_grep"
description = "Search file contents using ripgrep. Supports regex, file type filters, and context lines."
risk_level  = "low"
category    = "file"
parameters  = {
    "pattern":     { "type": "string", "description": "Regex pattern to search" },
    "path":        { "type": "string", "description": "File or directory to search in" },
    "glob":        { "type": "string", "description": "Glob filter, e.g. *.ts" },
    "type":        { "type": "string", "description": "File type filter, e.g. py, js, rust" },
    "output_mode": { "type": "string", "enum": ["content", "files_with_matches", "count"] },
    "context":     { "type": "integer", "description": "Lines of context around each match" },
    "ignore_case": { "type": "boolean" },
    "head_limit":  { "type": "integer", "description": "Max results to return" }
}
required    = ["pattern"]
\`\`\`
Maps to: \`Grep\` in Claude Code. Implementation: subprocess \`rg\` (ripgrep) or Python \`re\` fallback.

---

### 3.2 Execution Tools → \`execution.py\`

#### \`dev_bash\`
\`\`\`python
name        = "dev_bash"
description = "Execute a shell command in the workspace. Captures stdout, stderr, and exit code."
risk_level  = "high"
category    = "system"
parameters  = {
    "command":     { "type": "string", "description": "Shell command to execute" },
    "timeout":     { "type": "integer", "description": "Max execution time in seconds (default 120)" },
    "cwd":         { "type": "string",  "description": "Working directory (defaults to workspace root)" },
    "background":  { "type": "boolean", "description": "Run detached and return immediately" }
}
required    = ["command"]
\`\`\`
Maps to: \`Bash\` in Claude Code.  
Uses existing sandbox plumbing (\`_sandbox\`, \`_confirm_callback\`).

---

#### \`dev_powershell\`
\`\`\`python
name        = "dev_powershell"
description = "Execute a PowerShell command. Available on Windows; uses pwsh on Linux/macOS."
risk_level  = "high"
category    = "system"
parameters  = {
    "command": { "type": "string" },
    "timeout": { "type": "integer", "description": "Max seconds (default 120)" }
}
required    = ["command"]
\`\`\`
Maps to: \`PowerShell\` in Claude Code.

---

#### \`dev_monitor\`
\`\`\`python
name        = "dev_monitor"
description = "Run a command and stream its output until a condition is met or duration expires."
risk_level  = "high"
category    = "system"
parameters  = {
    "command":      { "type": "string" },
    "until_pattern":{ "type": "string", "description": "Stop when this regex matches a line" },
    "duration":     { "type": "integer", "description": "Max seconds to watch (default 60)" }
}
required    = ["command"]
\`\`\`
Maps to: \`Monitor\` in Claude Code.

---

### 3.3 Web Tools → \`web.py\`

#### \`dev_web_fetch\`
\`\`\`python
name        = "dev_web_fetch"
description = "Fetch the content of a URL and return it as markdown or plain text."
risk_level  = "low"
category    = "web"
parameters  = {
    "url":        { "type": "string" },
    "max_tokens": { "type": "integer", "description": "Truncate response to this many tokens" }
}
required    = ["url"]
\`\`\`
Maps to: \`WebFetch\` in Claude Code.

---

#### \`dev_web_search\`
\`\`\`python
name        = "dev_web_search"
description = "Search the web and return a ranked list of results with title, URL, and snippet."
risk_level  = "low"
category    = "web"
parameters  = {
    "query":       { "type": "string" },
    "num_results": { "type": "integer", "description": "Results to return (default 5, max 10)" }
}
required    = ["query"]
\`\`\`
Maps to: \`WebSearch\` in Claude Code. Uses existing search infrastructure (Brave / SerpAPI).

---

### 3.4 Git Tools → \`git.py\`

No direct Claude Code equivalent — these are extracted from typical Claude Code Bash patterns and promoted to first-class tools for safety and structured output.

#### \`dev_git_status\`
\`\`\`python
name       = "dev_git_status"
risk_level = "low"
parameters = { "path": { "type": "string" } }
\`\`\`

#### \`dev_git_diff\`
\`\`\`python
name       = "dev_git_diff"
risk_level = "low"
parameters = {
    "path":   { "type": "string" },
    "staged": { "type": "boolean" },
    "ref":    { "type": "string", "description": "Commit or branch to diff against" }
}
\`\`\`

#### \`dev_git_log\`
\`\`\`python
name       = "dev_git_log"
risk_level = "low"
parameters = {
    "n":      { "type": "integer", "description": "Number of commits (default 20)" },
    "branch": { "type": "string" },
    "path":   { "type": "string", "description": "Filter to changes in this path" }
}
\`\`\`

#### \`dev_git_commit\`
\`\`\`python
name       = "dev_git_commit"
risk_level = "medium"
parameters = {
    "message": { "type": "string" },
    "files":   { "type": "array", "items": { "type": "string" }, "description": "Files to stage (empty = all modified)" },
    "amend":   { "type": "boolean" }
}
\`\`\`

#### \`dev_git_ops\`
\`\`\`python
name        = "dev_git_ops"
description = "General-purpose git command for operations not covered by specific tools (checkout, branch, merge, push, pull, stash...)."
risk_level  = "high"
parameters  = {
    "args": { "type": "string", "description": "Everything after 'git', e.g. 'checkout -b feature/x'" }
}
\`\`\`

---

### 3.5 Notebook Tools → \`notebook.py\`

#### \`dev_notebook_read\`
\`\`\`python
name        = "dev_notebook_read"
description = "Read a Jupyter notebook, returning all cells with their outputs."
risk_level  = "low"
category    = "file"
parameters  = { "path": { "type": "string" } }
required    = ["path"]
\`\`\`

#### \`dev_notebook_edit\`
\`\`\`python
name        = "dev_notebook_edit"
description = "Modify a cell in a Jupyter notebook by index."
risk_level  = "medium"
category    = "file"
parameters  = {
    "path":       { "type": "string" },
    "cell_index": { "type": "integer" },
    "content":    { "type": "string", "description": "New cell content" },
    "cell_type":  { "type": "string", "enum": ["code", "markdown"], "description": "Default: preserve existing type" }
}
required    = ["path", "cell_index", "content"]
\`\`\`
Maps to: \`NotebookEdit\` in Claude Code.

---

### 3.6 Planning & Task Tools → \`planning.py\`

#### \`dev_todo_write\`
\`\`\`python
name        = "dev_todo_write"
description = "Replace the session todo list with a new set of items. Use to track multi-step plans."
risk_level  = "low"
parameters  = {
    "todos": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "content":  { "type": "string" },
                "status":   { "type": "string", "enum": ["pending", "in_progress", "completed"] },
                "priority": { "type": "string", "enum": ["high", "medium", "low"] }
            }
        }
    }
}
required    = ["todos"]
\`\`\`
Maps to: \`TodoWrite\` in Claude Code. Persisted in session memory; rendered in the frontend todo panel.

---

#### \`dev_task_create\`
\`\`\`python
name        = "dev_task_create"
description = "Create a tracked background task (long-running bash, build, test run)."
risk_level  = "medium"
parameters  = {
    "command":     { "type": "string" },
    "description": { "type": "string" },
    "timeout":     { "type": "integer" }
}
required    = ["command", "description"]
\`\`\`
Maps to: \`TaskCreate\` in Claude Code. Backed by cron/subprocess infrastructure.

---

#### \`dev_task_list\`
\`\`\`python
name       = "dev_task_list"
risk_level = "low"
parameters = {}
\`\`\`
Maps to: \`TaskList\`.

---

#### \`dev_task_update\`
\`\`\`python
name       = "dev_task_update"
risk_level = "low"
parameters = {
    "task_id": { "type": "string" },
    "status":  { "type": "string", "enum": ["running", "completed", "failed", "cancelled"] },
    "note":    { "type": "string" }
}
required   = ["task_id", "status"]
\`\`\`
Maps to: \`TaskUpdate\`.

---

#### \`dev_create_plan\`
\`\`\`python
name        = "dev_create_plan"
description = "Draft a structured multi-step implementation plan and store it for reference."
risk_level  = "low"
parameters  = {
    "title":       { "type": "string" },
    "description": { "type": "string" },
    "steps":       { "type": "array", "items": { "type": "string" } }
}
required    = ["title", "description", "steps"]
\`\`\`
Maps to: \`EnterPlanMode / ExitPlanMode\` in Claude Code.

---

### 3.7 Code Intelligence Tools → \`code_intel.py\`

These depend on IDE MCP integration (\`mcp__ide__*\`) if available, with fallback to static analysis.

#### \`dev_get_diagnostics\`
\`\`\`python
name        = "dev_get_diagnostics"
description = "Get LSP errors and warnings for a file or the whole workspace."
risk_level  = "low"
parameters  = { "path": { "type": "string", "description": "File path (omit for all files)" } }
\`\`\`
Maps to: \`LSP\` / \`mcp__ide__getDiagnostics\` in Claude Code.  
Fallback: run \`pyright\`, \`eslint\`, \`tsc --noEmit\`, \`mypy\` depending on detected language.

---

#### \`dev_go_to_definition\`
\`\`\`python
name        = "dev_go_to_definition"
description = "Find the definition of a symbol at a given file position."
risk_level  = "low"
parameters  = {
    "path":   { "type": "string" },
    "line":   { "type": "integer" },
    "column": { "type": "integer" }
}
required    = ["path", "line", "column"]
\`\`\`
Maps to: \`LSP\` in Claude Code (go-to-definition action).

---

#### \`dev_find_references\`
\`\`\`python
name        = "dev_find_references"
description = "Find all references to a symbol across the workspace."
risk_level  = "low"
parameters  = {
    "path":   { "type": "string" },
    "line":   { "type": "integer" },
    "column": { "type": "integer" }
}
required    = ["path", "line", "column"]
\`\`\`
Maps to: \`LSP\` in Claude Code (find-references action).

---

## 4. Tool Summary Table

| Claude Code Tool | OpenACM Tool(s) | Risk |
|---|---|---|
| \`Read\` | \`dev_read_file\` | low |
| \`Write\` | \`dev_write_file\` | medium |
| \`Edit\` | \`dev_edit_file\` | medium |
| \`Glob\` | \`dev_glob\` | low |
| \`Grep\` | \`dev_grep\` | low |
| \`Bash\` | \`dev_bash\` | high |
| \`PowerShell\` | \`dev_powershell\` | high |
| \`Monitor\` | \`dev_monitor\` | high |
| \`WebFetch\` | \`dev_web_fetch\` | low |
| \`WebSearch\` | \`dev_web_search\` | low |
| \`NotebookEdit\` | \`dev_notebook_read\` + \`dev_notebook_edit\` | low / medium |
| \`TodoWrite\` | \`dev_todo_write\` | low |
| \`TaskCreate/List/Update/Stop\` | \`dev_task_create/list/update\` | low / medium |
| \`EnterPlanMode/ExitPlanMode\` | \`dev_create_plan\` | low |
| \`LSP\` | \`dev_get_diagnostics\`, \`dev_go_to_definition\`, \`dev_find_references\` | low |
| \`Agent\` | existing Swarms system | — |
| \`CronCreate/Delete/List\` | existing Cron system | — |
| \`SendMessage\` | existing Swarm messaging | — |
| \`EnterWorktree\` | \`dev_bash("git worktree add ...")\` | high |
| *(no equivalent)* | \`dev_git_status/diff/log/commit/ops\` | low / medium / high |

**Total new tools: 26**  
**Delegated to existing systems: 5** (Swarms, Cron, MCP)

---

## 5. Skill Catalog

Skills inject markdown context into the LLM system prompt when active. These replicate Claude Code slash commands.

### \`dev-mode.md\` — Core context (always active with plugin)
\`\`\`
category: development
\`\`\`
Tells the LLM:
- It has full filesystem R/W access via \`dev_*\` tools
- It should always read files before editing them
- It should prefer \`dev_edit_file\` over \`dev_write_file\` for targeted changes
- Bash commands run in the workspace root by default
- It should use \`dev_todo_write\` to track multi-step work
- Git tools exist for structured version control
- Use \`dev_get_diagnostics\` before declaring code "done"

---

### \`code-review.md\` — \`/review\` equivalent
\`\`\`
category: development
\`\`\`
Step-by-step review workflow:
1. Read changed files with \`dev_git_diff\`
2. Check diagnostics with \`dev_get_diagnostics\`
3. Search for common issues with \`dev_grep\` (TODO, FIXME, console.log, print, hardcoded secrets)
4. Produce a structured review report (correctness, security, performance, style)

---

### \`security-review.md\` — \`/security-review\` equivalent
\`\`\`
category: security
\`\`\`
Security-focused analysis:
- OWASP Top 10 checklist
- Grep patterns for: \`eval(\`, \`exec(\`, SQL string concatenation, hardcoded credentials, unsafe deserialization
- Dependency vulnerability check via \`dev_bash("pip audit")\` / \`npm audit\`

---

### \`batch-changes.md\` — \`/batch\` equivalent
\`\`\`
category: development
\`\`\`
Protocol for large-scale refactors:
1. Use \`dev_glob\` to find all affected files
2. Read each file before editing
3. Apply changes with \`dev_edit_file\` (never \`dev_write_file\` for refactors)
4. Run diagnostics after each file group
5. Report: files changed, lines affected, errors introduced/fixed

---

### \`project-init.md\` — \`/init\` equivalent
\`\`\`
category: development
\`\`\`
Analyzes a new project and creates:
- \`OPENACM.md\` (project context file, equivalent to CLAUDE.md)
- Language/framework detection via \`dev_glob\` + \`dev_read_file\`
- Build/test/lint command discovery
- Populates \`dev_todo_write\` with onboarding steps

---

### \`debug-session.md\` — \`/debug\` equivalent
\`\`\`
category: development
\`\`\`
Structured debugging protocol:
1. Capture error with \`dev_bash\` or user-provided stack trace
2. \`dev_grep\` for the error string in the codebase
3. \`dev_read_file\` surrounding lines for context
4. Form hypothesis → apply fix → run test → iterate

---

### \`simplify-code.md\` — \`/simplify\` equivalent
\`\`\`
category: development
\`\`\`
Code quality sweep:
- Flag functions >50 lines
- Flag files >500 lines
- Find duplicate code blocks via \`dev_grep\`
- Suggest extractions, renames, simplifications without changing behavior

---

### \`generate-docs.md\` — Documentation generation
\`\`\`
category: development
\`\`\`
Generates or updates:
- README.md from project structure
- Docstrings / JSDoc from function signatures
- OpenAPI spec from API route files
- CHANGELOG entry from \`dev_git_log\`

---

### \`test-runner.md\` — Test analysis
\`\`\`
category: development
\`\`\`
1. Detect test framework (\`pytest\`, \`jest\`, \`vitest\`, \`go test\`, etc.) via \`dev_glob\`
2. Run tests with \`dev_bash\`
3. Parse failures, map to source files with \`dev_grep\`
4. Propose fixes, re-run, iterate up to 3 rounds

---

### \`git-workflow.md\` — Smart git helper
\`\`\`
category: development
\`\`\`
Opinionated git workflow:
- Always \`dev_git_status\` before committing
- \`dev_git_diff --staged\` for review
- Commit message format: \`type(scope): description\`
- Warns before force-push or amend on published commits

---

## 6. LLM Context Extension

Injected into the system prompt when the plugin is active:

\`\`\`markdown
## Developer Mode Active

You have full programmer capabilities via dev_* tools:

**Filesystem**: dev_read_file, dev_write_file, dev_edit_file, dev_glob, dev_grep
**Execution**: dev_bash (shell), dev_powershell (Windows), dev_monitor (streaming)
**Web**: dev_web_fetch, dev_web_search
**Git**: dev_git_status, dev_git_diff, dev_git_log, dev_git_commit, dev_git_ops
**Notebooks**: dev_notebook_read, dev_notebook_edit
**Code Intel**: dev_get_diagnostics, dev_go_to_definition, dev_find_references
**Planning**: dev_todo_write, dev_task_create/list/update, dev_create_plan

Rules:
- Always read a file before editing it.
- Prefer dev_edit_file over dev_write_file for targeted changes.
- Use dev_todo_write to track multi-step tasks; update status as you complete each.
- Run dev_get_diagnostics after significant edits to catch regressions.
- For destructive operations (delete, force-push, overwrite), state the intent and confirm.
- Workspace root is {workspace_root}.
\`\`\`

---

## 7. Frontend Page — \`/dev\`

A developer dashboard that surfaces live state from the plugin's tools.

### Layout

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  DEV MODE                                  [Tools] [Skills] │
├─────────────────┬───────────────────────────────────────────┤
│  FILE TREE      │  GIT STATUS                               │
│                 │  ┌─ M frontend/app/chat/page.tsx          │
│  ▶ src/         │  ├─ M src/openacm/core/swarm_manager.py  │
│    ▶ openacm/   │  └─ ?? calculation.txt                   │
│      ▶ plugins/ │                                           │
│      ▶ core/    │  DIAGNOSTICS                              │
│  ▶ frontend/    │  ● 0 errors  △ 2 warnings                │
│    ▶ app/       │  ▸ frontend/app/chat/page.tsx:516         │
│    ▶ components/│    React Hook in conditional              │
│                 │                                           │
├─────────────────┴───────────────────────────────────────────┤
│  ACTIVE TODOS                              [Clear]          │
│  ✓ Fix hook violation in MessageBubble                      │
│  ◎ Add tool deduplication                   in_progress     │
│  ○ Write unit tests                          pending        │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Components

- **FileTree** (\`file-tree.tsx\`): Collapsible directory tree from \`GET /api/dev/filetree\`. Click to open file in chat context.
- **GitPanel** (\`git-panel.tsx\`): Live \`git status\` + diff preview from \`GET /api/dev/git-status\` and \`GET /api/dev/git-diff\`.
- **DiagnosticsPanel** (\`diagnostics-panel.tsx\`): Errors/warnings from \`GET /api/dev/diagnostics\`. Links open file in terminal.
- **TodoPanel** (\`todo-panel.tsx\`): Current session todos from \`GET /api/dev/todos\`. Status badges with ok/warn/err dots.

---

## 8. Backend API Router — \`router.py\`

Read-only endpoints consumed by the frontend dashboard. All write operations go through the AI tools.

\`\`\`
GET  /api/dev/filetree          → directory tree (depth limited, gitignore aware)
GET  /api/dev/git-status        → parsed git status (staged, unstaged, untracked)
GET  /api/dev/git-diff          → diff of modified files (optional ?staged=true)
GET  /api/dev/diagnostics       → current lint/type errors (calls static analysis)
GET  /api/dev/todos             → current session todo list
POST /api/dev/todos             → overwrite todos (mirrors dev_todo_write tool)
GET  /api/dev/tasks             → running background tasks
\`\`\`

---

## 9. Plugin Registration — \`__init__.py\`

\`\`\`python
class DevModePlugin(Plugin):
    name        = "dev_mode"
    version     = "1.0.0"
    description = "Full programmer mode — all Claude Code tools as native OpenACM tools"
    author      = "OpenACM"

    def get_tool_modules(self):
        from .tools import filesystem, execution, web, git, notebook, planning, code_intel
        return [filesystem, execution, web, git, notebook, planning, code_intel]

    def get_skills(self):
        # Load from skills/*.md files in this package directory
        return _load_skill_files(Path(__file__).parent / "skills")

    def get_context_extension(self):
        return DEV_MODE_CONTEXT_PROMPT.format(workspace_root=self._workspace_root)

    def get_intent_keywords(self):
        return {
            "file":   ["read", "write", "edit", "open", "create file", "delete", "glob", "find files"],
            "system": ["run", "execute", "bash", "shell", "command", "install", "build", "test", "terminal"],
            "web":    ["search", "fetch", "scrape", "download", "url", "http"],
            "git":    ["commit", "push", "pull", "branch", "diff", "status", "merge", "stash", "rebase"],
        }

    def get_nav_items(self):
        return [{"path": "/dev", "label": "Dev Mode", "icon": "Code2", "section": "main"}]

    def get_api_router(self):
        from .router import router
        return router

    async def on_start(self, *, workspace_root, **_):
        self._workspace_root = workspace_root
\`\`\`

---

## 10. Intent Routing Considerations

Some tools overlap with existing OpenACM tools (e.g., there may already be a generic \`web_search\` or \`bash_exec\` tool). Strategy:

- **Prefix all tools \`dev_*\`** to avoid name collisions
- **Register intent keywords** that match programming contexts (\`"build"\`, \`"lint"\`, \`"test"\`, \`"refactor"\`, etc.) so the router directs code-related messages to dev tools
- **Keep existing tools active** — dev_mode adds to, not replaces, the existing toolset
- When Dev Mode skill is active, the LLM is primed to prefer \`dev_*\` tools for file/exec operations

---

## 11. Security Model

| Risk Level | Behavior in Normal Mode | Behavior in Yolo Mode |
|---|---|---|
| \`low\` | Auto-execute | Auto-execute |
| \`medium\` | Confirm prompt in chat | Auto-execute |
| \`high\` | Confirm prompt (5s modal) | Auto-execute |

High-risk tools: \`dev_bash\`, \`dev_powershell\`, \`dev_monitor\`, \`dev_git_ops\`  
Medium-risk tools: \`dev_write_file\`, \`dev_edit_file\`, \`dev_git_commit\`, \`dev_task_create\`

All tool executions are logged to the \`tool_executions\` table regardless of risk level.

---

## 12. Implementation Phases

### Phase 1 — Core Filesystem + Execution (MVP)
\`dev_read_file\`, \`dev_write_file\`, \`dev_edit_file\`, \`dev_glob\`, \`dev_grep\`, \`dev_bash\`  
+ \`dev-mode.md\` skill  
+ Plugin registration + nav item

### Phase 2 — Web + Git
\`dev_web_fetch\`, \`dev_web_search\`  
\`dev_git_status\`, \`dev_git_diff\`, \`dev_git_log\`, \`dev_git_commit\`, \`dev_git_ops\`  
+ \`git-workflow.md\` skill  
+ \`/api/dev/git-status\` endpoint + GitPanel frontend component

### Phase 3 — Planning + Tasks
\`dev_todo_write\`, \`dev_task_create/list/update\`, \`dev_create_plan\`  
+ \`dev_monitor\`, \`dev_powershell\`  
+ TodoPanel frontend component

### Phase 4 — Full Frontend Dashboard
FileTree + DiagnosticsPanel + full \`/dev\` page  
+ All remaining skills

### Phase 5 — Code Intelligence
\`dev_get_diagnostics\`, \`dev_go_to_definition\`, \`dev_find_references\`  
+ IDE MCP integration bridge  
+ \`dev_notebook_read\`, \`dev_notebook_edit\`

---

## 13. Open Questions

1. **Sandbox**: Should \`dev_bash\` use the existing OpenACM sandbox (Docker/chroot) or run in the user's workspace directly? Recommend: direct in workspace for dev mode (user opted in), sandbox remains opt-in via config.
2. **Workspace root**: Fixed to \`config.workspace_root\` or per-session? Per-session would require the LLM to call a \`set_workspace(path)\` tool.
3. **Existing tool conflicts**: If \`web_search\` already exists, should \`dev_web_search\` delegate to it or be independent? Recommend delegation.
4. **Todo persistence**: Todos live in session memory (lost on restart) or in SQLite? SQLite is cleaner for the dashboard.
5. **LSP availability**: \`dev_get_diagnostics\` runs static CLI tools (pyright, eslint, tsc) as fallback. Does the IDE MCP server need to be connected, or is CLI-only sufficient for v1?

`
  }
];

export default docsData;
