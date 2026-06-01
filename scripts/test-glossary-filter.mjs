import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const source = fs.readFileSync(path.join(root, 'src/public/glossaryLibrary.ts'), 'utf8')

function readStringArray(name) {
  const match = source.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\]`))
  if (!match) throw new Error(`Missing ${name} array`)
  return [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
}

function slugFor(term) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function normalize(value) {
  return String(value).toLowerCase().trim().replace(/\s+/g, ' ')
}

const categories = readStringArray('categories')
const terms = readStringArray('terms')
const entries = terms.map((term, index) => {
  const category = categories[index % categories.length]
  return {
    slug: slugFor(term),
    term,
    category,
    definition: `${term} is SANCTUM Protocol public vocabulary for reading human spaces through light, sound, air, material, nature, rhythm, and room purpose.`,
    whyItMatters: `The term matters because it gives designers, partners, researchers, and public readers a precise way to discuss ${category.toLowerCase()} without exposing private ontology and internal evaluation, or internal operating systems.`,
    relatedConcepts: [terms[(index + 7) % terms.length], terms[(index + 19) % terms.length], terms[(index + 31) % terms.length]],
    relatedPages: ['/environmental-intelligence-framework', `/${slugFor(category)}`, '/glossary'],
  }
})

function filterEntries({ q = '', category = '' } = {}) {
  const query = normalize(q)
  const normalizedCategory = normalize(category)
  return entries.filter((entry) => {
    const haystack = normalize([
      entry.term,
      entry.slug,
      entry.category,
      entry.definition,
      entry.whyItMatters,
      ...entry.relatedConcepts,
      ...entry.relatedPages,
    ].join(' '))
    return (!query || haystack.includes(query)) && (!normalizedCategory || normalize(entry.category) === normalizedCategory)
  })
}

const assertions = [
  [entries.length >= 100, `total >= 100 (${entries.length})`],
  [new Set(entries.map((entry) => entry.category)).size > 0, 'category list is not empty'],
  [filterEntries({ category: 'Sensory Architecture' }).length > 0, 'category "Sensory Architecture" returns results'],
  [filterEntries({ q: 'sound' }).length > 0, 'q=sound returns results'],
  [filterEntries({ category: 'Sensory Architecture', q: 'sound' }).length > 0, 'category + q returns results'],
  [filterEntries({ q: 'zzzz-no-match' }).length === 0, 'nonsense query returns 0'],
  [entries.every((entry) => entry.term && entry.slug && entry.category && entry.definition), 'every entry has term, slug, category, definition'],
]

const failed = assertions.filter(([ok]) => !ok)

console.log('# Glossary Filter Self-Test')
console.log(`Entries: ${entries.length}`)
console.log(`Categories: ${new Set(entries.map((entry) => entry.category)).size}`)
for (const [ok, label] of assertions) {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}`)
}

if (failed.length) process.exit(1)
