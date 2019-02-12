const dot = require("./dot")()

require("./layoutPage")(dot)

dot.layoutPage({ element: document.documentElement })
