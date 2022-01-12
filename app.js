const express = require("express");
const requestIp = require('request-ip');

const directory = '/home/maa28/Desktop/Web/ma28.onthewifi.com/'
const port = 8080
const app = express();

app.listen(port, () => {
    console.log("Application started and Listening on port " + port);
});

app.get("/", (req, res) => {
    var clientIp = requestIp.getClientIp(req);
    console.log('Someone accessed the website ('+clientIp+')')

    res.sendFile(directory + '/index.html')

});

app.get("/style.css", (req, res) => {
    res.sendFile(directory + '/style.css')
});