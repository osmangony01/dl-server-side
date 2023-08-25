
const route = require('express').Router();
const { getAllTaskData, getAllCategory } = require('../controllers/categoryController');
const { getAllReserveData } = require('../controllers/reserveData');


route.get("/api/data", getAllTaskData);

// get all category 
route.get('/api/category', getAllCategory);


// get all category data
route.get("/api/getAllCategoryData", getAllReserveData);


module.exports = route;