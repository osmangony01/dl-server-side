
const route = require('express').Router();
const { getAllTaskData, getAllCategory } = require('../controllers/categoryController');
const { getAllFilteredData } = require('../controllers/filterController');
const { getAllReserveData } = require('../controllers/reserveDataController');
const { getSpecificCategoryData } = require('../controllers/specificCategoryDataController');


route.get("/api/data", getAllTaskData);

// get all category 
route.get('/api/category', getAllCategory);

// get all category data
route.get("/api/getAllCategoryData", getAllReserveData);

// get all data of specific category
route.get("/api/specificCategoryData", getSpecificCategoryData);

// get all data after filtering
route.get("/api/getFilteredData", getAllFilteredData);




module.exports = route;