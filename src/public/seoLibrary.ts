import type { DiagramKind, PublicPage } from './siteContent'

export type SeoEntry = {
  slug: string
  title: string
  description: string
  category: string
  audience: string
  body: string[]
  checklist: string[]
  faq: { question: string; answer: string }[]
  relatedLinks: { label: string; href: string; text: string }[]
  disclaimer: string
  collection: 'articles' | 'stories' | 'research-library' | 'field-guides' | 'briefs'
  diagram: DiagramKind
}

const origin = 'https://sanctumprotocol.org'
const updated = 'May 31, 2026'

const relatedLinks = [
  { label: 'Environmental Intelligence Framework', href: '/environmental-intelligence-framework', text: 'The public hub for SANCTUM environmental intelligence.' },
  { label: 'Sensory Architecture', href: '/sensory-architecture', text: 'Light, sound, air, texture, and room rhythm as public design language.' },
  { label: 'Recovery Architecture', href: '/recovery-architecture', text: 'Spatial support for downshift, quiet, privacy, and return.' },
  { label: 'Partner Framework', href: '/partner-framework', text: 'An environmental bridge for designers, builders, and operators.' },
]

const hubDefinitions = [
  ['environmental-intelligence-framework', 'Environmental Intelligence Framework', 'A public hub for the SANCTUM environmental intelligence framework.', 'Environmental Intelligence', 'environmental-layers'],
  ['environmental-intelligence-for-buildings', 'Environmental Intelligence For Buildings', 'How environmental intelligence applies to buildings, shared spaces, and operations.', 'Environmental Intelligence', 'healthy-home'],
  ['environmental-intelligence-for-homes', 'Environmental Intelligence For Homes', 'A home-focused hub for light, sound, air, recovery, nature, and room rhythm.', 'Environmental Intelligence', 'healthy-home'],
  ['environmental-intelligence-for-workspaces', 'Environmental Intelligence For Workspaces', 'A workspace-focused hub for attention, quiet, air, daylight, and reset.', 'Environmental Intelligence', 'environmental-layers'],
  ['environmental-wellness', 'Environmental Wellness', 'An environmental hub for wellness as environmental design guidance.', 'Environmental Intelligence', 'recovery-framework'],
  ['sensory-architecture', 'Sensory Architecture', 'A hub for sensory architecture across sound, light, air, material, and rhythm.', 'Sensory Architecture', 'sound-field'],
  ['recovery-architecture', 'Recovery Architecture', 'A hub for recovery spaces, downshift systems, privacy, and soft return.', 'Restoration Environments', 'recovery-framework'],
  ['restoration-environments', 'Restoration Environments', 'A hub for restorative rooms, outdoor edges, and place care.', 'Restoration Environments', 'nature-ladder'],
  ['circadian-environments', 'Circadian Environments', 'A hub for daylight, evening softness, darkness, and daily rhythm.', 'Circadian Design', 'sleep-factors'],
  ['vibroacoustic-design', 'Vibroacoustic Design', 'A public hub for sound, vibration, quiet, and acoustic atmosphere.', 'Sound and Vibration', 'sound-field'],
  ['spatial-intelligence', 'Spatial Intelligence', 'A hub for room purpose, layout, sensory load, and daily use.', 'Environmental Intelligence', 'environmental-layers'],
  ['room-rhythm', 'Room Rhythm', 'A hub for morning activation, daytime focus, evening transition, and reset.', 'Circadian Design', 'sleep-factors'],
  ['public-governance-boundary', 'Environmental Governance', 'A hub for environmental language, claims, and content boundaries.', 'Governance and Safety', 'recovery-framework'],
  ['partner-framework', 'Partner Framework', 'A hub for designers, builders, and operators who need SANCTUM environmental language.', 'Professional and Partner', 'healthy-home'],
  ['investor-brief', 'Investor Brief', 'A public-facing brief on the SANCTUM Protocol category and market language.', 'Professional and Partner', 'environmental-layers'],
] as const

function bodyFor(title: string, category: string, audience: string) {
  return [
    `${title} sits inside SANCTUM Protocol's environmental intelligence library. It gives ${audience.toLowerCase()} a clear way to discuss rooms, buildings, and outdoor edges without exposing private systems or overstating design claims.`,
    `The core question is simple: what does the environment repeatedly ask of the person using it? Light can sharpen or scatter attention. Sound can settle or activate vigilance. Air, material, nature, and rhythm can either support a room purpose or compete with it.`,
    `${category} pages use environmental vocabulary only. They describe visible conditions, design choices, maintenance habits, and everyday experience. They do not publish hidden methods, formulas, or operational instructions.`,
    `A useful reading starts with one place and one intended state. The room might need sleep protection, focus clarity, recovery softness, social ease, or nature contact. Naming that state makes the environmental layers easier to organize.`,
    `The next step is to observe friction before adding objects. Glare, noise, stale air, hard reflection, visual clutter, missing nature, and difficult transitions are often more important than new decor. SANCTUM language keeps those observations practical and repeatable.`,
    `The category value is category clarity. Readers can use the article as a brief, a research note, or a conversation starter while keeping the work educational, non-medical, and environmental.`,
  ]
}

function checklistFor(category: string) {
  return [
    `Name the ${category.toLowerCase()} question in plain public language.`,
    'Choose one room, threshold, or daily transition to observe.',
    'Record visible light, sound, air, material, nature, and rhythm conditions.',
    'Identify the strongest source of friction before adding anything new.',
    'Describe changes as design guidance, not medical advice.',
    'Link the finding back to a public SANCTUM framework page.',
  ]
}

function faqFor(title: string) {
  return [
    { question: `What is ${title}?`, answer: `${title} is a public SANCTUM Protocol article for understanding human-centered environments through visible design conditions.` },
    { question: 'Is this environmental?', answer: 'Yes. The page uses research framework language and does not include private methods or operational instructions.' },
    { question: 'Is this medical guidance?', answer: 'No. It is educational design language only.' },
    { question: 'How should readers use it?', answer: 'Use it to frame a room observation, design brief, research discussion, or public-facing guide.' },
  ]
}

function entry(
  slug: string,
  title: string,
  description: string,
  category: string,
  audience: string,
  collection: SeoEntry['collection'],
  diagram: DiagramKind,
): SeoEntry {
  return {
    slug,
    title,
    description,
    category,
    audience,
    collection,
    diagram,
    body: bodyFor(title, category, audience),
    checklist: checklistFor(category),
    faq: faqFor(title),
    relatedLinks,
    disclaimer: 'Educational and informational only. Does not diagnose, treat, cure, or prevent disease.',
  }
}

export const seoEntries: SeoEntry[] = [
  entry('what-is-environmental-intelligence', 'What Is Environmental Intelligence?', 'A public definition of environmental intelligence for human-centered rooms, buildings, and daily life.', 'Environmental Intelligence', 'Designers, researchers, and homeowners', 'articles', 'environmental-layers'),
  entry('environmental-intelligence-vs-smart-buildings', 'Environmental Intelligence vs Smart Buildings', 'How SANCTUM distinguishes human-centered environmental language from automation-first building language.', 'Environmental Intelligence', 'Operators and design teams', 'articles', 'environmental-layers'),
  entry('environmental-intelligence-for-human-spaces', 'Environmental Intelligence for Human Spaces', 'A guide to reading spaces through sleep, attention, recovery, comfort, and room rhythm.', 'Environmental Intelligence', 'Homeowners and designers', 'field-guides', 'healthy-home'),
  entry('environmental-intelligence-and-wellbeing', 'Environmental Intelligence and Wellbeing', 'An environmental article on wellbeing as a design conversation about visible environmental conditions.', 'Environmental Intelligence', 'Wellness operators and designers', 'articles', 'recovery-framework'),
  entry('future-of-human-centered-environments', 'The Future of Human-Centered Environments', 'A public brief on the emerging category of environments designed around human state.', 'Environmental Intelligence', 'Partners and investors', 'briefs', 'environmental-layers'),
  entry('what-is-sensory-architecture', 'What Is Sensory Architecture?', 'A public definition of sensory architecture across light, sound, air, texture, and rhythm.', 'Sensory Architecture', 'Designers and educators', 'articles', 'sound-field'),
  entry('sound-light-air-and-spatial-rhythm', 'Sound, Light, Air, and Spatial Rhythm', 'A guide to the sensory layers that shape room experience before style is considered.', 'Sensory Architecture', 'Homeowners and design teams', 'field-guides', 'environmental-layers'),
  entry('designing-sensory-environments', 'Designing Sensory Environments', 'A public guide to sensory environments for focus, rest, comfort, and everyday use.', 'Sensory Architecture', 'Designers', 'field-guides', 'sound-field'),
  entry('sensory-environments-for-focus', 'Sensory Environments for Focus', 'How glare, speech paths, air, surfaces, and visual load shape attention.', 'Sensory Architecture', 'Workspace designers and operators', 'articles', 'sound-field'),
  entry('sensory-environments-for-recovery', 'Sensory Environments for Recovery', 'How softer light, quiet, privacy, breathable air, and texture support downshift.', 'Sensory Architecture', 'Homeowners and recovery-space designers', 'articles', 'recovery-framework'),
  entry('what-is-a-restoration-environment', 'What Is a Restoration Environment?', 'A public definition of restoration environments for rooms, thresholds, and daily rhythm.', 'Restoration Environments', 'Designers and homeowners', 'articles', 'recovery-framework'),
  entry('recovery-spaces-and-daily-life', 'Recovery Spaces and Daily Life', 'A story-driven guide to recovery spaces as part of ordinary daily use.', 'Restoration Environments', 'Homeowners', 'stories', 'recovery-framework'),
  entry('room-as-a-recovery-layer', 'The Room as a Recovery Layer', 'How rooms can support downshift, privacy, tactile comfort, and gradual return.', 'Restoration Environments', 'Designers and researchers', 'research-library', 'recovery-framework'),
  entry('restoration-design-for-homes', 'Restoration Design for Homes', 'A field guide to restorative home rooms, sleep protection, and sensory calm.', 'Restoration Environments', 'Homeowners and residential designers', 'field-guides', 'healthy-home'),
  entry('restoration-design-for-workplaces', 'Restoration Design for Workplaces', 'A public brief for recovery rooms, quiet zones, and reset spaces in workplaces.', 'Restoration Environments', 'Workplace operators', 'briefs', 'recovery-framework'),
  entry('circadian-lighting-explained', 'Circadian Lighting Explained', 'A public explanation of daylight, evening softness, glare control, and darkness.', 'Circadian Design', 'Homeowners and designers', 'articles', 'sleep-factors'),
  entry('morning-light-and-room-design', 'Morning Light and Room Design', 'How morning brightness and room orientation support daily rhythm.', 'Circadian Design', 'Designers', 'field-guides', 'environmental-layers'),
  entry('evening-light-and-recovery', 'Evening Light and Recovery', 'A guide to evening contrast, warm light, protected darkness, and downshift cues.', 'Circadian Design', 'Homeowners', 'field-guides', 'sleep-factors'),
  entry('light-as-environmental-protocol', 'Light as Environmental Protocol', 'A research note on light as a room-scale protocol for timing and orientation.', 'Circadian Design', 'Researchers and designers', 'research-library', 'sleep-factors'),
  entry('designing-rooms-around-daily-rhythm', 'Designing Rooms Around Daily Rhythm', 'How morning, work, evening, and sleep transitions can be designed into rooms.', 'Circadian Design', 'Design teams', 'articles', 'healthy-home'),
  entry('sound-as-spatial-architecture', 'Sound as Spatial Architecture', 'A public article on sound as a spatial layer for privacy, quiet, and orientation.', 'Sound and Vibration', 'Designers and operators', 'articles', 'sound-field'),
  entry('vibroacoustic-design-explained', 'Vibroacoustic Design Explained', 'An environmental explanation of vibration, resonance, low-frequency awareness, and room comfort.', 'Sound and Vibration', 'Architects and acoustic teams', 'articles', 'sound-field'),
  entry('soundscape-design-for-calm-rooms', 'Soundscape Design for Calm Rooms', 'A field guide for reducing acoustic friction and shaping calmer rooms.', 'Sound and Vibration', 'Homeowners and designers', 'field-guides', 'sound-field'),
  entry('noise-attention-and-recovery', 'Noise, Attention, and Recovery', 'A research note on noise, vigilance, focus, and downshift in everyday spaces.', 'Sound and Vibration', 'Researchers and operators', 'research-library', 'sound-field'),
  entry('acoustic-environment-design', 'Acoustic Environment Design', 'A public brief for speech paths, reflection, masking, absorption, and room quiet.', 'Sound and Vibration', 'Professional teams', 'briefs', 'sound-field'),
  entry('nature-as-infrastructure', 'Nature as Infrastructure', 'A public article on nature contact as part of environmental design infrastructure.', 'Nature and Biophilic Design', 'Designers and planners', 'articles', 'nature-ladder'),
  entry('biophilic-design-and-human-spaces', 'Biophilic Design and Human Spaces', 'How views, plants, daylight, material, and outdoor thresholds support human spaces.', 'Nature and Biophilic Design', 'Homeowners and designers', 'articles', 'nature-ladder'),
  entry('indoor-nature-systems', 'Indoor Nature Systems', 'A field guide for living references, plants, views, care, and indoor nature rhythm.', 'Nature and Biophilic Design', 'Homeowners', 'field-guides', 'nature-ladder'),
  entry('materials-texture-and-restoration', 'Materials, Texture, and Restoration', 'A research note on tactile comfort, material restraint, and recovery-oriented rooms.', 'Nature and Biophilic Design', 'Design researchers', 'research-library', 'recovery-framework'),
  entry('nature-exposure-and-room-design', 'Nature Exposure and Room Design', 'A story about room design that reconnects daily rhythm with living systems.', 'Nature and Biophilic Design', 'Homeowners and designers', 'stories', 'nature-ladder'),
  entry('environmental-intelligence-for-designers', 'Environmental Intelligence for Designers', 'A professional article for using public SANCTUM language in design conversations.', 'Professional and Partner', 'Designers', 'articles', 'environmental-layers'),
  entry('environmental-intelligence-for-builders', 'Environmental Intelligence for Builders', 'A partner brief for builders using environmental intelligence language.', 'Professional and Partner', 'Builders', 'briefs', 'healthy-home'),
  entry('environmental-intelligence-for-wellness-operators', 'Environmental Intelligence for Wellness Operators', 'A public brief for wellness operators translating environmental design into space planning.', 'Professional and Partner', 'Wellness operators', 'briefs', 'recovery-framework'),
  entry('partnering-with-sanctum-protocol', 'Partnering with SANCTUM Protocol', 'An environmental partner article for designers, builders, operators, and aligned studios.', 'Professional and Partner', 'Partners', 'articles', 'environmental-layers'),
  entry('sanctum-protocol-investor-brief', 'SANCTUM Protocol Investor Brief', 'A public investor-facing brief on the environmental intelligence category.', 'Professional and Partner', 'Investors and strategic partners', 'briefs', 'environmental-layers'),
]

const collectionLabels: Record<SeoEntry['collection'], string> = {
  articles: 'Articles',
  stories: 'Stories',
  'research-library': 'Research Library',
  'field-guides': 'Field Guides',
  briefs: 'Briefs',
}

export const hubRoutes: PublicPage[] = hubDefinitions.map(([slug, title, description, category, diagram]) => ({
  path: `/${slug}`,
  title: `${title} | SANCTUM Protocol`,
  description,
  canonical: `${origin}/${slug}`,
  h1: title,
  intro: description,
  label: category,
  principle: `${title} organizes public SANCTUM language for ${category.toLowerCase()} without exposing private systems or hidden methods.`,
  diagram,
  updated,
  observe: ['Visible environmental conditions', 'Room purpose and daily rhythm', 'Environmental design language'],
  tune: ['Clarify the intended state', 'Read light, sound, air, material, nature, and rhythm together', 'Link readers to the most relevant public guide'],
  checklist: checklistFor(category),
  faqs: faqFor(title),
  links: seoEntries.filter((item) => item.category === category).slice(0, 6).map((item) => ({
    label: item.title,
    href: `/articles/${item.slug}`,
    text: item.description,
  })),
  cta: `Explore ${title} through the SANCTUM Protocol public library.`,
  seoBody: bodyFor(title, category, 'Public readers and professional teams'),
  seoCategory: category,
  seoAudience: 'Public readers and professional teams',
  seoDisclaimer: 'Educational and informational only. Does not diagnose, treat, cure, or prevent disease.',
}))

export const collectionRoutes: PublicPage[] = Object.entries(collectionLabels).map(([path, label]) => {
  const items = seoEntries.filter((item) => item.collection === path).map((item) => ({
    label: item.title,
    href: `/articles/${item.slug}`,
    text: item.description,
  }))

  return {
    path: `/${path}`,
    title: `${label} | SANCTUM Protocol`,
    description: `SANCTUM Protocol ${label.toLowerCase()} for environmental intelligence, restoration, sensory systems, and research.`,
    canonical: `${origin}/${path}`,
    h1: label,
    intro: `An environmental ${label.toLowerCase()} collection for environmental intelligence, restoration, sensory systems, circadian design, sound, air, material, governance, and research notes.`,
    label: 'SEO Library',
    principle: `This collection extends SANCTUM Protocol with environmental ${label.toLowerCase()} while preserving the current research framework.`,
    diagram: 'environmental-layers' as DiagramKind,
    updated,
    observe: ['Public category language', 'Visible room and place conditions', 'Reader questions that need practical clarity'],
    tune: ['Keep content educational', 'Use environmental wording', 'Link every topic back to the main framework'],
    checklist: checklistFor(label),
    faqs: faqFor(label),
    links: items.slice(0, 6),
    cta: `Explore SANCTUM Protocol ${label.toLowerCase()} as environmental intelligence.`,
    seoCollectionItems: items,
  }
})

export const seoPages: PublicPage[] = seoEntries.map((item) => ({
  path: `/articles/${item.slug}`,
  title: `${item.title} | SANCTUM Protocol`,
  description: item.description,
  canonical: `${origin}/articles/${item.slug}`,
  h1: item.title,
  intro: item.description,
  label: item.category,
  principle: item.body[0],
  diagram: item.diagram,
  updated,
  observe: item.body.slice(1, 4),
  tune: item.body.slice(3, 6),
  checklist: item.checklist,
  faqs: item.faq,
  links: item.relatedLinks,
  cta: `Continue through the SANCTUM Protocol ${item.category.toLowerCase()} library.`,
  seoBody: item.body,
  seoCategory: item.category,
  seoAudience: item.audience,
  seoDisclaimer: item.disclaimer,
}))
