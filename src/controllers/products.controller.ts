import e from "express"
import Product from "../models/products.model"

export async function getAllProducts(req: e.Request, res: e.Response): Promise<void> {
	try {
		const response = await Product.get()
		const result: Array<Record<string, any>> = []
		response.forEach(item => result.push(item.data()))
		res.json(result)
	} catch (error) {
		console.log(error.stack)
	}
}
