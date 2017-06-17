const config = require('../../config/dev.config.js');

const getTestAjax = (req, res)=> {
  res.render('sample-ajax', { title: 'sample-ajax' });
}

const getReturnHello = (req, res)=>{
  res.send('Hello World');
}

module.exports = {
  getTestAjax,
  getReturnHello
}