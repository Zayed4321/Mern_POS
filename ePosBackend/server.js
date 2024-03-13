const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/config");
const PORT = process.env.PORT || 8080

// Rest Section 
const app = express();

// dotenv 
dotenv.config();

// db added
connectDB();

// middlewares

app.use(cors());
app.use(express.json())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes

app.use("/api/items", require('./routes/itemRoutes'))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});