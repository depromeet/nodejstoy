const express = require('express');
const router  = express.Router();
const ctrl    = require('./sample.ctrl'); //수정 

/* GET home page. */  
router.get('/'      , ctrl.getTestAjax);
router.get('/return', ctrl.getReturnHello);

/* GET */

/* POST */

/* PUT */

/* DELETE */

module.exports = router;
