import e from "express"

export default function(router: e.Router): void {
	router.get("/", function(req, res) {
		res.json({ message: "Hello, World!" })
	})
}
