const dot = require("./dot").default()

dot.add(require("./layoutPage"))

dot.layoutPage({ element: document.documentElement })
