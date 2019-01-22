const dot = require("./dot").default()

dot.add(
  require("@dot-event/render"),
  require("./layoutPage")
)

dot.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutPage",
    },
  },
})
