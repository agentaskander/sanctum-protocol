type InternalRoute = {
  path: string
  eyebrow: string
  title: string
  intro: string
  panels: { title: string; text: string }[]
}

const routes: InternalRoute[] = [
  {
    path: '/internal',
    eyebrow: 'Internal Protocol Console',
    title: 'Sanctum Protocol',
    intro: 'An internal light interface for ontology, governance, restoration, sensory environments, ecosystem maps, and research coordination.',
    panels: [
      { title: 'Identity Graph', text: 'Stable representations of people, roles, preferences, permissions, and context.' },
      { title: 'Relationship Graph', text: 'Trust, proximity, shared history, collaboration, and care relationships.' },
      { title: 'Movement Graph', text: 'Activities, body systems, progress signals, patterns, and constraints.' },
      { title: 'Consent & Permissions', text: 'Visibility, correction, sharing, retention, and audit boundaries.' },
    ],
  },
  {
    path: '/internal/ontology',
    eyebrow: 'Ontology',
    title: 'Composable primitives for human-system software.',
    intro: 'Internal ontology work stays under the route namespace and supports identity, relationship, movement, narrative, workflow, symbolic, temporal, and consent systems.',
    panels: ['Person', 'Place', 'Practice', 'Relationship', 'Event', 'Goal', 'Task', 'Signal'].map((item) => ({
      title: item,
      text: `${item} remains part of the internal protocol vocabulary and is not exposed as a public ontology import.`,
    })),
  },
  {
    path: '/internal/protocol',
    eyebrow: 'Protocol',
    title: 'Shared semantic structure for coordinated intelligence.',
    intro: 'Applications interoperate through public-safe concepts while internal schemas remain governed, versioned, and correctable.',
    panels: [
      { title: 'Schema Versioning', text: 'Every concept has a source, lifecycle, and migration path.' },
      { title: 'Explainability', text: 'Interpretive claims remain inspectable and correctable.' },
      { title: 'Adapters', text: 'Apps consume protocol language without becoming separate protocol apps.' },
    ],
  },
  {
    path: '/internal/restoration',
    eyebrow: 'Environmental Restoration',
    title: 'Place, stewardship, biodiversity, and outdoor participation.',
    intro: 'Restoration connects environmental participation with community action, place care, and ecological literacy.',
    panels: [
      { title: 'Outdoor Positivity', text: 'Nature contact and stewardship framed as public benefit.' },
      { title: 'Biodiversity', text: 'Habitat, pollinator support, and living systems vocabulary.' },
      { title: 'Acoustic Ecology', text: 'Soundscapes as part of environmental quality.' },
    ],
  },
  {
    path: '/internal/sensory',
    eyebrow: 'Sensory Environments',
    title: 'Scent, air, memory, comfort, and safety as environmental coherence.',
    intro: 'Sensory work links olfactory context, air quality, botanical language, sensitivity rules, and place identity.',
    panels: [
      { title: 'Olfactory Context', text: 'Scent as memory, signal, and comfort boundary.' },
      { title: 'Air Quality', text: 'Source control, ventilation, filtration, and sensitivity awareness.' },
      { title: 'Botanical Standards', text: 'Public language for botanical materials and safety guardrails.' },
    ],
  },
  {
    path: '/internal/map',
    eyebrow: 'Ecosystem Map',
    title: 'One foundation, multiple application surfaces.',
    intro: 'The protocol supports Studio, SynkOS, NarrativeIQ, FlowSync, SoulGraph, Yanamsa, ClearField, CraftSure, PipeFlow, and Clover without splitting SANCTUM into zone folders.',
    panels: [
      { title: 'Studio', text: 'Human experience and sanctuary implementation layer.' },
      { title: 'SynkOS', text: 'Coordination OS for roles, workflows, and operating rhythms.' },
      { title: 'NarrativeIQ', text: 'Narrative intelligence across sessions, decisions, and themes.' },
      { title: 'FlowSync', text: 'Movement data, practices, progress patterns, and constraints.' },
    ],
  },
  {
    path: '/internal/governance',
    eyebrow: 'Governance',
    title: 'Governed semantics for sensitive human context.',
    intro: 'Interpretive reasoning is treated as a governed artifact with source, confidence, permission boundary, correction path, and versioned schema context.',
    panels: ['Permissions', 'Audit Trails', 'Correction Paths', 'Device-First Options', 'Private-First Operation'].map((item) => ({
      title: item,
      text: `${item} keeps protocol intelligence accountable before it reaches any application surface.`,
    })),
  },
  {
    path: '/internal/research',
    eyebrow: 'Research',
    title: 'Research-grade infrastructure for applied human systems.',
    intro: 'Internal research coordinates ontology-driven tools, edge reasoning, personal knowledge graphs, embodied intelligence, and human-compatible automation.',
    panels: [
      { title: 'Ontology-driven AI Agents', text: 'Agents grounded in shared schemas, context, and inspectable reasoning.' },
      { title: 'Edge Reasoning', text: 'Private device-side classification for sensitive signals.' },
      { title: 'Personal Knowledge Graphs', text: 'Durable graphs for identity, relationships, practices, goals, and meaning.' },
    ],
  },
]

export function InternalPageShell(pathname: string) {
  const normalized = pathname.replace(/\/$/, '') || '/internal'
  const route = routes.find((item) => item.path === normalized) ?? routes[0]

  return `
    <header class="public-hero internal-hero">
      <nav class="public-nav" aria-label="Internal navigation">
        <a class="brand" href="/internal"><span>SP</span>SANCTUM Protocol</a>
        <div>
          <a href="/internal/ontology">Ontology</a>
          <a href="/internal/protocol">Protocol</a>
          <a href="/internal/restoration">Restoration</a>
          <a href="/internal/sensory">Sensory</a>
          <a href="/internal/map">Map</a>
          <a href="/internal/governance">Governance</a>
          <a href="/internal/research">Research</a>
        </div>
      </nav>
      <section class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${route.eyebrow}</p>
          <h1>${route.title}</h1>
          <p class="lede">${route.intro}</p>
          <div class="hero-actions">
            <a class="primary-link" href="/internal/map">View Protocol Map</a>
            <a class="secondary-link" href="/internal/governance">Governance</a>
          </div>
        </div>
        <section class="diagram-wrap hero-visual">
          <div class="module-grid internal-module-grid">${route.panels.map((panel) => `<span>${panel.title}</span>`).join('')}</div>
        </section>
      </section>
    </header>
    <main>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Internal Route</p>
          <h2>${route.title}</h2>
        </div>
        <div class="pillar-grid">${route.panels.map((panel) => `<article class="surface-card"><span>${route.eyebrow}</span><h3>${panel.title}</h3><p>${panel.text}</p></article>`).join('')}</div>
      </section>
      <footer class="footer"><div><strong>SANCTUM Protocol</strong><span>Internal route namespace only. Not a separate app folder.</span></div><a href="/">Public site</a></footer>
    </main>
  `
}

export function NotFoundPage() {
  return `
    <main>
      <section class="public-hero internal-hero">
        <div class="hero-copy">
          <p class="eyebrow">404</p>
          <h1>Not Found</h1>
          <p class="lede">This route is not available on the public host.</p>
          <a class="primary-link" href="/">Return home</a>
        </div>
      </section>
    </main>
  `
}
