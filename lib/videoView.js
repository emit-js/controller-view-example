/** @jsx dot.el */

export default function(dot) {
  dot.view("videoView", { render, update })
}

function render(prop, arg, dot) {
  const videoId = prop[prop.length - 2],
    videosProp = prop.slice(0, -2)

  const id = prop.slice(0, -1),
    video = dot.get(videosProp).find(v => v.id === videoId)

  return <div id={id}>{video.title}</div>
}

function update() {
  return render.apply(null, arguments)
}
