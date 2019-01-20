/** @jsx el */
import { el } from "attodom"

export default function({ beforeAny, view }) {
  beforeAny("layoutView", (prop, arg, dot, e) =>
    view(e, prop, { ...arg, render })
  )
}

function update(prop, arg, dot) {
  const script = document.createElement("script"),
    state = JSON.stringify(dot.state.store)

  script.appendChild(
    document.createTextNode(`window.store=${state};`)
  )

  this.querySelector("head").appendChild(script)
}

function render(prop, arg, dot) {
  return (
    <html lang="en" update={update}>
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
