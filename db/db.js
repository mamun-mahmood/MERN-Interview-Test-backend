const {mongoURI} = require("../config");

const mongoose = require("mongoose");
const dbConnect = async () => {
  console.log("Connecting to DB...");
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => console.log("Failed to connect DB"));
};
module.exports = dbConnect;