const express = require('express');
const cors = require('cors');
// const path = require('path');

require('./config/db');
const taskRouter = require("./routes/taskRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Server is running ...")
});


module.exports = app;

