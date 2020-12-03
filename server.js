const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


mongoose.connect(
    process.env.MONGODB_URI || '',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

require("./routes/api-routes.js")(app);