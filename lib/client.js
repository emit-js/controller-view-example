const emit = require("./emit")()

require("./layoutPage")(emit)

emit.layoutPage({ element: document.documentElement })
