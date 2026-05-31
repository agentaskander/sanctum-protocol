import { ArrowRight, LockKeyhole, Network, ShieldCheck } from 'lucide-react'
import { appOntologyMap } from '../ontology/apps/appOntologyMap'
import { insightFlowExample } from '../ontology/examples/insightFlow'
import { ontologyMeshEdges, publicSafetyBoundary } from '../ontology/maps/ontologyMesh'
import { publicOntologyModules } from '../ontology/public'

export function OntologyPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="domain-badge">Sanctum master ontology</p>
        <h1>Operating ontology for the Askander ecosystem.</h1>
        <p>
          Sanctum maps self-knowledge, relationships, movement, work, care,
          environment, learning, meaning, and AI-assisted coordination into a shared,
          permission-aware semantic layer.
        </p>
      </section>

      <section className="section" aria-labelledby="maps-title">
        <div className="section-heading">
          <div className="section-label">What Sanctum maps</div>
          <h2 id="maps-title">Core human systems</h2>
        </div>
        <div className="ontology-grid">
          {publicOntologyModules.map((module) => (
            <article className="layer-card" key={module.id}>
              <Network size={22} aria-hidden="true" />
              <h3>{module.title}</h3>
              <p>{module.domainDefinition}</p>
              <dl>
                <div>
                  <dt>Primary entities</dt>
                  <dd>{module.primaryEntities.slice(0, 4).join(', ')}</dd>
                </div>
                <div>
                  <dt>Connected apps</dt>
                  <dd>{module.appConnections.join(', ')}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" aria-labelledby="graph-title">
        <div>
          <div className="section-label">Cross-app ontology graph</div>
          <h2 id="graph-title">Shared structure without shared exposure.</h2>
          <p>
            The mesh lets each app use the modules it needs while keeping sensitive
            records, non-public methods, and internal implementation detail outside
            the public vocabulary.
          </p>
        </div>
        <div className="mesh-card">
          {ontologyMeshEdges.map(([from, to]) => (
            <div className="mesh-edge" key={`${from}-${to}`}>
              <span>{from}</span>
              <ArrowRight size={16} aria-hidden="true" />
              <span>{to}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section ecosystem" aria-labelledby="public-private-title">
        <div className="section-heading">
          <div className="section-label">Public vs private ontology</div>
          <h2 id="public-private-title">Public language, private implementation boundaries.</h2>
        </div>
        <div className="two-column-cards">
          <article className="research-card">
            <ShieldCheck size={22} />
            <h3>Public ontology</h3>
            <p>
              High-level categories, public vocabulary, app relationships, sanitized
              examples, diagrams, and clear explanations for users, partners, and search.
            </p>
          </article>
          <article className="research-card">
            <LockKeyhole size={22} />
            <h3>Private ontology</h3>
            <p>
              Protected system internals, sensitive records, agent instructions,
              proprietary review methods, and operational logic remain outside public pages.
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="flow-title">
        <div className="section-heading">
          <div className="section-label">Example flow</div>
          <h2 id="flow-title">How one insight can move across apps.</h2>
        </div>
        <div className="timeline">
          {insightFlowExample.map((step, index) => (
            <article className="timeline-step" key={step.step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.step}</h3>
                <strong>{step.app}</strong>
                <p>{step.publicDescription}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="apps-title">
        <div className="section-heading">
          <div className="section-label">App ecosystem connections</div>
          <h2 id="apps-title">Every venture connects through explicit modules.</h2>
        </div>
        <div className="interop-list">
          {appOntologyMap.map((app) => (
            <article className="interop-row" key={app.appName}>
              <div>
                <h3>{app.appName}</h3>
                <span>{app.domain}</span>
              </div>
              <p>{app.integrationNotes}</p>
              <a href={app.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section modules" aria-labelledby="safety-title">
        <div className="section-heading">
          <div className="section-label">Safety boundary</div>
          <h2 id="safety-title">What is never exposed.</h2>
        </div>
        <div className="module-grid">
          {publicSafetyBoundary.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
