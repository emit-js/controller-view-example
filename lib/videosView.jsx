/** @jsx el */
import { el, list } from "attodom"

export default function(dot) {
  dot.view("videosView", { render, update })
}

function render(prop) {
  return <div id={prop.join(".")} />
}

function update(prop, arg, { get }) {
  const videos = get(prop)

  if (videos) {
    const elements = list(arg.element, video)
    elements.update(videos)
  }
}

function video({ id, title }) {
  return <div key={id}>{title}</div>
}
