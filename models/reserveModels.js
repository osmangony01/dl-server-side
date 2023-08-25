const mongoose = require('mongoose');

const reserveDataSchema = mongoose.Schema({
    // I do not have necessary to write schema because I  insert data manually in mongodb
    
});


const reserveDataModels = mongoose.model("reserveData", reserveDataSchema);

//console.log(taskModels.collection.name);

module.exports = reserveDataModels;