const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const exampleRoutes = require('./routes/exampleRoutes.js');
const connectToDatabase = require("./config/db.js")
const errrorMiddleware = require("./middleware/error");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

connectToDatabase()

// Routes
app.use('/api/examples', exampleRoutes);

app.use(errrorMiddleware);
console.log("Hi")

module.exports = app;
