describe("The resource /", function() {
	beforeAll(async function() {
		await page.goto("http://localhost:3000")
	})

	it("should have a welcome message", async function() {
		await expect(await page.content()).toMatch("Hello, World!")
	})
})
