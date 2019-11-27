import e from "express"
import Product from "../models/products.model"

export async function getAllProducts(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		let query: any = Product

		if (req.query.category) {
			query = query.where("category", "==", req.query.category)
		}
		if (req.query.make) {
			query = query.where("make", "==", req.query.make)
		}
		if (req.query.minPrice) {
			query = query.where("price", ">=", parseFloat(req.query.minPrice))
		}
		if (req.query.maxPrice) {
			query = query.where("price", "<=", parseFloat(req.query.maxPrice))
		}

		const response = await query.get()
		const result: Array<Record<string, any>> = []
		response.forEach((item: any) => result.push(item.data()))
		res.json(result)
	} catch (error) {
		next(error.stack)
	}
}

export async function getSingleProduct(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		const response = await Product.where("sku", "==", req.params.sku).get()
		const result: Array<Record<string, any>> = []
		response.forEach(item => result.push(item.data()))
		res.json(result[0])
	} catch (error) {
		next(error)
	}
}
