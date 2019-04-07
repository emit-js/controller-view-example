/** @jsx emit.el */

module.exports = function(emit) {
  emit.any("videoViewRender", render)
  emit.any("videoViewUpdate", update)
  emit.view("videoView", { addProp: false })
}

function render(arg, prop, emit) {
  const videoId = prop[prop.length - 1],
    videosProp = prop.slice(0, -1)

  const video = emit
    .get(videosProp)
    .find(v => v.id === videoId)

  return <div id={prop}>{video.title}</div>
}

function update() {
  return render.apply(null, arguments)
}
