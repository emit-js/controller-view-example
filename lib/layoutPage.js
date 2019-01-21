export default function(dot) {
  dot.beforeAny("layoutPage", layoutPage)
}

function layoutPage(prop, arg) {
  const dot = require("./dot").default()

  require("./layoutView").default(dot)
  dot.layoutView({ element: arg.element })

  return dot
}
