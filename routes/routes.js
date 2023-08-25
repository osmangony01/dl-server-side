
const route = require('express').Router();
const { getAllTaskData, getAllCategory } = require('../controllers/categoryController');


route.get("/api/data", getAllTaskData);

// category route
route.get('/api/category', getAllCategory)


module.exports = route;