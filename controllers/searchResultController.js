
const ReserveData = require('../models/reserveModels');


const getAllSearchResultData = async (req, res) => {
    
    const queryResult = req.query;
   
    const checkInDate = new Date(queryResult.checkIn);
    const checkOutDate = new Date(queryResult.checkOut);

    //console.log(queryResult);
    //const searchQuery = {};

    const searchQuery = {
        location: { $regex: queryResult.location, $options: 'i' },
        $or: [
            /* my check-in and check-out date is either less  than the database check-in 
               or grater than the database check-out */
            {
                $and: [
                    { checkIn: { $lt: checkInDate } },
                    { checkOut: { $lt: checkInDate } }
                ]
            },
            {
                $and: [
                    { checkIn: { $gt: checkOutDate } },
                    { checkOut: { $gt: checkOutDate } }
                ]
            }
        ],
        guestCapacity: { $gte: parseInt(queryResult.guestCapacity) }
    };

    //console.log(searchQuery)
    try {
        const data = await ReserveData.find(searchQuery);
        //console.log(data);
        res.status(200).send(data);
    }
    catch (error) {
        //console.error(error);
        res.status(500).send(error.message);
    }
}

module.exports = { getAllSearchResultData };
