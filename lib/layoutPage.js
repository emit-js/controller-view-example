export default function(dot) {
  dot.beforeAny("layoutPage", layoutPage)
}

function layoutPage(prop, arg) {
  const dot = require("./dot").default()

  dot.add(require("./layoutView"))
  dot.layoutView({ element: arg.element })

  return dot
}
