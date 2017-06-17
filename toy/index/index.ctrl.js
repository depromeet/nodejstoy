const config = require('../../config/dev.config.js');

const getSignUp = (req, res) =>{//회원가입 라우터 컨트롤러
  res.render('signUp');
}

const getIndex = (req, res)=> {
  res.render('index', { title: 'Express' });
}

const getLogin = (req, res)=> {
  res.render('login', { title: "Login", 'authKey':config.authKey });
}

module.exports = {
  getSignUp,
  getIndex,
  getLogin
}