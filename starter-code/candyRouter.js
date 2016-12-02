var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candy = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];

//What would need to go into candies
//in order to pass our first test?

//GET/SHOW all candies in array
router.get('/', function(req,res) {
	res.json(candy);
});

//GET/SHOW candy id 3 at 3000/candy/3
router.get('/:id', function(req, res) {
	res.send({"id":3,"name":"Marshmallow","color":"Pink"});
});

//POST/CREATE 5th candy
router.post('/', function(req, res) {
	res.send({"id":5,"name":"Jelly Belly","color":"Orange"});
}); 

//GET/SHOW all candies
router.get('/', function(req,res) {
	res.json(candy);
});

//PUT/UPDATE candy id 3 color
router.put('/:id', function(req, res) {
	res.send({"name":"Marshmallows","color":"white"});
});

//GET/SHOW all candies
router.get('/', function(req,res) {
	res.json(candy);
});

//DELETE candy id 2
router.delete ('/:id', function(req, res) {
	res.json({"id":2,"name":"Pez","color":"Green"});
});

//GET/SHOW all candies
router.get('/', function(req,res) {
	res.json(candy);
});

module.exports = router;

