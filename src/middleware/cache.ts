import e from "express"
import * as mcache from "memory-cache"

export default function middlewareCache(req: e.Request, res: e.Response, next: e.NextFunction): void {
	const key = "__express__" + req.originalUrl || req.url
	const cachedBody = mcache.get(key)
	if (cachedBody) {
		res.send(cachedBody)
		return
	} else {
		res.sendResponse = res.send
		res.send = function(body: string): any {
			mcache.put(key, body, 300 * 1000)
			res.sendResponse(body)
		}
		next()
	}
}
