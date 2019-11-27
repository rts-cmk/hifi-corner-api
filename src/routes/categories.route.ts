import e from "express"
import { getAllCategories } from "../controllers/categories.controller"

export default function route(router: e.Router): void {
	router.get("/api/v1/categories", getAllCategories)
}
