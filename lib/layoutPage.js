module.exports = function(emit) {
  emit.controller("layoutPage", layoutPage)
}

function layoutPage(arg, prop) {
  const emit = require("./emit")()

  require("./layoutView")(emit)
  require("./videosController")(emit)

  emit.layoutView(prop, { element: arg.element })
  emit.videosController(prop, null)

  if (arg.path) {
    emit.layoutView(prop, { addState: true })
  }

  return emit
}
