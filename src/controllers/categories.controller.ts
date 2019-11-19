import e from "express"
import Product from "../models/products.model"

export async function getAllCategories(req: e.Request, res: e.Response): Promise<void> {
	try {
		const response = await Product.get()
		const results: Set<string> = new Set()
		response.forEach(function(product) {
			results.add(product.data().category)
		})
		res.json(Array.from(results))
	} catch (error) {
		console.log(error)
	}
}