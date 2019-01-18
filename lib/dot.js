const dot = require("dot-event")()

require("@dot-event/log")(dot)
require("@dot-event/view")(dot)

require("./layoutController").default(dot)
require("./helloView").default(dot)
require("./layoutView").default(dot)

export default dot
