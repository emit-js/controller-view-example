/** @jsx emit.el */

module.exports = function(emit) {
  emit.any("videosViewRender", render)
  emit.view("videosView")
}

function render(arg, prop, emit) {
  return <div id={prop} />
}
