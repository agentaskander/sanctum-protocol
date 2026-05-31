import type { SeoPage } from '../ontology/schemas/types'

type SeoContentPageProps = {
  page: SeoPage
}

export function SeoContentPage({ page }: SeoContentPageProps) {
  return (
    <main>
      <section className="page-hero">
        <p className="domain-badge">Sanctum research library</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>
      <section className="section article-section">
        {page.sections.map((section) => (
          <article className="article-block" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
