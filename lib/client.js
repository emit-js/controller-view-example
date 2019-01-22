const dot = require("./dot").default()

dot.add(require("./layoutPage"))
dot.add(require("./videosController"))

dot.layoutPage({ element: document.documentElement })

dot.videosController()
