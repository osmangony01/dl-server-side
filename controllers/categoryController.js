
const Category = require('../models/categoryModels');


const getAllCategory = async (req, res) => {
    try {
        const categoryData = await Category.find();
        res.status(200).send(categoryData);
    }
    catch (error) {
        res.status(200).send(error.message);
    }
}

module.exports = { getAllCategory }