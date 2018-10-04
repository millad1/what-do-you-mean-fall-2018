const math = require('./math');
const express = require('express')


const app = express();

app.get("/add", function(req, res){
    var something = math.add(2, 3);
    res.send(soemthing);
})
app.use("/", function(req, res, next){
    res.send("hello world");
});

app.listen(3000);