export default function({ beforeAny }) {
  beforeAny("layoutController", layoutController)
}

function layoutController(prop, arg, dot) {
  let existingEvents = [...dot.state.events]

  dot.layoutView({ element: arg.element })

  let newEvents = [...dot.state.events].filter(
    x => existingEvents.indexOf(x) < 0
  )

  return Promise.all(newEvents)
}
