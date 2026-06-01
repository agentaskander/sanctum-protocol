export type GlossaryEntry = {
  slug: string
  term: string
  definition: string
  whyItMatters: string
  relatedConcepts: string[]
  relatedPages: string[]
  category: string
}

const categories = [
  'Environmental Intelligence',
  'Sensory Architecture',
  'Restoration Environments',
  'Recovery Spaces',
  'Spatial Intelligence',
  'Environmental Wellness',
  'Room Rhythm',
  'Circadian Design',
  'Biophilic Design',
  'Acoustic Ecology',
  'Human-Centered Environments',
  'Light Design',
  'Sound Design',
  'Material Design',
  'Nature Systems',
  'Environmental Protocols',
  'Behavioral Environments',
]

const terms = [
  'Environmental Intelligence',
  'Recovery Environment',
  'Restoration Space',
  'Circadian Environment',
  'Room Rhythm',
  'Spatial Intelligence',
  'Sensory Architecture',
  'Acoustic Ecology',
  'Nature Infrastructure',
  'Recovery Architecture',
  'Environmental Wellness',
  'Environmental Friction',
  'Human-Centered Space',
  'Environmental Signaling',
  'Environmental Restoration',
  'Light Timing',
  'Evening Downshift',
  'Morning Activation',
  'Focus Field',
  'Quiet Room',
  'Sound Masking',
  'Acoustic Privacy',
  'Vibration Awareness',
  'Material Softness',
  'Tactile Calm',
  'Thermal Comfort',
  'Air Freshness',
  'Breathable Space',
  'Source Control',
  'Humidity Balance',
  'Daylight Access',
  'Glare Control',
  'Darkness Protection',
  'Biophilic Pattern',
  'Living Reference',
  'Outdoor Threshold',
  'View Corridor',
  'Plant Rhythm',
  'Natural Material',
  'Recovery Cue',
  'Ritual Sequence',
  'Transition Zone',
  'Spatial Clarity',
  'Visual Load',
  'Attention Support',
  'Restorative Cue',
  'Room Purpose',
  'Environmental Layer',
  'Sensory Load',
  'Human State',
  'Comfort Field',
  'Reset Space',
  'Sanctuary Room',
  'Sleep Sanctuary',
  'Focus Sanctuary',
  'Recovery Sanctuary',
  'Creative Sanctuary',
  'Nature Sanctuary',
  'Environmental Assessment',
  'Room Observation',
  'Design Protocol',
  'Healthy Home',
  'Healthy Building',
  'Human-Centered Building',
  'Environmental Guide',
  'Research Framework',
  'Partner Framework',
  'Investor Brief',
  'Category Creation',
  'Human Flourishing',
  'Architectural Rhythm',
  'Room Archetype',
  'Wellness Room',
  'Home Automation Boundary',
  'Smart Building Boundary',
  'Environmental Governance',
  'Claim Boundary',
  'Educational Design',
  'Non-Diagnostic Assessment',
  'Built Environment',
  'Indoor Nature',
  'Water Sound',
  'Wind Sound',
  'Brown Noise',
  'White Noise',
  'Ambient Layer',
  'Task Lighting',
  'Warm Light',
  'Cool Light',
  'Material Palette',
  'Texture Field',
  'Object Density',
  'Circulation Path',
  'Entry Ritual',
  'Closeout Ritual',
  'Maintenance Rhythm',
  'Room Care',
  'Environmental Narrative',
  'Case Study',
  'Before After Story',
  'Implementation Layer',
  'Public Vocabulary',
]

function slugFor(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function pageFor(category: string, index: number) {
  const pages = ['/environmental-intelligence-framework', '/sensory-architecture', '/restoration-environments', '/research-library', '/stories', '/partners']
  return [pages[index % pages.length], `/${slugFor(category)}`, '/glossary']
}

export const glossaryEntries: GlossaryEntry[] = terms.map((term, index) => {
  const category = categories[index % categories.length]
  return {
    slug: slugFor(term),
    term,
    category,
    definition: `${term} is SANCTUM Protocol public vocabulary for reading human spaces through light, sound, air, material, nature, rhythm, and room purpose.`,
    whyItMatters: `The term matters because it gives designers, partners, researchers, and public readers a precise way to discuss ${category.toLowerCase()} without exposing protected ontology detail, evaluation machinery, or operating systems.`,
    relatedConcepts: [terms[(index + 7) % terms.length], terms[(index + 19) % terms.length], terms[(index + 31) % terms.length]],
    relatedPages: pageFor(category, index),
  }
})

export const glossaryCategories = categories
