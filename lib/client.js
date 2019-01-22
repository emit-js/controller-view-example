const dot = require("./dot").default()

dot.add(
  require("./layoutPage"),
  require("./videosController")
)

dot.layoutPage({ element: document.documentElement })

dot.videosController()
