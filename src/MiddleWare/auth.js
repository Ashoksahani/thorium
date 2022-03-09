const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel");


    // token validation
    const tokenValidation = async function (req, res, next){
    let token = req.headers["x-auth-token"]

    // check hadder
    if(!token) return res.send({status: false, msg: "hadder must be present"})

   // varify token
   let decodedToken = jwt.verify(token, "functionup-thorium");
   //console.log(decodedToken)
   if (!decodedToken)
   return res.send({ status: false, msg: "token is invalid" });
    next()
}


    // user validation
    const userValidation = async function (req,res, next){
        let userid = req.params.userId
        let user =  await userModel.findById(userid)
        if(!user) return res.send({status: false, msg: "User ID does not exist"})
        next()
    }
    
    
module.exports.tokenValidation=tokenValidation
module.exports.userValidation=userValidation