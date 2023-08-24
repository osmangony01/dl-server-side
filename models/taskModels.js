const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    // I do not have necessary to write schema because I  insert data manually in mongodb
    
});


const taskModels = mongoose.model("task", taskSchema);

//console.log(taskModels.collection.name);

module.exports = taskModels;