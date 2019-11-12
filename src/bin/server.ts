import e from "express"
import { log } from "../lib/log"

export default async function server(app: e.Application): Promise<void> {
	try {
		const server: any = await app.listen(process.env.PORT)
		log.info(`App is listening on port ${server.address().port}`)
	} catch (error) {
		log.error(error)
		process.exit(1)
	}
}
