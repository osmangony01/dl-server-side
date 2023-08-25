
const route = require('express').Router();
const { getAllTaskData, getAllCategory } = require('../controllers/categoryController');
const { getAllReserveData } = require('../controllers/reserveDataController');
const { getSpecificCategoryData } = require('../controllers/specificCategoryDataController');


route.get("/api/data", getAllTaskData);

// get all category 
route.get('/api/category', getAllCategory);


// get all category data
route.get("/api/getAllCategoryData", getAllReserveData);

// get all data of specific category
route.get("/api/specificCategoryData", getSpecificCategoryData);


module.exports = route;