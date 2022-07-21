require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({msg: "Api do projeto Kanban!"})
})

mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
app.listen(process.env.PORT || 3000,() => {
  console.log("HTTP server running!🚀 localhost:5000");
});
  }).catch((err) => console.log(err));
