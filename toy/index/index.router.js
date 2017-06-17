const express = require('express');
const router  = express.Router();
const ctrl    = require('./index.ctrl');

/* GET home page. */    //err

/* GET */

router.get('/'      , ctrl.getIndex);  //main 페이지 접속 
router.get("/login" , ctrl.getLogin);  //로그인 페이지 접속 
router.get('/signUp', ctrl.getSignUp); //회원가입 페이지 접속 


/* POST */

/* PUT(수정) */ 

/* DELETE(삭제) */

module.exports = router;
