export type DiagramKind =
  | 'environmental-layers'
  | 'sleep-factors'
  | 'recovery-framework'
  | 'healthy-home'
  | 'nature-ladder'
  | 'sound-field'

export type PublicPage = {
  path: string
  title: string
  description: string
  canonical: string
  h1: string
  intro: string
  label: string
  principle: string
  observe: string[]
  tune: string[]
  checklist: string[]
  faqs: { question: string; answer: string }[]
  links: { label: string; href: string; text: string }[]
  cta: string
  diagram: DiagramKind
  updated: string
  seoBody?: string[]
  seoCategory?: string
  seoAudience?: string
  seoDisclaimer?: string
  seoCollectionItems?: { label: string; href: string; text: string }[]
}

const origin = 'https://sanctumprotocol.org'
const updated = 'May 31, 2026'

export const frameworkLayers = [
  { title: 'Physical Environment', text: 'Light, air, temperature, materials, acoustics, openings, and room geometry.' },
  { title: 'Sensory Environment', text: 'The felt field of brightness, quiet, texture, scent, vibration, contrast, and calm.' },
  { title: 'Cognitive Environment', text: 'Spatial clarity, visual load, interruption, task orientation, and attention support.' },
  { title: 'Recovery Environment', text: 'Darkness, privacy, softness, downshift, sleep protection, and restoration cues.' },
  { title: 'Natural Environment', text: 'Daylight, views, plants, outdoor thresholds, seasonal rhythm, and living materials.' },
  { title: 'Behavioral Rhythm', text: 'Morning activation, daytime focus, evening transition, room reset, and recurring rituals.' },
]

export const pillars = [
  { label: 'Sleep Environments', href: '/sleep-environments', text: 'Rooms tuned for darkness, quiet, coolth, breathable air, and protected wind-down.' },
  { label: 'Circadian Lighting', href: '/circadian-lighting', text: 'Daylight, contrast, glare control, and evening softness as architectural timing cues.' },
  { label: 'Sound & Vibration', href: '/sound-vibration', text: 'Acoustic privacy, low-frequency awareness, masking, material absorption, and room quiet.' },
  { label: 'Indoor Air Quality', href: '/indoor-air-quality', text: 'Ventilation, filtration, humidity, source control, and maintainable air practices.' },
  { label: 'Biophilic Design', href: '/biophilic-design', text: 'Nature contact through views, plants, daylight movement, texture, and outdoor thresholds.' },
  { label: 'Recovery Spaces', href: '/recovery-spaces', text: 'Spatial systems for downshift, privacy, low contrast, soft attention, and return.' },
]

const protocolLinks = [
  { label: 'Environmental Intelligence', href: '/environmental-intelligence', text: 'The category framework for human-centered environments.' },
  { label: 'Sleep Environments', href: '/sleep-environments', text: 'How rooms protect rest and transition.' },
  { label: 'Circadian Lighting', href: '/circadian-lighting', text: 'How light becomes rhythm.' },
  { label: 'Sound & Vibration', href: '/sound-vibration', text: 'How rooms hold quiet and resonance.' },
  { label: 'Indoor Air Quality', href: '/indoor-air-quality', text: 'How air becomes part of spatial intelligence.' },
  { label: 'Biophilic Design', href: '/biophilic-design', text: 'How nature enters architecture.' },
  { label: 'Recovery Spaces', href: '/recovery-spaces', text: 'How rooms support restoration.' },
  { label: 'Healthy Home Framework', href: '/healthy-home-framework', text: 'How the whole home becomes a coherent field.' },
  { label: 'Research', href: '/research', text: 'Public research pillars and vocabulary.' },
  { label: 'Glossary', href: '/glossary', text: 'Public category language.' },
]

const professionalLinks = [
  { label: 'Professional Frameworks', href: '/professional-frameworks', text: 'Public-safe bridge frameworks for designers and operators.' },
  { label: 'Room Archetypes', href: '/room-archetypes', text: 'Sleep, focus, recovery, creative, and nature sanctuary room patterns.' },
  { label: 'Assessments', href: '/assessments', text: 'Non-diagnostic room review language for light, sound, air, nature, and rhythm.' },
  { label: 'Design Systems', href: '/design-systems', text: 'Implementation-oriented environmental intelligence without private logic.' },
  { label: 'Case Studies', href: '/case-studies', text: 'Public-safe examples of environmental intelligence in practice.' },
  { label: 'Implementation Guides', href: '/implementation-guides', text: 'Stepwise public guidance for improving human-centered rooms.' },
]

const pageDetails: Record<string, { label: string; principle: string; observe: string[]; tune: string[] }> = {
  'Environmental Intelligence': {
    label: 'Category Framework',
    principle: 'Environmental intelligence names the missing layer between architecture and human state: the way light, sound, air, material, nature, rhythm, and layout shape attention, sleep, recovery, and everyday performance.',
    observe: ['Room rhythm across morning, work, evening, and rest', 'Sensory load from light, sound, texture, air, and visual complexity', 'Moments where the room supports or interrupts the intended activity'],
    tune: ['Clarify the room purpose before changing objects', 'Align light, sound, air, nature, and reset routines', 'Treat the home or building as a connected human-centered environment'],
  },
  'Sleep Environments': {
    label: 'Recovery Architecture',
    principle: 'A sleep environment is a sanctuary system: darkness, quiet, coolth, breathable air, material softness, and ritual timing working together so the room stops asking for attention.',
    observe: ['Evening glare and screen spill', 'Street sound, mechanical sound, and low-frequency vibration', 'Air, temperature, bedding, storage, and visual load near the bed'],
    tune: ['Lower contrast before sleep', 'Protect darkness and acoustic stability', 'Make morning re-entry simple and calm'],
  },
  'Circadian Lighting': {
    label: 'Rhythm Layer',
    principle: 'Circadian lighting is not just fixture selection. It is the choreography of brightness, angle, color warmth, glare, darkness, and daily transition.',
    observe: ['Where morning light enters', 'Where glare appears during focus hours', 'What light remains visible during evening wind-down'],
    tune: ['Strengthen daytime clarity', 'Soften evening contrast', 'Make darkness easy to protect'],
  },
  'Sound And Vibration': {
    label: 'Acoustic Field',
    principle: 'Sound and vibration define whether a room feels guarded, exposed, alive, or settled. SANCTUM treats acoustic comfort as sensory architecture.',
    observe: ['Intermittent noise and speech intrusion', 'Mechanical hum and low-frequency vibration', 'Hard surfaces that create reflection and fatigue'],
    tune: ['Absorb where sound bounces', 'Mask where quiet cannot be built', 'Separate recovery zones from interruption paths'],
  },
  'Indoor Air Quality': {
    label: 'Breathable Space',
    principle: 'Indoor air quality is the invisible architecture of comfort. Freshness, filtration, humidity, source control, and maintenance shape how a room is felt before it is understood.',
    observe: ['Ventilation habits and blocked airflow', 'Humidity, dust, fragrance load, and cleaning residue', 'Filter age, cooking exhaust, and material sources'],
    tune: ['Improve fresh air pathways', 'Reduce unnecessary sources', 'Make maintenance visible and repeatable'],
  },
  'Biophilic Design': {
    label: 'Living Reference',
    principle: 'Biophilic design brings the nervous quality of nature into architecture through daylight, living material, views, plants, air, seasonal cues, and outdoor thresholds.',
    observe: ['Whether the room has a living reference point', 'How daylight moves across surfaces', 'Whether plants and materials are cared for or decorative noise'],
    tune: ['Frame views and daylight movement', 'Use natural material with restraint', 'Connect indoor routines to outdoor thresholds'],
  },
  'Recovery Spaces': {
    label: 'Downshift System',
    principle: 'A recovery space is not an empty room. It is a calibrated field for privacy, low contrast, soft sound, breathable air, tactile comfort, and gradual return.',
    observe: ['Visual intensity and object density', 'Privacy, enclosure, and interruption patterns', 'Whether the room helps the body downshift'],
    tune: ['Reduce contrast and task signals', 'Layer softness without clutter', 'Create a clear path back to ordinary activity'],
  },
  'Healthy Home Framework': {
    label: 'Whole-Home Field',
    principle: 'A healthy home is a connected environmental system. Bedrooms, work zones, kitchens, entries, bathrooms, and outdoor edges should reinforce one another instead of competing.',
    observe: ['Where the home accelerates or slows the day', 'Air, light, and sound conditions across rooms', 'Transitions between sleep, work, recovery, and social space'],
    tune: ['Create room-specific roles', 'Align transitions with daily rhythm', 'Build maintenance into the architecture of use'],
  },
  Research: {
    label: 'Authority Library',
    principle: 'The public research library organizes the visible pillars of environmental intelligence without publishing private methods. It gives the category a shared language.',
    observe: ['Questions that connect buildings to human state', 'Research themes across light, sound, air, nature, recovery, and rhythm', 'Where design claims need clearer boundaries'],
    tune: ['Separate established principles from interpretation', 'Use public vocabulary consistently', 'Keep claims educational and non-medical'],
  },
  Glossary: {
    label: 'Public Vocabulary',
    principle: 'The glossary creates shared public language for sensory architecture, sanctuary design, spatial intelligence, and human-centered environments.',
    observe: ['Terms that make environmental conditions easier to discuss', 'Where common language is too vague', 'Which words help teams make better decisions'],
    tune: ['Use precise category language', 'Avoid inflated promises', 'Keep definitions public, simple, and practical'],
  },
  'SANCTUM Protocol': {
    label: 'Public Framework',
    principle: 'SANCTUM Protocol is the public language layer for environmental intelligence: a way to discuss human spaces without turning private systems into public content.',
    observe: ['How public language frames the category', 'Where architecture affects sleep, focus, recovery, and rhythm', 'Which concepts can be safely shared'],
    tune: ['Keep the public framework elegant and bounded', 'Use diagrams that explain, not expose', 'Connect protocol language to Studio implementation'],
  },
  'Professional Frameworks': {
    label: 'Professional Layer',
    principle: 'Professional frameworks translate environmental intelligence into client-ready design language while keeping internal SANCTUM implementation methods out of public view.',
    observe: ['Which room state the work supports', 'Which public environmental layers are relevant', 'Where a professional brief needs boundaries before implementation'],
    tune: ['Use public-safe layer names', 'Separate design judgment from private systems', 'Document intent, observation, and implementation without hidden logic'],
  },
  'Room Archetypes': {
    label: 'Professional Layer',
    principle: 'Room archetypes describe recognizable sanctuary patterns: sleep sanctuary, focus sanctuary, recovery sanctuary, creative sanctuary, and nature sanctuary.',
    observe: ['The primary state of the room', 'The sensory cues that currently dominate', 'The transitions into and out of the space'],
    tune: ['Choose one archetype before layering interventions', 'Align light, sound, air, material, nature, and rhythm', 'Keep the archetype legible without over-designing it'],
  },
  Assessments: {
    label: 'Professional Layer',
    principle: 'Assessments are public-safe room reviews that help professionals discuss observations without publishing internal evaluation machinery.',
    observe: ['Visible friction in light, sound, air, nature, material, and rhythm', 'Client goals stated as room states', 'Maintenance and repeatability constraints'],
    tune: ['Use qualitative language', 'Avoid formulas and hidden rankings', 'Turn findings into practical design priorities'],
  },
  'Design Systems': {
    label: 'Professional Layer',
    principle: 'Design systems connect public environmental intelligence to repeatable implementation: briefs, palettes, lighting plans, acoustic moves, air practices, nature integration, and reset rituals.',
    observe: ['Where the system needs consistency', 'Which layers can be implemented now', 'What must stay flexible for real use'],
    tune: ['Build room systems instead of isolated tips', 'Keep method public-safe', 'Use SANCTUM language without exposing private machinery'],
  },
  'Case Studies': {
    label: 'Professional Layer',
    principle: 'Case studies show how environmental intelligence can guide real spaces through public-safe before-and-after narratives, design intent, interventions, and observed usability changes.',
    observe: ['The initial room condition', 'The design intent and public framework used', 'Which changes improved the room experience'],
    tune: ['Show outcomes without medical claims', 'Keep examples architectural and experiential', 'Avoid internal analysis details'],
  },
  'Implementation Guides': {
    label: 'Professional Layer',
    principle: 'Implementation guides help designers and operators move from category language into action through public-safe steps, material choices, lighting moves, acoustic changes, air practices, and ritual design.',
    observe: ['The strongest visible friction', 'Which intervention is easiest to maintain', 'How the room should feel after the change'],
    tune: ['Sequence changes by room layer', 'Avoid proprietary logic', 'Preserve the premium SANCTUM voice while staying practical'],
  },
  Stories: {
    label: 'SEO Library',
    principle: 'SANCTUM stories translate environmental intelligence into public narratives about sleep, focus, recovery, nature contact, and room rhythm.',
    observe: ['The room condition at the start of the story', 'The human state the room should support', 'The public-safe environmental layer being changed'],
    tune: ['Keep the story architectural and experiential', 'Avoid private method details', 'Connect the narrative back to the public framework'],
  },
  Articles: {
    label: 'SEO Library',
    principle: 'SANCTUM articles build public authority around environmental intelligence, healthy homes, sensory architecture, and recovery-oriented spaces.',
    observe: ['Which public concept needs definition', 'Which claim needs clearer boundaries', 'Where readers need practical examples'],
    tune: ['Use plain public vocabulary', 'Separate education from medical claims', 'Link articles to the public framework'],
  },
  Guides: {
    label: 'SEO Library',
    principle: 'SANCTUM guides give public-safe steps for improving rooms through light, sound, air, nature, material, and rhythm.',
    observe: ['The room purpose', 'The strongest sensory friction', 'The easiest intervention to maintain'],
    tune: ['Start with one room and one state', 'Sequence changes by environmental layer', 'Keep the guidance useful without exposing private logic'],
  },
}

function page(path: string, title: string, description: string, h1: string, topic: string, diagram: DiagramKind): PublicPage {
  const detail = pageDetails[topic]
  return {
    path,
    title,
    description,
    canonical: `${origin}${path}`,
    h1,
    intro: detail.principle,
    label: detail.label,
    principle: detail.principle,
    diagram,
    updated,
    observe: detail.observe,
    tune: detail.tune,
    checklist: [
      'Name the room purpose and the human state it should support.',
      'Read the light, sound, air, material, nature, and rhythm conditions together.',
      'Identify the strongest source of friction before adding new objects.',
      'Tune one visible layer, then observe whether the room becomes easier to use.',
      'Protect sleep, focus, recovery, and calm without making medical claims.',
      'Document changes in public-safe language that can be revisited later.',
    ],
    faqs: [
      { question: `What is ${topic}?`, answer: `${topic} is part of SANCTUM Protocol's public environmental intelligence language for human-centered spaces.` },
      { question: 'Is this medical guidance?', answer: 'No. SANCTUM Protocol is educational and informational only. It does not diagnose, treat, cure, or prevent disease.' },
      { question: 'Does this reveal private SANCTUM systems?', answer: 'No. These pages use public vocabulary, public diagrams, and conceptual frameworks only.' },
      { question: 'Where should a reader begin?', answer: 'Begin with one room, one intended state, and the sensory conditions that most clearly support or interrupt that state.' },
    ],
    links: [...professionalLinks, ...protocolLinks].filter((link) => link.href !== path).slice(0, 6),
    cta: `Explore ${topic} as part of the SANCTUM environmental intelligence framework.`,
  }
}

export const pages: PublicPage[] = [
  page('/', 'Environmental Intelligence for Human Spaces | SANCTUM Protocol', 'SANCTUM Protocol is a public framework for understanding how environments shape sleep, attention, recovery, and human flourishing.', 'Environmental Intelligence for Human Spaces', 'Environmental Intelligence', 'environmental-layers'),
  page('/environmental-intelligence', 'Environmental Intelligence | SANCTUM Protocol', 'A public framework for light, sound, air, nature, material, rhythm, and room design as human-centered environmental intelligence.', 'Environmental Intelligence', 'Environmental Intelligence', 'environmental-layers'),
  page('/sleep-environments', 'Sleep Environments | SANCTUM Protocol', 'Sleep environment design as recovery architecture: darkness, quiet, breathable air, soft material, and room rhythm.', 'Sleep Environments', 'Sleep Environments', 'sleep-factors'),
  page('/circadian-lighting', 'Circadian Lighting | SANCTUM Protocol', 'Circadian lighting as architectural rhythm across daylight, glare control, evening softness, and protected darkness.', 'Circadian Lighting', 'Circadian Lighting', 'environmental-layers'),
  page('/sound-vibration', 'Sound & Vibration | SANCTUM Protocol', 'Sound and vibration as sensory architecture for quiet, acoustic privacy, resonance, focus, sleep, and recovery.', 'Sound & Vibration', 'Sound And Vibration', 'sound-field'),
  page('/indoor-air-quality', 'Indoor Air Quality | SANCTUM Protocol', 'Indoor air quality as breathable spatial intelligence through ventilation, filtration, humidity, and source control.', 'Indoor Air Quality', 'Indoor Air Quality', 'healthy-home'),
  page('/biophilic-design', 'Biophilic Design | SANCTUM Protocol', 'Biophilic design through daylight, views, plants, natural material, outdoor thresholds, and living room rhythm.', 'Biophilic Design', 'Biophilic Design', 'nature-ladder'),
  page('/recovery-spaces', 'Recovery Spaces | SANCTUM Protocol', 'Recovery-oriented environments for privacy, low contrast, soft sound, breathable air, and gradual return.', 'Recovery Spaces', 'Recovery Spaces', 'recovery-framework'),
  page('/healthy-home-framework', 'Healthy Home Framework | SANCTUM Protocol', 'A whole-home public framework for sleep, focus, air, light, sound, recovery, nature, and room rhythm.', 'Healthy Home Framework', 'Healthy Home Framework', 'healthy-home'),
  page('/research', 'Research Pillars | SANCTUM Protocol', 'A public research library for environmental intelligence, healthy buildings, sensory architecture, and recovery-oriented environments.', 'Research Pillars', 'Research', 'environmental-layers'),
  page('/glossary', 'Glossary | SANCTUM Protocol', 'Public vocabulary for environmental intelligence, sensory architecture, sanctuary design, and human-centered environments.', 'Glossary', 'Glossary', 'nature-ladder'),
  page('/about', 'About | SANCTUM Protocol', 'About SANCTUM Protocol, the public framework for environmental intelligence and human-centered spaces.', 'About SANCTUM Protocol', 'SANCTUM Protocol', 'recovery-framework'),
  page('/professional-frameworks', 'Professional Frameworks | SANCTUM Protocol', 'Public-safe professional frameworks for environmental intelligence, room assessment, design systems, and implementation with clear public boundaries.', 'Professional Frameworks', 'Professional Frameworks', 'environmental-layers'),
  page('/room-archetypes', 'Room Archetypes | SANCTUM Protocol', 'Public-safe room archetypes for sleep, focus, recovery, creative, and nature sanctuary design.', 'Room Archetypes', 'Room Archetypes', 'healthy-home'),
  page('/assessments', 'Assessments | SANCTUM Protocol', 'Non-diagnostic public-safe room assessments for light, sound, air, nature, material, rhythm, and spatial intelligence.', 'Assessments', 'Assessments', 'sound-field'),
  page('/design-systems', 'Design Systems | SANCTUM Protocol', 'Environmental intelligence design systems for professional implementation with clear public boundaries.', 'Design Systems', 'Design Systems', 'recovery-framework'),
  page('/case-studies', 'Case Studies | SANCTUM Protocol', 'Public-safe SANCTUM case study language for human-centered environments, sanctuary design, and spatial intelligence.', 'Case Studies', 'Case Studies', 'nature-ladder'),
  page('/implementation-guides', 'Implementation Guides | SANCTUM Protocol', 'Implementation guides for public-safe environmental intelligence across light, sound, air, nature, materials, and room rhythm.', 'Implementation Guides', 'Implementation Guides', 'sleep-factors'),
  page('/stories', 'Stories | SANCTUM Protocol', 'Public stories about environmental intelligence, sleep, focus, recovery, nature contact, and room rhythm.', 'Stories', 'Stories', 'recovery-framework'),
  page('/articles', 'Articles | SANCTUM Protocol', 'Articles on environmental intelligence, healthy homes, sensory architecture, recovery spaces, and human-centered room design.', 'Articles', 'Articles', 'environmental-layers'),
  page('/guides', 'Guides | SANCTUM Protocol', 'Public-safe SANCTUM guides for improving rooms through light, sound, air, nature, material, and daily rhythm.', 'Guides', 'Guides', 'healthy-home'),
]

const betaSources = [
  '/',
  '/professional-frameworks',
  '/room-archetypes',
  '/assessments',
  '/design-systems',
  '/case-studies',
  '/implementation-guides',
]

export const betaPages: PublicPage[] = betaSources.map((sourcePath) => {
  const source = pages.find((item) => item.path === sourcePath) ?? pages[0]
  const betaPath = sourcePath === '/' ? '/beta' : `/beta${sourcePath}`
  return {
    ...source,
    path: betaPath,
    canonical: `${origin}${betaPath}`,
    title: `Beta Preview | ${source.title}`,
    h1: sourcePath === '/' ? 'SANCTUM Protocol Beta Preview' : `${source.h1} Beta Preview`,
    label: 'Beta Preview',
    description: `Public-preview beta route for ${source.h1}. ${source.description}`,
    intro: `${source.intro} This beta route is a public-preview surface and contains no internal ontology imports or private implementation logic.`,
    cta: `Preview ${source.h1} in the SANCTUM Protocol beta route namespace.`,
  }
})
