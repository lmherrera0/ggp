export interface Translations {
  nav: {
    brand: string;
    problem: string;
    markers: string;
    features: string;
    howItWorks: string;
    platforms: string;
    research: string;
    feedback: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    hook: string;
    quote: string;
    getStarted: string;
    viewOnGithub: string;
  };
  problem: {
    title: string;
    subtitle: string;
    stakes: Array<{ level: string; example: string; color: string }>;
    conclusion: string;
  };
  markers: {
    title: string;
    subtitle: string;
    items: Array<{
      label: string;
      emoji: string;
      color: string;
      textColor: string;
      description: string;
    }>;
  };
  sourceTiers: {
    title: string;
    subtitle: string;
    tiers: Array<{
      tier: string;
      label: string;
      trust: string;
      examples: string;
      color: string;
    }>;
    trustLabel: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; stat: string; description: string }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    phases: Array<{
      title: string;
      description: string;
      items: string[];
    }>;
    modeTitle: string;
    fastMode: { title: string; description: string };
    deepAudit: { title: string; description: string };
  };
  platforms: {
    title: string;
    subtitle: string;
    tabs: {
      knowledgeBase: string;
      claudeProjects: string;
      chatgpt: string;
      copilot: string;
      googleGems: string;
      skill: string;
    };
    instructions: {
      claude: string;
      chatgpt: string;
      copilot: string;
      googleGems: string;
      skill: string;
    };
    kb: {
      title: string;
      description: string;
      downloadBtn: string;
      downloadNote: string;
      files: Array<{ name: string; desc: string }>;
    };
    copyBtn: string;
    copiedBtn: string;
  };
  cta: {
    title: string;
    subtitle: string;
    getStarted: string;
    viewOnGithub: string;
  };
  research: {
    title: string;
    subtitle: string;
    paper: {
      published: string;
      paperTitle: string;
      authorInfo: string;
      abstract: string;
      keywords: string[];
      readPaper: string;
      downloadPdf: string;
      doiUrl: string;
      pdfUrl: string;
    };
    architectureTitle: string;
    components: Array<{ title: string; description: string }>;
    paperFeaturesTitle: string;
    paperFeatures: Array<{ title: string; description: string }>;
    foundationsTitle: string;
    foundations: Array<{ label: string; detail: string }>;
    designPrinciple: string;
    citationText: string;
    citationDoi: string;
  };
  feedback: {
    title: string;
    subtitle: string;
    nameLabel: string;
    optional: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    typeLabel: string;
    typeOptions: Array<{ value: string; label: string }>;
    platformLabel: string;
    platformPlaceholder: string;
    platformOptions: Array<{ value: string; label: string }>;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    footnote: string;
    thankTitle: string;
    thankMessage: string;
    errorMessage: string;
  };
  footer: {
    brand: string;
    createdBy: string;
    licensedUnder: string;
    licenseLabel: string;
    github: string;
    linkedin: string;
    version: string;
    quote: string;
    backToTop: string;
  };
}
