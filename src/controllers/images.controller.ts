import e from "express"
import Image from "../models/images.model"

export async function getAllImages(req: e.Request, res: e.Response): Promise<void> {
	try {
		const response = await Image.listAll()
		response.items.forEach(async (item: any) => console.log(await item.getDownloadURL()))
	} catch (error) {
		console.log(error)
	}
}
