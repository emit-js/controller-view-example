/** @jsx emit.el */

module.exports = function(emit) {
  require("./videosView")(emit)

  emit.any("layoutViewRender", render)
  emit.any("layoutViewUpdate", update)
  emit.view("layoutView")
}

function render(arg, prop, emit) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Render View Test</title>
      </head>

      <body>
        {emit.videosView(prop, null)}
        <script src="main.js" />
      </body>
    </html>
  )
}

function update(prop, { addState }, emit) {
  if (addState) {
    addStateToHead(emit)
  }
}

function addStateToHead(emit) {
  const script = document.createElement("script"),
    state = JSON.stringify(emit.state.store)

  script.appendChild(
    document.createTextNode(`window.store=${state}`)
  )

  document.querySelector("head").appendChild(script)
}
