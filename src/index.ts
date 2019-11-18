import { join } from "path"
;(global as any).XMLHttpRequest = require("xhr2")
require("dotenv").config({ path: join(__dirname, "..", ".env") })
require("./bin/app")
