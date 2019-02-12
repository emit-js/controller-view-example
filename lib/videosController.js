module.exports = function(dot) {
  dot.controller("videosController", videosController)
}

async function videosController(prop, arg, dot) {
  await Promise.all([
    dot.add(import("./videosModel")),
    dot.add(import("./videoView")),
  ])

  await dot.videosModel(prop)

  dot.elList(prop, { event: "videoView" })
}
