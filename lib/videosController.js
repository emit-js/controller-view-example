export default function(dot) {
  dot.add(require("./videosView"))
  dot.beforeAny("videosController", videosController)
}

function videosController(prop, arg = {}, dot, e, sig) {
  dot.on("store", prop, "videos", () =>
    dot.videosView(prop)
  )

  sig.value = dot.videosView(prop, { element: arg.element })

  return dot
    .add(import("./videosModel"))
    .then(() => dot.videosModel(prop))
}
