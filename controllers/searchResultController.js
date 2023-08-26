
const ReserveData = require('../models/reserveModels');

const getAllSearchResultData = async (req, res) => {
    const queryResult = req.query;
    console.log(queryResult);
    //const searchQuery = {};

    const searchQuery = {
        location: { $regex: queryResult.location, $options: 'i' }, // Searching location with "chittagong"
        $and: [
          { checkIn: { $lt: queryResult.checkIn } }, // Check-in date in the database is before to the given check-in date
          { checkOut: { $gt: queryResult.checkIn } }, // Check-out date in the database is after or equal to the  given check-in date
          { checkIn: { $lt: queryResult.checkOut } }, // Check-in date in the database is before or equal to the  given check-out date
          { checkOut: { $gt: queryResult.checkOut } }, // Check-out date in the database is after or equal to the given check-out date
        ],
        guestCapacity: { $lte: queryResult.guestCapacity } // Guest capacity is at least 6
      };

    

    
    try {
        const data = await ReserveData.find(searchQuery);
        console.log(data);
        res.status(200).send(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

module.exports = { getAllSearchResultData };
