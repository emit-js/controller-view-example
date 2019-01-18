import dot from "./dot"

require("@dot-event/render")(dot)

dot.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutController",
    },
  },
})
