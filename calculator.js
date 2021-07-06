const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function (req, res) {
      res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
      console.log(req.body.num1);
      var n1 = Number(req.body.num1);
      var n2 = Number(req.body.num2);
      var result = n1 + n2
      res.send("the result is " + result);
});

app.get("/bmicalculator", function (req, res) {
      res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function (req, res) {
      console.log(req.body.weight);
      var w = parseFloat(req.body.weight);
      var h = parseFloat(req.body.height);
      var bmi = (w / (h * h));
      res.send("your bmi is " + bmi);
});
app.listen(3000, function () {
      console.log("yes,this is it");
});