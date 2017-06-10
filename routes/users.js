var express = require('express');
var router = express.Router();
var users = [
	{ id:1, name:"hj"},
  { id:2, name:"jm"},
  { id:3, name:"sb"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res){
    res.send(users);
});

module.exports = router;
