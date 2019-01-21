export default function(dot) {
  require("@dot-event/fetch")(dot)
  dot.any("videosModel", videosModel)
}

async function videosModel(prop, arg, dot) {
  const { body } = await dot.fetch(prop, {
    json: true,
    url:
      "https://morgue.inverse.com/videos?sort=-publish_at&filter%5Bstate%5D=ready",
  })

  await dot.set(
    prop,
    "videos",
    body.data.map(({ title }) => title)
  )
}
