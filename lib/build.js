import dot from "./dot"
import render from "@dot-event/render"

render(dot)

dot.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutView",
    },
  },
})
