const express = require("express")
const router = express.Router()
const lesson1Controller = require("../controllers/lesson1")

// Base route
router.get("/", lesson1Controller.welcomeRoute)

module.exports = router
