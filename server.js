const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")
const api = require('./server/Routes/api')

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/weather', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
app.use('/',api)

    
const port = 8080
app.listen(port,function(){
    console.log(`server is running on port ${port}`);
})