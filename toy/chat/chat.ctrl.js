const config = require('../../config/dev.config.js');
const protocal = require('../../constants/chat');
/**
 * 채팅을 할 수 있는 페이지로 가지는 라우터
 * @param  {request} req [description]
 * @param  {response} res [description]
 * @return {[type]}     [description]
 */
const getConnectChat = function(req, res){
    res.render('chat/room', {layout: false, protocal: protocal , roomNum: req.params.roomNum});
}


module.exports = {
  getConnectChat,
};
