const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    // I do not have necessary to write schema because I  insert data manually in mongodb
    
});


const categoryModels = mongoose.model("category", categorySchema);

//console.log(taskModels.collection.name);

module.exports = categoryModels;