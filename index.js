var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())

var http = require('http');
var server = http.createServer(app);

server.listen("4000");

app.use((req, res, next) => {
    console.log("hello o am the mddleware")
    next()
})

app.get("/temp/:city_name", (req, res, next)=>{

    city = req.params.city_name
    res.send("hello aer " + city )
})




app.post("/temp/:city_name", (req, res, next) => {
    console.log("some post is trigerd", req.body.temp)

    city = req.params.city_name
    res.send("hello aer " + city)
})

server.on('error', (err)=>{
    console.log("some error eccored")
});

server.on('listening', (lis)=>{
    console.log("successfully running")


});






