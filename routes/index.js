var express = require('express');
var router = express.Router();

/* GET home page. */    //err
router.get('/', function(req, res, next) {
  console.log(arguments);
  res.render('index', { title: 'Express' });
});

module.exports = router;
