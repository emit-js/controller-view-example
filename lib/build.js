const emit = require("./emit")()

require("@emit-js/render")(emit)
require("./layoutPage")(emit)

emit.render({
  outDir: "./bundle",
  views: {
    "index.html": {
      event: "layoutPage",
    },
  },
})
