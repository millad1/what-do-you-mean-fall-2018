function add(a, b)
{
    return a + b;
}

exports.add = add;


//Add exercises to a user. ('Recording Exercises')
app.post("/users/addingExercises/", function(req, res)
{
    //Get the current userID header.
   var idNumber = req.header("idNumber");
   currentlyRunning.addExercise(req.body.completedExercises, idNumber);
   res.send("A new exercise had been added. Nice!");
})