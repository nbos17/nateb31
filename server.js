const express = require('express');
const http =require('http');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const public = path.join(__dirname, "public");
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(public));
const jsonParser = bodyParser.json();


const PORT = 3030;

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'home.html'))
})

app.get('/home', function(req, res) {
    res.sendFile(path.join(public, 'home.html'))
})