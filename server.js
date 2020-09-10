const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const path = require('path')


const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/weather', { useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))



const port = 8080
app.listen(port,function(){
    console.log(`server is running on port ${port}`);
})