


const ReserveData = require('../models/reserveModels');


const getSpecificCategoryData =  async (req, res) => {
    const featureCategory = req.query
    try {
        //console.log(featureCategory);
        const categoryData = await ReserveData.find(featureCategory);
        console.log(categoryData);
        res.status(200).send(categoryData);
    }
    catch (error) {
        res.status(200).send(error.message);
    }
}


module.exports = { getSpecificCategoryData };