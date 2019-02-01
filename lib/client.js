const dot = require("./dot").default()

require("./layoutPage").default(dot)

dot.layoutPage({ element: document.documentElement })
