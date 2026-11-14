// Plugin marketplace registry.
// To list a plugin, add an entry here (pull requests welcome).
//   repo:    public GitHub repository, exactly https://github.com/<owner>/<repo>.
//            OpenACM installs it from that URL, so it must be pip-installable and
//            expose an "openacm.plugins" entry point.
//   builtIn: ships with OpenACM, nothing to install.
//   extras:  optional extra downloads the plugin needs (label + url).

export const pluginsData = [
  {
    id: 'desktop-control',
    name: 'Desktop Control',
    version: '0.1.0',
    author: 'JsonProductions',
    description:
      'Lets the agent work in your real browser (Chrome, Brave, Edge) through a local extension: read pages, click, type, fill forms and work inside iframes. Also controls mouse, keyboard and screen for desktop apps, and listens to audio with local transcription.',
    tags: ['browser', 'desktop', 'audio'],
    repo: 'https://github.com/Json55Hdz/openacm-desktop-control',
    notes: 'Needs its browser extension. Desktop and system-audio control are built for Windows.',
    extras: [
      {
        label: 'Browser extension (.zip)',
        url: 'https://github.com/Json55Hdz/openacm-desktop-control/releases/latest/download/openacm-desktop-control-extension.zip',
      },
    ],
  },
  {
    id: 'home-assistant',
    name: 'Home Assistant',
    version: '1.0.0',
    author: 'JsonProductions / OpenACM',
    description: 'Control smart-home devices through Home Assistant: lights, switches, climate and scenes, by room.',
    tags: ['smart home', 'iot'],
    builtIn: true,
  },
  {
    id: 'gmail-classifier',
    name: 'Gmail Classifier',
    version: '1.0.0',
    author: 'JsonProductions / OpenACM',
    description: 'Classifies Gmail emails into the categories you define, using AI.',
    tags: ['email', 'productivity'],
    builtIn: true,
  },
  {
    id: 'content-automation',
    name: 'Content Automation',
    version: '0.1.0',
    author: 'JsonProductions / OpenACM',
    description: 'Auto-generates social media content from your work sessions.',
    tags: ['content', 'social'],
    builtIn: true,
  },
];

export const DEFAULT_OPENACM_URL = 'http://localhost:47821';

/** pip command for installing by hand (source archive, no git needed). */
export function pipCommand(repo) {
  return `pip install ${repo}/archive/HEAD.zip`;
}
