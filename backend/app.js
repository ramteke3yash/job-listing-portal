// import express from "express";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
