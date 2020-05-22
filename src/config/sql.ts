import { Sequelize } from "sequelize"

export var sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./dist/data/database.sqlite3"
})

export async function testConnection() {
	try {
		await sequelize.authenticate()
		console.log("Connection established")
	} catch (error) {
		console.error("Unable to connect:", error)
	}
}
