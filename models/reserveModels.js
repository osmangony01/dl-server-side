const mongoose = require('mongoose');

const reserveDataSchema = mongoose.Schema({
    // I do not have necessary to write schema because I  insert data manually in mongodb
    
    // id: String,
    // location: String,
    // price: Number,
    // featureCategory: String,
    // checkIn: Date,
    // checkOut: Date,
    // locationInfo: String,
    // rating: Number,
    // placeType: String,
    // bedrooms: Number,
    // beds: Number,
    // bathrooms: Number,
    // propertyType: String,
    // guestCapacity: Number,
    // imgSrc: String

});

const reserveDataModels = mongoose.model("reserveData", reserveDataSchema);

module.exports = reserveDataModels;