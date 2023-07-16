const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const dotenv = require("dotenv")
const exampleRoutes = require("./routes/exampleRoutes")


// const exampleRoutes = require('./routes/exampleRoutes.js');
const errrorMiddleware = require("./middleware/error");

dotenv.config()

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



// Routes
app.use('/', exampleRoutes);

app.use(errrorMiddleware);

module.exports = app;
