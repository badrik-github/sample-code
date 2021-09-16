const jwt = require('jsonwebtoken')
require('dotenv').config()


//Check if Token is Valid
exports.isAuthenticated = (req, res, next) => {
      if (req.headers.authorization == null || req.headers.authorization == undefined) {
            return res.status(401).json({
                  'isSuccess': false,
                  "messaage": "Unauthorized",
                  "data": {},
                  "status": 401
            })
      }
      let jwttoken = req.headers.authorization
      let TokenArray = jwttoken.split(" ");

      jwt.verify(TokenArray[1], process.env.ACCESS_SECRET, (err, authorized) => {
            //c onsole.log(err)
            if (err) {
                  return res.status(401).json({
                        "isSuccess": false,
                        "data": {},
                        "message": "Unauthorized",
                        "status": 401
                  })
            }
            req.email = authorized.email
            req.id = authorized.id
            next();
      })
}

//Check If Refresh Token Is Valid
exports.isRefreshAuthenticated = (req, res, next) => {
      if (req.headers.authorization == undefined)
            return res.status(401).json({
                  "isSuccess": false,
                  "data": {},
                  "message": "unauthorized",
                  "status": 401
            });

      jwttoken = req.headers.authorization
      TokenArray = jwttoken.split(" ");

      jwt.verify(TokenArray[1], process.env.REFRESS_SECRET, (err, authorized) => {
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

//Check if Token is Valid 
exports.tokenvalidator = (req, res) => {
      if (req.headers.authorization == undefined)
            return res.status(200).json({
                  "valid": false
            });

      jwttoken = req.headers.authorization
      TokenArray = jwttoken.split(" ");

      jwt.verify(TokenArray[1], process.env.ACCESS_SECRET, (err, authorized) => {
            //c onsole.log(err)
            if (err) {
                  return res.status(200).json({
                        "valid": false
                  });
            }
            else {
                  return res.status(200).json({
                        "valid": true
                  });
            }
      })
}
