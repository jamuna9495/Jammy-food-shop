require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const dbURI = process.env.MONGO_URI; // This reads from your .env file

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log("Connected to Database!"))
  .catch((err) => console.log(err));
