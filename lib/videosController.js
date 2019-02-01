export default function(dot) {
  dot.controller("videosController", videosController)
}

async function videosController(prop, arg, dot) {
  await Promise.all([
    dot.add(import("./videosModel")),
    dot.add(import("./videoView")),
  ])

  await dot.videosModel(prop)

  for (const id of dot.elList(prop)) {
    dot.videoView(prop, id)
  }
}
