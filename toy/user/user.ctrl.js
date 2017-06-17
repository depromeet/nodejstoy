const config = require('../../config/dev.config.js');


const users = [
	{ id:1, name:"hj"},
  { id:2, name:"jm"},
  { id:3, name:"sb"}
]

const getUserList = (req, res) =>{
  res.send(users);
}

const getUserInfo =(req, res)=>{
  // let searchUser = users.filter((u)=>{
  //   return u.id==
  // })
  res.send(users.filter(u=> u.id==req.params['userId'] )[0])
}


const postUserInsert= (req, res)=>{
  
  let searchUser = users.filter((u)=>{//형변환 시켜주는 효과 
    return u.id == req.body.id
  })[0];
  
  let isDublication = !!searchUser;

  //검색이 되었으면 인서트가 되면 안된다.
  if(isDublication){
    return res.status(400).send({
      code:400,
      data:'id dulicate'
    })
  }
  
  const newUser = {
    id: req.body.id,
    name: req.body.name
  }
  
  users.push(newUser);
  
  res.status(200).send({
    code: 200,
    data: users
  });
}

module.exports = {
  getUserList,
  getUserInfo,
  postUserInsert
}