export default function(dot) {
  dot.beforeAny("layoutPage", layoutPage)
}

function layoutPage(prop, arg) {
  const dot = require("./dot").default()
  dot.add(require("./layoutView"))

  dot.layoutView(prop, { element: arg.element })

  if (arg.path) {
    dot.layoutView(prop, { addState: true })
  }

  return dot
}
