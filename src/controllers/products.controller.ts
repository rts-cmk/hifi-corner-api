import e from "express"
import Product from "../models/products.model"

export async function getAllProducts(req: e.Request, res: e.Response): Promise<void> {
	try {
		let response
		if (req.query.category) {
			response = await Product.where("category", "==", req.query.category).get()
		} else if (req.query.make) {
			response = await Product.where("make", "==", req.query.make).get()
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

export async function getSingleProduct(req: e.Request, res: e.Response): Promise<void> {
	try {
		const response = await Product.where("sku", "==", req.params.sku).get()
		const result: Array<Record<string, any>> = []
		response.forEach(item => result.push(item.data()))
		res.json(result[0])
	} catch (error) {
		console.log(error)
	}
}