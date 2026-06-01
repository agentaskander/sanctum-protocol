import type { DiagramKind, PublicPage } from './siteContent'
import { glossaryEntries } from './glossaryLibrary'

export type AuthorityRecord = {
  slug: string
  title: string
  description: string
  category: string
  audience: string
  kind: 'authority' | 'research' | 'comparison' | 'story' | 'partner'
  body: string[]
  checklist: string[]
  faq: { question: string; answer: string }[]
  links: { label: string; href: string; text: string }[]
  diagram: DiagramKind
  table?: { left: string; right: string; difference: string }[]
}

const origin = 'https://sanctumprotocol.org'
const updated = 'May 31, 2026'

const diagrams: DiagramKind[] = ['environmental-layers', 'sleep-factors', 'recovery-framework', 'healthy-home', 'nature-ladder', 'sound-field']

const authorityTitles = [
  'What Is Environmental Intelligence',
  'Environmental Intelligence Framework',
  'Environmental Intelligence For Homes',
  'Environmental Intelligence For Workspaces',
  'Environmental Intelligence For Buildings',
  'Sensory Architecture',
  'Restoration Environments',
  'Recovery Architecture',
  'Circadian Design',
  'Biophilic Systems',
  'Environmental Wellness',
  'Spatial Intelligence',
  'Room Rhythm',
  'Acoustic Environment Design',
  'Vibroacoustic Design',
  'Nature As Infrastructure',
  'Human-Centered Environments',
  'Healthy Home Framework',
  'Recovery Spaces',
  'Sensory Environments',
  'Light As Environmental Protocol',
  'Sound As Spatial Architecture',
  'Environmental Assessment',
  'Environmental Governance',
  'Future Of Human Spaces',
]

const researchQuestions = [
  'How does evening light shape room downshift?',
  'What makes a workspace easier to focus in?',
  'How do recovery rooms reduce environmental friction?',
  'How does nature contact change room orientation?',
  'What sound conditions make quiet feel stable?',
  'How does daylight support daily rhythm?',
  'Which material cues support tactile calm?',
  'How does air freshness affect perceived room comfort?',
  'How do routines turn rooms into behavioral environments?',
  'How can architecture support restoration without medical claims?',
]

const comparisonTitles = [
  'Environmental Intelligence vs Smart Buildings',
  'Recovery Spaces vs Wellness Rooms',
  'Biophilic Design vs Interior Design',
  'Sensory Architecture vs Architecture',
  'Circadian Design vs Lighting Design',
  'Recovery Architecture vs Healthcare Design',
  'Human-Centered Environments vs Traditional Design',
  'Environmental Wellness vs Wellness Design',
  'Environmental Intelligence vs Home Automation',
  'Nature Systems vs Landscaping',
  'Healthy Homes vs Decorated Homes',
  'Acoustic Ecology vs Noise Control',
  'Room Rhythm vs Interior Styling',
  'Spatial Intelligence vs Space Planning',
  'Light Protocols vs Fixture Selection',
  'Sound Architecture vs Speaker Systems',
  'Restoration Environments vs Relaxation Rooms',
  'Material Design vs Finish Selection',
  'Environmental Assessment vs Home Audit',
  'Human Spaces vs Real Estate Assets',
  'Sensory Environments vs Smart Sensors',
  'Recovery Architecture vs Spa Design',
  'Nature Infrastructure vs Plant Styling',
  'Environmental Governance vs Marketing Claims',
  'SANCTUM Protocol vs Conventional Wellness Content',
]

const storyTitles = [
  'The Bedroom That Became A Recovery Space',
  'The Office Designed For Focus',
  'The Sanctuary Apartment',
  'The Recovery Room',
  'Designing Around Circadian Rhythm',
  'The Nature Room',
  'The Quiet Workspace',
  'The Light-First Home',
  'The Sound-Conscious Space',
  'The Human-Centered Building',
  'The Apartment With A Calmer Evening',
  'The Studio That Protected Creative Flow',
  'The Reading Room With Better Rhythm',
  'The Hotel Room Designed For Recovery',
  'The Small Home With Better Air Cues',
  'The Workspace With A Softer Reset',
  'The Family Room With Less Sensory Load',
  'The Bedroom With Darkness Protection',
  'The Courtyard As Restoration Layer',
  'The Office With Acoustic Privacy',
  'The Material Palette That Reduced Friction',
  'The Morning Room',
  'The Evening Transition Space',
  'The Nature Threshold',
  'The Building That Learned Human Rhythm',
]

const partnerTitles = ['For Architects', 'For Builders', 'For Developers', 'For Wellness Operators', 'For Hotels', 'For Property Owners', 'For Designers', 'For Researchers', 'For Investors', 'For Strategic Partners']

function slugFor(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function baseLinks(index: number) {
  const gloss = glossaryEntries.slice(index % 80, index % 80 + 3)
  return [
    ...gloss.map((entry) => ({ label: entry.term, href: `/glossary#${entry.slug}`, text: entry.definition })),
    { label: authorityTitles[(index + 1) % authorityTitles.length], href: `/${slugFor(authorityTitles[(index + 1) % authorityTitles.length])}`, text: 'Related authority page in the SANCTUM Protocol library.' },
    { label: authorityTitles[(index + 5) % authorityTitles.length], href: `/${slugFor(authorityTitles[(index + 5) % authorityTitles.length])}`, text: 'Adjacent environmental intelligence authority page.' },
    { label: `Research Note ${((index + 3) % 50) + 1}`, href: `/research-library/${researchSlug((index + 3) % 50)}`, text: 'Related research note for research framework context.' },
    { label: `Research Note ${((index + 13) % 50) + 1}`, href: `/research-library/${researchSlug((index + 13) % 50)}`, text: 'Supporting public research note.' },
    { label: storyTitles[index % storyTitles.length], href: `/stories/${slugFor(storyTitles[index % storyTitles.length])}`, text: 'Narrative case study in the story library.' },
    { label: partnerTitles[index % partnerTitles.length], href: `/partners/${slugFor(partnerTitles[index % partnerTitles.length])}`, text: 'Partner-facing application page.' },
  ]
}

function longBody(title: string, category: string, kind: AuthorityRecord['kind']) {
  const sections = [
    'Definition',
    'Context',
    'Environmental Implications',
    'Design Reading',
    'Practical Application',
    'Research Framing',
    'Governance Boundary',
    'Partner Relevance',
    'Implementation Language',
    'Public Takeaway',
  ]
  return sections.flatMap((section, index) => [
    `${section}: ${title} gives SANCTUM Protocol a public way to discuss ${category.toLowerCase()} through visible environmental conditions rather than hidden machinery. The page reads light, sound, air, material, nature, rhythm, spatial clarity, and daily use as a connected field that shapes how a room is experienced.`,
    `For public readers, the useful move is to begin with the intended human state and then observe the room. A space may need sleep protection, focus continuity, recovery softness, nature contact, social ease, or a clearer transition from one part of the day to another. ${title} keeps that reading practical, non-medical, and grounded in the built environment.`,
    `The authority value is cumulative. This ${kind} page links glossary language, research notes, partner pages, and story examples so the topic functions as part of a larger knowledge cluster. It does not publish protected ontology detail, hidden evaluation, system maps, implementation workflows, or operational references.`,
    index % 2 === 0
      ? `The design lens is intentionally plain: reduce friction before adding complexity. Glare, noise, stale air, hard reflection, confusing circulation, object density, missing nature cues, and difficult rituals can all make a room work against its purpose. Public SANCTUM language names those conditions so teams can discuss them without overclaiming.`
      : `The framework also supports professional translation. Architects, designers, builders, operators, researchers, and investors can use the page to understand the category while keeping category authority separate from implementation systems and clear boundaries around claims.`,
  ])
}

function checklist(title: string) {
  return [
    `Define the public question behind ${title}.`,
    'Name the intended room state before naming interventions.',
    'Observe light, sound, air, material, nature, rhythm, and spatial clarity.',
    'Link the topic to at least three glossary concepts.',
    'Use research notes as context rather than medical proof.',
    'Keep claims educational, bounded, and environmental.',
  ]
}

function faq(title: string) {
  return [
    { question: `What is ${title}?`, answer: `${title} is part of the SANCTUM Protocol public authority library for environmental intelligence and human-centered spaces.` },
    { question: 'Does this expose SANCTUM implementation details?', answer: 'No. It uses category language and avoids protected ontology detail, evaluation machinery, system maps, and implementation workflows.' },
    { question: 'Is this medical advice?', answer: 'No. It is educational design guidance for understanding environmental conditions.' },
    { question: 'How should teams use it?', answer: 'Use it as a vocabulary, briefing, research, and linking page for environmental intelligence conversations.' },
  ]
}

function record(title: string, index: number, kind: AuthorityRecord['kind'], pathPrefix = ''): AuthorityRecord {
  const category = ['Environmental Intelligence', 'Sensory Architecture', 'Restoration Environments', 'Research Framework', 'Partner Framework'][index % 5]
  return {
    slug: slugFor(title),
    title,
    description: `${title} explained through SANCTUM Protocol environmental intelligence language.`,
    category,
    audience: ['Designers', 'Researchers', 'Partners', 'Investors', 'Home and building teams'][index % 5],
    kind,
    body: longBody(title, category, kind),
    checklist: checklist(title),
    faq: faq(title),
    links: baseLinks(index),
    diagram: diagrams[index % diagrams.length],
    table: pathPrefix === '/comparisons' ? [
      { left: title.split(' vs ')[0] || 'Environmental intelligence', right: title.split(' vs ')[1] || 'Conventional approach', difference: 'SANCTUM begins with human state, visible conditions, and environmental language.' },
      { left: 'Room rhythm, light, sound, air, material, and nature', right: 'Technology, style, or program treated in isolation', difference: 'The SANCTUM view connects layers into a coherent human-centered environment.' },
      { left: 'Educational category framework', right: 'Narrow product or marketing claim', difference: 'The research framework supports authority without exposing implementation systems.' },
    ] : undefined,
  }
}

function researchSlug(index: number) {
  return slugFor(`${researchQuestions[index % researchQuestions.length]} ${Math.floor(index / researchQuestions.length) + 1}`)
}

export const authorityRecords = authorityTitles.map((title, index) => record(title, index, 'authority'))

export const researchRecords = Array.from({ length: 50 }, (_, index) => {
  const title = `${researchQuestions[index % researchQuestions.length]} ${Math.floor(index / researchQuestions.length) + 1}`
  return { ...record(title, index, 'research', '/research-library'), slug: researchSlug(index), category: ['Sleep', 'Focus', 'Recovery', 'Nature', 'Sound', 'Light', 'Materials', 'Air', 'Behavior', 'Architecture'][index % 10] }
})

export const comparisonRecords = comparisonTitles.map((title, index) => record(title, index, 'comparison', '/comparisons'))
export const storyRecords = storyTitles.map((title, index) => record(title, index, 'story', '/stories'))
export const partnerRecords = partnerTitles.map((title, index) => record(title, index, 'partner', '/partners'))

const collections = [
  { path: '/research-library', title: 'Research Library', records: researchRecords },
  { path: '/comparisons', title: 'Comparisons', records: comparisonRecords },
  { path: '/stories', title: 'Stories', records: storyRecords },
  { path: '/partners', title: 'Partners', records: partnerRecords },
]

function toPage(record: AuthorityRecord, path: string): PublicPage {
  return {
    path,
    title: `${record.title} | SANCTUM Protocol`,
    description: record.description,
    canonical: `${origin}${path}`,
    h1: record.title,
    intro: record.description,
    label: record.category,
    principle: record.body[0],
    observe: record.body.slice(1, 4),
    tune: record.body.slice(4, 7),
    checklist: record.checklist,
    faqs: record.faq,
    links: record.links,
    cta: `Continue through the SANCTUM Protocol ${record.category.toLowerCase()} cluster.`,
    diagram: record.diagram,
    updated,
    seoBody: record.body,
    seoCategory: record.category,
    seoAudience: record.audience,
    seoDisclaimer: 'Educational and informational only. Does not diagnose, treat, cure, or prevent disease.',
    seoTable: record.table,
  }
}

export const authorityPages: PublicPage[] = authorityRecords.map((item) => toPage(item, `/${item.slug}`))
export const researchPages: PublicPage[] = researchRecords.map((item) => toPage(item, `/research-library/${item.slug}`))
export const comparisonPages: PublicPage[] = comparisonRecords.map((item) => toPage(item, `/comparisons/${item.slug}`))
export const storyPages: PublicPage[] = storyRecords.map((item) => toPage(item, `/stories/${item.slug}`))
export const partnerPages: PublicPage[] = partnerRecords.map((item) => toPage(item, `/partners/${item.slug}`))

export const investorBriefPage: PublicPage = {
  ...toPage({
    ...record('Investor Brief', 68, 'partner'),
    slug: 'investor-brief',
    title: 'Investor Brief',
    description: 'An investor brief for SANCTUM Protocol, category creation, Studio, Protocol, content boundaries, and market timing.',
    body: [
      'Market: SANCTUM Protocol defines environmental intelligence as a public category for human-centered spaces. The market opportunity sits between architecture, wellness, healthy homes, hospitality, workplace design, and research-backed environmental language.',
      'Category Creation: The category is not framed as a device, a decor trend, or a single wellness claim. It is a language layer for rooms, buildings, and daily rhythm: light, sound, air, material, nature, spatial clarity, and recovery cues organized around human state.',
      'Environmental Intelligence: SANCTUM uses public language to help readers understand what environments repeatedly ask of people. That includes sleep protection, focus support, downshift, nature contact, acoustic privacy, breathable space, and room rhythm.',
      'Why Now: Homes, workplaces, hotels, and wellness spaces are all being asked to support more human functions with fewer clear frameworks. Environmental intelligence gives these audiences a shared vocabulary that is broader than smart buildings and more precise than lifestyle wellness.',
      'Future Roadmap: The roadmap is content authority, glossary depth, research-note coverage, partner pages, stories, and professional category education. Implementation remains separate from public explanation.',
      'Studio: SANCTUM Studio is the design implementation layer. Studio pages can explain room archetypes, stories, guides, and partner previews without exposing protected tooling or ontology detail.',
      'Protocol: SANCTUM Protocol is the public framework layer. It builds authority around environmental intelligence, restoration environments, sensory architecture, room rhythm, and human-centered buildings.',
      'Content Boundaries: Public pages stay educational and bounded. They do not publish protected ontology detail, evaluation methods, system maps, operational links, prompt material, or operational workflows.',
      'Category Depth: SANCTUM separates public category authority from protected implementation systems. The public layer builds language, trust, and discoverability; the protected layer preserves canonical framework and operating depth.',
      ...longBody('Investor Brief', 'Partner Framework', 'partner'),
    ],
  }, '/investor-brief'),
}

export const authorityCollectionPages: PublicPage[] = collections.map((collection, index) => ({
  path: collection.path,
  title: `${collection.title} | SANCTUM Protocol`,
  description: `${collection.title} for SANCTUM Protocol environmental intelligence authority.`,
  canonical: `${origin}${collection.path}`,
  h1: collection.title,
  intro: `A public authority collection for ${collection.title.toLowerCase()} across environmental intelligence, research, stories, comparisons, and partner language.`,
  label: 'Authority Collection',
  principle: `This collection builds public depth while preserving protected SANCTUM implementation depth.`,
  observe: ['Topic cluster coverage', 'Public glossary language', 'Research and partner relevance'],
  tune: ['Use related links deliberately', 'Keep claims bounded', 'Preserve implementation boundaries'],
  checklist: checklist(collection.title),
  faqs: faq(collection.title),
  links: collection.records.slice(0, 12).map((item) => ({ label: item.title, href: `${collection.path}/${item.slug}`, text: item.description })),
  cta: `Explore ${collection.title.toLowerCase()} through the SANCTUM Protocol authority library.`,
  diagram: diagrams[index % diagrams.length],
  updated,
  seoCollectionItems: collection.records.map((item) => ({ label: item.title, href: `${collection.path}/${item.slug}`, text: item.description })),
}))

export const allAuthorityRoutes = [
  ...authorityPages,
  investorBriefPage,
  ...authorityCollectionPages,
  ...researchPages,
  ...comparisonPages,
  ...storyPages,
  ...partnerPages,
]
