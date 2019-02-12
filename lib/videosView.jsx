/** @jsx dot.el */

module.exports = function(dot) {
  dot.view("videosView", { render })
}

function render(prop, arg, dot) {
  return <div id={prop} />
}
