import e from "express"
import Product from "../models/products.model"

export async function getAllProducts(req: e.Request, res: e.Response): Promise<void> {
	try {
		let response
		if (req.query.category) {
			response = await Product.where("category", "==", req.query.category).get()
		} else {
			response = await Product.get()
		}
		const result: Array<Record<string, any>> = []
		response.forEach(item => result.push(item.data()))
		res.json(result)
	} catch (error) {
		console.log(error.stack)
	}
}
