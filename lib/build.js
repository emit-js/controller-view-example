import dot from "./dot"

require("@dot-event/render")(dot)

require("./layoutPage").default(dot)

dot.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutPage",
    },
  },
})
