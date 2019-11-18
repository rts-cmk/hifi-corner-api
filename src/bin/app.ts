import express from "express"
import { join } from "path"
import { readdir } from "fs"
import { log } from "../lib/log"
import cors from "cors"
const app = express()
const router = express.Router()

router.use(cors())

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

app.use(router)

import server from "./server"
server(app)
