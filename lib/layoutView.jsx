/** @jsx el */
import { el } from "attodom"

export default function({ beforeAny, view }) {
  beforeAny("layoutView", (prop, arg, dot, e) =>
    view(e, prop, { ...arg, render })
  )
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
