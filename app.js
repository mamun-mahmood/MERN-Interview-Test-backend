const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { mongoURI, PORT } = require("./config");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// routes
app.use("/", (req, res) => {
  res
    .send({
      message: "Welcome to the API",
    })
    .status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
