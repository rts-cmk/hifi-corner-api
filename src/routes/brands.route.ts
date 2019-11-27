import e from "express"
import { getAllBrands } from "../controllers/brands.controller"

export default function route(router: e.Router): void {
	router.get("/api/v1/brands", getAllBrands)
}
