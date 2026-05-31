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
  { label: 'Environmental Intelligence', href: '/environmental-intelligence', text: 'The public framework for reading human spaces.' },
  { label: 'Research Pillars', href: '/research', text: 'Public research themes and vocabulary.' },
  { label: 'Healthy Home Framework', href: '/healthy-home-framework', text: 'A whole-home view of light, sound, air, nature, and rhythm.' },
  { label: 'Professional Frameworks', href: '/professional-frameworks', text: 'Public-safe translation for designers and operators.' },
]

function bodyFor(title: string, category: string, audience: string) {
  return [
    `${title} sits inside SANCTUM Protocol's public environmental intelligence library. It gives ${audience.toLowerCase()} a clear way to discuss rooms, buildings, and outdoor edges without exposing private systems or overstating design claims.`,
    `The core question is simple: what does the environment repeatedly ask of the person using it? Light can sharpen or scatter attention. Sound can settle or activate vigilance. Air, material, nature, and rhythm can either support a room purpose or compete with it.`,
    `${category} pages use public vocabulary only. They describe visible conditions, design choices, maintenance habits, and everyday experience. They do not publish hidden methods, formulas, or operational instructions.`,
    `A useful reading starts with one place and one intended state. The room might need sleep protection, focus clarity, recovery softness, social ease, or nature contact. Naming that state makes the environmental layers easier to organize.`,
    `The next step is to observe friction before adding objects. Glare, noise, stale air, hard reflection, visual clutter, missing nature, and difficult transitions are often more important than new decor. SANCTUM language keeps those observations practical and repeatable.`,
    `The public value is category clarity. Readers can use the article as a brief, a research note, or a conversation starter while keeping the work educational, non-medical, and public-safe.`,
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
    { question: 'Is this public-safe?', answer: 'Yes. The page uses public framework language and does not include private methods or operational instructions.' },
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
  entry('environmental-intelligence-room-reading', 'Environmental Intelligence Room Reading', 'A public guide to reading rooms through light, sound, air, material, nature, and rhythm.', 'Environmental Intelligence', 'Designers and homeowners', 'articles', 'environmental-layers'),
  entry('human-centered-environment-principles', 'Human-Centered Environment Principles', 'Principles for discussing human spaces without medical claims or private methods.', 'Environmental Intelligence', 'Researchers and operators', 'articles', 'environmental-layers'),
  entry('healthy-home-environmental-map', 'Healthy Home Environmental Map', 'A public map for connecting rooms into a coherent healthy-home field.', 'Environmental Intelligence', 'Homeowners and design teams', 'field-guides', 'healthy-home'),
  entry('restoration-oriented-place-language', 'Restoration-Oriented Place Language', 'Public vocabulary for place care, outdoor participation, and restorative environmental design.', 'Restoration', 'Community teams', 'research-library', 'nature-ladder'),
  entry('outdoor-threshold-restoration-story', 'Outdoor Threshold Restoration Story', 'A public story about turning a threshold into a calmer connection between home and nature.', 'Restoration', 'Homeowners', 'stories', 'nature-ladder'),
  entry('biodiversity-and-room-rhythm', 'Biodiversity And Room Rhythm', 'How nature contact and living references can support room rhythm in public-safe language.', 'Restoration', 'Designers', 'articles', 'nature-ladder'),
  entry('sensory-load-in-human-spaces', 'Sensory Load In Human Spaces', 'A guide to visual, acoustic, tactile, scent, and air conditions as a public design conversation.', 'Sensory Systems', 'Designers and educators', 'articles', 'sound-field'),
  entry('sensory-comfort-field-guide', 'Sensory Comfort Field Guide', 'A public field guide for lowering sensory friction in rooms.', 'Sensory Systems', 'Homeowners', 'field-guides', 'sound-field'),
  entry('scent-air-and-place-identity', 'Scent, Air, And Place Identity', 'A public note on scent, freshness, air movement, and memory in environmental design.', 'Sensory Systems', 'Product and space teams', 'research-library', 'healthy-home'),
  entry('circadian-design-for-evening-transition', 'Circadian Design For Evening Transition', 'A public guide to evening softness, glare control, and protected darkness.', 'Circadian Design', 'Homeowners and designers', 'field-guides', 'sleep-factors'),
  entry('morning-light-and-room-orientation', 'Morning Light And Room Orientation', 'How morning brightness and room orientation support daily rhythm.', 'Circadian Design', 'Designers', 'articles', 'environmental-layers'),
  entry('light-timing-research-note', 'Light Timing Research Note', 'A research note on daylight, contrast, and darkness as room-scale design concerns.', 'Circadian Design', 'Researchers', 'research-library', 'sleep-factors'),
  entry('sound-and-vibration-room-brief', 'Sound And Vibration Room Brief', 'A public brief for acoustic comfort, privacy, reflection, and vibration awareness.', 'Sound and Vibration', 'Architects and operators', 'briefs', 'sound-field'),
  entry('quiet-room-story', 'Quiet Room Story', 'A public story about reducing acoustic friction in a room without over-designing it.', 'Sound and Vibration', 'Homeowners', 'stories', 'sound-field'),
  entry('acoustic-privacy-field-guide', 'Acoustic Privacy Field Guide', 'A field guide for observing speech paths, hard reflection, and room quiet.', 'Sound and Vibration', 'Design teams', 'field-guides', 'sound-field'),
  entry('air-and-material-room-brief', 'Air And Material Room Brief', 'A public brief for breathable rooms, source control, texture, and maintainable freshness.', 'Air and Material', 'Designers and homeowners', 'briefs', 'healthy-home'),
  entry('material-softness-recovery-note', 'Material Softness Recovery Note', 'A research note on tactile comfort, surface restraint, and downshift cues.', 'Air and Material', 'Design researchers', 'research-library', 'recovery-framework'),
  entry('breathable-space-field-guide', 'Breathable Space Field Guide', 'A public field guide for ventilation habits, freshness, humidity, and material awareness.', 'Air and Material', 'Homeowners', 'field-guides', 'healthy-home'),
  entry('public-boundaries-for-environmental-claims', 'Public Boundaries For Environmental Claims', 'A governance brief for keeping environmental design language clear and bounded.', 'Governance and Safety', 'Editors and operators', 'briefs', 'recovery-framework'),
  entry('safe-language-for-room-assessments', 'Safe Language For Room Assessments', 'How to describe room observations without hidden rankings or medical claims.', 'Governance and Safety', 'Professional teams', 'articles', 'environmental-layers'),
  entry('public-framework-review-checklist', 'Public Framework Review Checklist', 'A checklist for keeping SANCTUM public content educational and practical.', 'Governance and Safety', 'Content teams', 'field-guides', 'healthy-home'),
  entry('research-note-on-recovery-spaces', 'Research Note On Recovery Spaces', 'A public note on privacy, low contrast, quiet, air, texture, and gradual return.', 'Research Notes', 'Researchers and designers', 'research-library', 'recovery-framework'),
  entry('research-note-on-biophilic-room-cues', 'Research Note On Biophilic Room Cues', 'A public note on views, plants, living material, and seasonal room cues.', 'Research Notes', 'Researchers and homeowners', 'research-library', 'nature-ladder'),
  entry('research-note-on-environmental-language', 'Research Note On Environmental Language', 'A public note on naming environmental intelligence with clarity and restraint.', 'Research Notes', 'Writers and educators', 'research-library', 'environmental-layers'),
]

const collectionLabels: Record<SeoEntry['collection'], string> = {
  articles: 'Articles',
  stories: 'Stories',
  'research-library': 'Research Library',
  'field-guides': 'Field Guides',
  briefs: 'Briefs',
}

export const collectionRoutes = Object.entries(collectionLabels).map(([path, label]) => ({
  path: `/${path}`,
  title: `${label} | SANCTUM Protocol`,
  description: `Public-safe SANCTUM Protocol ${label.toLowerCase()} for environmental intelligence, restoration, sensory systems, and research.`,
  canonical: `${origin}/${path}`,
  h1: label,
  intro: `A public-safe ${label.toLowerCase()} collection for environmental intelligence, restoration, sensory systems, circadian design, sound, air, material, governance, and research notes.`,
  label: 'SEO Library',
  principle: `This collection extends SANCTUM Protocol with public-safe ${label.toLowerCase()} while preserving the current public framework.`,
  diagram: 'environmental-layers' as DiagramKind,
  updated,
  observe: ['Public category language', 'Visible room and place conditions', 'Reader questions that need practical clarity'],
  tune: ['Keep content educational', 'Use public-safe wording', 'Link every topic back to the main framework'],
  checklist: checklistFor(label),
  faqs: faqFor(label),
  links: seoEntries.filter((item) => item.collection === path).slice(0, 6).map((item) => ({
    label: item.title,
    href: `/articles/${item.slug}`,
    text: item.description,
  })),
  cta: `Explore SANCTUM Protocol ${label.toLowerCase()} as public environmental intelligence.`,
}))

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
