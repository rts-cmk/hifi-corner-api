import e from "express"
import Product from "../models/products.model"
import { Product as v2Product, Category, Brand, Media, Specs } from "../models/models"

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

export async function v2getAllProducts(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		let products = await v2Product.findAll({ include: [Category, Brand, Media, Specs] })
		// TODO: Format response object
		res.json(products)
	} catch (error) {
		console.error(error)
		res.status(500).end()
	}
}

export async function v2createProduct(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		let product = await v2Product.create({
			model: req.fields.model,
			description: req.fields.description,
			sku: req.fields.sku,
			price: req.fields.price,
			link: req.fields.link,
			delivery: req.fields.delivery,
			warranty: req.fields.warranty,
			instock: req.fields.instock
		})
		// TODO: Format response object
		res.json(product)
	} catch (error) {
		console.error(error)
		res.status(500).end()
	}
}