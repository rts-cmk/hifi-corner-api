import e from "express"
import Brand from "../models/brands.model"

export async function getAllBrands(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		const response = await Brand.get()
		const results: Array<Record<string, any>> = []
		response.forEach(function(brand) {
			results.push(brand.data())
		})
		res.json(Array.from(results))
	} catch (error) {
		next(error)
	}
}
