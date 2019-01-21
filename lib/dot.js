export default function() {
  const dot = require("dot-event")()

  require("@dot-event/log")(dot)
  require("@dot-event/store")(dot)
  require("@dot-event/view")(dot)

  return dot
}
