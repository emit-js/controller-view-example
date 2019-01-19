export default function({ beforeAny }) {
  // beforeAny("videosModel", addToSsr.bind(videosModel))
  beforeAny("videosModel", videosModel)
}

// function addToSsr(prop, arg, dot) {
//   var p = this.apply(null, arguments)
//   dot.state.ssrPromises.push(p)
//   return p
// }

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
