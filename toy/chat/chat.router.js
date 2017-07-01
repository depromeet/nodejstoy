const express = require('express');
const router  = express.Router();
const ctrl    = require('./chat.ctrl'); //수정해야함

/* GET home page. */    //err
router.get('/:roomNum', ctrl.getConnectChat);
/* GET */

/* POST */

/* PUT */

/* DELETE */

module.exports = router;
