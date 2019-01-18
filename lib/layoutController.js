export default function({ beforeAny }) {
  beforeAny("layoutController", layoutController)
}

function layoutController(prop, arg, dot) {
  dot.state.ssrPromises = []
  dot.layoutView({ element: arg.element })
  return Promise.all(dot.state.ssrPromises)
}
