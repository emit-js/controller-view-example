module.exports = function(dot) {
  dot.controller("layoutPage", layoutPage)
}

function layoutPage(prop, arg) {
  const dot = require("./dot")()

  require("./layoutView")(dot)
  require("./videosController")(dot)

  dot.layoutView(prop, { element: arg.element })
  dot.videosController(prop)

  if (arg.path) {
    dot.layoutView(prop, { addState: true })
  }

  return dot
}
