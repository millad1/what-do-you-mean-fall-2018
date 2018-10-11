app.get("/add", function(req, res){
    var something = math.add(2, 3);
    res.send(soemthing);
})
app.use("/", function(req, res, next){
    res.send("hello world");
});

const math = require('./math');