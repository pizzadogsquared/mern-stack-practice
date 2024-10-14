const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    
    const url = "https://";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon;
            res.write("<p>hi<p>");
            res.send()
        });
    });

    res.send("");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});