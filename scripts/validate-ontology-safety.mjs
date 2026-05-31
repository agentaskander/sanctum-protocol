#!/usr/bin/env node

import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const scanRoots = [
  path.join(root, 'public', 'ontology'),
  path.join(root, 'src', 'ontology', 'public'),
]

const bannedPatterns = [
  'weight',
  'scoringFormula',
  'privatePrompt',
  'embedding',
  'secret',
  'apiKey',
  'internalHeuristic',
  'userRawData',
  'inferenceChain',
  'hiddenRanking',
]

const findings = []

async function walk(directory) {
  const entries = await readdir(directory)
  for (const entry of entries) {
    const filePath = path.join(directory, entry)
    const fileStat = await stat(filePath)
    if (fileStat.isDirectory()) {
      await walk(filePath)
      continue
    }
    if (!/\.(json|ts|tsx|md)$/i.test(filePath)) continue
    const source = await readFile(filePath, 'utf8')
    for (const pattern of bannedPatterns) {
      const expression = new RegExp(pattern, 'i')
      if (expression.test(source)) {
        findings.push({ filePath, pattern })
      }
    }
  }
}

for (const scanRoot of scanRoots) {
  await walk(scanRoot)
}

if (findings.length > 0) {
  console.error('Public ontology safety validation failed.')
  for (const finding of findings) {
    console.error(`- ${path.relative(root, finding.filePath)} contains ${finding.pattern}`)
  }
  process.exit(1)
}

console.log('Public ontology safety validation passed.')
