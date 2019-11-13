module.exports = {
	server: {
		command: "node dist/index",
		port: 3000
	},
	launch: {
		headless: process.env.PUPPETEER_HEADLESS !== false
	}
}
