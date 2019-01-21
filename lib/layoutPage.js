export default function(dot) {
  require("./layoutView").default(dot)
  dot.beforeAny("layoutPage", layoutPage)
}

function layoutPage(prop, arg, dot) {
  const done = dot.renderCapture()
  dot.layoutView({ element: arg.element })
  return done()
}
