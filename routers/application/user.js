const express = require('express');
const { signup, signin, refressaccesstoken, forgetpasswordemail, changepassword, verifyemail } = require('../../controlers/application/user');
const router = express.Router();

const { isAuthenticated, isRefreshAuthenticated } = require("../../middleware/application/middleware")

router.post("/signup", signup)

router.post("/signin", signin)

router.get("/refressaccesstoken", isRefreshAuthenticated, refressaccesstoken)

router.post("/forgetpasswordemail", forgetpasswordemail)

router.post("/changepassword", isAuthenticated, changepassword)

router.post("/verifyemail", isAuthenticated, verifyemail)


module.exports = router;