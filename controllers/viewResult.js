
const Task = require('../models/taskModels');


const getAllTaskData = async (req, res) => {
    try {
        const taskData = await Task.find();
        res.status(200).send(taskData);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = { getAllTaskData }