const jwt = require("jsonwebtoken");
const { models } = require("mongoose");
const userModel = require("../models/userModel");



// create user
const createUser = async function (req , res){
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute)
  res.send({ status : true ,msg:savedData});
};

// show user
const showuser=async function(req,res){
  let userData= await userModel.find()
  res.send({status:true,msg : userData}) 
}




// login user and generate jwt
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });

  // check user id and passward
  if (!user)
  return res.send({status: false,msg: "username or the password is not corerct",});

  // create jwt
  let token = jwt.sign({userId: user._id.toString()},"functionup-thorium");
  res.send({ status: true, JWT : token });
};




// get userdata
const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  // check "x-Auth-token" in hadder
  if (!token) res.send({ status: false, msg: "token must be present in request hadder" });

  // varify token
  let decodedToken = jwt.verify(token, "functionup-thorium");
  //console.log(decodedToken)
  if (!decodedToken)
  return res.send({ status: false, msg: "token is invalid" });

  // verify user id
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
  return res.send({ status: false, msg: "No such user exists" });

  // show user
  res.send({ status: true, data: userDetails });
};



// update user
const updateUser = async function (req, res) {
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

  // check "x-Auth-token" in hadder
if (!token) res.send({ status: false, msg: "token must be present in request hadder" })

let userId = req.params.userId;
let user = await userModel.findById(userId);

// check user id
if (!user) return res.send("No such user exists");
  
// update user data
let userData = req.body;
let updatedUser = await userModel.updateOne({ _id: userId },{$set : userData},{new:true});
res.send({ status: "updatedUser true", data: updatedUser });
};



// show updated user
const showUpdateUser = async function(req,res){
  let userId=req.params.UsersId
  let updateUser = await userModel.findOne({_id:userId})
  res.send({updatedUser:updateUser})
}

const deleteUser = async function(req, res){
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

  // check "x-Auth-token" in hadder
if (!token) res.send({ status: false, msg: "token must be present in request hadder" })

  // delete user
  let userId = req.params.userId
  let deletedUser = await userModel.updateOne({_id : userId}, {$set : {isDeleted : true}}, {new : true} )
  res.send({status: true, msg : deletedUser})
}

// show delete user
const showDeleteUser = async function(req,res){
  let userId=req.params.usersId
  let deleteUser = await userModel.findOne({_id:userId})
  res.send({deleteUser:deleteUser})
}

module.exports.createUser = createUser;
module.exports.showuser=showuser
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.showUpdateUser=showUpdateUser
module.exports.deleteUser=deleteUser
module.exports.showDeleteUser=showDeleteUser