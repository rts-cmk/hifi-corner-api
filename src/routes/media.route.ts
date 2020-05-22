import e from "express"
import { createMedia } from "../controllers/media.controller"

export default function route(router: e.Router): void {
	router.post("/api/v2/media", createMedia)
}
