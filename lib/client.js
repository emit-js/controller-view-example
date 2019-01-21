const dot = require("./dot").default()

dot.add(require("./videosController"))

dot.videosController({
  element: document.getElementById("videos"),
})
