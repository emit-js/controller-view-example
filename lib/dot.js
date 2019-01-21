export default function() {
  const dot = require("dot-event")()

  dot.add(require("@dot-event/log"))
  dot.add(require("@dot-event/store"))
  dot.add(require("@dot-event/view"))

  return dot
}
