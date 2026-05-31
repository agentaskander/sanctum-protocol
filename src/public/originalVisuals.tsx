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
    nodes: ['Physical', 'Sensory', 'Cognitive', 'Recovery', 'Nature', 'Rhythm'],
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
      ${visual.nodes.map((node, index) => `<span class="map-node node-${String.fromCharCode(97 + index)}">${node}</span>`).join('')}
    </section>
  `
}
