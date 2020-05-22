import e from "express"
import Product from "../models/products.model"
import { Category, Media } from "../models/models"

export async function getAllCategories(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		const response = await Product.get()
		const results: Set<string> = new Set()
		response.forEach(function(product) {
			results.add(product.data().category)
		})
		res.json(Array.from(results))
	} catch (error) {
		next(error)
	}
}

export async function v2getAllCategories(req:e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		let categories = await Category.findAll({
			include:[Media]
		})
		//TODO: format response
		res.json(categories)
	} catch (error) {
		console.error(error)
		res.send(500).end
	}
	
}


export async function v2createCategory(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		let category = await Category.create({
			name: req.fields.name,
			mediaId: req.fields.mediaId
		})
		// TODO: Format response object
		res.json(category)
	} catch (error) {
		console.error(error)
		res.status(500).end()
	}
}