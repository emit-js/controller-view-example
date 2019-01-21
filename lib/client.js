const dot = require("./dot").default

require("./videosController").default(dot)

dot.videosController({
  element: document.getElementById("videos"),
})
