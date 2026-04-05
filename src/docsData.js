export const docsData = [
  {
    "slug": "01-introduction",
    "title": "Introduction to OpenACM",
    "content": `
# Introduction to OpenACM

## What is OpenACM?

**OpenACM** (Open Automated Computer Manager) is an open-source, self-hosted Tier-1 autonomous AI agent that runs directly on your computer. Unlike cloud-based AI assistants, OpenACM has real, direct access to your operating system — it can execute commands, write and run code, control a browser, manage files, automate smart home devices, interact with your Google Workspace, and much more.

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
- Powered by any LLM (Ollama, OpenAI, Anthropic, Gemini, Groq, and 100+ more via LiteLLM)
- Multi-step agentic loops — can call multiple tools in sequence to complete complex tasks
- Automatic intent classification to select the right tools for each request
- Semantic tool selection using multilingual embeddings — sends only relevant tools to save tokens

### 🛠️ 42+ Built-in Tools
- System command execution with sandboxing
- Python kernel (persistent, with installed libraries)
- Automated browser control (Playwright/Chromium)
- File system operations
- Web search and page scraping
- Google Workspace (Gmail, Calendar, Drive, YouTube)
- 3D modeling via Blender Python API
- IoT/Smart Home control (Tuya, Xiaomi Mi Home, LG WebOS)
- Screenshot capture
- UI generation

### 🔌 Multi-Channel Support
Talk to your agent through:
- **Web Dashboard** — built-in browser interface with real-time streaming
- **Telegram** — message your agent from anywhere
- **Discord** — integrate into your server
- **WhatsApp** — via bridge
- **Console** — interactive terminal

### 🧩 Fully Extensible
- **Create new tools** at runtime using natural language — just ask OpenACM to make a tool
- **Create skills** — markdown instructions that change how the agent thinks and behaves
- **Create agents** — isolated instances with their own tools, personality, and Telegram bot
- **Connect MCP servers** — plug in any Model Context Protocol compatible server

### 🔒 Privacy First
- 100% self-hosted — your data never leaves your machine
- Conversation messages encrypted at rest (AES-GCM)
- Activity data (app usage) encrypted at rest
- Configurable security policies (blocked commands, execution modes)
- Three execution modes: \`confirmation\`, \`auto\`, \`yolo\`

### 🧠 Memory Systems
- **Short-term:** Conversation history per user/channel, auto-compacted after 25 messages
- **Long-term:** Vector database (ChromaDB) for facts, notes, and past knowledge retrieval
- **Passive learning:** LocalRouter learns your patterns to classify intents faster

---

## Philosophy

### "Do, don't describe"
OpenACM's golden rule: if there's a tool available, use it. Never describe how something could theoretically be done — just do it.

### Open and self-hosted
Your agent runs on your hardware. Your conversations, your files, your activity — all local. You control the LLM provider, the security policies, and the channels.

### Extensible by design
OpenACM is a platform, not a product. Tools, skills, agents, and MCP servers can be added without restarting or editing source code.

### Language-agnostic
The intent classification and tool selection system is powered by multilingual embeddings (\`paraphrase-multilingual-MiniLM-L12-v2\`). You can talk to OpenACM in any of 50+ languages.

---

## Who is OpenACM for?

| User | Use Case |
|------|----------|
| **Developers** | Automate repetitive coding tasks, run tests, manage projects, generate boilerplate |
| **Power Users** | Control your PC with voice/text, automate workflows, manage files at scale |
| **Smart Home Enthusiasts** | Unified natural language control for IoT devices |
| **Teams** | Deploy a shared agent on a server, accessible via Telegram/Discord |
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
- ✅ Control smart home devices (lights, thermostats, TVs, vacuums, blinds)
- ✅ Create 3D models and render scenes in Blender
- ✅ Remember facts across conversations (vector memory)
- ✅ Create new tools for itself at runtime
- ✅ Spawn isolated sub-agents with specialized roles
- ✅ Connect to any MCP-compatible external tool server
- ✅ Run as a Telegram bot, Discord bot, WhatsApp bot, or web interface
- ✅ Detect repetitive workflows and suggest automation
- ✅ Monitor your OS activity patterns and build routines

---

## What Makes OpenACM Different

| Feature | OpenACM | Cloud AI Assistants | Local LLM UIs |
|---------|---------|---------------------|---------------|
| Real OS execution | ✅ | ❌ | ❌ |
| Self-hosted | ✅ | ❌ | ✅ |
| Multi-channel (Telegram, Discord) | ✅ | ❌ | ❌ |
| Create tools at runtime | ✅ | ❌ | ❌ |
| IoT / Smart Home | ✅ | Limited | ❌ |
| MCP protocol support | ✅ | Some | Some |
| Encrypted local storage | ✅ | N/A | Varies |
| Multi-agent system | ✅ | ❌ | ❌ |
| Works with any LLM | ✅ | ❌ (locked in) | ✅ |
| Activity pattern detection | ✅ | ❌ | ❌ |
| Long-term RAG memory | ✅ | ❌ | ❌ |

---

## Version

**Current:** v0.1.0 — active development, not yet stable for production use.

See the [Roadmap](./18-roadmap.md) for planned features.

`
  },
  {
    "slug": "02-getting-started",
    "title": "Getting Started",
    "content": `
# Getting Started

## Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| OS | Windows 10, macOS 12, Ubuntu 20.04 | Windows 11, macOS 14, Ubuntu 22.04 |
| Python | 3.11+ | 3.12 |
| RAM | 4 GB | 8 GB (16 GB with local LLM) |
| Storage | 2 GB | 5 GB (more for local models) |
| Node.js | 18+ | 20+ |
| GPU | Not required | Optional (for local LLM acceleration) |

---

## Installation (Recommended — Scripts)

OpenACM ships with setup and run scripts that handle everything automatically.

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/Json55Hdz/OpenACM.git
cd OpenACM
\`\`\`

### 2. Run the setup script

The setup script creates the virtual environment, installs all Python dependencies, and builds the frontend in one step.

**Windows:**
\`\`\`
setup.bat
\`\`\`

**macOS / Linux:**
\`\`\`bash
chmod +x setup.sh
./setup.sh
\`\`\`

### 3. Start OpenACM

From now on, every time you want to run OpenACM:

**Windows:**
\`\`\`
run.bat
\`\`\`

**macOS / Linux:**
\`\`\`bash
./run.sh
\`\`\`

That's it. Open your browser at \`http://127.0.0.1:47821\`.

> **No config needed upfront.** The onboarding wizard will guide you through choosing your LLM provider, entering API keys, and setting up channels — all from the browser.

---

## First Run: Dashboard Setup

1. Open \`http://127.0.0.1:47821\` in your browser
2. Enter the **Dashboard Token** shown in the terminal
3. The **Onboarding Wizard** guides you through:
   - Choosing your LLM provider and model
   - Setting up optional channels (Telegram, Discord)
   - Configuring optional integrations (Google, IoT)

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

  🧠 LLM: ollama (llama3.2)
  🖥️  Web: http://127.0.0.1:47821
  🔒 Security: auto mode
  📱 Channels: Console · Web

  🔑 Dashboard Token:
  acm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

---

## Quick LLM Configuration

### Ollama (local, no API key needed)

1. Install [Ollama](https://ollama.com)
2. Pull a model: \`ollama pull llama3.2\`
3. In \`config/default.yaml\`:

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
llm:
  default_provider: openai
  providers:
    openai:
      default_model: "gpt-4o"
      api_key: "\${OPENAI_API_KEY}"
\`\`\`

### Anthropic (Claude)

\`\`\`yaml
llm:
  default_provider: anthropic
  providers:
    anthropic:
      default_model: "claude-opus-4-6"
      api_key: "\${ANTHROPIC_API_KEY}"
\`\`\`

---

## Slash Commands

Available in both web chat and the terminal console:

| Command | Description |
|---------|-------------|
| \`/new\` | Start a fresh conversation |
| \`/clear\` | Same as \`/new\` |
| \`/model <name>\` | Switch LLM model mid-conversation |
| \`/stats\` | Show token usage and request counts |
| \`/export\` | Export conversation as text file |
| \`/help\` | Show available commands |

---

## Directory Structure

\`\`\`
OpenACM/
├── setup.bat / setup.sh      # One-time setup script
├── run.bat / run.sh           # Start OpenACM
├── config/
│   ├── default.yaml           # Main configuration file
│   ├── .env                   # API keys and secrets
│   ├── custom_providers.json  # Custom LLM endpoints
│   └── mcp_servers.json       # MCP server configurations
├── data/
│   ├── openacm.db             # SQLite database (conversations, tools, skills)
│   ├── vectordb/              # ChromaDB vector storage (long-term memory)
│   └── router_learned.json    # LocalRouter learned examples
├── docs/                      # This documentation
├── frontend/                  # Next.js web dashboard source
├── skills/                    # Skill markdown files
│   ├── agents/
│   ├── custom/
│   └── development/
├── src/openacm/               # Python source
│   ├── app.py                 # Main orchestrator
│   ├── core/                  # Brain, memory, LLM router, config
│   ├── channels/              # Discord, Telegram, WhatsApp
│   ├── tools/                 # All built-in tools
│   ├── security/              # Sandbox, policies, encryption
│   ├── storage/               # SQLite database layer
│   ├── web/                   # FastAPI server + static frontend
│   └── watchers/              # OS activity monitor
└── workspace/                 # Default directory for generated files
\`\`\`

---

## Updating OpenACM

\`\`\`bash
git pull
\`\`\`

Then re-run the setup script to update dependencies and rebuild the frontend:

**Windows:** \`setup.bat\`  
**macOS / Linux:** \`./setup.sh\`

The database schema is automatically migrated on startup.

---

## Manual Installation (Advanced)

If you prefer to install without the scripts, or need to customize the setup:

### 1. Create a Python virtual environment

\`\`\`bash
python -m venv .venv

# Windows
.venv\\Scripts\\activate

# macOS / Linux
source .venv/bin/activate
\`\`\`

### 2. Install Python dependencies

\`\`\`bash
pip install -e ".[all]"
\`\`\`

Or install only what you need:

\`\`\`bash
pip install -e ".[core]"       # Core only (no RAG, no IoT)
pip install -e ".[rag]"        # + ChromaDB vector memory
pip install -e ".[browser]"    # + Playwright browser automation
pip install -e ".[google]"     # + Google Workspace APIs
pip install -e ".[iot]"        # + IoT/Smart Home
pip install -e ".[blender]"    # + Blender Python integration
\`\`\`

### 3. Build the frontend

\`\`\`bash
cd frontend
npm install
npm run build
cd ..
\`\`\`

### 4. Run

\`\`\`bash
python -m openacm
\`\`\`

---

## Troubleshooting

### "Web dashboard fails to load"
- Make sure the frontend was built (\`npm run build\` in \`frontend/\`) — \`setup.bat\`/\`setup.sh\` does this automatically
- Check that port 47821 is not in use: \`netstat -ano | findstr 47821\`

### "LLM connection failed"
- For Ollama: verify it's running with \`ollama list\`
- For cloud providers: check your API key in \`config/.env\`
- Verify \`config/default.yaml\` has the correct \`base_url\`

### "Tool execution blocked"
- Review \`security.execution_mode\` in \`config/default.yaml\`
- Check \`security.blocked_patterns\` — you may have blocked too aggressively

### "Sentence-transformers model not downloading"
- The \`paraphrase-multilingual-MiniLM-L12-v2\` model (~470MB) downloads on first use
- Requires internet access on first run; subsequent runs are fully offline
- Cached at \`~/.cache/huggingface/hub/\`

`
  },
  {
    "slug": "03-architecture",
    "title": "Architecture",
    "content": `
# Architecture

## Overview

OpenACM is built as a layered, event-driven system. At its core is the **Brain** — an agentic loop that receives messages, selects tools, calls the LLM, executes tool calls, and returns responses. Everything else — channels, the web dashboard, channels, the activity watcher — communicates through the Brain or the shared **EventBus**.

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                          CHANNELS (Input)                           │
│   Web Chat    Telegram    Discord    WhatsApp    Console             │
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
│  │   6. Repeat until done (max 20 iterations)                    │   │
│  └──────────────────────────────────────────────────────────────┘   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ events
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           EVENT BUS                                 │
│  message.received  message.sent  tool.called  tool.result           │
│  thinking  llm.request  memory.recall  skill.active                 │
└───────┬────────────────────────────────────────────────┬────────────┘
        │                                                │
        ▼                                                ▼
┌───────────────┐                            ┌───────────────────────┐
│  Tool Registry│                            │  Web Server (FastAPI)  │
│  42+ tools    │                            │  REST + WebSocket      │
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
- Manage the agentic loop (up to 20 tool-calling iterations)
- Select relevant tools via semantic similarity (or keyword fallback)
- Inject and parse tool call results back into the conversation
- Handle interruption and message queuing per channel
- Emit events for real-time frontend updates
- Passive learning: teach LocalRouter from tool usage patterns
- Track workflows for automation suggestions

**Key methods:**
- \`process_message()\` — public entry point; wraps \`_run()\` in a cancellable task
- \`_run()\` — builds context, selects tools, executes agentic loop
- \`_prepare_messages_for_llm()\` — optimizes history before each LLM call (truncates old tool results, strips reasoning content)
- \`_execute_fast_path()\` — skip LLM entirely for recognized simple intents

---

### LLM Router (\`core/llm_router.py\`)

Unified interface to 100+ LLM providers via LiteLLM.

**Capabilities:**
- Transparent failover between providers
- Streaming support (yields tokens in real-time)
- Token usage tracking (persisted to database)
- Model persistence across restarts
- Provider profile system (handles quirks like Gemini's strict message format, providers that don't support tool calling)
- Custom provider support (OpenAI-compatible endpoints)

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
- \`OBSERVATION MODE\` (default): classify silently in background, emit stats, never block LLM
- \`FAST_PATH MODE\`: intercept recognized intents and execute directly without LLM call

**Intents:** \`OPEN_APP\`, \`PLAY_MEDIA\`, \`SCREENSHOT\`, \`SYSTEM_INFO\`, \`FILE_SIMPLE\`, \`WEB_SEARCH_SIMPLE\`, \`COMPLEX_TASK\`

**Passive Learning:** When the LLM calls a tool on the first iteration (single tool call = unambiguous signal), the router learns to associate that message pattern with the tool's intent. No explicit labeling needed.

---

### Memory Manager (\`core/memory.py\`)

Per-conversation history management.

**Short-term memory:**
- In-memory cache (Python dict) keyed by \`channel_id:user_id\`
- Persisted to SQLite on every message
- Survives restarts: reloaded from DB on cache miss
- Truncation: drops oldest messages when over \`max_context_messages\` (default 50)
- Token budget: drops messages when estimated token count exceeds 16,000

**Conversation Compaction:**
After 25 messages, older messages are automatically summarized by the LLM into a single "summary" message. This keeps context window usage low in long conversations.

\`\`\`
Before compaction (25 messages):
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

\`send_file_to_chat\` is always included regardless of similarity score.

**Tool Embeddings:** Pre-computed at startup once the sentence-transformer model finishes loading. Cached for the lifetime of the process (~1ms per request for similarity computation).

---

### Security Layer (\`security/\`)

**Three levels:**

| Level | Component | What it does |
|-------|-----------|--------------|
| Policy | \`SecurityPolicy\` | Blocks dangerous patterns before execution |
| Sandbox | \`Sandbox\` | Limits runtime: timeout, output size |
| Tool | \`ToolDefinition.risk_level\` | Annotates tools as low/medium/high risk |

**Execution Modes:**
- \`confirmation\` — ask user before executing medium/high risk tools
- \`auto\` — execute whitelisted tools automatically
- \`yolo\` — execute everything (use with caution)

**Always-blocked (hardcoded, no override):**
- Privilege escalation (\`sudo su\`, \`RunAs /priv\`, registry key manipulation)
- Credential file access (\`.ssh/id_rsa\`, SAM database, etc.)
- UAC/sudo dialog manipulation

---

### Database (\`storage/database.py\`)

Async SQLite wrapper using \`aiosqlite\`. All writes are non-blocking.

**Schema overview:**

| Table | Purpose |
|-------|---------|
| \`messages\` | Conversation history (content encrypted at rest) |
| \`tool_executions\` | Log of every tool call with args, result, timing |
| \`llm_usage\` | Token counts and cost per LLM call |
| \`skills\` | Skill definitions (name, description, markdown content) |
| \`settings\` | Key-value store (schema version, model preference) |
| \`agents\` | Agent definitions and credentials |
| \`workflow_executions\` | Tool sequence history for pattern detection |
| \`activity_sessions\` | OS app focus sessions (fields encrypted) |
| \`detected_routines\` | Automation patterns (fields encrypted) |
| \`agent_custom_tools\` | Dynamically created tools per agent |

**Migrations:** Automatic on startup. Current schema version: 5.

**Encryption:** AES-GCM via \`ActivityEncryptor\`. Key stored at \`data/.activity_key\`. Applies to:
- \`messages.content\`
- \`activity_sessions.app_name\`, \`.window_title\`, \`.process_name\`
- \`detected_routines.name\`, \`.description\`, \`.apps\`, \`.trigger_data\`

---

### Web Server (\`web/server.py\`)

FastAPI application serving:
- The Next.js compiled frontend (static files)
- ~60 REST API endpoints
- 3 WebSocket endpoints

**WebSockets:**

| Endpoint | Purpose |
|----------|---------|
| \`/ws/chat\` | Bidirectional chat — send messages, receive responses, or send \`{type:"cancel"}\` to abort |
| \`/ws/events\` | Server-sent events — real-time tool calls, thinking status, skill activation |
| \`/ws/terminal?channel=<id>\` | Full interactive PTY shell, one persistent session per channel. Powered by \`pywinpty\` (Windows) / \`pty\` (Linux/Mac) + xterm.js frontend |

**Authentication:** Token-based. Every request (REST + WS) must include the dashboard token either as \`Authorization: Bearer <token>\` header or \`?token=<token>\` query parameter. Public paths: \`/\`, \`/static/\`, \`/_next/\`, \`/api/auth/check\`, \`/api/ping\`.

---

### Event Bus (\`core/events.py\`)

Pub/sub system for decoupling components.

**Event Types:**

| Event | Emitted by | Consumed by |
|-------|------------|-------------|
| \`message.received\` | Channels | EventBus WebSocket (dashboard) |
| \`message.sent\` | Brain | Channels, EventBus WebSocket |
| \`thinking\` | Brain | EventBus WebSocket (spinner UI) |
| \`tool.called\` | Brain | EventBus WebSocket, channel's PTY terminal |
| \`tool.result\` | Brain | EventBus WebSocket |
| \`tool.output_stream\` | Tools (run_command, run_python…) | Channel's PTY terminal (real-time streaming) |
| \`llm.request\` | LLM Router | EventBus WebSocket |
| \`llm.response\` | LLM Router | EventBus WebSocket |
| \`memory.recall\` | Brain | EventBus WebSocket (memory indicator) |
| \`skill.active\` | Brain | EventBus WebSocket (skill badge) |
| \`router.learned\` | LocalRouter | EventBus WebSocket |
| \`workflow.suggestion\` | WorkflowTracker | EventBus WebSocket |

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
1. Load config (YAML + .env + env vars)
2. Initialize Database (SQLite, run migrations)
3. Initialize Security (policy + sandbox)
4. Initialize LLM Router (restore persisted model preference)
5. Initialize Memory Manager
6. Initialize RAG Engine (ChromaDB) [optional]
7. Initialize Skill Manager (sync skills/ folder to DB)
8. Initialize Brain (wires all components together)
9. Register all tools (42+ built-in, IoT, Stitch, MCP)
10. Start Channels (Discord, Telegram, WhatsApp)
11. Start Agent Bots (per-agent Telegram bots)
12. Start Activity Watcher
13. Start Web Server (FastAPI + Next.js frontend)
14. Print banner + token
15. Start LocalRouter warm-up in background (downloads model on first run)
    └─ On model loaded: precompute tool embeddings (semantic selection ready)
16. Enter console loop
\`\`\`

---

## Frontend Architecture

Built with **Next.js 14** (App Router), **React 18**, **TypeScript**, **Tailwind CSS**.

**State management:** Zustand stores (\`chat-store\`, \`dashboard-store\`, \`auth-store\`, \`terminal-store\`).

**Data fetching:** React Query (\`@tanstack/query\`) for REST endpoints. WebSocket connections managed in \`use-websocket.ts\` hook, initialized globally in \`AppLayout\`.

**Real-time updates:** The \`/ws/events\` WebSocket stream drives all live indicators (thinking spinner, tool execution badges, memory recall indicator, skill active badge, router learning indicator).

**Build output:** \`frontend/.next/\` is copied to \`src/openacm/web/static/\` during the build step. FastAPI serves it as static files with SPA fallback.

`
  },
  {
    "slug": "04-core-concepts",
    "title": "Core Concepts",
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
     └──► Repeat (max 20 iterations)
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

The LLM sees this entire history on each call. Memory compaction (after 25 messages) keeps the context window manageable.

---

## Tools vs Skills vs Agents

These three extension mechanisms serve distinct purposes:

### Tools
Executable Python functions that **do things**. They have inputs, run code, and return output. Tools are how OpenACM interacts with the world.

- Examples: \`run_command\`, \`web_search\`, \`gmail_send\`, \`iot_control\`
- Created with: \`create_tool\` tool or by adding \`.py\` files to \`src/openacm/tools/\`
- Invoked by: the LLM when it decides they're needed
- Registered in: \`ToolRegistry\`

### Skills
Markdown files that **change how OpenACM thinks**. They're injected into the system prompt when a skill is active. Skills have no code — they're behavior/persona instructions.

- Examples: "blender-modeling" (3D expert context), "agent-creator" (how to design agents)
- Created with: \`create_skill\` tool or adding \`.md\` files to \`skills/\`
- Activated: manually via dashboard, or auto-matched by the LLM based on message content
- Stored in: \`skills/{category}/\` directory + SQLite \`skills\` table

### Agents
Isolated instances of OpenACM with their own system prompt, a restricted set of tools, and optionally their own Telegram bot token. Agents are specialized sub-agents.

- Example: a "ResearchBot" that only has access to \`web_search\`, \`get_webpage\`, and \`remember_note\`
- Created via: dashboard or \`create_agent\` tool
- Can be messaged via: dedicated Telegram bot, REST API (\`/api/agents/{id}/chat\`), or web

### When to use which

| Need | Use |
|------|-----|
| Do something (API call, file op, system interaction) | Tool |
| Change how the agent thinks or responds | Skill |
| Create a specialized assistant with limited scope | Agent |
| Connect to an external tool server | MCP |

---

## Memory Architecture

OpenACM has two memory systems that work together:

### Short-term Memory (Conversation History)
- Scope: per user + channel pair
- Stored: SQLite + in-memory cache
- Lifetime: until conversation is cleared or deleted
- Compaction: after 25 messages, older ones are summarized by the LLM
- Encryption: message content encrypted at rest (AES-GCM)

### Long-term Memory (RAG / Vector Store)
- Scope: global across all conversations
- Stored: ChromaDB (persistent vector database)
- Lifetime: permanent until explicitly deleted
- Access: via \`remember_note\` (write) and \`search_memory\` (read)
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
  send_file_to_chat (always included) ✓
  web_search (0.09) < threshold ✗
  → 2 tools sent
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
  → EventBus: thinking {status: "processing"}

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

| Mode | Behavior |
|------|----------|
| \`confirmation\` | Ask user before executing medium/high risk tools |
| \`auto\` | Execute all approved tools automatically |
| \`yolo\` | Execute everything without restriction |

### Blocked Patterns (always enforced)
Even in \`yolo\` mode, certain patterns are always blocked:
- Privilege escalation (\`sudo su\`, \`RunAs /priv\`, SUID manipulation)
- Credential access (\`.ssh/id_rsa\`, \`/etc/shadow\`, Windows SAM)
- Security tool manipulation (UAC dialogs, sudo prompts)

### Tool Risk Levels
Every tool is annotated with a risk level:
- \`low\` — read-only, no side effects (web_search, read_file, system_info)
- \`medium\` — writes data, network calls (write_file, gmail_send, take_screenshot)
- \`high\` — arbitrary execution, privileged access (run_command, run_python, browser_agent)

---

## LLM Providers

OpenACM uses **LiteLLM** internally, which provides a unified interface to 100+ LLM providers. From OpenACM's perspective, all providers speak the same OpenAI-compatible API.

**Supported providers include:**
- Ollama (local, free)
- OpenAI (GPT-4o, o1, o3)
- Anthropic (Claude)
- Google Gemini
- Groq (fast inference)
- Together AI
- Mistral
- Cohere
- AWS Bedrock
- Azure OpenAI
- Any OpenAI-compatible endpoint (LM Studio, vLLM, etc.)

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
| Web dashboard | \`web\` | \`web_<timestamp>\` |
| Console | \`console\` | \`console\` |
| Telegram | Telegram chat ID | \`tg_<chat_id>\` |
| Discord | Guild ID | Discord user ID |
| WhatsApp | Phone number | Phone number |

The channel is responsible for: receiving messages, delivering responses, and translating platform-specific features (attachments, formatting) to/from OpenACM's internal format.

`
  },
  {
    "slug": "05-tools-reference",
    "title": "Tools Reference",
    "content": `
# Tools Reference

OpenACM ships with 42+ built-in tools across 10 categories. Tools are Python async functions decorated with \`@tool\`. They receive injected context (\`_sandbox\`, \`_event_bus\`, \`_brain\`, \`_user_id\`, \`_channel_id\`, \`_channel_type\`) alongside their declared parameters.

---

## Tool Categories

| Category | Tools | Description |
|----------|-------|-------------|
| \`system\` | 2 | OS command execution |
| \`file\` | 5 | File system operations |
| \`web\` | 2 | Web search and browsing |
| \`media\` | 1 | Screen capture |
| \`ai\` | 2 | Long-term memory (RAG) |
| \`google\` | 7 | Gmail, Calendar, Drive, YouTube |
| \`blender\` | 6 | 3D modeling via Blender |
| \`meta\` | 5 | Create tools, skills, agents |
| \`mcp\` | dynamic | MCP server tools |
| \`iot\` | 9 | Smart home device control |
| \`general\` | 2 | Always-available (system info, file to chat) |

---

## System Tools

### \`run_command\`
Execute any OS command in the system shell.

**Risk:** High | **Sandbox:** Yes

\`\`\`python
run_command(
    command: str,        # The shell command to execute
    background: bool = False,  # Run without waiting for completion (for servers, tunnels)
    timeout: int = 120,  # Seconds before forceful termination
)
\`\`\`

**Notes:**
- Always use non-interactive flags: \`--yes\`, \`-y\`, \`-f\` where applicable
- Use \`background=True\` for long-running processes (dev servers, tunnels, file watchers)
- Output is truncated to 50KB
- Returns combined stdout + stderr
- CI=true is auto-injected to suppress interactive prompts

**Examples:**
\`\`\`
"list all files in my downloads folder"
→ run_command("ls ~/Downloads")

"start a local web server"
→ run_command("python -m http.server 8000", background=True)

"install requests library"
→ run_command("pip install requests -y")
\`\`\`

---

### \`run_python\`
Execute Python code in a persistent interactive kernel.

**Risk:** High | **Sandbox:** Yes

\`\`\`python
run_python(
    code: str,           # Python code to execute
    timeout: int = 60,   # Execution timeout in seconds
)
\`\`\`

**Notes:**
- State persists between calls in the same session — imports, variables, and functions survive
- Has access to all installed packages
- Can generate files and images
- Supports async code via \`asyncio.run()\`

**Examples:**
\`\`\`
"calculate the fibonacci sequence up to 1000"
→ run_python("fibs = [0,1]; [fibs.append(fibs[-1]+fibs[-2]) for _ in range(12)]; print(fibs)")

"generate a bar chart of my file sizes"
→ run_python("""
import matplotlib.pyplot as plt
import os
...
""")
\`\`\`

---

## File Tools

### \`read_file\`
Read the contents of a file.

**Risk:** Low

\`\`\`python
read_file(
    path: str,           # Absolute or relative file path
    max_lines: int = 500 # Limit output lines
)
\`\`\`

### \`write_file\`
Create or overwrite a file.

**Risk:** Medium

\`\`\`python
write_file(
    path: str,           # File path to write
    content: str,        # File content
    mode: str = "w"      # "w" (overwrite) or "a" (append)
)
\`\`\`

### \`list_directory\`
List files and directories at a path.

**Risk:** Low

\`\`\`python
list_directory(
    path: str = ".",     # Directory path
    recursive: bool = False  # Include subdirectories
)
\`\`\`

### \`search_files\`
Find files matching a pattern.

**Risk:** Low

\`\`\`python
search_files(
    pattern: str,        # Glob pattern (e.g., "**/*.py", "*.txt")
    directory: str = "." # Root directory to search from
)
\`\`\`

### \`send_file_to_chat\`
Attach a file to the chat response. **Always included in tool selection.**

**Risk:** Low

\`\`\`python
send_file_to_chat(
    file_path: str,      # Path to the file to send
    display_name: str = "" # Optional display name for the file
)
\`\`\`

**Notes:**
- Must be called after generating a file — the file must exist on disk
- The frontend automatically renders image previews for \`.png\`, \`.jpg\`, \`.gif\`, \`.webp\`
- Always call this after generating any output file the user requested

---

## Web Tools

### \`web_search\`
Search the web and return relevant results.

**Risk:** Low

\`\`\`python
web_search(
    query: str,          # Search query
    num_results: int = 5 # Number of results to return
)
\`\`\`

### \`get_webpage\`
Fetch and parse the content of a webpage.

**Risk:** Low

\`\`\`python
get_webpage(
    url: str,            # Full URL to fetch
    extract_text: bool = True  # Extract readable text vs raw HTML
)
\`\`\`

---

## Media Tools

### \`take_screenshot\`
Capture the current screen.

**Risk:** Medium

\`\`\`python
take_screenshot(
    region: str = "full",     # "full" or "x,y,width,height"
    save_path: str = ""       # Optional custom save path
)
\`\`\`

**Returns:** Path to the saved screenshot file (in workspace). Use \`send_file_to_chat\` to deliver it.

---

## AI / Memory Tools

### \`remember_note\`
Store a fact or note in long-term vector memory (RAG).

**Risk:** Low

\`\`\`python
remember_note(
    content: str,        # Text to store in memory
    tags: list = []      # Optional tags for organization
)
\`\`\`

### \`search_memory\`
Query long-term vector memory for relevant information.

**Risk:** Low

\`\`\`python
search_memory(
    query: str,          # What to search for
    num_results: int = 3 # Number of relevant fragments to return
)
\`\`\`

---

## Browser Agent

### \`browser_agent\`
Control a real Chromium browser using Playwright.

**Risk:** High | **Sandbox:** Yes

\`\`\`python
browser_agent(
    task: str,           # Natural language description of what to do in the browser
    url: str = "",       # Optional starting URL
    headless: bool = True # Run without showing browser window
)
\`\`\`

**Capabilities:**
- Navigate to any URL
- Click buttons, fill forms, select dropdowns
- Extract text and data from pages
- Take screenshots of specific elements
- Wait for dynamic content to load
- Log in to websites (with credentials provided in the task)
- Scrape structured data from multiple pages

**Examples:**
\`\`\`
"log into my GitHub and check my notifications"
→ browser_agent("Go to github.com/login, log in with user 'john' password 'xxx', then check notifications", url="https://github.com")

"find the cheapest iPhone 16 on Amazon"
→ browser_agent("Search Amazon for iPhone 16, sort by price low to high, return the first 5 results with prices", url="https://amazon.com")
\`\`\`

---

## System Info Tool

### \`system_info\`
Get detailed information about the host system.

**Risk:** Low

\`\`\`python
system_info(
    category: str = "all"  # "cpu", "memory", "disk", "gpu", "battery", "processes", "all"
)
\`\`\`

**Returns:** JSON with system stats including:
- CPU usage, cores, frequency
- RAM total/used/available
- Disk partitions and usage
- GPU info (if available)
- Battery status (if laptop)
- Top running processes

---

## Google Workspace Tools

All Google tools require OAuth2 credentials configured (see [Configuration](./11-configuration.md)).

### \`gmail_read\`
Read emails from Gmail inbox.

\`\`\`python
gmail_read(
    max_results: int = 10,     # Number of emails to fetch
    query: str = "",           # Gmail search query (e.g. "from:boss@company.com")
    include_body: bool = True  # Include email body text
)
\`\`\`

### \`gmail_send\`
Send an email via Gmail.

\`\`\`python
gmail_send(
    to: str,             # Recipient email address
    subject: str,        # Email subject
    body: str,           # Email body (plain text or HTML)
    cc: str = "",        # CC recipients (comma-separated)
    attachments: list = [] # File paths to attach
)
\`\`\`

### \`calendar_list\`
List Google Calendar events.

\`\`\`python
calendar_list(
    days_ahead: int = 7,       # How many days to look ahead
    calendar_id: str = "primary" # Calendar to query
)
\`\`\`

### \`calendar_create\`
Create a Google Calendar event.

\`\`\`python
calendar_create(
    title: str,          # Event title
    start: str,          # ISO 8601 datetime (e.g. "2025-06-15T14:00:00")
    end: str,            # ISO 8601 datetime
    description: str = "", # Event description
    attendees: list = [] # Email addresses of attendees
)
\`\`\`

### \`drive_list\`
List files in Google Drive.

\`\`\`python
drive_list(
    folder_id: str = "root",  # Folder to list (default: root)
    max_results: int = 20
)
\`\`\`

### \`drive_upload\`
Upload a file to Google Drive.

\`\`\`python
drive_upload(
    file_path: str,      # Local path to the file
    folder_id: str = "", # Target folder (default: root)
    file_name: str = ""  # Override filename
)
\`\`\`

### \`youtube_search\`
Search YouTube for videos.

\`\`\`python
youtube_search(
    query: str,          # Search query
    max_results: int = 5 # Number of results
)
\`\`\`

---

## Blender 3D Tools

Control Blender via its Python API (\`bpy\`). Requires Blender installed and in PATH.

### \`blender_start\`
Launch Blender in background mode.

\`\`\`python
blender_start(
    scene_file: str = "" # Optional .blend file to open
)
\`\`\`

### \`blender_exec\`
Execute Python (\`bpy\`) code in the running Blender instance.

\`\`\`python
blender_exec(
    code: str            # Python code using the bpy module
)
\`\`\`

### \`blender_run_script\`
Execute a Python script file in Blender.

\`\`\`python
blender_run_script(
    script_path: str     # Path to the .py script file
)
\`\`\`

### \`blender_export\`
Export the current Blender scene.

\`\`\`python
blender_export(
    file_path: str,      # Output path (.glb, .obj, .stl, .fbx)
    format: str = "glb"  # Export format
)
\`\`\`

### \`blender_info\`
Get info about the current Blender scene.

\`\`\`python
blender_info(
    detail: str = "summary" # "summary", "objects", "materials", "cameras"
)
\`\`\`

### \`blender_stop\`
Close the Blender instance.

\`\`\`python
blender_stop()
\`\`\`

**Example workflow:**
\`\`\`
"Create a chess pawn in Blender and export it as GLB"
→ blender_start()
→ blender_exec("""
    import bpy
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    # Create pawn shape...
""")
→ blender_export("/workspace/pawn.glb")
→ blender_stop()
→ send_file_to_chat("/workspace/pawn.glb")
\`\`\`

---

## Meta Tools (Self-Extension)

### \`create_tool\`
Create a new Python tool at runtime.

**Risk:** High

\`\`\`python
create_tool(
    name: str,           # Tool identifier (snake_case)
    description: str,    # What the tool does
    parameters: dict,    # JSON Schema for parameters
    code: str,           # Python async function body
    category: str = "general",  # Tool category
    apply: bool = False  # False = validate only; True = register live
)
\`\`\`

**Two-phase workflow:**
1. Call with \`apply=False\` → validates code, runs tests, shows preview
2. User confirms → call with \`apply=True\` → registers in live registry, no restart needed

### \`create_skill\`
Create a new skill (behavior instruction) as a markdown file.

\`\`\`python
create_skill(
    name: str,           # Skill name (kebab-case)
    description: str,    # One-line description
    content: str,        # Markdown instructions for the LLM
    category: str = "custom" # Skill category folder
)
\`\`\`

### \`toggle_skill\`
Enable or disable a skill.

\`\`\`python
toggle_skill(
    name: str,           # Skill name
    active: bool         # True to enable, False to disable
)
\`\`\`

### \`list_skills\`
List all available skills.

\`\`\`python
list_skills(
    filter: str = "all"  # "all", "active", "inactive", "builtin", "custom"
)
\`\`\`

### \`delete_skill\`
Permanently delete a skill.

\`\`\`python
delete_skill(
    name: str            # Skill name to delete
)
\`\`\`

---

## IoT / Smart Home Tools

Control smart home devices via local LAN. Supports Tuya, Xiaomi Mi Home (miio), and LG WebOS.

### \`iot_scan\`
Discover devices on the local network.

\`\`\`python
iot_scan(
    protocols: list = ["tuya", "miio", "webos"] # Protocols to scan
)
\`\`\`

### \`iot_devices\`
List registered devices.

\`\`\`python
iot_devices(
    type: str = "all"    # "all", "light", "cover", "tv", "vacuum", "switch", "sensor"
)
\`\`\`

### \`iot_control\`
Send a command to a device.

\`\`\`python
iot_control(
    device_id: str,      # Device identifier
    command: str,        # Command: "on", "off", "toggle", "set"
    value: any = None    # Command value (brightness 0-100, color "red", etc.)
)
\`\`\`

### \`iot_status\`
Query the current state of a device.

\`\`\`python
iot_status(
    device_id: str       # Device identifier
)
\`\`\`

### \`iot_rename\`
Give a device a friendly name.

\`\`\`python
iot_rename(
    device_id: str,      # Current device ID
    name: str            # New friendly name
)
\`\`\`

**Example:**
\`\`\`
"Turn off all the lights in the living room"
→ iot_devices(type="light") → finds devices tagged "living_room"
→ iot_control("light_001", "off")
→ iot_control("light_002", "off")
→ iot_control("light_003", "off")
\`\`\`

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

## Creating Custom Tools

You can ask OpenACM to create a new tool for itself:

\`\`\`
You: Create a tool called "weather" that fetches the current weather for a given city using the Open-Meteo API (no API key required)
\`\`\`

OpenACM will:
1. Write the Python async function
2. Validate it (syntax, imports, security)
3. Show you a preview and ask for confirmation
4. Register it live in the tool registry

The tool is immediately available for subsequent requests without restarting.

See [Extending OpenACM](./17-extending.md) for the full guide.

`
  },
  {
    "slug": "06-skills-system",
    "title": "Skills System",
    "content": `
# Skills System

Skills are markdown files that change how OpenACM **thinks and behaves** — not what it can do. When a skill is active, its content is injected into the system prompt before the LLM call, giving it domain expertise, specialized behavior, or a custom persona.

---

## Skills vs Tools

| | Skills | Tools |
|--|--------|-------|
| What they are | Markdown instructions | Python async functions |
| What they do | Change LLM behavior | Execute code and actions |
| How they're stored | \`.md\` files + SQLite | \`.py\` files + registry |
| Runtime effect | Injected into system prompt | Called by LLM as function |
| Created with | \`create_skill\` tool | \`create_tool\` tool |

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

The YAML frontmatter (\`---\`) is optional but recommended for organization.

---

## Built-in Skills

OpenACM ships with these built-in skills:

| Name | Category | Description |
|------|----------|-------------|
| \`agent-creator\` | agents | Expertise in designing and creating autonomous agents |
| \`blender-modeling\` | custom | Expert 3D modeling and Blender Python scripting |
| \`file-generator\` | custom | Best practices for generating various file formats |
| \`video-capture\` | custom | Screen recording and video automation workflows |
| \`flutter-app-creator\` | development | Flutter/Dart app scaffolding and development |
| \`unity-mpc-skill\` | development | Unity game development with Model Predictive Control |
| \`windows-file-manager\` | custom | Windows file system operations and organization |

Built-in skills are seeded from the \`skills/\` directory on startup and marked as \`is_builtin: true\` in the database. They can be activated/deactivated but not deleted.

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

Skills can be activated:

1. **Manually via dashboard** — toggle the skill on the Skills page
2. **Via chat** — \`toggle_skill("python-expert", active=True)\`
3. **Auto-matched** — Brain detects keywords in the message and auto-activates relevant skills

When a skill is active, its full markdown content is appended to the system prompt on every request.

---

## Auto-Matching

The SkillManager can automatically activate skills based on message content. If a message mentions "3D model", "Blender", "mesh", or "render", the \`blender-modeling\` skill activates automatically for that conversation turn.

The active skill is shown in the chat UI with a purple badge: \`✨ blender-modeling\`.

---

## Skill Categories

| Category | Purpose |
|----------|---------|
| \`agents\` | Multi-agent system skills |
| \`custom\` | User-created general skills |
| \`development\` | Programming language/framework expertise |
| \`generated\` | Skills created by OpenACM itself |
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
File created in skills/     ──► Auto-discovered on startup
     │                              │
     ▼                              ▼
DB row created (is_builtin=true)   DB row created (is_builtin=false)
     │
     ▼
User activates skill (dashboard or chat)
     │
     ▼
Brain injects skill content into system prompt
     │
     ▼
LLM call made with skill context
     │
     ▼
Skill active badge shown in chat UI
\`\`\`

---

## Combining Skills

Multiple skills can be active simultaneously. All active skill contents are concatenated into the system prompt. Be aware of potential conflicts — two skills with contradictory instructions will confuse the LLM.

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
    "content": `
# Agents

Agents are isolated instances of OpenACM with their own system prompt, a restricted set of tools, and optionally their own dedicated Telegram bot. While the main OpenACM agent is a generalist, agents are specialists.

---

## How Agents Work

Each agent has:
- **Name and description** — displayed in the dashboard
- **System prompt** — defines the agent's persona and expertise
- **Allowed tools** — a whitelist of tools the agent can use
- **Telegram bot token** (optional) — gives the agent its own dedicated bot

When an agent receives a message, it runs through the same agentic loop as the main agent, but can only call its allowed tools. This restriction is enforced at the tool execution level, not just the prompt level.

---

## Creating an Agent

### Via Dashboard
**Agents** → **New Agent** → fill in the form.

### Via Chat
\`\`\`
You: Create an agent called "ResearchBot" that specializes in finding 
     and summarizing online information. Give it access only to 
     web_search, get_webpage, and remember_note. 
     It should be concise, cite sources, and prefer primary sources.
\`\`\`

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/agents \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "ResearchBot",
    "description": "Finds and summarizes information",
    "system_prompt": "You are a research specialist. Always cite sources. Prefer academic and primary sources.",
    "allowed_tools": ["web_search", "get_webpage", "remember_note"]
  }'
\`\`\`

---

## Messaging an Agent

### Via Telegram
If the agent has a \`telegram_token\`, it runs as an independent bot. Users message it directly on Telegram.

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/agents/1/chat \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "What are the latest developments in fusion energy?", "user_id": "web"}'
\`\`\`

### Via the main OpenACM agent
The main agent can delegate to sub-agents using the \`create_agent\` tool to spawn a task-specific agent for a complex subtask.

---

## Use Cases

### Specialized Bots
Give friends or colleagues Telegram bots with limited, safe capabilities:

\`\`\`
Agent: "ScheduleBot"
Tools: calendar_list, calendar_create, gmail_read
Prompt: "Help users manage their schedule. Only create events they explicitly confirm."
\`\`\`

### Automated Workers
An agent with \`run_command\` and \`write_file\` that processes files:

\`\`\`
Agent: "DataProcessor"
Tools: read_file, write_file, run_python
Prompt: "You are a data processing agent. Process CSV files and output clean reports."
\`\`\`

### Research Assistants
\`\`\`
Agent: "ResearchBot"
Tools: web_search, get_webpage, remember_note, search_memory
Prompt: "Research topics thoroughly. Store key findings in memory. Synthesize, don't just copy."
\`\`\`

### IoT Controller
\`\`\`
Agent: "HomeBot"
Tools: iot_devices, iot_control, iot_status
Prompt: "Control smart home devices. Always confirm before turning off devices that might be in use."
\`\`\`

---

## Agent vs Main Agent

| Feature | Main Agent | Sub-Agent |
|---------|-----------|-----------|
| Tool access | All registered tools | Whitelist only |
| Memory | Shared conversation DB | Separate per-agent conversations |
| System prompt | Config default + skills | Custom per-agent |
| Telegram | Shared main bot | Own dedicated bot (optional) |
| Web dashboard | Full access | Via API only |

---

## Security Considerations

- Agents are isolated by tool whitelist — they cannot call tools outside their allowed list
- Each agent has its own webhook secret for Telegram webhook verification
- Agent conversations are stored separately in the database (by agent channel_id)
- If you give an agent \`run_command\`, it has the same OS access as the main agent — be careful with tool choice

`
  },
  {
    "slug": "08-channels",
    "title": "Channels",
    "content": `
# Channels

OpenACM is channel-agnostic. The same AI brain handles messages from all channels identically. Channels are responsible for receiving messages, delivering responses, and translating platform-specific features.

---

## Web Dashboard

The built-in browser interface. No extra setup required — always available at \`http://127.0.0.1:47821\`.

**Features:**
- Real-time message streaming
- File upload (images, PDFs, audio, text files)
- Inline image preview and file download
- Conversation history with encryption indicator
- Multi-conversation management (sidebar with delete)
- Tool execution log (toggle on/off)
- Interactive terminal output mirror
- New conversation badge and fresh start indicator

**Conversation identity:** Each new conversation gets a unique ID (\`web_<timestamp>\`). Conversations persist in the database and can be resumed by selecting them from the sidebar.

---

## Console

The interactive terminal built into the OpenACM startup process. No extra setup.

**Features:**
- Type messages directly in the terminal
- Full ANSI color output
- Slash commands: \`/models\`, \`/tools\`, \`/config\`, \`/help\`

**Usage:**
\`\`\`
You> take a screenshot
You> what's my disk usage?
You> /models
You> quit
\`\`\`

Console conversations use \`channel_id=console\`, \`user_id=console\`.

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
4. Enable in \`config/default.yaml\`:
   \`\`\`yaml
   channels:
     telegram:
       enabled: true
       token: "\${TELEGRAM_TOKEN}"
       allowed_users: []   # restrict by Telegram user ID if needed
   \`\`\`

### Restricting Access
\`\`\`yaml
channels:
  telegram:
    allowed_users:
      - 123456789   # Find your ID via @userinfobot
\`\`\`

### File Support
- Send images → OpenACM analyzes them (with vision-capable models)
- Send audio/voice → transcribed via Whisper API or faster-whisper
- Send documents → text extracted and added to context

### Agent Bots
Each agent can have its own Telegram bot (separate \`telegram_token\`). This gives specialists their own dedicated bot without sharing the main agent.

---

## Discord

OpenACM runs as a Discord bot, responding to mentions and DMs.

### Setup

1. Create an application at [discord.com/developers](https://discord.com/developers)
2. Add a Bot, enable Message Content Intent
3. Copy the bot token
4. Add to \`config/.env\`:
   \`\`\`env
   DISCORD_TOKEN=...
   \`\`\`
5. Enable in config:
   \`\`\`yaml
   channels:
     discord:
       enabled: true
       token: "\${DISCORD_TOKEN}"
       command_prefix: "!"
       respond_to_mentions: true
       respond_to_dms: true
       allowed_guilds: []   # Empty = all guilds
   \`\`\`

### Restricting to Specific Servers
\`\`\`yaml
channels:
  discord:
    allowed_guilds:
      - 1234567890123456789   # Your server's guild ID
\`\`\`

### Features
- Responds to \`@OpenACM <message>\` mentions
- Responds to direct messages
- Optional command prefix (e.g., \`!ask what's my IP?\`)

---

## WhatsApp

OpenACM connects to WhatsApp via an HTTP bridge running locally on port 3001. This requires a WhatsApp bridge solution (such as [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) or [mautrix-whatsapp](https://github.com/mautrix/whatsapp)).

### Setup

1. Set up a WhatsApp bridge on \`http://localhost:3001\`
2. Enable in config:
   \`\`\`yaml
   channels:
     whatsapp:
       enabled: true
       bridge_url: "http://localhost:3001"
       rate_limit_per_minute: 20
   \`\`\`

**Note:** WhatsApp's Terms of Service restrict automated bots. Use for personal automation only.

---

## Channel IDs and User IDs

Each conversation is identified by \`channel_id:user_id\`:

| Channel | channel_id | user_id |
|---------|-----------|---------|
| Web | \`web\` | \`web_<timestamp>\` |
| Console | \`console\` | \`console\` |
| Telegram | Telegram chat ID | \`tg_<chat_id>\` |
| Discord | Guild ID | Discord user ID |
| WhatsApp | Phone number | Phone number |

This pair is the conversation key — same pair = same conversation history.

---

## Adding Custom Channels

Any messaging platform can be added by implementing \`BaseChannel\`. See [Extending OpenACM](./17-extending.md#adding-custom-channels) for details.

`
  },
  {
    "slug": "09-llm-providers",
    "title": "LLM Providers",
    "content": `
# LLM Providers

OpenACM uses **LiteLLM** as a unified LLM interface, supporting 100+ providers. All providers are accessed through the same internal API regardless of who hosts them.

---

## Built-in Providers

### Ollama (Local)
Run models 100% locally. No API key. No internet. No cost.

\`\`\`yaml
llm:
  default_provider: ollama
  providers:
    ollama:
      base_url: "http://localhost:11434"
      default_model: "llama3.2"
\`\`\`

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
  providers:
    openai:
      base_url: "https://api.openai.com/v1"
      default_model: "gpt-4o"
      api_key: "\${OPENAI_API_KEY}"
\`\`\`

**Available models:** \`gpt-4o\`, \`gpt-4o-mini\`, \`o1\`, \`o1-mini\`, \`o3-mini\`

---

### Anthropic (Claude)

\`\`\`yaml
llm:
  providers:
    anthropic:
      base_url: "https://api.anthropic.com"
      default_model: "claude-opus-4-6"
      api_key: "\${ANTHROPIC_API_KEY}"
\`\`\`

**Available models:** \`claude-opus-4-6\`, \`claude-sonnet-4-6\`, \`claude-haiku-4-5\`

---

### Google Gemini

\`\`\`yaml
llm:
  providers:
    gemini:
      base_url: "https://generativelanguage.googleapis.com"
      default_model: "gemini-2.0-flash"
      api_key: "\${GEMINI_API_KEY}"
\`\`\`

**Available models:** \`gemini-2.0-flash\`, \`gemini-1.5-pro\`, \`gemini-1.5-flash\`

---

### Groq (Fast Inference)

\`\`\`yaml
llm:
  providers:
    groq:
      base_url: "https://api.groq.com/openai/v1"
      default_model: "llama-3.3-70b-versatile"
      api_key: "\${GROQ_API_KEY}"
\`\`\`

Groq provides extremely fast inference (~500 tokens/second). Excellent for real-time applications.

---

### Together AI

\`\`\`yaml
llm:
  providers:
    together:
      base_url: "https://api.together.xyz/v1"
      default_model: "meta-llama/Llama-3-70b-chat-hf"
      api_key: "\${TOGETHER_API_KEY}"
\`\`\`

---

### Mistral

\`\`\`yaml
llm:
  providers:
    mistral:
      base_url: "https://api.mistral.ai/v1"
      default_model: "mistral-large-latest"
      api_key: "\${MISTRAL_API_KEY}"
\`\`\`

---

## Custom Providers (OpenAI-Compatible)

Any server that speaks the OpenAI API can be added as a custom provider. This includes:
- **LM Studio** (local model server)
- **vLLM** (self-hosted high-performance inference)
- **LocalAI** (local model server)
- **Kobold.cpp** (local GGUF model runner)
- **Perplexity AI**
- **DeepSeek API**
- **Fireworks AI**

### Via Dashboard
Go to **Config** → **Custom Providers** → **Add Provider**.

### Via \`config/custom_providers.json\`
\`\`\`json
[
  {
    "id": "lmstudio_001",
    "name": "LM Studio",
    "base_url": "http://localhost:1234/v1",
    "default_model": "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF",
    "api_key": ""
  },
  {
    "id": "deepseek_api",
    "name": "DeepSeek",
    "base_url": "https://api.deepseek.com/v1",
    "default_model": "deepseek-chat",
    "api_key": "sk-..."
  }
]
\`\`\`

---

## Switching Models

### Mid-Conversation (Chat)
\`\`\`
You> /model anthropic/claude-opus-4-6
You> /model ollama/llama3.2
You> /model my_custom_provider/my-model
\`\`\`

### Via Dashboard
Go to **Config** → **Current Model** → select from dropdown.

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/config/model \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{"provider": "ollama", "model": "llama3.2"}'
\`\`\`

The selected model is persisted — it survives restarts.

---

## Provider Profiles

Some providers have quirks that OpenACM handles automatically:

| Provider | Quirk | How OpenACM handles it |
|----------|-------|----------------------|
| Gemini | Strict message format (no adjacent same-role messages) | Message reordering |
| Some local models | Don't support native tool calling | Text-based tool enforcement |
| Groq | Tool count limits | Automatic capping |
| Thinking models (DeepSeek R1, Kimi) | Emit reasoning tokens | Stored but stripped from old context |

---

## Token Usage Tracking

All LLM calls are logged to the database with:
- Model and provider
- Prompt tokens, completion tokens, total tokens
- Elapsed milliseconds

View in the dashboard: **Dashboard** → **Activity Chart** (tokens over time) or **Stats** (totals).

---

## Choosing a Provider

| Priority | Recommendation |
|----------|---------------|
| Privacy first | Ollama (local) |
| Best quality | Anthropic Claude Opus or OpenAI GPT-4o |
| Fastest responses | Groq |
| Lowest cost | Ollama (free) or Gemini Flash |
| Best tool use | OpenAI GPT-4o or Anthropic Claude |
| Code tasks | Ollama qwen2.5-coder or OpenAI o3-mini |
| Reasoning | DeepSeek R1 or OpenAI o1 |

`
  },
  {
    "slug": "10-api-reference",
    "title": "API Reference",
    "content": `
# API Reference

OpenACM exposes a REST API and three WebSocket endpoints. All endpoints (except public ones) require authentication.

**Base URL:** \`http://127.0.0.1:47821\` (configurable)

---

## Authentication

All protected endpoints require a Bearer token or query parameter:

\`\`\`http
Authorization: Bearer acm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`

Or as a query parameter:

\`\`\`http
GET /api/conversations?token=acm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`

**Public endpoints (no auth required):**
- \`GET /api/ping\`
- \`POST /api/auth/check\`
- \`GET /api/config/google/callback\`

---

## System

### \`GET /api/ping\`
Health check. Returns immediately.

\`\`\`json
{ "ok": true }
\`\`\`

---

### \`GET /api/system/info\`
System flags.

\`\`\`json
{
  "messages_encrypted": true
}
\`\`\`

---

### \`POST /api/system/restart\`
Restart the OpenACM process (replaces process image via \`os.execv\`). Returns before the restart completes.

\`\`\`json
{ "status": "restarting" }
\`\`\`

---

### \`POST /api/auth/check\`
Verify a dashboard token.

**Request:**
\`\`\`json
{ "token": "acm_xxxxxxxx" }
\`\`\`

**Response:**
\`\`\`json
{ "valid": true }
\`\`\`

---

## Statistics

### \`GET /api/stats\`
Current session statistics.

\`\`\`json
{
  "total_requests": 147,
  "total_tokens": 284930,
  "total_tool_calls": 89,
  "active_conversations": 3,
  "llm_provider": "anthropic",
  "llm_model": "claude-opus-4-6",
  "uptime_seconds": 3742
}
\`\`\`

---

### \`GET /api/stats/history\`
Daily token and request usage for the past 14 days.

\`\`\`json
[
  { "date": "2025-06-01", "requests": 12, "tokens": 18400 },
  { "date": "2025-06-02", "requests": 27, "tokens": 41200 }
]
\`\`\`

---

### \`GET /api/stats/channels\`
Per-channel message counts.

\`\`\`json
[
  { "channel_id": "web", "message_count": 94 },
  { "channel_id": "telegram", "message_count": 53 }
]
\`\`\`

---

## Conversations

### \`GET /api/conversations\`
List all conversations with metadata.

\`\`\`json
[
  {
    "channel_id": "web",
    "user_id": "web_1775269582270",
    "title": "web - web_1775269582270",
    "last_message": "Take a screenshot of my desktop",
    "last_timestamp": "2025-06-03T14:22:10Z",
    "message_count": 18
  }
]
\`\`\`

---

### \`GET /api/conversations/{channel_id}/{user_id}\`
Get conversation history.

**Query params:**
- \`limit\` (int, default 50) — max messages to return

\`\`\`json
[
  { "role": "user", "content": "Hello!", "timestamp": "2025-06-03T14:00:00Z" },
  { "role": "assistant", "content": "Hi! How can I help?", "timestamp": "2025-06-03T14:00:01Z" }
]
\`\`\`

---

### \`DELETE /api/conversations/{channel_id}/{user_id}\`
Delete all messages for a conversation (memory + database).

\`\`\`json
{ "status": "ok", "deleted_rows": 18 }
\`\`\`

---

## Chat

### \`POST /api/chat/upload\`
Upload a file to attach to the next message.

**Request:** \`multipart/form-data\` with \`file\` field.

**Response:**
\`\`\`json
{
  "id": "upload_abc123.png",
  "name": "screenshot.png",
  "type": "image/png"
}
\`\`\`

---

### \`POST /api/chat/command\`
Execute a slash command via REST (alternative to WebSocket).

**Request:**
\`\`\`json
{
  "command": "/new",
  "user_id": "web_xxx",
  "channel_id": "web"
}
\`\`\`

**Response:**
\`\`\`json
{
  "handled": true,
  "text": "Conversation cleared.",
  "data": null
}
\`\`\`

---

## Tools

### \`GET /api/tools\`
List all registered tools.

\`\`\`json
[
  {
    "name": "run_command",
    "description": "Execute a system command",
    "category": "system",
    "risk_level": "high"
  }
]
\`\`\`

---

### \`GET /api/tools/executions\`
Recent tool execution log.

**Query params:**
- \`limit\` (int, default 20)

\`\`\`json
[
  {
    "tool_name": "web_search",
    "arguments": "{\\"query\\": \\"latest AI news\\"}",
    "result": "...",
    "success": true,
    "elapsed_ms": 1247,
    "timestamp": "2025-06-03T14:22:00Z"
  }
]
\`\`\`

---

## Configuration

### \`GET /api/config\`
Full configuration (sensitive fields masked).

\`\`\`json
{
  "llm": {
    "default_provider": "anthropic",
    "providers": { "anthropic": { "default_model": "claude-opus-4-6" } }
  },
  "security": { "execution_mode": "auto" },
  "channels": { "telegram": { "enabled": true } }
}
\`\`\`

---

### \`GET /api/config/model\`
Current active model.

\`\`\`json
{
  "provider": "anthropic",
  "model": "claude-opus-4-6",
  "display_name": "Claude Opus 4.6"
}
\`\`\`

---

### \`POST /api/config/model\`
Switch the active LLM model.

**Request:**
\`\`\`json
{
  "provider": "ollama",
  "model": "llama3.2"
}
\`\`\`

---

### \`GET /api/config/status\`
Status of all configured providers (which have valid credentials).

\`\`\`json
{
  "anthropic": true,
  "openai": false,
  "ollama": true,
  "my_custom_provider": true
}
\`\`\`

---

### \`GET /api/config/available_models\`
List available models for each configured provider.

\`\`\`json
{
  "ollama": ["llama3.2", "mistral", "codellama"],
  "anthropic": ["claude-opus-4-6", "claude-sonnet-4-6", "claude-haiku-4-5"]
}
\`\`\`

---

### \`GET /api/config/custom_providers\`
List custom (user-defined) LLM providers.

\`\`\`json
[
  {
    "id": "lmstudio_abc123",
    "name": "LM Studio",
    "base_url": "http://localhost:1234/v1",
    "default_model": "local-model",
    "api_key": ""
  }
]
\`\`\`

---

### \`POST /api/config/custom_providers\`
Add a custom provider.

**Request:**
\`\`\`json
{
  "name": "LM Studio",
  "base_url": "http://localhost:1234/v1",
  "default_model": "local-model",
  "api_key": ""
}
\`\`\`

---

### \`PUT /api/config/custom_providers/{id}\`
Update a custom provider.

---

### \`DELETE /api/config/custom_providers/{id}\`
Delete a custom provider.

---

## Skills

### \`GET /api/skills\`
List all skills.

\`\`\`json
[
  {
    "id": 1,
    "name": "blender-modeling",
    "description": "Expert 3D modeling guidance",
    "category": "custom",
    "is_active": false,
    "is_builtin": true
  }
]
\`\`\`

---

### \`POST /api/skills\`
Create a new skill.

**Request:**
\`\`\`json
{
  "name": "my-skill",
  "description": "Description of what this skill does",
  "content": "# My Skill\\n\\nYou are an expert in...",
  "category": "custom"
}
\`\`\`

---

### \`PUT /api/skills/{skill_id}\`
Update a skill.

---

### \`DELETE /api/skills/{skill_id}\`
Delete a skill.

---

### \`POST /api/skills/{skill_id}/toggle\`
Toggle a skill active/inactive.

**Request:**
\`\`\`json
{ "active": true }
\`\`\`

---

### \`POST /api/skills/generate\`
Use the LLM to generate a skill from a description.

**Request:**
\`\`\`json
{ "description": "Make the agent respond like a pirate" }
\`\`\`

---

## Agents

### \`GET /api/agents\`
List all agents.

\`\`\`json
[
  {
    "id": 1,
    "name": "ResearchBot",
    "description": "Searches and summarizes information",
    "system_prompt": "You are a research specialist...",
    "allowed_tools": ["web_search", "get_webpage", "remember_note"],
    "is_active": true,
    "telegram_token": "123456:ABC-..."
  }
]
\`\`\`

---

### \`POST /api/agents\`
Create a new agent.

**Request:**
\`\`\`json
{
  "name": "ResearchBot",
  "description": "Searches and summarizes information",
  "system_prompt": "You are a research specialist...",
  "allowed_tools": ["web_search", "get_webpage"],
  "telegram_token": ""
}
\`\`\`

---

### \`PUT /api/agents/{agent_id}\`
Update an agent.

---

### \`DELETE /api/agents/{agent_id}\`
Delete an agent.

---

### \`POST /api/agents/{agent_id}/chat\`
Send a message to a specific agent.

**Request:**
\`\`\`json
{
  "message": "Find the latest research on LLM agents",
  "user_id": "web"
}
\`\`\`

**Response:**
\`\`\`json
{ "response": "Here's what I found..." }
\`\`\`

---

### \`POST /api/agents/generate\`
Generate an agent config from a description using the LLM.

**Request:**
\`\`\`json
{ "description": "An agent specialized in Python code review" }
\`\`\`

---

## MCP Servers

### \`GET /api/mcp/servers\`
List configured MCP servers.

\`\`\`json
[
  {
    "name": "filesystem",
    "transport": "stdio",
    "command": "python",
    "args": ["-m", "mcp_filesystem"],
    "connected": true,
    "tool_count": 8,
    "auto_connect": true
  }
]
\`\`\`

---

### \`POST /api/mcp/servers\`
Add a new MCP server.

**Request:**
\`\`\`json
{
  "name": "my-server",
  "transport": "stdio",
  "command": "python",
  "args": ["-m", "my_mcp_server"],
  "env": {},
  "auto_connect": false
}
\`\`\`

---

### \`PUT /api/mcp/servers/{server_name}\`
Update MCP server config.

---

### \`DELETE /api/mcp/servers/{server_name}\`
Remove an MCP server (disconnects if connected).

---

### \`POST /api/mcp/servers/{server_name}/connect\`
Connect to an MCP server and register its tools.

\`\`\`json
{ "status": "connected", "tools_registered": 8 }
\`\`\`

---

### \`POST /api/mcp/servers/{server_name}/disconnect\`
Disconnect from an MCP server.

---

## Routines & Activity

### \`GET /api/routines\`
List detected automation routines.

\`\`\`json
[
  {
    "id": 1,
    "name": "Morning Report",
    "description": "Check emails, weather, and calendar every morning",
    "apps": ["Outlook", "Chrome"],
    "frequency": 12,
    "confidence": 0.87,
    "last_triggered": "2025-06-03T08:00:00Z"
  }
]
\`\`\`

---

### \`POST /api/routines/{routine_id}/execute\`
Manually trigger a detected routine.

---

### \`PUT /api/routines/{routine_id}\`
Update a routine (name, description, enabled).

---

### \`DELETE /api/routines/{routine_id}\`
Delete a detected routine.

---

### \`POST /api/routines/analyze\`
Trigger pattern analysis on recent activity data.

\`\`\`json
{ "routines_found": 3 }
\`\`\`

---

### \`GET /api/activity/stats\`
Activity summary statistics.

\`\`\`json
{
  "total_sessions": 284,
  "total_active_ms": 28800000,
  "top_apps": [
    { "app": "Code", "total_ms": 12400000, "sessions": 94 },
    { "app": "Chrome", "total_ms": 8200000, "sessions": 112 }
  ]
}
\`\`\`

---

### \`GET /api/activity/sessions\`
Recent activity sessions (decrypted).

**Query params:**
- \`limit\` (int, default 50)
- \`app\` (str) — filter by app name

---

### \`GET /api/watcher/status\`
Activity watcher status.

\`\`\`json
{
  "running": true,
  "current_app": "Code",
  "session_start": "2025-06-03T14:15:00Z"
}
\`\`\`

---

## Debug

### \`GET /api/debug/traces\`
Last 20 agentic loop traces for debugging.

\`\`\`json
[
  {
    "id": "a1b2c3d4",
    "started_at": "2025-06-03T14:22:10",
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

---

### \`GET /api/terminal/history\`
Recent terminal commands and outputs from tool execution.

---

## Media

### \`GET /api/media\`
List files in the media directory.

\`\`\`json
[
  { "name": "screenshot_001.png", "size": 284920, "created": "2025-06-03T14:22:00Z" }
]
\`\`\`

---

### \`GET /api/media/{file_name}\`
Serve a media file.

**Query params:**
- \`download=true\` — force download (Content-Disposition: attachment)
- \`token=xxx\` — auth token (alternative to header)

---

## WebSocket: Chat (\`/ws/chat\`)

Connect with token:
\`\`\`
ws://127.0.0.1:47821/ws/chat?token=acm_xxx
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
  "content": "Conversation cleared."
}
\`\`\`

---

## WebSocket: Events (\`/ws/events\`)

Connect with token:
\`\`\`
ws://127.0.0.1:47821/ws/events?token=acm_xxx
\`\`\`

Server-only stream. Emits real-time system events:

**Thinking status:**
\`\`\`json
{
  "type": "thinking",
  "status": "processing",
  "message": "🔄 Step 2/20...",
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
  "count": 3,
  "user_id": "web_xxx",
  "channel_id": "web"
}
\`\`\`

**Skill active:**
\`\`\`json
{
  "type": "skill.active",
  "skills": ["blender-modeling"],
  "channel_id": "web",
  "channel_type": "web"
}
\`\`\`

---

## WebSocket: Terminal (\`/ws/terminal\`)

Connect with token and channel:
\`\`\`
ws://127.0.0.1:47821/ws/terminal?token=acm_xxx&channel=web
\`\`\`

**\`channel\`** — the chat channel ID this terminal belongs to (e.g. \`web\`, \`telegram-123456\`). Each channel gets its own persistent PTY shell session. The session survives WebSocket reconnects, so SSH connections and running processes are not interrupted.

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

## Error Codes

| HTTP Code | Meaning |
|-----------|---------|
| 200 | Success |
| 401 | Missing or invalid token |
| 403 | Forbidden (valid token but insufficient permissions) |
| 404 | Resource not found |
| 422 | Validation error (invalid request body) |
| 503 | Service not available (Brain or Database not initialized) |

`
  },
  {
    "slug": "11-configuration",
    "title": "Configuration",
    "content": `
# Configuration

OpenACM is configured through \`config/default.yaml\` and \`config/.env\`. Environment variables can be referenced in the YAML using \`\${VAR_NAME}\` syntax.

---

## Full Configuration Schema

\`\`\`yaml
# config/default.yaml

assistant:
  name: "ACM"                        # Agent display name
  system_prompt: "You are ACM..."    # Custom personality/instructions
  max_context_messages: 50           # Max messages in active context window
  max_tool_iterations: 20            # Max agentic loop iterations per request
  response_timeout: 120              # Seconds before LLM call times out

llm:
  default_provider: ollama           # Active provider
  providers:
    ollama:
      base_url: "http://localhost:11434"
      default_model: "llama3.2"
    openai:
      base_url: "https://api.openai.com/v1"
      default_model: "gpt-4o"
      api_key: "\${OPENAI_API_KEY}"
    anthropic:
      base_url: "https://api.anthropic.com"
      default_model: "claude-opus-4-6"
      api_key: "\${ANTHROPIC_API_KEY}"
    gemini:
      base_url: "https://generativelanguage.googleapis.com"
      default_model: "gemini-2.0-flash"
      api_key: "\${GEMINI_API_KEY}"

security:
  execution_mode: "auto"             # "confirmation" | "auto" | "yolo"
  whitelisted_commands: []           # Always allow these commands in confirmation mode
  blocked_patterns:                  # Regex patterns to block in commands
    - "rm -rf /"
    - "format c:"
  blocked_paths:                     # File paths the agent cannot access
    - "/etc/shadow"
    - "C:/Windows/System32/config/SAM"
  max_command_timeout: 120           # Seconds before command is killed
  max_output_length: 50000           # Max characters of command output kept

web:
  host: "127.0.0.1"                  # Bind address (use 0.0.0.0 for network access)
  port: 47821                        # Dashboard port
  auth_enabled: true                 # Require token for all endpoints

channels:
  discord:
    enabled: false
    token: "\${DISCORD_TOKEN}"
    command_prefix: "!"
    respond_to_mentions: true
    respond_to_dms: true
    allowed_guilds: []               # Empty = all guilds

  telegram:
    enabled: false
    token: "\${TELEGRAM_TOKEN}"
    allowed_users: []                # Empty = all users; list user IDs to restrict

  whatsapp:
    enabled: false
    bridge_url: "http://localhost:3001"
    rate_limit_per_minute: 20

storage:
  database_path: "data/openacm.db"
  workspace_path: "workspace"        # Where generated files are saved
  log_conversations: true
  log_tool_executions: true

local_router:
  enabled: true                      # Enable LocalRouter (intent classification)
  observation_mode: false            # true = observe only; false = enable fast-path
  confidence_threshold: 0.88        # Minimum confidence to use fast-path
\`\`\`

---

## Environment Variables

Create \`config/.env\`:

\`\`\`env
# ── LLM Providers ─────────────────────────────────────────────────────────────
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GEMINI_API_KEY=AIzaSy...
GROQ_API_KEY=gsk_...
TOGETHER_API_KEY=...
MISTRAL_API_KEY=...

# ── Messaging Channels ─────────────────────────────────────────────────────────
TELEGRAM_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
DISCORD_TOKEN=...

# ── Google Workspace ──────────────────────────────────────────────────────────
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
# (Google refresh token is stored automatically after OAuth2 flow)

# ── Optional ──────────────────────────────────────────────────────────────────
STITCH_API_KEY=...     # For Stitch UI generation tool
\`\`\`

---

## Custom LLM Providers

Any OpenAI-compatible API endpoint can be added as a custom provider through the dashboard (\`/config\` → Custom Providers) or by editing \`config/custom_providers.json\` directly.

\`\`\`json
[
  {
    "id": "lmstudio_abc123",
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

Stored in \`config/mcp_servers.json\`:

\`\`\`json
[
  {
    "name": "filesystem",
    "transport": "stdio",
    "command": "python",
    "args": ["-m", "mcp_filesystem", "/home/user"],
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
\`\`\`

---

## Security Configuration Details

### Execution Modes

**\`confirmation\`** — Safest. User must approve tool calls rated \`medium\` or \`high\` risk before execution.

**\`auto\`** — Balanced. Tools execute automatically but blocked patterns are still enforced. Good default for trusted personal use.

**\`yolo\`** — Maximum capability. All tools execute immediately. Useful for automated pipelines where you've reviewed what the agent will do.

### Blocked Patterns

Patterns are matched against command strings before execution. Use with caution — too-aggressive blocking can break legitimate tasks.

\`\`\`yaml
security:
  blocked_patterns:
    - "rm -rf /"          # Prevent recursive root deletion
    - "dd if=/dev/zero"   # Prevent disk wipe
    - "> /dev/sda"        # Prevent raw disk write
\`\`\`

### Blocked Paths

File paths the agent cannot read or write. System credential files are always blocked regardless of this setting.

\`\`\`yaml
security:
  blocked_paths:
    - "/etc/passwd"
    - "C:/Users/*/AppData/Roaming/credentials"
\`\`\`

---

## Web Dashboard Access

By default, the dashboard is only accessible from \`localhost\`. To expose it on your network:

\`\`\`yaml
web:
  host: "0.0.0.0"   # Bind to all interfaces
  port: 47821
\`\`\`

> ⚠️ **Warning:** Exposing OpenACM to the network gives anyone with the token full access to your computer. Use a VPN or reverse proxy with HTTPS if accessing remotely.

---

## Workspace Directory

All files generated by OpenACM (screenshots, reports, code, etc.) are saved to the workspace directory unless you specify another path.

\`\`\`yaml
storage:
  workspace_path: "workspace"   # Relative to OpenACM root
\`\`\`

Files in the workspace are accessible via the \`/api/media/\` endpoints.

---

## LocalRouter Configuration

The LocalRouter is the offline intent classifier. By default it runs in observation mode (classifying silently, never changing behavior). To enable fast-path execution (skipping the LLM for recognized simple intents):

\`\`\`yaml
local_router:
  enabled: true
  observation_mode: false       # Allow fast-path execution
  confidence_threshold: 0.88   # How confident before skipping LLM
\`\`\`

**Threshold guidance:**
- \`0.95+\` — Very conservative, rarely skips LLM. Almost no misclassifications.
- \`0.88\` — Default. Good balance for recognized intents like screenshots and system info.
- \`0.80\` — More aggressive fast-pathing. May occasionally misclassify.

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

`
  },
  {
    "slug": "12-security",
    "title": "Security",
    "content": `
# Security

OpenACM gives the AI real, direct access to your computer. This is a deliberate design choice — it's what makes OpenACM powerful. But it also means security needs to be taken seriously.

---

## Threat Model

OpenACM is designed to be run by you, for yourself, on your own hardware. The threat model assumes:

- **Trusted operator** (you) — you control the config, the tools, and the LLM
- **Untrusted inputs** — messages from Telegram, Discord, or WhatsApp should be treated with appropriate caution if those channels are public or shared
- **LLM mistakes** — the LLM might misinterpret a request and take an unintended action

OpenACM is **not** designed to be a multi-tenant service where untrusted users have direct access.

---

## Execution Modes

The \`security.execution_mode\` config setting controls how aggressively OpenACM executes tools.

### \`auto\` (default)
OpenACM executes all tools automatically. Blocked patterns and hardcoded restrictions still apply. Best for personal use where you trust the inputs.

### \`confirmation\`
Before executing \`medium\` or \`high\` risk tools, OpenACM asks for your approval. \`low\` risk tools always execute immediately.

| Risk Level | Confirmation Required |
|------------|----------------------|
| low | Never |
| medium | Yes (in confirmation mode) |
| high | Yes (in confirmation mode) |

### \`yolo\`
All tools execute without restriction (except hardcoded blocks). Use only in fully automated pipelines where you've reviewed the agent's behavior.

---

## Hardcoded Blocks (cannot be overridden)

These patterns are always blocked regardless of execution mode:

- **Privilege escalation:** \`sudo su\`, \`runas /priv\`, UAC elevation, SUID bit manipulation
- **Credential access:** \`.ssh/id_rsa\`, \`/etc/shadow\`, Windows SAM database, LSASS dump
- **Security tool bypass:** UAC dialog automation, sudo prompt interception

Even in \`yolo\` mode, these cannot be executed.

---

## Configurable Blocks

Add custom patterns to block in \`config/default.yaml\`:

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

Patterns are matched as substrings against command strings before execution.

---

## Tool Risk Levels

Every tool is annotated with a risk level:

| Level | Examples | Confirmation Required |
|-------|----------|----------------------|
| \`low\` | \`web_search\`, \`read_file\`, \`system_info\`, \`search_memory\` | Never |
| \`medium\` | \`write_file\`, \`take_screenshot\`, \`gmail_send\`, \`iot_control\` | In confirmation mode |
| \`high\` | \`run_command\`, \`run_python\`, \`browser_agent\`, \`create_tool\` | In confirmation mode |

---

## Sandbox

All \`high\` risk tools run through the \`Sandbox\` component, which enforces:

| Limit | Default | Config Key |
|-------|---------|------------|
| Execution timeout | 120s | \`security.max_command_timeout\` |
| Output size | 50KB | \`security.max_output_length\` |
| Environment injection | \`CI=true\`, stdin=\`y\` | Hardcoded safety net |

If a command exceeds the timeout, it's forcefully terminated. Output over the size limit is truncated.

---

## Encryption at Rest

### Conversation Messages
All conversation messages are encrypted before writing to SQLite using AES-GCM. The encryption key is stored locally at \`data/.activity_key\`. 

Without the key file, the database is unreadable. If you delete the key, old messages become unrecoverable.

### Activity Data
OS activity sessions (app names, window titles, process names) are encrypted with the same key.

### What is NOT encrypted
- Tool execution logs (arguments, results)
- LLM usage statistics (token counts, model names)
- Skill definitions
- Agent metadata

---

## Dashboard Authentication

The web dashboard is protected by a randomly generated token stored at \`data/.dashboard_token\`. On first run, the token is printed to the terminal.

The token can be:
- Stored in your browser (the dashboard saves it in localStorage)
- Passed as a Bearer header
- Passed as a \`?token=\` query parameter

To reset the token:
\`\`\`bash
rm data/.dashboard_token
# Restart OpenACM — a new token will be generated and printed
\`\`\`

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
      - 123456789   # Your Telegram user ID
      - 987654321   # Another allowed user
\`\`\`

Find your Telegram user ID by messaging \`@userinfobot\`.

### Discord
Restrict to specific servers:

\`\`\`yaml
channels:
  discord:
    enabled: true
    token: "\${DISCORD_TOKEN}"
    allowed_guilds:
      - 1234567890123456789  # Your server's guild ID
\`\`\`

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
| Personal laptop (just me) | \`execution_mode: auto\`, \`host: 127.0.0.1\` |
| Shared household server | \`execution_mode: confirmation\`, Telegram \`allowed_users\`, \`host: 0.0.0.0\` + HTTPS |
| Automated pipeline (no humans) | \`execution_mode: yolo\`, no external channels, localhost only |
| Public Telegram bot | \`execution_mode: confirmation\`, \`allowed_users\` strictly set, limited tool set |

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
  -H "Authorization: Bearer acm_xxx"

# Disconnect
curl -X POST http://localhost:47821/api/mcp/servers/filesystem/disconnect \\
  -H "Authorization: Bearer acm_xxx"

# Status
curl http://localhost:47821/api/mcp/servers \\
  -H "Authorization: Bearer acm_xxx"
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

Register it in OpenACM:
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
    "content": `
# Memory & RAG

OpenACM uses two complementary memory systems: **short-term conversation memory** (in-memory + SQLite, per session) and **long-term vector memory** (ChromaDB RAG, persistent across sessions).

---

## Short-Term Memory (Conversation Context)

Every conversation is stored in a rolling window managed by \`MemoryManager\`. This is the message history the LLM sees on each request.

### How It Works

- Messages are stored in-memory (fast access) and persisted to SQLite (survives restarts)
- Each conversation is keyed by \`(user_id, channel_id)\` — same pair = same conversation
- On first message load, history is fetched from SQLite into the in-memory cache
- On \`add_message()\`, the new message is written to both cache and SQLite

### Limits

\`\`\`
Max messages in context:     50
Max tokens in context:       16,000
\`\`\`

When either limit is exceeded, old messages are removed from context (but remain in the database for history purposes).

### Encryption at Rest

All message content is encrypted in SQLite using **AES-256-GCM** via the same \`ActivityEncryptor\` used for activity data. The encryption key is derived from a master key in \`config/.env\`. Messages are decrypted transparently on read.

The dashboard shows a lock icon when encryption is enabled.

---

## Conversation Compaction

To prevent token waste, OpenACM automatically summarizes old conversations.

**Trigger:** When a conversation exceeds **25 non-system messages**

**What happens:**
1. All messages except the last 6 are extracted
2. A compact transcript is built (\`role: content\` format)
3. An LLM call generates a summary (max 500 tokens, temperature 0.3)
4. The old messages are replaced in-memory with a single \`system\` summary message
5. The last 6 messages remain intact

**The summary preserves:**
- Key facts and decisions made
- Important data (file paths, numbers, names)
- Outstanding tasks and questions
- The gist of what was accomplished

Compaction runs as a background task (\`asyncio.create_task\`) — it doesn't block the current response. Each conversation compacts at most once at a time (tracked via \`_compacting\` set).

**Example summary format:**
\`\`\`
[CONVERSATION SUMMARY]
The user asked about disk usage and learned the /home partition is 87% full. 
Key files identified: /home/user/videos (45GB). A cleanup script was created 
at ~/cleanup.sh. User has not yet run it. Outstanding: confirm whether to 
delete the /tmp/old_backups folder.
\`\`\`

---

## Context Optimization

Beyond compaction, \`brain.py\` applies additional optimizations to messages before sending them to the LLM:

### Old Tool Result Truncation

Tool results older than the last **8 messages** are truncated to **300 characters**. This prevents large tool outputs (file contents, search results, command output) from consuming tokens in old context where they're no longer relevant.

### Reasoning Content Stripping

For models that emit reasoning/thinking tokens (DeepSeek R1, Kimi, o1-style models), the \`reasoning_content\` field is stripped from messages older than the last 8. Only recent reasoning is kept.

---

## Long-Term Memory (RAG)

The RAG (Retrieval-Augmented Generation) system lets OpenACM store and retrieve information across conversations using vector embeddings.

### Architecture

\`\`\`
User saves note → embed text → store in ChromaDB collection
User asks question → embed query → cosine similarity search → inject results into prompt
\`\`\`

**Embedding model:** \`paraphrase-multilingual-MiniLM-L12-v2\` (same model used for semantic tool selection)

**Vector store:** ChromaDB (local, persistent at \`data/chromadb/\`)

### Using Long-Term Memory

#### Via Chat (Natural Language)
\`\`\`
You> Remember that the server password is "hunter2" (just kidding, store a test fact)
You> What do I remember about server passwords?
You> Forget everything about passwords
\`\`\`

#### Via Tools

**\`remember_note\`** — Save information to long-term memory:
\`\`\`json
{
  "tool": "remember_note",
  "arguments": {
    "content": "The production DB host is db.example.com:5432",
    "tags": ["infrastructure", "database"]
  }
}
\`\`\`

**\`search_memory\`** — Retrieve relevant information:
\`\`\`json
{
  "tool": "search_memory",
  "arguments": {
    "query": "production database connection",
    "limit": 5
  }
}
\`\`\`

### What to Store

Long-term memory is best for:
- Facts that span multiple sessions (credentials, preferences, project context)
- Findings from research that should be reusable
- User preferences and configuration decisions
- Notes about people, projects, or systems

It's not designed for:
- Large documents (use file system tools instead)
- Frequently-changing data (the indexed version becomes stale)
- Everything — be selective; retrieval is only as useful as the signal-to-noise ratio

### Collections

By default, all notes go into the \`openacm_memory\` ChromaDB collection. The collection is keyed by the note's content hash, so duplicate saves are idempotent.

### Via API

\`\`\`bash
# Save a note
curl -X POST http://localhost:47821/api/memory \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "The API server is at api.example.com", "tags": ["infrastructure"]}'

# Search memory
curl "http://localhost:47821/api/memory/search?q=api+server&limit=5" \\
  -H "Authorization: Bearer acm_xxx"

# List all notes
curl http://localhost:47821/api/memory \\
  -H "Authorization: Bearer acm_xxx"

# Delete a note
curl -X DELETE http://localhost:47821/api/memory/{id} \\
  -H "Authorization: Bearer acm_xxx"
\`\`\`

---

## Semantic Tool Selection

The same embedding model powers **semantic tool selection** — choosing which of the 40+ available tools to include in each LLM call based on relevance to the user's message.

**How it works:**
1. At startup, all tool descriptions are embedded as \`"name: description"\` strings
2. Each incoming message is embedded
3. Cosine similarity is computed between the message and every tool embedding
4. Tools above threshold \`0.28\` are included in the request
5. Tools below threshold are excluded (saving tokens and reducing distraction)

**Language agnostic:** The multilingual model handles messages in Spanish, English, French, German, and 50+ other languages without any translation step.

**Always-included tools:** Some tools (like \`send_file_to_chat\`) are always included regardless of similarity score.

**Fallback:** If the embedding model fails to load, a keyword-matching fallback is used.

---

## Data Locations

| Data | Location |
|------|---------|
| Conversation messages (SQLite) | \`data/openacm.db\` (table: \`messages\`) |
| App activity (SQLite) | \`data/openacm.db\` (table: \`app_activity\`) |
| ChromaDB vector store | \`data/chromadb/\` |
| Encryption key | Derived from \`ENCRYPTION_KEY\` in \`config/.env\` |

---

## Privacy

- All conversation content is encrypted at rest if \`ENCRYPTION_KEY\` is set
- ChromaDB stores plain text (vector + content) — it is local only, never sent anywhere
- The embedding model runs locally — no text is sent to external services for embedding
- To clear all memory: delete \`data/openacm.db\` and \`data/chromadb/\` (and restart)

`
  },
  {
    "slug": "15-activity-routines",
    "title": "Activity Watcher & Routines",
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

Linux: \`sudo apt install xdotool\` (Debian/Ubuntu) or \`sudo pacman -S xdotool\` (Arch)

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

\`\`\`yaml
# config/default.yaml
activity_watcher:
  enabled: true
\`\`\`

The watcher starts automatically when OpenACM starts (if enabled). Stop/start via API:

\`\`\`bash
# Stop
curl -X POST http://localhost:47821/api/activity/stop \\
  -H "Authorization: Bearer acm_xxx"

# Start
curl -X POST http://localhost:47821/api/activity/start \\
  -H "Authorization: Bearer acm_xxx"

# Status
curl http://localhost:47821/api/activity/status \\
  -H "Authorization: Bearer acm_xxx"
\`\`\`

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

Analysis runs automatically on a schedule (every 24 hours). Trigger manually:

\`\`\`bash
curl -X POST http://localhost:47821/api/activity/analyze \\
  -H "Authorization: Bearer acm_xxx"
\`\`\`

Returns the list of newly detected routines.

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

### Viewing Routines

**Dashboard:** Go to **Routines** to see all detected patterns with confidence scores, app lists, and trigger times.

**API:**
\`\`\`bash
# List all
curl http://localhost:47821/api/routines \\
  -H "Authorization: Bearer acm_xxx"

# Single routine
curl http://localhost:47821/api/routines/1 \\
  -H "Authorization: Bearer acm_xxx"
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
  "is_active": true
}
\`\`\`

### Creating Routines Manually

\`\`\`bash
curl -X POST http://localhost:47821/api/routines \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Morning Dev Session",
    "trigger_type": "time_based",
    "trigger_data": {"hour": 9, "minute": 0, "days_of_week": [0, 1, 2, 3, 4]},
    "apps": [
      {"app_name": "Terminal", "process_name": "wt"},
      {"app_name": "VS Code", "process_name": "code"}
    ]
  }'
\`\`\`

### Updating & Deleting

\`\`\`bash
# Update (e.g., rename or change trigger time)
curl -X PUT http://localhost:47821/api/routines/3 \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "New Name", "trigger_data": {"hour": 10, "minute": 30, "days_of_week": [1, 3]}}'

# Delete
curl -X DELETE http://localhost:47821/api/routines/3 \\
  -H "Authorization: Bearer acm_xxx"
\`\`\`

---

## Workflow Tracker

Separate from the activity watcher, the **Workflow Tracker** observes the agent's own tool call sequences and suggests automation when the same sequence repeats.

### How It Works

After each agentic turn (one user message → one agent response), the tool sequence used is recorded. If the same sequence of tool calls is used **3 or more times**, the tracker suggests creating a skill or a dedicated workflow:

\`\`\`
[Workflow Suggestion]
You've run this sequence 3 times:
  web_search → get_webpage → remember_note

Want me to create a "research and save" skill that automates this?
\`\`\`

Suggestions are fire-and-forget — dismissed automatically if the user doesn't act on them.

**Cooldown:** 30 minutes between suggestions for the same pattern.

**Filtered operations:** Simple/single-tool calls are ignored. Only sequences of 2+ meaningful tools trigger analysis.

---

## Privacy

- Activity data (app names, window titles, focus times) is stored in the local SQLite database only
- Window titles can contain sensitive information — be aware of this if you share your \`data/openacm.db\`
- The watcher never reads file contents, keystrokes, or screen content — only what OS window management APIs expose (active app name and window title)
- To disable entirely: set \`activity_watcher.enabled: false\` in config
- To clear all history: \`DELETE FROM app_activity\` in the SQLite database, or delete \`data/openacm.db\`

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
    "content": `
# Dashboard

The OpenACM dashboard is a built-in web interface available at \`http://127.0.0.1:47821\` (or whatever host/port you configure). It requires no extra setup — it starts with OpenACM.

---

## Accessing the Dashboard

1. Start OpenACM: \`python -m openacm\`
2. Open your browser to \`http://127.0.0.1:47821\`
3. If a \`DASHBOARD_TOKEN\` is set in your config, you'll be prompted to enter it on first load

The token is stored in your browser's \`localStorage\` and is checked automatically on all API calls.

---

## Pages Overview

### Chat

The primary interface. Full-featured chat with the OpenACM agent.

**Features:**
- **Real-time streaming** — responses appear word-by-word as generated
- **Cancel button** — while the agent is thinking, the send button turns into a red ✕ button; clicking it cancels the current request immediately
- **Conversation sidebar** — all past conversations listed on the left
- **New conversation** — each session gets a unique ID; history persists
- **New conversation badge** — conversations with no messages show a "New" indicator
- **Delete conversation** — hover over a conversation in the sidebar to reveal the delete button (external channel conversations only)
- **Tool execution log** — toggle to see each tool call and its result inline
- **File uploads** — drag-and-drop or click to attach images, PDFs, audio, text files
- **Image preview** — images sent by the agent render inline with a download button
- **Encryption badge** — a lock icon in the sidebar header when messages are encrypted at rest
- **Model indicator** — shows current provider and model in the chat header

**Slash commands** (type in the chat input):
\`\`\`
/model ollama/llama3.2        Switch to a different model mid-conversation
/model anthropic/claude-opus-4-6
/new                          Start a fresh conversation (equivalent to new chat)
/models                       List available models
/tools                        List available tools
/config                       Show current configuration
/help                         Show all commands
\`\`\`

**File upload behavior:**
- Images → sent as vision input to the LLM (if model supports it)
- Audio/voice → transcribed via Whisper and injected as text
- Documents (PDF, text) → content extracted and added to context

---

### Dashboard (Stats)

Go to **Dashboard** in the left navigation.

**Activity Chart** — Token usage over time (last 7/30 days). Shows prompt tokens vs. completion tokens as a bar chart.

**Stats Cards:**
- Total messages processed
- Total tokens used (prompt + completion)
- Total tool calls executed
- Average response time (ms)
- Current model (provider + model name)

**LLM Call Log** — Recent LLM requests with model, token counts, and elapsed time.

---

### Agents

Go to **Agents** in the left navigation.

Lists all sub-agents with their name, description, allowed tools, and (optional) Telegram bot status.

**Actions:**
- **New Agent** → form to create a new agent (name, description, system prompt, tool whitelist, Telegram token)
- **Edit** → modify an existing agent
- **Delete** → remove an agent
- **Test** → send a test message to an agent and see its response

---

### Tools

Go to **Tools** in the left navigation.

Lists all registered tools (built-in + runtime-created + MCP) grouped by category.

**For each tool:**
- Name, description, category, risk level
- Parameter schema
- Source (built-in, runtime, or MCP server name)

**Create Tool button** → opens an interface to create a new runtime tool (delegates to the \`create_tool\` agent command).

---

### Skills

Go to **Skills** in the left navigation.

Lists all skills in the \`skills/\` directory organized by subdirectory.

**For each skill:**
- Name, file path, description (extracted from markdown heading)
- Active/inactive status (whether it was injected in the last request)

**Create Skill button** → delegates to the \`create_skill\` tool.

---

### MCP

Go to **MCP** in the left navigation.

Lists all configured MCP servers with their connection status.

**For each server:**
- Name, transport type, command/URL
- Connected/Disconnected status with error message if failed
- Number of tools exposed
- Tool list (expandable)

**Actions:**
- **Add Server** → form to register a new MCP server
- **Connect / Disconnect** → toggle connection per server
- **Delete** → remove server configuration

---

### Config

Go to **Config** in the left navigation.

**Current Model** — Dropdown to switch the active LLM provider and model. Change persists across restarts.

**Custom Providers** — Add, edit, and remove custom OpenAI-compatible LLM endpoints.

**Security** — Shows current execution mode (\`sandbox\`, \`confirm\`, \`direct\`) and allows changing it.

**System Prompt** — View and edit the assistant's custom system prompt from the dashboard.

---

### Routines

Go to **Routines** in the left navigation.

Displays patterns detected by the Activity Watcher's Pattern Analyzer.

**For each routine:**
- Name and description (LLM-generated)
- App list with process names
- Trigger type (\`time_based\` or \`manual\`)
- Trigger time and days
- Confidence score (0–100%)
- Occurrence count (how many times detected)

**Actions:**
- **Analyze now** → trigger a fresh pattern analysis
- **Delete** → remove a routine
- **Toggle active** → enable/disable a routine

---

### Activity

Go to **Activity** in the left navigation (if enabled in config).

Shows the current Activity Watcher status and recent app focus sessions.

**Current App** — Real-time display of the currently focused application.

**Recent Sessions** — Table of the last N app focus records:
- App name and window title
- Focus duration
- Timestamp

**Watcher controls:**
- **Start / Stop** — toggle the background watcher

---

## WebSocket Protocol

The chat interface communicates with the backend via three WebSocket connections:

### Chat WebSocket
\`\`\`
ws://127.0.0.1:47821/ws/chat?token=<your_token>
\`\`\`

Client sends a message:
\`\`\`json
{
  "message": "What's my disk usage?",
  "target_user_id": "web",
  "target_channel_id": "web"
}
\`\`\`

Client cancels the current request:
\`\`\`json
{
  "type": "cancel",
  "target_user_id": "web",
  "target_channel_id": "web"
}
\`\`\`

Server sends:
\`\`\`json
{"type": "response", "content": "Your disk usage is 87% full.", "attachments": []}
\`\`\`

### Events WebSocket
\`\`\`
ws://127.0.0.1:47821/ws/events?token=<your_token>
\`\`\`

Server-only stream of real-time events (tool calls, thinking status, skill activation, memory recall). See \`10-api-reference.md\` for the full event type list.

### Terminal WebSocket
\`\`\`
ws://127.0.0.1:47821/ws/terminal?token=<your_token>&channel=<channel_id>
\`\`\`

A **real interactive PTY shell** — one persistent session per chat channel. The terminal panel in the dashboard connects here. Powered by xterm.js on the frontend and \`pywinpty\` (Windows) / \`pty\` (Linux/Mac) on the backend.

**Key behaviors:**
- The shell session **persists** across WS reconnects — SSH connections, running servers, and shell state are preserved
- Each chat channel (\`web\`, \`telegram-xxx\`, etc.) gets its own isolated shell
- Supports full ANSI colors, the current path in the prompt (\`PS1\`), tab completion, and Ctrl+C
- When the AI runs \`run_command\`, its output streams directly into the correct channel's terminal in real time

Client sends:
\`\`\`json
{"type": "input",  "data": "ls -la\\n"}
{"type": "signal", "data": "SIGINT"}
{"type": "resize", "cols": 220, "rows": 50}
\`\`\`

Server sends:
\`\`\`json
{"type": "output",      "data": "\\u001b[32muser@host\\u001b[0m:/home$ "}
{"type": "ai_command",  "tool": "run_command", "data": "npm install"}
{"type": "ai_output",   "tool": "run_command", "data": "added 142 packages"}
{"type": "exit",        "data": "shell process exited"}
{"type": "error",       "data": "Failed to start shell: ..."}
\`\`\`

---

## Authentication

If \`DASHBOARD_TOKEN\` is set, all \`/api/\` endpoints require:
\`\`\`
Authorization: Bearer <token>
\`\`\`

Or via query string:
\`\`\`
GET /api/stats?token=<token>
\`\`\`

WebSocket connections pass the token as a query parameter:
\`\`\`
ws://127.0.0.1:47821/ws/chat?token=<token>
\`\`\`

The token is checked against the configured value. There is no user management — all valid tokens have full access.

---

## Production Considerations

By default, the dashboard binds to \`127.0.0.1\` (localhost only). To expose it on a network:

\`\`\`yaml
# config/default.yaml
server:
  host: "0.0.0.0"
  port: 47821
\`\`\`

**If exposing to a network:**
1. Set a strong \`DASHBOARD_TOKEN\` in \`config/.env\`
2. Put the server behind a reverse proxy (nginx, Caddy) with HTTPS
3. Restrict access by IP at the network level
4. Do not expose it to the public internet without authentication

The dashboard has full agent access — anyone with the token can execute tools, read files, and run commands on your machine.

`
  },
  {
    "slug": "17-extending",
    "title": "Extending OpenACM",
    "content": `
# Extending OpenACM

OpenACM is designed to be extended at runtime — without restarting, without editing source code, and without deep Python knowledge.

---

## Creating Tools at Runtime

The most powerful extension mechanism. Ask OpenACM to create a new tool for itself:

\`\`\`
You: Create a tool called "weather" that fetches current weather for any city 
     using the Open-Meteo API (no API key required). 
     Parameters: city (string, required), units (celsius or fahrenheit, default celsius)
\`\`\`

OpenACM will:
1. Write the Python async function
2. Run validation (syntax check, import check, security scan)
3. Execute a dry-run test
4. Show you the code and results
5. Ask for confirmation → call \`create_tool(..., apply=True)\` → live in registry

The tool is immediately available for the next message.

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
    # Context injected automatically — always use **ctx or list explicitly:
    _sandbox=None,
    _event_bus=None,
    _brain=None,
    _user_id: str = "",
    _channel_id: str = "",
    _channel_type: str = "",
) -> str:
    """Implementation here. Must return a string."""
    result = f"Got: {param1}, {param2}"
    return result
\`\`\`

**Key rules:**
- Must be \`async def\`
- Must return a \`str\`
- Parameters matching the schema are passed as keyword arguments
- Context parameters (\`_sandbox\`, \`_event_bus\`, etc.) are injected automatically
- Never raise unhandled exceptions — catch them and return an error string

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
| \`blender\` | 3D modeling and rendering |
| \`meta\` | Tools that manage other tools or skills |
| \`iot\` | Smart home, IoT devices |
| \`mcp\` | MCP server tools (auto-assigned) |

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

The module is loaded on next startup and available forever.

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

Restart OpenACM or trigger a skill sync to discover the new file.

---

## Creating Agents

Agents are isolated instances with their own persona and tool set.

### Via dashboard
1. Go to **Agents** → **New Agent**
2. Set name, description, and system prompt
3. Choose which tools the agent can access
4. Optionally provide a Telegram bot token for a dedicated bot

### Via chat
\`\`\`
You: Create an agent called "ResearchBot" that specializes in finding 
     and summarizing information. It should only have access to 
     web_search, get_webpage, and remember_note tools. 
     Give it a concise, academic tone.
\`\`\`

### Via API
\`\`\`bash
curl -X POST http://localhost:47821/api/agents \\
  -H "Authorization: Bearer acm_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "ResearchBot",
    "description": "Finds and summarizes information",
    "system_prompt": "You are a research specialist. Be concise and cite sources.",
    "allowed_tools": ["web_search", "get_webpage", "remember_note"]
  }'
\`\`\`

---

## Connecting MCP Servers

Model Context Protocol servers expose tools that OpenACM can use.

### Configuration
Add to \`config/mcp_servers.json\`:

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

Implement the \`BaseChannel\` abstract class:

\`\`\`python
# openacm/channels/my_channel.py
import asyncio
from openacm.channels.base import BaseChannel

class MyChannel(BaseChannel):
    name = "mychannel"
    
    def __init__(self, config, brain, event_bus):
        self.config = config
        self.brain = brain
        self.event_bus = event_bus
        self.is_connected = False
        self.ready_event = asyncio.Event()
    
    async def start(self):
        # Connect to your platform
        self.is_connected = True
        self.ready_event.set()
        
        # Listen for incoming messages
        async for message in self.receive_messages():
            response = await self.brain.process_message(
                content=message.text,
                user_id=message.user_id,
                channel_id=self.name,
                channel_type=self.name,
            )
            await self.send_message(message.user_id, response)
    
    async def stop(self):
        self.is_connected = False
    
    async def send_message(self, user_id: str, content: str):
        # Send response to your platform
        pass
\`\`\`

Register it in \`app.py\`:
\`\`\`python
from openacm.channels.my_channel import MyChannel
channel = MyChannel(config, self.brain, self.event_bus)
self._channels.append(channel)
\`\`\`

---

## Modifying the System Prompt

The base OpenACM identity context is in \`src/openacm/core/acm_context.py\`. You can:

1. **Customize the assistant persona** via \`assistant.system_prompt\` in config
2. **Add persistent behavior** via skills (active skills are appended to the system prompt)
3. **Edit the base context** directly in \`acm_context.py\` for deep behavioral changes

The system prompt structure on each request:
\`\`\`
[OPENACM base context (short version after first message)]
[User's custom system_prompt from config]
[Active skill content (if any)]
[MCP tool list (if any MCP servers connected)]
\`\`\`

`
  },
  {
    "slug": "18-roadmap",
    "title": "Roadmap",
    "content": `
# Roadmap

OpenACM is actively developed. This document describes what's planned, what's in progress, and the long-term vision.

**Current version:** v0.1.0 — functional but not yet stable for production use.

---

## Recently Shipped (v0.1.0)

- ✅ Core agentic loop with multi-tool support
- ✅ 42+ built-in tools (system, file, web, Google, Blender, IoT, browser)
- ✅ Web dashboard (Next.js) with real-time streaming
- ✅ Telegram, Discord, WhatsApp channel support
- ✅ Multi-agent system with isolated tool access
- ✅ Skills system (markdown behavior instructions)
- ✅ Runtime tool creation (\`create_tool\`)
- ✅ MCP server integration (stdio + SSE)
- ✅ LocalRouter (offline intent classifier, multilingual)
- ✅ RAG / vector memory (ChromaDB)
- ✅ Conversation compaction (auto-summarization)
- ✅ Semantic tool selection (multilingual embeddings)
- ✅ Conversation encryption at rest (AES-GCM)
- ✅ Activity watcher (OS app usage monitoring)
- ✅ Routine detection and automation
- ✅ Workflow tracker (suggests automation for repeated patterns)
- ✅ Custom LLM provider support (OpenAI-compatible endpoints)
- ✅ Dashboard: stats, charts, model switching, debug traces
- ✅ Cron scheduler — recurring tasks with visual management UI and LLM tools (\`list/create/delete/toggle/trigger_cron_job\`)
- ✅ Per-channel PTY terminal — real interactive shell (xterm.js + pywinpty/pty), one persistent session per chat channel; AI tool output streams directly into the correct channel's terminal
- ✅ Cancel button — abort any in-progress AI request from the chat UI

---

## Short-term (v0.2.0)

### Voice Input/Output
- Whisper integration for speech-to-text in the web chat
- TTS output option (ElevenLabs, OpenAI TTS, local Coqui)
- Voice-only Telegram mode

### Smarter Fast-Path
- More intent categories (file operations, web search patterns)
- Per-user learned fast paths (personalized to each channel)
- Fast-path for common IoT commands (reduces ~800ms LLM overhead)

### Better Tool Results in Context
- Structured tool result display in chat (tables, code blocks, collapsible sections)
- Large tool outputs stored in RAG instead of full context

### Plugin System
- Community-contributed tool packs installable via pip
- \`openacm install tool-pack-weather\`
- Plugin registry

---

## Medium-term (v0.3.0)

### Multi-Modal Improvements
- Vision: analyze images, screenshots, documents in-conversation
- Audio transcription of uploaded audio/video files
- PDF and document parsing (already partially implemented)

### Web Automation Improvements
- Persistent browser session (don't restart Playwright on every call)
- Browser profiles (saved login sessions for common sites)
- Record-and-replay for browser workflows

### Advanced Agent Features
- Agent-to-agent communication (main agent delegates to sub-agents)
- Agent marketplace / template library
- Agent health monitoring dashboard
- Webhooks for agent events

### Knowledge Management
- File upload to RAG (index documents, PDFs, codebases)
- Structured knowledge bases (named collections, namespaced search)
- Knowledge graph visualization

### Better IoT
- Matter protocol support
- Home Assistant integration (replacing individual device APIs)
- Unified device discovery UI
- Scenes and automation rules

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
- Webhook triggers from external systems
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
python -m venv .venv && source .venv/bin/activate
pip install -e ".[all,dev]"
cd frontend && npm install && cd ..
\`\`\`

**Code style:**
- Python: \`ruff\` for linting, \`black\` for formatting
- TypeScript: \`eslint\` + \`prettier\`
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
Executes a named skill through the AI brain.

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
Returns \`{ "jobs": [...] }\`.

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
| action_type | TEXT | \`run_skill\` / \`run_routine\` / \`analyze_patterns\` / \`custom_command\` |
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
    "slug": "readme",
    "title": "OpenACM Documentation",
    "content": `
# OpenACM Documentation

> Official documentation for **OpenACM — Open Automated Computer Manager**

---

## Table of Contents

| Document | Description |
|----------|-------------|
| [Introduction](./01-introduction.md) | What is OpenACM, vision, philosophy, key differentiators |
| [Getting Started](./02-getting-started.md) | Installation, setup, first run |
| [Architecture](./03-architecture.md) | System design, components, data flow |
| [Core Concepts](./04-core-concepts.md) | Brain, memory, tools, skills, agents |
| [Tools Reference](./05-tools-reference.md) | Every built-in tool, parameters, examples |
| [Skills System](./06-skills-system.md) | What skills are, creating them, built-in library |
| [Agents](./07-agents.md) | Autonomous agents, creation, isolation model |
| [Channels](./08-channels.md) | Discord, Telegram, WhatsApp, Web, Console |
| [LLM Providers](./09-llm-providers.md) | Supported providers, model switching, custom endpoints |
| [API Reference](./10-api-reference.md) | All REST endpoints + WebSocket protocols |
| [Configuration](./11-configuration.md) | Full config schema, environment variables |
| [Security](./12-security.md) | Execution modes, sandbox, encryption, policies |
| [MCP Integration](./13-mcp.md) | Model Context Protocol server setup |
| [Memory & RAG](./14-memory-rag.md) | Short-term memory, long-term vector memory |
| [Activity & Routines](./15-activity-routines.md) | OS activity watcher, pattern detection, automation |
| [Dashboard](./16-dashboard.md) | Web UI guide, all pages |
| [Extending OpenACM](./17-extending.md) | Creating tools, skills, custom channels, MCP servers |
| [Roadmap](./18-roadmap.md) | What's coming next |
| [Cron Scheduler](./19-cron-scheduler.md) | Background job scheduler — recurring tasks, cron expressions, API |

---

## Quick Links

- **GitHub:** [github.com/Json55Hdz/OpenACM](https://github.com/Json55Hdz/OpenACM)
- **License:** MIT
- **Version:** 0.1.0

---

*OpenACM is an open-source, self-hosted autonomous AI agent that runs on your computer.*

`
  }
];

export default docsData;