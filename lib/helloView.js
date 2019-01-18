/** @jsx el */
import { el } from "attodom"

export default function({ beforeAny, view }) {
  beforeAny("helloView", (prop, arg, dot, e) =>
    view(e, prop, { ...arg, render })
  )
}

function update() {}

function render() {
  return (
    <div id="main" update={update}>
      hello world
    </div>
  )
}
