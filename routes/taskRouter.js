
const route = require('express').Router();
const { getAllTaskData } = require('../controllers/viewResult');


route.get("/", getAllTaskData);

module.exports = route;