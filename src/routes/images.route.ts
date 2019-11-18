import e from "express"
import { getAllImages } from "../controllers/images.controller"

export default function route(router: e.Router): void {
	router.get("/images", getAllImages)
}
