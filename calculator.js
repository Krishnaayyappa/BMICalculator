const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2 ;
  res.send("The calculated value is" + sum);
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/(height*height);
  res.send("The BMI value is" + bmi);
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
