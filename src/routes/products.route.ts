import e from "express"
import { getAllProducts, getSingleProduct } from "../controllers/products.controller"
import { v2getAllProducts } from "../controllers/products.controller"

export default function route(router: e.Router): void {
	router.get("/api/v1/products", getAllProducts)
	router.get("/api/v1/products/:sku", getSingleProduct)
	router.get("/api/v2/products", v2getAllProducts)
}
