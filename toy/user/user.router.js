const express = require('express');
const router  = express.Router();
const ctrl    = require('./user.ctrl');

/* GET home page. */    //err

/* GET */
router.get('/'       , ctrl.getUserList);
router.get('/:userId', ctrl.getUserInfo);

/* POST */
router.post('/'      , ctrl.postUserInsert);

/* PUT */

/* DELETE */

module.exports = router;
