const route= require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


route.get("/", lesson1Controller.welcomeRoute);

module.exports = route;