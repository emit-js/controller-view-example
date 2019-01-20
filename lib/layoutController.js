export default function({ beforeAny }) {
  beforeAny("layoutController", layoutController)
}

function layoutController(prop, arg, dot) {
  const events = new Set(dot.state.events)

  dot.layoutView({ element: arg.element })

  const newEvents = [...dot.state.events].filter(
    e => !events.has(e)
  )

  return Promise.all(newEvents).then(() => dot.layoutView())
}
