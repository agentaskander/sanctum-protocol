import { frameworkLayers, pillars, type PublicPage } from './siteContent'
import { OriginalProtocolVisual } from './originalVisuals'
import { glossaryEntries } from './glossaryLibrary'
import { authorityRecords, comparisonRecords, partnerRecords, researchRecords, storyRecords } from './authorityLibrary'
import { seoEntries } from './seoLibrary'
import { frameworkPillarContent, frameworkPillarCounts, frameworkPillars, pillarsForGlossaryEntry } from './frameworkPillarLibrary'

export function SeoHead(page: PublicPage) {
  document.title = page.title
  setMeta('description', page.description)
  setMeta('robots', 'index,follow')
  setMeta('twitter:card', 'summary_large_image')
  setMeta('twitter:title', page.title)
  setMeta('twitter:description', page.description)
  setMetaProperty('og:type', page.path === '/' ? 'website' : 'article')
  setMetaProperty('og:site_name', 'SANCTUM Protocol')
  setMetaProperty('og:title', page.title)
  setMetaProperty('og:description', page.description)
  setMetaProperty('og:url', page.canonical)
  setLink('canonical', page.canonical)
}

export function PageShell(page: PublicPage) {
  if (page.path === '/glossary') return GlossaryPage(page)
  return page.path === '/' ? HomePage(page) : PillarPage(page)
}

export function BindPublicInteractions() {
  const search = document.getElementById('glossary-search') as HTMLInputElement | null
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.glossary-card'))
  const categoryButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-glossary-category]'))
  const count = document.getElementById('glossary-count')
  const empty = document.getElementById('glossary-empty')
  if (!search || !cards.length) return

  const normalizeFilterValue = (value: string) => value.toLowerCase().trim().replace(/\s+/g, ' ')
  const readParams = () => {
    const params = new URLSearchParams(window.location.search)
    return {
      category: normalizeFilterValue(params.get('category') ?? ''),
      query: params.get('q') ?? '',
    }
  }

  let { category: activeCategory, query: initialQuery } = readParams()
  search.value = initialQuery

  const applyFilter = (syncUrl = true) => {
    const rawQuery = search.value.trim()
    const query = normalizeFilterValue(rawQuery)
    let visible = 0

    cards.forEach((card) => {
      const category = normalizeFilterValue(card.getAttribute('data-category-label') ?? '')
      const haystack = card.getAttribute('data-search') ?? card.textContent ?? ''
      const matchesQuery = !query || normalizeFilterValue(haystack).includes(query)
      const matchesCategory = !activeCategory || category === activeCategory
      const isVisible = matchesQuery && matchesCategory
      card.hidden = !isVisible
      card.classList.toggle('is-hidden', !isVisible)
      if (isVisible) visible += 1
    })

    categoryButtons.forEach((button) => {
      const category = normalizeFilterValue(button.getAttribute('data-glossary-category') ?? '')
      button.classList.toggle('is-active', category === activeCategory)
      button.setAttribute('aria-pressed', String(category === activeCategory))
    })

    if (count) count.textContent = `Showing ${visible} of ${cards.length} terms`
    if (empty) empty.hidden = visible !== 0

    if (!syncUrl) return

    const next = new URLSearchParams()
    if (rawQuery) next.set('q', rawQuery)
    if (activeCategory) {
      const label = categoryButtons.find((button) => normalizeFilterValue(button.getAttribute('data-glossary-category') ?? '') === activeCategory)?.getAttribute('data-glossary-category') ?? ''
      if (label) next.set('category', label)
    }
    const queryString = next.toString()
    const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}`
    window.history.replaceState(null, '', nextUrl)
  }

  search.addEventListener('input', () => applyFilter())
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = normalizeFilterValue(button.getAttribute('data-glossary-category') ?? '')
      activeCategory = activeCategory === category ? '' : category
      applyFilter()
    })
  })

  window.addEventListener('popstate', () => {
    const next = readParams()
    activeCategory = next.category
    search.value = next.query
    applyFilter(false)
  })

  applyFilter()
}

function HomePage(page: PublicPage) {
  return `
    ${Hero({
      brand: 'SANCTUM Protocol',
      eyebrow: 'Environmental Intelligence',
      title: 'Environmental Intelligence for Human Spaces',
      copy: 'SANCTUM Protocol is a research framework for understanding how environments shape sleep, attention, recovery, and human flourishing.',
      primary: ['Explore the Framework', '#framework'],
      secondary: ['View Research Pillars', '#research'],
      diagram: 'environmental-layers',
      visual: 'protocol',
    })}
    <main>
      <section id="framework" class="cinema-section split-section">
        <div>
          <p class="kicker">The Missing Layer</p>
          <h2>Buildings were designed for shelter. SANCTUM studies what they do to the human system.</h2>
        </div>
        <div class="large-copy">
          <p>Light changes alertness. Sound changes vigilance. Air changes comfort before language can name it. Nature changes orientation. Material changes touch and thermal feeling. Rhythm changes when a room asks the body to rise, focus, downshift, or recover.</p>
          <p>Environmental intelligence gives those forces a research framework. It turns rooms into legible human-centered environments without exposing implementation details or hidden evaluation machinery.</p>
        </div>
      </section>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Environmental Intelligence Framework</p>
          <h2>Environmental Intelligence Layers</h2>
        </div>
        ${OriginalProtocolVisual('environment', 'hero-diagram')}
        <div class="layer-grid">${frameworkLayers.map((layer, index) => SurfaceCard(layer.title, `${layer.text} Read the full ${frameworkPillars[index].shortTitle.toLowerCase()} environment hub.`, 'Framework Layer')).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Framework Layers</p>
          <h2>The diagram is now a navigable authority system.</h2>
        </div>
        <div class="layer-grid">${frameworkPillars.map((pillar) => FrameworkLayerCard(pillar)).join('')}</div>
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
          <p class="kicker">Research Framework</p>
          <h2>An authority library for environmental intelligence.</h2>
        </div>
        <div class="library-grid">
          ${LinkPanel('Research Pillars', 'Public themes across light, sound, air, nature, recovery, healthy buildings, and sensory architecture.', '/research', 'Library')}
          ${LinkPanel('Glossary', 'Public vocabulary for spatial intelligence, sanctuary design, room rhythm, and human-centered environments.', '/glossary', 'Vocabulary')}
          ${LinkPanel('Healthy Home Framework', 'A whole-home view of sleep, focus, recovery, air, light, sound, nature, and behavioral rhythm.', '/healthy-home-framework', 'Framework')}
        </div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Professional Layer</p>
          <h2>The bridge from category language to implementation.</h2>
        </div>
        <div class="library-grid">
          ${LinkPanel('Professional Frameworks', 'Client-ready environmental intelligence with clear content boundaries and no protected implementation detail.', '/professional-frameworks', 'Bridge')}
          ${LinkPanel('Room Archetypes', 'Sleep, focus, recovery, creative, and nature sanctuary patterns expressed in environmental language.', '/room-archetypes', 'Archetypes')}
          ${LinkPanel('Implementation Guides', 'Stepwise design protocol for light, sound, air, nature, material, rhythm, and room use.', '/implementation-guides', 'Guides')}
        </div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Public Environmental Intelligence Map</p>
          <h2>Move from category language into homes, buildings, workspaces, and environmental governance.</h2>
        </div>
        <div class="library-grid">
          ${LinkPanel('Framework Hub', 'A public map for the SANCTUM environmental intelligence category.', '/environmental-intelligence-framework', 'Hub')}
          ${LinkPanel('Homes', 'Environmental intelligence for homes, rooms, thresholds, and daily rhythm.', '/environmental-intelligence-for-homes', 'Hub')}
          ${LinkPanel('Buildings', 'Public language for buildings, shared spaces, and operations.', '/environmental-intelligence-for-buildings', 'Hub')}
          ${LinkPanel('Workspaces', 'Focus, quiet, air, light, and reset as workplace environment language.', '/environmental-intelligence-for-workspaces', 'Hub')}
        </div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Restoration Stories</p>
          <h2>Environmental stories and notes for recovery, nature, sound, and daily rhythm.</h2>
        </div>
        <div class="library-grid">
          ${LinkPanel('Stories', 'Narratives about restoration, quiet rooms, nature contact, and room rhythm.', '/stories', 'Stories')}
          ${LinkPanel('Research Library', 'Public research notes across light, sound, recovery, and nature.', '/research-library', 'Research')}
          ${LinkPanel('Field Guides', 'Practical guides for applying environmental intelligence one room at a time.', '/field-guides', 'Guides')}
        </div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Governance Boundary</p>
          <h2>Public language with clear boundaries for claims, partners, and strategic readers.</h2>
        </div>
        <div class="library-grid">
          ${LinkPanel('Environmental Governance', 'How SANCTUM keeps public language educational, bounded, and useful.', '/public-governance-boundary', 'Boundary')}
          ${LinkPanel('Partner Framework', 'An environmental bridge for aligned designers, builders, and operators.', '/partner-framework', 'Partner')}
          ${LinkPanel('Investor Brief', 'A category brief for environmental intelligence and SANCTUM Protocol.', '/investor-brief', 'Brief')}
        </div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Authority Hub Grid</p>
          <h2>Start with the major environmental intelligence hubs.</h2>
        </div>
        <div class="dense-link-grid">${authorityRecords.slice(0, 12).map((item) => LinkPanel(item.title, item.description, `/${item.slug}`, 'Authority Hub')).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Research Note Grid</p>
          <h2>Questions readers search before they trust the category.</h2>
        </div>
        <div class="dense-link-grid">${researchRecords.slice(0, 12).map((item) => LinkPanel(item.title, item.description, `/research-library/${item.slug}`, 'Research Note')).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Glossary Preview</p>
          <h2>Definitions that make the framework easier to navigate.</h2>
        </div>
        <div class="dense-link-grid">${glossaryEntries.slice(0, 12).map((entry) => LinkPanel(entry.term, entry.definition, `/glossary#${entry.slug}`, entry.category)).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Story Library Preview</p>
          <h2>Case-style narratives for rooms, buildings, and daily rhythm.</h2>
        </div>
        <div class="dense-link-grid">${storyRecords.slice(0, 9).map((item) => LinkPanel(item.title, item.description, `/stories/${item.slug}`, 'Story')).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Comparison Pages Preview</p>
          <h2>Search-language comparisons that explain what SANCTUM is not.</h2>
        </div>
        <div class="dense-link-grid">${comparisonRecords.slice(0, 9).map((item) => LinkPanel(item.title, item.description, `/comparisons/${item.slug}`, 'Comparison')).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Partner Pathways</p>
          <h2>Entry points for professional and strategic audiences.</h2>
        </div>
        <div class="dense-link-grid">${partnerRecords.slice(0, 10).map((item) => LinkPanel(item.title, item.description, `/partners/${item.slug}`, 'Partner Pathway')).join('')}</div>
      </section>
      <section class="cinema-section library-section">
        <div>
          <p class="kicker">Field Guides And Briefs</p>
          <h2>Practical reading paths for applying environmental intelligence.</h2>
        </div>
        <div class="dense-link-grid">
          ${seoEntries.filter((entry) => entry.collection === 'field-guides' || entry.collection === 'briefs').slice(0, 12).map((entry) => LinkPanel(entry.title, entry.description, `/articles/${entry.slug}`, entry.collection === 'briefs' ? 'Brief' : 'Field Guide')).join('')}
          ${LinkPanel('Investor Brief', 'A category brief for environmental intelligence, market timing, governance and safety framework, Studio, and Protocol language.', '/investor-brief', 'Investor Brief')}
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
      visual: 'environment',
    })}
    <main>
      ${page.seoCollectionItems?.length ? CollectionItemsSection(page) : ''}
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
      ${DeepSeoSection(page)}
      ${SeoArticleSection(page)}
      ${FrameworkPillarAuthoritySection(page)}
      ${FrameworkPillarBridgeSection(page)}
      ${page.seoCollectionItems?.length ? '' : CollectionItemsSection(page)}
      ${ChecklistBlock(page.checklist)}
      <section id="related" class="cinema-section">
        <div class="section-head">
          <p class="kicker">Related Pillars</p>
          <h2>Move through the research framework.</h2>
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
  visual: 'protocol' | 'environment'
}) {
  return `
    <header class="public-hero">
      <nav class="public-nav" aria-label="Primary navigation">
        <a class="brand" href="/"><span>S</span>${props.brand}</a>
        <div>
          <a href="/environmental-intelligence">Framework</a>
          <a href="/sleep-environments">Pillars</a>
          <a href="/professional-frameworks">Professional</a>
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
        ${OriginalProtocolVisual(props.visual, 'hero-visual')}
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

function FrameworkLayerCard(pillar: (typeof frameworkPillars)[number]) {
  const counts = frameworkPillarCounts(pillar)
  return `
    <a class="surface-card link-panel framework-layer-card" href="${pillar.route}">
      <span>Framework Layer</span>
      <h3>${pillar.shortTitle}</h3>
      <p>${pillar.definition}</p>
      <dl class="metric-row">
        <div><dt>Research</dt><dd>${counts.research}</dd></div>
        <div><dt>Stories</dt><dd>${counts.stories}</dd></div>
        <div><dt>Glossary</dt><dd>${counts.glossary}</dd></div>
      </dl>
      <strong>Read more</strong>
    </a>
  `
}

function ListPanel(title: string, items: string[]) {
  return `<section class="list-panel"><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></section>`
}

export function ChecklistBlock(items: string[]) {
  return `<section class="cinema-section">${ListPanel('Environmental Assessment Checklist', items)}</section>`
}

export function FaqBlock(items: PublicPage['faqs']) {
  return `<section class="cinema-section faq-section"><p class="kicker">FAQ</p><h2>Questions the research framework can answer.</h2><div class="faq-list">${items.map((item) => `<details open><summary>${item.question}</summary><p>${item.answer}</p><p>Why it matters: the answer helps readers translate a broad environmental idea into a room, building, or daily rhythm decision they can actually observe.</p><p>Practical example: start with one visible condition such as glare, sound reflection, stale air, visual load, missing nature contact, or a difficult transition before adding new objects.</p><p>Related reading: continue through the <a href="/glossary">glossary</a>, <a href="/research-library">research library</a>, and <a href="/stories">story library</a> for connected SANCTUM language.</p></details>`).join('')}</div></section>`
}

export function DisclaimerBlock() {
  return '<section class="disclaimer"><strong>Disclaimer</strong><p>Educational and informational only. Does not diagnose, treat, cure, or prevent disease.</p></section>'
}

function CTA(title: string, text: string, href: string, label: string) {
  return `<section class="cta"><p class="kicker">SANCTUM Protocol</p><h2>${title}</h2><p>${text}</p><a class="primary-link" href="${href}">${label}</a></section>`
}

function Footer() {
  return '<footer class="footer"><div><strong>SANCTUM Protocol</strong><span>Public framework for environmental intelligence.</span></div><a href="https://sanctumstudio.io">SANCTUM Studio is the design implementation layer.</a></footer>'
}

function DeepSeoSection(page: PublicPage) {
  return `
    <section class="cinema-section knowledge-section">
      <div class="section-head">
        <p class="kicker">Definition And Context</p>
        <h2>${page.h1} inside the larger environmental intelligence framework.</h2>
      </div>
      <div class="knowledge-grid">
        <article class="knowledge-panel">
          <h3>What It Means</h3>
          <p>${page.h1} describes a public way to read human spaces through sensory architecture and room rhythm. Instead of treating a room as decoration or equipment, SANCTUM Protocol studies how light, sound, air, material, nature, recovery cues, and behavioral timing combine into an ambient system.</p>
          <p>The aim is category clarity. A bedroom, studio, office, clinic, or home can be discussed in terms of what it does to attention, rest, downshift, comfort, and orientation. This keeps the language useful for designers and researchers while staying away from implementation details and medical claims.</p>
        </article>
        <article class="knowledge-panel">
          <h3>How It Differs From Conventional Design</h3>
          <p>Conventional design often begins with style, finish, furniture, or square footage. Environmental intelligence begins with human state. It asks whether the room supports sleep, focus, recovery, calm, or social presence, then studies the environmental layers that make that state easier or harder to sustain.</p>
          <p>This does not reject beauty. It makes beauty operational: quieter transitions, better light timing, more breathable space, living reference points, lower sensory friction, and a stronger connection between spatial intention and daily use.</p>
        </article>
        <article class="knowledge-panel">
          <h3>Practical Use</h3>
          <p>Use the framework by selecting one room and one intended state. Observe what the room asks from the body and attention across a real day. Then tune the strongest visible layer: glare, noise, stale air, hard reflection, cluttered circulation, missing nature contact, or a ritual that is too difficult to repeat.</p>
          <p>Small changes matter when they align. A better lamp, quieter edge, cleaner airflow path, softer material, clearer surface, and calmer evening rhythm can work together as an environmental design protocol for human-centered environments.</p>
        </article>
      </div>
    </section>
  `
}

function SeoArticleSection(page: PublicPage) {
  if (!page.seoBody) return ''

  return `
    <section class="cinema-section article-section">
      <div class="section-head">
        <p class="kicker">${page.seoCategory ?? 'Public Library'}</p>
        <h2>${page.h1}</h2>
        ${page.seoAudience ? `<p>Audience: ${page.seoAudience}</p>` : ''}
      </div>
      <div class="article-body">${page.seoBody.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
      ${ComparisonTable(page)}
      ${page.seoDisclaimer ? `<div class="disclaimer"><strong>Disclaimer</strong><p>${page.seoDisclaimer}</p></div>` : ''}
    </section>
  `
}

function FrameworkPillarAuthoritySection(page: PublicPage) {
  const pillar = frameworkPillars.find((item) => item.route === page.path)
  if (!pillar) return ''

  const content = frameworkPillarContent(pillar)
  return `
    <section class="cinema-section framework-authority-section">
      <div class="section-head">
        <p class="kicker">Connected Authority Hub</p>
        <h2>${pillar.shortTitle} connects glossary, research, stories, comparisons, and partner pathways.</h2>
      </div>
      <div class="two-column">
        ${ListPanel('Core Topics', pillar.topics)}
        ${ListPanel('How To Use This Hub', [
          `Start with ${pillar.shortTitle.toLowerCase()} as the primary room layer.`,
          'Review the glossary terms before writing implementation language.',
          'Use research notes and stories to ground the topic in public examples.',
          'Choose a partner pathway when the reader is a professional team.',
        ])}
      </div>
      <div class="library-grid framework-cluster">
        ${FrameworkCollectionPanel('Related Glossary Entries', content.glossary.slice(0, 12).map((entry) => ({ label: entry.term, href: `/glossary#${entry.slug}`, text: entry.definition })))}
        ${FrameworkCollectionPanel('Related Research Notes', content.research.slice(0, 12).map((item) => ({ label: item.title, href: `/research-library/${item.slug}`, text: item.description })))}
        ${FrameworkCollectionPanel('Related Stories', content.stories.slice(0, 9).map((item) => ({ label: item.title, href: `/stories/${item.slug}`, text: item.description })))}
        ${FrameworkCollectionPanel('Related Comparisons', content.comparisons.slice(0, 9).map((item) => ({ label: item.title, href: `/comparisons/${item.slug}`, text: item.description })))}
        ${FrameworkCollectionPanel('Related Partner Pages', content.partners.slice(0, 6).map((item) => ({ label: item.title, href: `/partners/${item.slug}`, text: item.description })))}
        ${FrameworkCollectionPanel('Related Framework Pillars', frameworkPillars.filter((item) => item.slug !== pillar.slug).map((item) => ({ label: item.shortTitle, href: item.route, text: item.description })))}
      </div>
    </section>
  `
}

function FrameworkCollectionPanel(title: string, links: { label: string; href: string; text: string }[]) {
  return `
    <article class="knowledge-panel framework-list-panel">
      <h3>${title}</h3>
      <div class="compact-link-list">${links.map((link) => `<a href="${link.href}"><strong>${link.label}</strong><span>${link.text}</span></a>`).join('')}</div>
    </article>
  `
}

function FrameworkPillarBridgeSection(page: PublicPage) {
  if (frameworkPillars.some((pillar) => pillar.route === page.path)) return ''
  const isRecordPage = page.path.startsWith('/research-library/') || page.path.startsWith('/stories/') || page.path.startsWith('/comparisons/') || page.path.startsWith('/partners/') || page.path.startsWith('/articles/')
  if (!isRecordPage) return ''

  const related = frameworkPillars
    .filter((pillar) => {
      const source = `${page.h1} ${page.description} ${page.label} ${page.intro} ${(page.seoBody ?? []).join(' ')}`.toLowerCase()
      return pillar.searchTerms.some((term) => source.includes(term.toLowerCase()))
    })
    .slice(0, 3)
  const pillars = related.length ? related : [frameworkPillars[0]]

  return `
    <section class="cinema-section">
      <div class="section-head">
        <p class="kicker">Framework Pillar Links</p>
        <h2>This page belongs to the larger environmental intelligence framework.</h2>
      </div>
      <div class="pillar-grid">${pillars.map((pillar) => LinkPanel(pillar.title, pillar.description, pillar.route, 'Related Pillar')).join('')}</div>
    </section>
  `
}

function ComparisonTable(page: PublicPage) {
  if (!page.seoTable?.length) return ''

  return `
    <div class="comparison-table" role="table" aria-label="${page.h1} comparison table">
      <div role="row"><strong role="columnheader">SANCTUM Lens</strong><strong role="columnheader">Conventional Lens</strong><strong role="columnheader">Difference</strong></div>
      ${page.seoTable.map((row) => `<div role="row"><span role="cell">${row.left}</span><span role="cell">${row.right}</span><span role="cell">${row.difference}</span></div>`).join('')}
    </div>
  `
}

function CollectionItemsSection(page: PublicPage) {
  if (!page.seoCollectionItems?.length) return ''

  return `
    <section class="cinema-section">
      <div class="section-head">
        <p class="kicker">Collection Index</p>
        <h2>${page.h1} entries.</h2>
      </div>
      <div class="pillar-grid">${page.seoCollectionItems.map((item) => LinkPanel(item.label, item.text, item.href, 'Library Entry')).join('')}</div>
    </section>
  `
}

function GlossaryPage(page: PublicPage) {
  const alphabetical = [...glossaryEntries].sort((a, b) => a.term.localeCompare(b.term))
  const categories = Array.from(new Set(alphabetical.map((entry) => entry.category))).sort((a, b) => a.localeCompare(b))
  return `
    ${Hero({
      brand: 'SANCTUM Protocol',
      eyebrow: 'Public Vocabulary',
      title: page.h1,
      copy: page.intro,
      primary: ['Search Terms', '#glossary-search'],
      secondary: ['Research Library', '/research-library'],
      diagram: page.diagram,
      visual: 'environment',
    })}
    <main>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Glossary Search</p>
          <h2>Environmental intelligence vocabulary.</h2>
        </div>
        <input id="glossary-search" class="glossary-search" type="search" placeholder="Search environmental intelligence, recovery, rhythm, sound, light, nature..." aria-label="Search glossary" />
        <div class="category-strip" role="group" aria-label="Filter glossary categories">
          <button type="button" class="is-active" data-glossary-category="" aria-pressed="true">All</button>
          ${categories.map((category) => `<button type="button" data-glossary-category="${category}" aria-pressed="false">${category}</button>`).join('')}
        </div>
        <p id="glossary-count" class="glossary-count">Showing ${alphabetical.length} of ${alphabetical.length} terms</p>
      </section>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Alphabetical Listing</p>
          <h2>${alphabetical.length} public SANCTUM terms.</h2>
        </div>
        <div id="glossary-empty" class="empty-state" hidden>No glossary terms match this filter. Clear the search or choose All.</div>
        <div id="glossary-list" class="glossary-grid">${alphabetical.map(GlossaryCard).join('')}</div>
      </section>
      <section class="cinema-section">
        <div class="section-head">
          <p class="kicker">Category Listing</p>
          <h2>Topic clusters.</h2>
        </div>
        <div class="pillar-grid">${categories.map((category) => LinkPanel(category, `${glossaryEntries.filter((entry) => entry.category === category).length} glossary terms linked to ${category.toLowerCase()}.`, `#${slugFor(category)}`, 'Glossary Category')).join('')}</div>
      </section>
      ${FaqBlock(page.faqs)}
      ${DisclaimerBlock()}
      ${Footer()}
      ${Schema({ ...page, seoCollectionItems: alphabetical.map((entry) => ({ label: entry.term, href: `/glossary#${entry.slug}`, text: entry.definition })) })}
    </main>
  `
}

function GlossaryCard(entry: (typeof glossaryEntries)[number]) {
  const searchText = [entry.term, entry.slug, entry.definition, entry.category, entry.whyItMatters, ...entry.relatedConcepts, ...entry.relatedPages].join(' ').toLowerCase()
  const pillarBadges = pillarsForGlossaryEntry(entry)
  return `
    <article id="${entry.slug}" class="surface-card glossary-card" data-term="${entry.term.toLowerCase()}" data-category="${entry.category.toLowerCase()}" data-category-label="${entry.category}" data-search="${searchText}">
      <span>${entry.category}</span>
      <h3>${entry.term}</h3>
      <div class="pillar-badge-row">${pillarBadges.map((pillar) => `<a href="${pillar.route}">${pillar.shortTitle}</a>`).join('')}</div>
      <p>${entry.definition}</p>
      <p><strong>Why it matters:</strong> ${entry.whyItMatters}</p>
      <div class="mini-link-row">${entry.relatedConcepts.map((term) => `<a href="/glossary#${slugFor(term)}">${term}</a>`).join('')}</div>
      <div class="mini-link-row">${entry.relatedPages.map((href) => `<a href="${href}">${href.replace('/', '') || 'home'}</a>`).join('')}</div>
    </article>
  `
}

function slugFor(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function PublicDiagram(kind: PublicPage['diagram'], className = '') {
  return OriginalProtocolVisual(kind === 'environmental-layers' ? 'environment' : 'protocol', className)
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
      ...(page.seoCollectionItems ? [
        { '@type': 'CollectionPage', name: page.h1, description: page.description, url: page.canonical },
        { '@type': 'ItemList', name: `${page.h1} entries`, itemListElement: page.seoCollectionItems.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.label, url: `${page.canonical.replace(/\/[^/]*$/, '')}${item.href}` })) },
      ] : []),
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

function setMetaProperty(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
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
