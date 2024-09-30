require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/DBconnect");

const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

connectDB();

app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
      optionsSuccessStatus: 200,
      methods: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
    })
  );

mongoose.connection.once("open", () => {
    console.log("Database Connected");
  
    app.listen(PORT, () => console.log(`Server is 🏃‍♂️💨 on ${PORT}`));
  });