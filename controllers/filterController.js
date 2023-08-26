

// const ReserveData = require('../models/reserveModels');

// const getAllFilteredData = async (req, res) => {

//     const filterQuery = req.query;
//     console.log(filterQuery);

//     const searchQuery = {};
//     //placeType: filterQuery.placeType,
//      //   propertyType: filterQuery.propertyType,
            
//     if (filterQuery.hasOwnProperty('placeType')) {
//         searchQuery.placeType =  { $regex: filterQuery.placeType, $options: 'i' };
//     }
//     if (filterQuery.hasOwnProperty('propertyType')) {
//         searchQuery.propertyType = { $regex: filterQuery.propertyType, $options: 'i' };
//     }

//     if (filterQuery.hasOwnProperty('bedrooms')) {
//         if (parseInt(filterQuery.bedrooms)) {
//             searchQuery.bedrooms = { $gte: parseInt(filterQuery.bedrooms) };
//         }
//         //searchQuery.placeType = filterQuery.propertyType;
//     }
//     if (filterQuery.hasOwnProperty('beds')) {
//         if (parseInt(filterQuery.beds)) {
//             searchQuery.beds = { $gte: parseInt(filterQuery.beds) };
//         }
        
//         //searchQuery.placeType = filterQuery.propertyType;
//     }
//     if (filterQuery.hasOwnProperty('bathrooms')) {
//         if (parseInt(filterQuery.bathrooms)) {
//             searchQuery.bathrooms = { $gte: parseInt(filterQuery.bathrooms) };
//         }
       
//         //searchQuery.placeType = filterQuery.propertyType;
//     }
//     if (filterQuery.hasOwnProperty('price')) {
//         if (filterQuery.price && filterQuery.price.length === 2) {
//             searchQuery.price = {
//                 $gte: parseInt(filterQuery.price[0]),
//                 $lte: parseInt(filterQuery.price[1])
//             };
//         }
        
//         //searchQuery.placeType = filterQuery.propertyType;
//     }
    
//     // if (filterQuery.hasOwnProperty('propertyType')) {
//     //     searchQuery.placeType = filterQuery.propertyType;
//     // }

//     // if (parseInt(filterQuery.bedrooms)) {
//     //     searchQuery.bedrooms = { $gte: parseInt(filterQuery.bedrooms) };
//     // }

//     // if (parseInt(filterQuery.beds)) {
//     //     searchQuery.beds = { $gte: parseInt(filterQuery.beds) };
//     // }


//     // if (parseInt(filterQuery.bathrooms)) {
//     //     searchQuery.bathrooms = { $gte: parseInt(filterQuery.bathrooms) };
//     // }

//     // if (filterQuery.price && filterQuery.price.length === 2) {
//     //     searchQuery.price = {
//     //         $gte: parseInt(filterQuery.price[0]),
//     //         $lte: parseInt(filterQuery.price[1])
//     //     };
//     // }

//     console.log(searchQuery);
//     try {
//         const data = await ReserveData.find(searchQuery);
//         console.log(data);
//         res.status(200).send(data);
//     }
//     catch (error) {
//         res.status(500).send(error.message);
//     }
// }

// module.exports = { getAllFilteredData };
const ReserveData = require('../models/reserveModels');

const getAllFilteredData = async (req, res) => {
    const filterQuery = req.query;
    console.log(filterQuery);

    const searchQuery = {};

    if (filterQuery.hasOwnProperty('placeType')) {
        searchQuery.placeType = { $regex: filterQuery.placeType, $options: 'i' };
    }
    if (filterQuery.hasOwnProperty('propertyType')) {
        searchQuery.propertyType = { $regex: filterQuery.propertyType, $options: 'i' };
    }

    if (filterQuery.hasOwnProperty('bedrooms')) {
        if (parseInt(filterQuery.bedrooms)) {
            searchQuery.bedrooms = { $gte: parseInt(filterQuery.bedrooms) };
        }
    }
    if (filterQuery.hasOwnProperty('beds')) {
        if (parseInt(filterQuery.beds)) {
            searchQuery.beds = { $gte: parseInt(filterQuery.beds) };
        }
    }
    if (filterQuery.hasOwnProperty('bathrooms')) {
        if (parseInt(filterQuery.bathrooms)) {
            searchQuery.bathrooms = { $gte: parseInt(filterQuery.bathrooms) };
        }
    }
    if (filterQuery.hasOwnProperty('price')) {
        if (filterQuery.price && filterQuery.price.length === 2) {
            searchQuery.price = {
                $gte: parseInt(filterQuery.price[0]),
                $lte: parseInt(filterQuery.price[1])
            };
        }
    }

    console.log(searchQuery);
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

module.exports = { getAllFilteredData };
