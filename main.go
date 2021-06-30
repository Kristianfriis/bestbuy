package main

import (
	"github.com/Kristianfriis/bestbuy/routes"
	"github.com/Kristianfriis/bestbuy/test"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	setupRoutes(app)

	app.Listen(":3000")
}

func setupRoutes(app *fiber.App) {
	// app.Get("/test", testRoutes)
	routes.Base(app)
}

func testRoutes(c *fiber.Ctx) {
	c.SendString(test.Test())
}
