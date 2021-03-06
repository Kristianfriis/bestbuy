package main

import (
	"github.com/Kristianfriis/bestbuy/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	setupRoutes(app)

	app.Listen(":3000")
}

func setupRoutes(app *fiber.App) {
	routes.Base(app)
}
