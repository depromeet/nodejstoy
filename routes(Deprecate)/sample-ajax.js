var express = require('express');
var router = express.Router();

/* GET users listing. */

module.exports = router;


/*

Bad
router.get('/sample-userList')
router.get('/sample-ajax')

Good
app.use('/sample', router_sample)
router.get('/userList')
router.get('/ajax')

*/