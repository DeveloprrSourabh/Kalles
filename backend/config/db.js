const mongoose = require("mongoose");

// Connect to Mongodb Compass

const connectToMongo = () =>
  mongoose
    .connect("mongodb://localhost:27017/kalles")
    .then(console.log("Connect Successfully"))
    .catch((error) => {
      console.log(error);
    });

module.exports = connectToMongo;
