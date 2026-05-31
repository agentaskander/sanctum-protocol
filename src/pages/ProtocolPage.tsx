import { Brain, GitBranch, Handshake, Layers3, ShieldCheck } from 'lucide-react'

const protocolRoles = [
  {
    title: 'Coordination protocol',
    icon: GitBranch,
    body: 'Sanctum gives applications a shared way to represent people, goals, tasks, practices, events, and review states across contexts.',
  },
  {
    title: 'Meaning layer',
    icon: Brain,
    body: 'It connects narrative, symbol, relationship, ritual, and time so human context is not reduced to task management alone.',
  },
  {
    title: 'Trust layer',
    icon: ShieldCheck,
    body: 'It defines consent, visibility, correction, audit records, and source clarity as first-class concepts.',
  },
  {
    title: 'Ontology layer',
    icon: Layers3,
    body: 'It provides reusable entities and relationships for identity, movement, property, craft, finance, environment, learning, and agents.',
  },
  {
    title: 'AI-human interface layer',
    icon: Handshake,
    body: 'It gives assistants structured context and reviewable boundaries without presenting AI as magic or authority.',
  },
  {
    title: 'Environmental restoration layer',
    icon: GitBranch,
    body: 'It connects outdoor stewardship, biodiversity, nature exposure, and community restoration to coordination workflows.',
  },
  {
    title: 'Sensory environment layer',
    icon: Layers3,
    body: 'It describes scent, air quality, botanical compounds, place identity, and sensitivity rules as educational design concepts.',
  },
]

export function ProtocolPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="domain-badge">Protocol architecture</p>
        <h1>Sanctum is a protocol for human-compatible coordination.</h1>
        <p>
          The protocol creates a shared language for identity, meaning, movement,
          relationships, workflows, environment, and AI-assisted life systems.
        </p>
      </section>

      <section className="section">
        <div className="protocol-role-grid">
          {protocolRoles.map((role) => (
            <article className="research-card" key={role.title}>
              <role.icon size={23} aria-hidden="true" />
              <h3>{role.title}</h3>
              <p>{role.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section thesis">
        <div className="section-label">Protocol stance</div>
        <div>
          <h2>Structured enough for software. Humane enough for people.</h2>
          <div className="thesis-grid">
            <p>
              Sanctum does not promise medical, legal, financial, or therapeutic
              outcomes. It creates semantic infrastructure that helps applications
              coordinate context with clarity and permission.
            </p>
            <p>
              The protocol is designed to support transparent recommendations,
              user correction, modular adapters, and public-private separation across
              the Askander ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="section ecosystem" aria-labelledby="environmental-protocol-title">
        <div className="section-heading">
          <div className="section-label">Environmental and sensory expansion</div>
          <h2 id="environmental-protocol-title">People, places, rituals, sensory environments, and ecological responsibility.</h2>
          <p>
            SANCTUM defines the coherence layer: how people, places, rituals,
            sensory environments, and ecological responsibility connect.
          </p>
        </div>
        <div className="two-column-cards">
          <article className="research-card">
            <h3>Environmental Restoration</h3>
            <p>
              ClearField Life connects outdoor wellbeing with environmental
              restoration: nature exposure, grounding, stewardship, biodiversity,
              and community action.
            </p>
          </article>
          <article className="research-card">
            <h3>Olfactory and Botanical Context</h3>
            <p>
              We study scent, air quality, botanical compounds, and natural
              environments as part of restorative place design with careful
              attention to sensitivity, safety, and scientific boundaries.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
