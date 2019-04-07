module.exports = function(emit) {
  require("@emit-js/http")(emit)
  emit.any("videosModel", videosModel)
}

async function videosModel(arg, prop, emit) {
  const body = await emit.http(prop, {
    url:
      "https://morgue.inverse.com/videos?sort=-publish_at&filter%5Bstate%5D=ready",
  })

  await emit.set(
    prop,
    body.data.map(({ id, title }) => ({
      id,
      title,
    }))
  )
}
