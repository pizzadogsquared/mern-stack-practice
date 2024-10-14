const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: elijahsprouse1806@gmail.com");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});