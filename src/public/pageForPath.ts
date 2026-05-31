import { betaPages, pages } from './siteContent'
import { collectionRoutes, hubRoutes, seoPages } from './seoLibrary'
import { allAuthorityRoutes } from './authorityLibrary'

export function pageForPath(pathname: string) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return [...allAuthorityRoutes, ...pages, ...betaPages, ...hubRoutes, ...collectionRoutes, ...seoPages].find((page) => page.path === normalized) ?? pages[0]
}
