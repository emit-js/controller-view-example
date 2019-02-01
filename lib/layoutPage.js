export default function(dot) {
  dot.beforeAny("layoutPage", layoutPage)
}

function layoutPage(prop, arg) {
  const dot = require("./dot").default()

  require("./layoutView").default(dot)
  require("./videosController").default(dot)

  dot.layoutView(prop, { element: arg.element })
  dot.videosController("layout", prop)

  if (arg.path) {
    dot.layoutView(prop, { addState: true })
  }

  return dot
}
