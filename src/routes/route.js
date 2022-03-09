const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Validation=require("../MiddleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// create user and show user
router.post("/users", userController.createUser  )
router.get("/showuser",userController.showuser)


// login user and generate jwt
router.post("/login", userController.loginUser)

//The show login user           Validate : token + userId
router.get("/user/:userId", Validation.tokenValidation , Validation.userValidation , userController.getUserData)


// update user          Validate : token + userId
router.put("/users/:userId", Validation.tokenValidation , Validation.userValidation , userController.updateUser)

// show update user
router.get("/Users/:UsersId",userController.showUpdateUser)



// delete user          Validate : token + userId
router.delete("/users/:userId", Validation.tokenValidation , Validation.userValidation , userController.deleteUser)

// show  delete user
router.get("/users/:usersId",userController.showDeleteUser)

// 
module.exports = router;