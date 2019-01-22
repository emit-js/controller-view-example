export default function() {
  const dot = require("dot-event")()

  dot.add(
    require("@dot-event/log"),
    require("@dot-event/store"),
    require("@dot-event/view")
  )

  return dot
}
