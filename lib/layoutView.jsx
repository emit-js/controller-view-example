/** @jsx el */
import { el } from "attodom"

export default function(dot) {
  dot.add(require("./videosController"))
  dot.view("layoutView", { render, update })
}

function update(prop, { addState, ssr }, dot) {
  if (addState) {
    addStateToHead(dot)
  }

  if (ssr) {
    dot.videosController(prop)
  }
}

function render(prop, arg, dot) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Render View Test</title>
      </head>

      <body>
        {dot.videosController(prop)}
        <script src="main.js" />
      </body>
    </html>
  )
}

function addStateToHead(dot) {
  const script = document.createElement("script"),
    state = JSON.stringify(dot.state.store)

  script.appendChild(
    document.createTextNode(`window.store=${state}`)
  )

  document.querySelector("head").appendChild(script)
}
