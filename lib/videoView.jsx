/** @jsx dot.el */

export default function(dot) {
  dot.view("videoView", { idProp: true, render, update })
}

function render(prop, arg, dot) {
  const videoId = prop[prop.length - 1],
    videosProp = prop.slice(0, -1)

  const video = dot
    .get(videosProp)
    .find(v => v.id === videoId)

  return <div id={prop}>{video.title}</div>
}

function update() {
  return render.apply(null, arguments)
}
