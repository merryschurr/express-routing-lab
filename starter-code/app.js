//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var candyRouter = require ('./candyRouter.js');
console.log (candyRouter);

app.use(bodyParser.json());





//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);

//res.json(candy);



app.listen(3000);

// a "GET" request to "/" will run the function below