/** @jsx dot.el */

module.exports = function(dot) {
  require("./videosView")(dot)
  dot.view("layoutView", { render, update })
}

function render(prop, arg, dot) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Render View Test</title>
      </head>

      <body>
        {dot.videosView(prop)}
        <script src="main.js" />
      </body>
    </html>
  )
}

function update(prop, { addState }, dot) {
  if (addState) {
    addStateToHead(dot)
  }
}

function addStateToHead(dot) {
  const script = document.createElement("script"),
    state = JSON.stringify(dot.state.store)

  script.appendChild(
    document.createTextNode(`window.store=${state}`)
  )

  document.querySelector("head").appendChild(script)
}
