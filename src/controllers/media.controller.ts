import e from "express"
import { Media } from "../models/models"

import { readFileSync, writeFileSync } from "fs"
import { join } from "path"
import Jimp from "jimp"

function saveFile(file: any) {
	let tmpFile = readFileSync(file.path)
	let newFileName = Date.now() + file.name
	let newFile = join(__dirname, "..", "file-bucket", newFileName)
	writeFileSync(newFile, tmpFile)
	return newFileName
}

export async function createMedia(req: e.Request, res: e.Response, next: e.NextFunction): Promise<void> {
	try {
		console.log(req.files.media.path)
		console.log(req.files.media.name)
		console.log(req.files.media.size)
		console.log(req.fields.name)
		new Jimp(req.files.media.path, function(err, image) {
			if(!err) {
				console.log("width", image.bitmap.width)
				console.log("height", image.bitmap.height)
			} else {
				console.error(err)
			}
		})
		res.end()
	} catch (error) {
		
	}
}