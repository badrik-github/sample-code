const { user } = require('../../modules/users')
var jwt = require('jsonwebtoken');
require('dotenv').config()


exports.isAdminAuthenticated = (req, res, next) => {
      if (req.headers.authorization == undefined)
            return res.status(401).json({
                  "isSuccess": false,
                  "data": {},
                  "message": 'unauthorized',
                  "status": 401
            });

      jwttoken = req.headers.authorization
      TokenArray = jwttoken.split(" ");

      jwt.verify(TokenArray[1], process.env.ADMIN_ACCESS_SECRET, (err, authorized) => {
            //c onsole.log(err)
            if (err) {
                  return res.status(401).json({
                        "isSuccess": false,
                        "data": {},
                        "message": "unauthorized",
                        "status": 401
                  })
            }
            req.email = authorized.email
            req.id = authorized.id
            next();
      })
}

exports.isAdmin = (req, res, next) => {

      email = req.email

      user.findOne({ email: email, role: 2 }, (err, Admin) => {
            if (err) {
                  return res.status(401).json({
                        "isSuccess": false,
                        "data": {},
                        "message": errorcodes.error_401,
                        "status": 401
                  })
            }
            else {
                  next();
            }
      })
}


exports.isRefreshAuthenticated = (req, res, next) => {
      if (req.headers.authorization == undefined)
            return res.status(401).json({
                  "isSuccess": false,
                  "data": {},
                  "message": 'unauthorized',
                  "status": 401
            });

      jwttoken = req.headers.authorization
      TokenArray = jwttoken.split(" ");

      jwt.verify(TokenArray[1], process.env.ADMIN_REFRESS_SECRET, (err, authorized) => {
            //c onsole.log(err)
            if (err) {
                  return res.status(401).json({
                        "isSuccess": false,
                        "data": {},
                        "message": "unauthorized",
                        "status": 401
                  })
            }
            req.email = authorized.email
            req.id = authorized.id
            next();
      })
}
