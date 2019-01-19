const dot = require("dot-event")()

require("@dot-event/fetch")(dot)
require("@dot-event/log")(dot)
require("@dot-event/store")(dot)
require("@dot-event/view")(dot)

require("./layoutController").default(dot)
require("./helloView").default(dot)
require("./layoutView").default(dot)
require("./videosController").default(dot)
require("./videosModel").default(dot)
require("./videosView").default(dot)

export default dot
