const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURI = "mongodb+srv://omkar7890kudale:omkarkudale@oruphones.0cbzmf6.mongodb.net/oruPhones";

// Connect to MongoDB
const connectToDatabase = () => {
  mongoose.connect(mongoURI).then((data) => {
    console.log(`mongoDb connected with server ${data.connection.host}`);
  });
};

module.exports = connectToDatabase;
