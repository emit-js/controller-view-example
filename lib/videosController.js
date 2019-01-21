export default function(dot) {
  dot.add(require("./videosView"))
  dot.beforeAny("videosController", videosController)
}

function videosController(prop, arg = {}, dot) {
  dot.on("store", prop, "videos", () =>
    dot.videosView(prop)
  )

  dot.add(import("./videosModel"), () =>
    dot.videosModel(prop)
  )

  return dot.videosView(prop, { element: arg.element })
}
