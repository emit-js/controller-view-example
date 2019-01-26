export default function(dot) {
  dot.add(require("./videosView"))
  dot.beforeAny("videosController", videosController)
}

function videosController(prop, arg, dot) {
  prop = ["videos", ...prop]

  dot.on("store", prop, () => dot.videosView(prop, {}))

  dot.add(import("./videosModel"), () =>
    dot.videosModel(prop, {})
  )
}
