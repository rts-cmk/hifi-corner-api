import e from "express"
import { getAllProducts } from "../controllers/products.controller"

export default function route(router: e.Router): void {
	router.get("/products", getAllProducts)
}
