export default function({ beforeAny }) {
  beforeAny("layoutController", layoutController)
}

function layoutController(prop, arg, dot) {
  const finish = dot.renderCapture()
  dot.layoutView({ element: arg.element })
  return finish()
}
