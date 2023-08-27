
const ReserveData = require('../models/reserveModels');


const getAllReserveData = async (req, res) => {
    try {
        const data = await ReserveData.find();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllReserveData };