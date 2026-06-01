import type { DiagramKind, PublicPage } from './siteContent'
import { comparisonRecords, partnerRecords, researchRecords, storyRecords } from './authorityLibrary'
import { glossaryEntries, type GlossaryEntry } from './glossaryLibrary'

export type FrameworkPillarSlug = 'physical' | 'sensory' | 'cognitive' | 'recovery' | 'nature' | 'rhythm'

export type FrameworkPillar = {
  slug: FrameworkPillarSlug
  title: string
  shortTitle: string
  route: string
  description: string
  definition: string
  topics: string[]
  searchTerms: string[]
  partnerAudiences: string[]
  diagram: DiagramKind
}

const origin = 'https://sanctumprotocol.org'
const updated = 'May 31, 2026'

export const frameworkPillars: FrameworkPillar[] = [
  {
    slug: 'physical',
    title: 'Physical Environment',
    shortTitle: 'Physical',
    route: '/environment/physical',
    description: 'Materials, temperature, air, layout, furniture, architecture, environmental friction, and environmental support as the physical base of environmental intelligence.',
    definition: 'The physical environment is the built, material, thermal, spatial, and breathable layer of a room. It includes what the body touches, moves through, sits in, breathes, and repeatedly encounters before attention turns to style.',
    topics: ['Materials', 'Temperature', 'Air', 'Layout', 'Furniture', 'Architecture', 'Environmental friction', 'Environmental support'],
    searchTerms: ['material', 'temperature', 'thermal', 'air', 'breathable', 'layout', 'furniture', 'architecture', 'built', 'object density', 'circulation', 'environmental friction', 'environmental support'],
    partnerAudiences: ['For Architects', 'For Builders', 'For Developers', 'For Property Owners'],
    diagram: 'healthy-home',
  },
  {
    slug: 'sensory',
    title: 'Sensory Environment',
    shortTitle: 'Sensory',
    route: '/environment/sensory',
    description: 'Sound, light, texture, scent, perception, attention, and environmental signaling as the felt field of a room.',
    definition: 'The sensory environment is the layer people feel before they explain it. Brightness, glare, acoustic reflection, texture, scent, vibration, and contrast shape attention, comfort, and perceived safety.',
    topics: ['Sound', 'Light', 'Texture', 'Scent', 'Perception', 'Attention', 'Environmental signaling'],
    searchTerms: ['sensory', 'sound', 'acoustic', 'vibration', 'light', 'glare', 'texture', 'scent', 'perception', 'attention', 'signaling', 'ambient', 'quiet'],
    partnerAudiences: ['For Designers', 'For Wellness Operators', 'For Hotels', 'For Researchers'],
    diagram: 'sound-field',
  },
  {
    slug: 'cognitive',
    title: 'Cognitive Environment',
    shortTitle: 'Cognitive',
    route: '/environment/cognitive',
    description: 'Focus, decision making, mental clarity, cognitive load, distraction, attention, and deep work as spatial conditions.',
    definition: 'The cognitive environment is the part of a room that helps or interrupts attention. It includes visual load, task orientation, interruption paths, decision fatigue, and the clarity of what the space is asking a person to do.',
    topics: ['Focus', 'Decision making', 'Mental clarity', 'Cognitive load', 'Distraction', 'Attention', 'Deep work'],
    searchTerms: ['focus', 'cognitive', 'attention', 'clarity', 'decision', 'distraction', 'visual load', 'deep work', 'spatial clarity', 'task', 'workspace', 'interruption'],
    partnerAudiences: ['For Developers', 'For Designers', 'For Researchers', 'For Strategic Partners'],
    diagram: 'environmental-layers',
  },
  {
    slug: 'recovery',
    title: 'Recovery Environment',
    shortTitle: 'Recovery',
    route: '/environment/recovery',
    description: 'Sleep, recovery, restoration, calm, stress reduction, and recovery spaces as a room-scale downshift system.',
    definition: 'The recovery environment is the room layer that protects downshift, privacy, sleep readiness, tactile softness, low contrast, quiet, and gradual return. It is educational design language, not medical treatment language.',
    topics: ['Sleep', 'Recovery', 'Restoration', 'Calm', 'Stress reduction', 'Recovery spaces'],
    searchTerms: ['recovery', 'restoration', 'sleep', 'calm', 'downshift', 'sanctuary', 'restorative', 'privacy', 'softness', 'darkness', 'stress', 'return'],
    partnerAudiences: ['For Wellness Operators', 'For Hotels', 'For Designers', 'For Property Owners'],
    diagram: 'recovery-framework',
  },
  {
    slug: 'nature',
    title: 'Nature Environment',
    shortTitle: 'Nature',
    route: '/environment/nature',
    description: 'Plants, water, views, biophilic design, outdoor access, nature systems, and environmental restoration as living infrastructure.',
    definition: 'The nature environment is the living reference layer of a room or building. Views, plants, daylight movement, water, natural materials, outdoor thresholds, and seasonal cues help a space feel connected to larger systems.',
    topics: ['Plants', 'Water', 'Views', 'Biophilic design', 'Outdoor access', 'Nature systems', 'Environmental restoration'],
    searchTerms: ['nature', 'biophilic', 'plants', 'water', 'views', 'outdoor', 'living', 'natural', 'restoration', 'threshold', 'material', 'seasonal'],
    partnerAudiences: ['For Architects', 'For Designers', 'For Developers', 'For Hotels'],
    diagram: 'nature-ladder',
  },
  {
    slug: 'rhythm',
    title: 'Rhythm Environment',
    shortTitle: 'Rhythm',
    route: '/environment/rhythm',
    description: 'Circadian rhythm, morning light, evening light, behavioral rhythm, environmental rhythm, temporal design, and daily cycles.',
    definition: 'The rhythm environment is the timing layer of environmental intelligence. It studies how morning activation, daytime focus, evening transition, darkness, maintenance, rituals, and daily cycles are supported by space.',
    topics: ['Circadian rhythm', 'Morning light', 'Evening light', 'Behavioral rhythm', 'Environmental rhythm', 'Temporal design', 'Daily cycles'],
    searchTerms: ['rhythm', 'circadian', 'morning', 'evening', 'daily', 'cycle', 'light timing', 'ritual', 'transition', 'temporal', 'behavioral', 'activation', 'downshift'],
    partnerAudiences: ['For Designers', 'For Wellness Operators', 'For Hotels', 'For Strategic Partners'],
    diagram: 'sleep-factors',
  },
]

export function frameworkPillarForSlug(slug: string) {
  return frameworkPillars.find((pillar) => pillar.slug === slug)
}

export function pillarsForGlossaryEntry(entry: GlossaryEntry) {
  const text = `${entry.term} ${entry.slug} ${entry.category} ${entry.definition} ${entry.whyItMatters} ${entry.relatedConcepts.join(' ')} ${entry.relatedPages.join(' ')}`.toLowerCase()
  const matches = frameworkPillars.filter((pillar) => pillar.searchTerms.some((term) => text.includes(term.toLowerCase())))
  if (matches.length) return matches
  return [frameworkPillars[0]]
}

export function pillarsForRecord(record: { title: string; description: string; category: string; body?: string[] }) {
  const text = `${record.title} ${record.description} ${record.category} ${(record.body ?? []).join(' ')}`.toLowerCase()
  const matches = frameworkPillars.filter((pillar) => pillar.searchTerms.some((term) => text.includes(term.toLowerCase())))
  if (matches.length) return matches.slice(0, 2)
  return [frameworkPillars[0]]
}

function relatedGlossary(pillar: FrameworkPillar) {
  return glossaryEntries.filter((entry) => pillarsForGlossaryEntry(entry).some((match) => match.slug === pillar.slug))
}

function relatedResearch(pillar: FrameworkPillar) {
  return researchRecords.filter((record) => pillarsForRecord(record).some((match) => match.slug === pillar.slug))
}

function relatedStories(pillar: FrameworkPillar) {
  return storyRecords.filter((record) => pillarsForRecord(record).some((match) => match.slug === pillar.slug))
}

function relatedComparisons(pillar: FrameworkPillar) {
  return comparisonRecords.filter((record) => pillarsForRecord(record).some((match) => match.slug === pillar.slug))
}

function relatedPartners(pillar: FrameworkPillar) {
  const direct = partnerRecords.filter((record) => pillar.partnerAudiences.includes(record.title))
  return direct.length ? direct : partnerRecords.filter((record) => pillarsForRecord(record).some((match) => match.slug === pillar.slug))
}

function longBody(pillar: FrameworkPillar) {
  const sections = [
    'Definition',
    'Why It Matters',
    'Room Reading',
    'Research Context',
    'Glossary Context',
    'Story Context',
    'Partner Context',
    'Design Translation',
    'Assessment Lens',
    'Daily Use',
    'Human-Centered Design',
    'Environmental Support',
  ]

  return sections.flatMap((section, index) => [
    `${section}: ${pillar.title} is one of the six public framework layers behind SANCTUM Protocol. It gives readers a practical way to read ${pillar.topics.join(', ').toLowerCase()} as environmental conditions that shape how a room supports sleep, focus, recovery, comfort, and human-centered daily use. The page is intentionally public: it uses glossary language, research notes, stories, comparisons, and partner pages rather than protected implementation methods.`,
    `${pillar.shortTitle} becomes useful when it is connected to adjacent layers. A material choice can change acoustic feeling. A light condition can alter rhythm. A layout decision can reduce cognitive load. A plant, view, threshold, or ritual can turn a static room into a more legible environment. SANCTUM treats those relationships as public authority content without publishing private ontology detail or hidden evaluation machinery.`,
    `In practice, teams should start with one intended state and one real room. The question is not whether the room is stylish. The question is what the room repeatedly asks of the person using it. Does it ask for vigilance, recovery, attention, movement, calm, activation, or unnecessary effort? ${pillar.title} gives the answer a stable vocabulary that can be linked to glossary definitions, research notes, story examples, comparisons, and partner-facing pages.`,
    index % 2 === 0
      ? `The public framework stays educational and bounded. It avoids medical claims, protected evaluation methods, or implementation logic. Its role is to make environmental intelligence visible enough for homeowners, designers, builders, operators, researchers, and strategic partners to discuss the category with precision. That is why this hub links every major section back to related concepts rather than standing alone.`
      : `The authority value comes from repetition and connection. A reader who begins here can move to a glossary term, then a research note, then a story, then a comparison page, then a partner pathway. That linked path turns the diagram from decoration into a navigable knowledge system for environmental intelligence.`
  ])
}

function checklistFor(pillar: FrameworkPillar) {
  return [
    `Name the ${pillar.shortTitle.toLowerCase()} condition before changing the room.`,
    `Connect ${pillar.topics.slice(0, 3).join(', ').toLowerCase()} to the intended human state.`,
    'Use at least three related glossary terms to make the observation precise.',
    'Review one related research note and one story before writing a brief.',
    'Compare the SANCTUM lens with a conventional design lens.',
    'Choose the partner pathway that best fits the project audience.',
  ]
}

function faqFor(pillar: FrameworkPillar) {
  return [
    { question: `What is the ${pillar.title}?`, answer: `${pillar.definition} It matters because this layer turns a visible room condition into part of the larger environmental intelligence framework.` },
    { question: `How does ${pillar.shortTitle.toLowerCase()} connect to the other framework pillars?`, answer: `${pillar.shortTitle} works with ${frameworkPillars.filter((item) => item.slug !== pillar.slug).slice(0, 3).map((item) => item.shortTitle).join(', ')}, and the remaining framework layers. No pillar is isolated because human spaces are experienced as combined conditions.` },
    { question: 'Is this medical advice?', answer: 'No. This hub is educational environmental design language. It does not diagnose, treat, cure, prevent disease, or make claims about clinical outcomes.' },
    { question: 'How should professionals use this hub?', answer: 'Use it as a public briefing layer. Begin with the definition, review related glossary terms, connect research notes and stories, then choose the partner pathway that fits the project.' },
  ]
}

export function frameworkPillarCounts(pillar: FrameworkPillar) {
  return {
    glossary: relatedGlossary(pillar).length,
    research: relatedResearch(pillar).length,
    stories: relatedStories(pillar).length,
    comparisons: relatedComparisons(pillar).length,
    partners: relatedPartners(pillar).length,
  }
}

export function frameworkPillarContent(pillar: FrameworkPillar) {
  return {
    glossary: relatedGlossary(pillar),
    research: relatedResearch(pillar),
    stories: relatedStories(pillar),
    comparisons: relatedComparisons(pillar),
    partners: relatedPartners(pillar),
    body: longBody(pillar),
  }
}

export const frameworkPillarPages: PublicPage[] = frameworkPillars.map((pillar) => {
  const content = frameworkPillarContent(pillar)
  return {
    path: pillar.route,
    title: `${pillar.title} | SANCTUM Protocol`,
    description: pillar.description,
    canonical: `${origin}${pillar.route}`,
    h1: pillar.title,
    intro: pillar.definition,
    label: 'Framework Pillar',
    principle: pillar.definition,
    diagram: pillar.diagram,
    updated,
    observe: pillar.topics.map((topic) => `${topic} as a visible environmental condition.`),
    tune: [
      `Connect ${pillar.shortTitle.toLowerCase()} observations to one intended room state.`,
      'Use glossary terms and research notes before writing implementation language.',
      'Link the page to stories, comparison pages, and partner pathways so the topic is not isolated.',
    ],
    checklist: checklistFor(pillar),
    faqs: faqFor(pillar),
    links: [
      ...frameworkPillars.filter((item) => item.slug !== pillar.slug).map((item) => ({ label: item.title, href: item.route, text: item.description })),
      ...content.glossary.slice(0, 3).map((entry) => ({ label: entry.term, href: `/glossary#${entry.slug}`, text: entry.definition })),
    ].slice(0, 12),
    cta: `Continue from ${pillar.title} into the connected SANCTUM Protocol authority library.`,
    seoBody: content.body,
    seoCategory: 'Environmental Intelligence Framework Pillar',
    seoAudience: 'Homeowners, designers, researchers, partners, and strategic readers',
    seoDisclaimer: 'Educational and informational only. Does not diagnose, treat, cure, or prevent disease.',
    seoCollectionItems: [
      ...content.glossary.slice(0, 12).map((entry) => ({ label: entry.term, href: `/glossary#${entry.slug}`, text: entry.definition })),
      ...content.research.slice(0, 8).map((record) => ({ label: record.title, href: `/research-library/${record.slug}`, text: record.description })),
      ...content.stories.slice(0, 6).map((record) => ({ label: record.title, href: `/stories/${record.slug}`, text: record.description })),
    ],
  }
})
