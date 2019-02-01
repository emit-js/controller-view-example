/** @jsx dot.el */

export default function(dot) {
  dot.view("videosView", { render })
}

function render(prop, arg, dot) {
  return <div id={prop} />
}
