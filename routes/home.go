package routes

import "github.com/gofiber/fiber/v2"

func Base(app *fiber.App) {
	app.Static("/", "./site/private/main")
}
