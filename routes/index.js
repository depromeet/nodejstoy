var express = require('express');
var config = require('../config/dev.config.js')
var router = express.Router();

/* GET home page. */    //err
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/login", function(req, res, next){
  res.render('login', { title: "Login", 'authKey':config.authKey });
});
module.exports = router;
