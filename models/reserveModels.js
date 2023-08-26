const mongoose = require('mongoose');

const reserveDataSchema = mongoose.Schema({
   
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

//console.log(taskModels.collection.name);

module.exports = reserveDataModels;