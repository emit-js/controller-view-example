/** @jsx el */
import { el } from "attodom"

export default function(dot) {
  dot.view("videosView", { render, update })
}

function update(prop, arg, { get }) {
  const videos = get(prop, "videos")
  if (videos) {
    arg.element.innerHTML = videos.join("<br/>")
  }
}

function render(prop, arg, { get }) {
  const videos = get(prop, "videos") || []
  return (
    <div id="videos">
      {videos.map(video => (
        <div key={video}>{video}</div>
      ))}
    </div>
  )
}
