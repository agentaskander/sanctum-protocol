type ProtocolVisualMode = 'protocol' | 'environment'

const labels = {
  protocol: {
    center: 'Protocol',
    aria: 'Protocol relationship map',
    nodes: ['Identity', 'Movement', 'Narrative', 'Workflow', 'Consent'],
  },
  environment: {
    center: 'Environment',
    aria: 'Environmental Intelligence Layers',
    nodes: [
      { label: 'Physical', href: '/environment/physical' },
      { label: 'Sensory', href: '/environment/sensory' },
      { label: 'Cognitive', href: '/environment/cognitive' },
      { label: 'Recovery', href: '/environment/recovery' },
      { label: 'Nature', href: '/environment/nature' },
      { label: 'Rhythm', href: '/environment/rhythm' },
    ],
  },
}

export function OriginalProtocolVisual(mode: ProtocolVisualMode = 'protocol', className = '') {
  const visual = labels[mode]

  return `
    <section class="original-protocol-map ${className}" aria-label="${visual.aria}">
      <div class="map-center">
        <span class="original-map-icon" aria-hidden="true"></span>
        <span>${visual.center}</span>
      </div>
      ${visual.nodes.map((node, index) => {
        const label = typeof node === 'string' ? node : node.label
        const href = typeof node === 'string' ? '' : node.href
        const className = `map-node node-${String.fromCharCode(97 + index)}`
        return href ? `<a class="${className}" href="${href}" aria-label="Open ${label} environment hub">${label}</a>` : `<span class="${className}">${label}</span>`
      }).join('')}
    </section>
  `
}
