var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sample-ajax', { title: 'sample-ajax' });
});

router.get('/return', function(req, res){
    res.send('Hello World');
});

module.exports = router;
