describe("The resource /", function() {
	beforeAll(async function() {
		await page.goto("http://localhost:3000")
	})

	it("should have a title", async function() {
		await expect(await page.content()).toMatch("HIFI Corner API")
	})
})
