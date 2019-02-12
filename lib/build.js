const dot = require("./dot")()

require("@dot-event/render")(dot)
require("./layoutPage")(dot)

dot.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutPage",
    },
  },
})
