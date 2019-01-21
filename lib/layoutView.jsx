/** @jsx el */
import { el } from "attodom"

export default function(dot) {
  dot.add(require("./videosController"))
  dot.view("layoutView", { render, update })
}

function update(prop, { element }, dot) {
  const script = document.createElement("script"),
    state = JSON.stringify(dot.state.store)

  script.appendChild(
    document.createTextNode(`window.store=${state}`)
  )

  element.querySelector("head").appendChild(script)
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
