module.exports = function(emit) {
  emit.controller("videosController", videosController)
}

async function videosController(arg, prop, emit) {
  await Promise.all([
    emit.add(import("./videosModel")),
    emit.add(import("./videoView")),
  ])

  await emit.videosModel(prop, null)

  emit.elList(prop, { event: "videoView" })
}
