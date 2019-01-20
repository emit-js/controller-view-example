import dot from "./dot"

require("@dot-event/render")(dot)

require("./layoutController").default(dot)
require("./layoutView").default(dot)

dot.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutController",
    },
  },
})
