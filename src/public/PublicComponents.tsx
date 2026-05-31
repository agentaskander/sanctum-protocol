import { frameworkLayers, pages, pillars, type PublicPage } from './siteContent'

export function SeoHead(page: PublicPage) {
  document.title = page.title
  setMeta('description', page.description)
  setMeta('robots', 'index,follow')
  setLink('canonical', page.canonical)
}

export function PageShell(page: PublicPage) {
  return page.path === '/' ? HomePage(page) : PillarPage(page)
}

function HomePage(page: PublicPage) {
  return `
    ${Hero({
      brand: 'SANCTUM Protocol',
      eyebrow: 'Environmental Intelligence',
      title: 'Environmental Intelligence for Human Spaces',
      copy: 'SANCTUM Protocol is a public framework for understanding how environments shape sleep, attention, recovery, and human flourishing.',
      primary: ['Explore the Framework', '#framework'],
      secondary: ['View Research Pillars', '#research'],
      diagram: 'environmental-layers',
    })}
    <main>
      <section id="framework" class="cinema-section split-section">
        <div>
          <p class="kicker">The Missing Layer</p>
          <h2>Buildings were designed for shelter. SANCTUM studies what they do to the human system.</h2>
        </div>
        <div class="large-copy">
          <p>Light changes alertness. Sound changes vigilance. Air changes comfort before language can name it. Nature changes orientation. Material changes touch and thermal feeling. Rhythm changes when a room asks the body to rise, focus, downshift, or recover.</p>
          <p>Environmental intelligence gives those forces a public framework. It turns rooms into legible human-centered environments without exposing private systems or hidden evaluation machinery.</p>
        </div>
      </section>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Public Framework</p>
          <h2>Environmental Intelligence Layers</h2>
        </div>
        ${PublicDiagram('environmental-layers', 'hero-diagram')}
        <div class="layer-grid">${frameworkLayers.map((layer) => SurfaceCard(layer.title, layer.text, 'Framework Layer')).join('')}</div>
      </section>
      <section id="pillars" class="cinema-section">
        <div class="section-head">
          <p class="kicker">Pillars</p>
          <h2>Six public pillars for human spaces.</h2>
        </div>
        <div class="pillar-grid">${pillars.map((pillar) => LinkPanel(pillar.label, pillar.text, pillar.href, 'Research Pillar')).join('')}</div>
      </section>
      <section id="research" class="cinema-section library-section">
        <div>
          <p class="kicker">Public Research Library</p>
          <h2>An authority library for environmental intelligence.</h2>
        </div>
        <div class="library-grid">
          ${LinkPanel('Research Pillars', 'Public themes across light, sound, air, nature, recovery, healthy buildings, and sensory architecture.', '/research', 'Library')}
          ${LinkPanel('Glossary', 'Public vocabulary for spatial intelligence, sanctuary design, room rhythm, and human-centered environments.', '/glossary', 'Vocabulary')}
          ${LinkPanel('Healthy Home Framework', 'A whole-home view of sleep, focus, recovery, air, light, sound, nature, and behavioral rhythm.', '/healthy-home-framework', 'Framework')}
        </div>
      </section>
      ${CTA('Build the public language for human spaces.', page.cta, '/environmental-intelligence', 'Explore the framework')}
      ${DisclaimerBlock()}
      ${Footer()}
      ${Schema(page)}
    </main>
  `
}

function PillarPage(page: PublicPage) {
  return `
    ${Hero({
      brand: 'SANCTUM Protocol',
      eyebrow: page.label,
      title: page.h1,
      copy: page.intro,
      primary: ['Explore Principles', '#principles'],
      secondary: ['Related Pillars', '#related'],
      diagram: page.diagram,
    })}
    <main>
      <section id="principles" class="cinema-section split-section">
        <div>
          <p class="kicker">Design Protocol</p>
          <h2>Read the room as a field, not a collection of objects.</h2>
        </div>
        <div class="large-copy">
          <p>${page.principle}</p>
          <p>Public SANCTUM language stays at the level of category, principle, and room-scale observation. It is built for designers, researchers, homeowners, and operators who need a precise way to discuss how environments affect human spaces.</p>
        </div>
      </section>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Framework Panel</p>
          <h2>${page.h1} as environmental intelligence.</h2>
        </div>
        ${PublicDiagram(page.diagram, 'hero-diagram')}
      </section>
      <section class="cinema-section two-column">
        ${ListPanel('What To Observe', page.observe)}
        ${ListPanel('What To Tune', page.tune)}
      </section>
      ${ChecklistBlock(page.checklist)}
      <section id="related" class="cinema-section">
        <div class="section-head">
          <p class="kicker">Related Pillars</p>
          <h2>Move through the public framework.</h2>
        </div>
        <div class="pillar-grid">${page.links.map((link) => LinkPanel(link.label, link.text, link.href, 'Related')).join('')}</div>
      </section>
      ${FaqBlock(page.faqs)}
      ${CTA('Continue the research path.', page.cta, '/research', 'View research pillars')}
      ${DisclaimerBlock()}
      <section class="last-updated"><span>Last Updated</span><strong>${page.updated}</strong></section>
      ${Footer()}
      ${Schema(page)}
    </main>
  `
}

function Hero(props: {
  brand: string
  eyebrow: string
  title: string
  copy: string
  primary: [string, string]
  secondary: [string, string]
  diagram: PublicPage['diagram']
}) {
  return `
    <header class="public-hero">
      <nav class="public-nav" aria-label="Primary navigation">
        <a class="brand" href="/"><span>S</span>${props.brand}</a>
        <div>
          <a href="/environmental-intelligence">Framework</a>
          <a href="/sleep-environments">Pillars</a>
          <a href="/research">Research</a>
          <a href="/glossary">Glossary</a>
          <a href="/about">About</a>
        </div>
      </nav>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${props.eyebrow}</p>
          <h1>${props.title}</h1>
          <p class="lede">${props.copy}</p>
          <div class="hero-actions">
            <a class="primary-link" href="${props.primary[1]}">${props.primary[0]}</a>
            <a class="secondary-link" href="${props.secondary[1]}">${props.secondary[0]}</a>
          </div>
        </div>
        ${PublicDiagram(props.diagram, 'hero-visual')}
      </div>
    </header>
  `
}

function SurfaceCard(title: string, text: string, eyebrow: string) {
  return `<article class="surface-card"><span>${eyebrow}</span><h3>${title}</h3><p>${text}</p></article>`
}

function LinkPanel(title: string, text: string, href: string, eyebrow: string) {
  return `<a class="surface-card link-panel" href="${href}"><span>${eyebrow}</span><h3>${title}</h3><p>${text}</p></a>`
}

function ListPanel(title: string, items: string[]) {
  return `<section class="list-panel"><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></section>`
}

export function ChecklistBlock(items: string[]) {
  return `<section class="cinema-section">${ListPanel('Public-Safe Checklist', items)}</section>`
}

export function FaqBlock(items: PublicPage['faqs']) {
  return `<section class="cinema-section faq-section"><p class="kicker">FAQ</p><h2>Questions the public framework can answer.</h2><div class="faq-list">${items.map((item) => `<details open><summary>${item.question}</summary><p>${item.answer}</p></details>`).join('')}</div></section>`
}

export function DisclaimerBlock() {
  return '<section class="disclaimer"><strong>Disclaimer</strong><p>Educational and informational only. Does not diagnose, treat, cure, or prevent disease.</p></section>'
}

function CTA(title: string, text: string, href: string, label: string) {
  return `<section class="cta"><p class="kicker">SANCTUM Protocol</p><h2>${title}</h2><p>${text}</p><a class="primary-link" href="${href}">${label}</a></section>`
}

function Footer() {
  return '<footer class="footer"><div><strong>SANCTUM Protocol</strong><span>Public framework for environmental intelligence.</span></div><a href="https://sanctumstudio.com">SANCTUM Studio is the design implementation layer.</a></footer>'
}

export function PublicDiagram(kind: PublicPage['diagram'], className = '') {
  const labels = diagramLabels[kind]
  return `
    <section class="diagram-wrap ${className}" aria-label="${labels.title}">
      <div class="diagram-orbit">
        <svg viewBox="0 0 760 520" role="img">
          <title>${labels.title}</title>
          <defs>
            <linearGradient id="lineGlow" x1="0" x2="1">
              <stop offset="0%" stop-color="#d9c7a3"></stop>
              <stop offset="100%" stop-color="#8fb7a3"></stop>
            </linearGradient>
          </defs>
          <circle class="orbit outer" cx="380" cy="260" r="214"></circle>
          <circle class="orbit middle" cx="380" cy="260" r="142"></circle>
          <circle class="core" cx="380" cy="260" r="76"></circle>
          <text class="core-label" x="380" y="254">${labels.center}</text>
          <text class="core-sub" x="380" y="278">SANCTUM</text>
          ${labels.items.map((item, index) => {
            const angle = (-90 + index * (360 / labels.items.length)) * (Math.PI / 180)
            const x = 380 + Math.cos(angle) * 214
            const y = 260 + Math.sin(angle) * 214
            const lx = 380 + Math.cos(angle) * 138
            const ly = 260 + Math.sin(angle) * 138
            return `<line class="spoke" x1="${lx.toFixed(1)}" y1="${ly.toFixed(1)}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"></line><g><circle class="node-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="42"></circle><text class="node-label" x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}">${item}</text></g>`
          }).join('')}
        </svg>
      </div>
    </section>
  `
}

const diagramLabels = {
  'environmental-layers': { title: 'Environmental Intelligence Layers', center: 'Environment', items: ['Physical', 'Sensory', 'Cognitive', 'Recovery', 'Nature', 'Rhythm'] },
  'sleep-factors': { title: 'Sleep Environment Factors', center: 'Sleep', items: ['Dark', 'Quiet', 'Cool', 'Air', 'Soft', 'Ritual'] },
  'recovery-framework': { title: 'Recovery Space Framework', center: 'Recovery', items: ['Privacy', 'Low Light', 'Texture', 'Breath', 'Quiet', 'Return'] },
  'healthy-home': { title: 'Healthy Home Framework', center: 'Home', items: ['Bedroom', 'Work', 'Kitchen', 'Entry', 'Bath', 'Outdoor'] },
  'nature-ladder': { title: 'Nature Exposure Ladder', center: 'Nature', items: ['View', 'Plant', 'Air', 'Material', 'Garden', 'Trail'] },
  'sound-field': { title: 'Sound And Vibration Field', center: 'Sound', items: ['Quiet', 'Masking', 'Absorb', 'Privacy', 'Hum', 'Resonance'] },
}

function Schema(page: PublicPage) {
  const json = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', name: 'SANCTUM Protocol', url: 'https://sanctumprotocol.org' },
      { '@type': 'WebSite', name: 'SANCTUM Protocol', url: 'https://sanctumprotocol.org' },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanctumprotocol.org/' }, { '@type': 'ListItem', position: 2, name: page.h1, item: page.canonical }] },
      { '@type': 'Article', headline: page.h1, description: page.description, dateModified: '2026-05-31' },
      { '@type': 'FAQPage', mainEntity: page.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'HowTo', name: `Review ${page.h1}`, step: page.checklist.map((item) => ({ '@type': 'HowToStep', text: item })) },
    ],
  }
  return `<script type="application/ld+json">${JSON.stringify(json)}</script>`
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.name = name
    document.head.appendChild(tag)
  }
  tag.content = content
}

function setLink(rel: string, href: string) {
  let tag = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.rel = rel
    document.head.appendChild(tag)
  }
  tag.href = href
}

export function pageForPath(pathname: string) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return pages.find((page) => page.path === normalized) ?? pages[0]
}
