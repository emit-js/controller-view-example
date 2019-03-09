/** @jsx dot.el */

module.exports = function(dot) {
  dot.any("videosViewRender", render)
  dot.view("videosView")
}

function render(prop, arg, dot) {
  return <div id={prop} />
}
