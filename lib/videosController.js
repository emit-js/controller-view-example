export default function(dot) {
  require("./videosView").default(dot)
  dot.beforeAny("videosController", videosController)
}

function videosController(prop, arg = {}, dot, e, sig) {
  dot.on("store", prop, "videos", () =>
    dot.videosView(prop)
  )

  sig.value = dot.videosView(prop, { element: arg.element })

  return import("./videosModel")
    .then(({ default: _ }) => (_.default || _)(dot))
    .then(() => dot.videosModel(prop))
}
