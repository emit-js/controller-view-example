/** @jsx el */
import { el } from "attodom"

export default function({ beforeAny, view }) {
  beforeAny("videosView", (prop, arg, dot, e) =>
    view(e, prop, { ...arg, render })
  )
}

function update(prop, arg, { get }) {
  const videos = get("videos")
  this.innerHTML = videos.join("<br/>")
}

function render() {
  return <div id="main" update={update} />
}
