import express from "express"
import { join } from "path"
import { readdir } from "fs"
import { log } from "../lib/log"
import Sentry from "../middleware/sentry"
import cache from "../middleware/cache"
import cors from "cors"
const app = express()
const router = express.Router()


router.use(cors())
router.use(express.static(join(__dirname, "..", "public")))
router.use(cache)

readdir(join(__dirname, "..", "routes"), function(err, files: any) {
	if (err) {
		log.error(err)
		return
	}
	files.forEach(async function(file: string) {
		try {
			const module = await import(join(__dirname, "..", "routes", file))
			module.default(router)
		} catch (error) {
			log.error(error.stack)
		}
	})
})

router.use(Sentry.Handlers.errorHandler())

router.use(function onError(err: express.ErrorRequestHandler, req: express.Request, res: any, next: express.NextFunction) {
	res.status(500).json({ errorId: res.sentry })
})

app.use(router)

import server from "./server"
server(app)
