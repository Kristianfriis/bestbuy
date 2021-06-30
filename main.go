package main

import (
	"github.com/Kristianfriis/bestbuy/test"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString(test.Test())
	})

	app.Listen(":3000")
}
