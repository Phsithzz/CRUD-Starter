const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/factory');
    console.log("Connect DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
