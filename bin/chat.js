const protocol = require('../constants/chat');

const socketArr = {
}

module.exports = function(server){
  const io = require('socket.io')(server);

  io.on('connection', function(socket){
    console.log('a user connected');

    socket.id = new Date().valueOf();

    socket.on(protocol.CONNECT_ROOM, function(roomNum){
      socket.connectRoomNb = roomNum;

      if(socketArr[roomNum] == undefined){
        socketArr[roomNum] = [];
      }

      socketArr[roomNum].push(socket);
      socket.emit(protocol.CONNECT_SUCCESS, roomNum);
    });

    socket.on('disconnect', function(s){
      socketArr[socket.connectRoomNb] = socketArr[socket.connectRoomNb].filter(function(s){//채팅방에 접속해 있는 사람정보
        return s.id !== socket.id;
      });
      console.log(socketArr[socket.connectRoomNb].map(function(s){ return s.id }));
    });

    socket.on(protocol.SEND_MESSAGE, function(msgObj){
      socketArr[msgObj.roomNum].forEach(function(s){
        s.emit(protocol.RECEIVE_MESSAGE, msgObj.msg);
      })
      console.log('message: ' + msgObj.msg);
    });
  });
}
