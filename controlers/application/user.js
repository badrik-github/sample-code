//Requiring Schema
const { user } = require("../../modules/users")

//JWT to sign a token
var jwt = require('jsonwebtoken');


require('dotenv').config()

const { SecurePassword, Authentication } = require("../../utils/password");

exports.signup = async (req, res) => {
      const { email, password, name } = req.body

      try {
            const newuser = new user()

            //console.log(newuser)

            let e_pass = SecurePassword(password, newuser.salt)

            //console.log(e_pass)
            //console.log(name, email, password)

            newuser.e_password = e_pass
            newuser.name = name
            newuser.email = email

            var saveresponse = await newuser.save()
            //console.log(saveresponse)


            return res.status(200).json({
                  "isSuccess": true,
                  "message": "Signed up succesfully",
                  "data": {
                        "email": saveresponse.email
                  },
                  "status": 200
            })
      }
      catch (error) {
            console.log(error)

            if (error.name === 'MongoError' || error.code === 11000) {
                  return res.status(403).json({
                        "isSuccess": false,
                        "message": "Email already in use",
                        "data": {},
                        "status": 403
                  })
            }
            else {
                  console.log(error)
                  return res.status(500).json({
                        "isSuccess": false,
                        "message": "Internel server error Occured",
                        "data": {},
                        "status": 500
                  })
            }
      }

}

exports.signin = async (req, res) => {

      const { email, password } = req.body

      try {
            var findresponse = await user.findOne({ email: email })

            //console.log(findresponse)
            if (findresponse == null || findresponse.isDeleted == true) {
                  return res.status(404).json({
                        "isStatus": false,
                        'message': "Data not found",
                        "data": {},
                        "status": 404
                  })
            }

            if (findresponse.email == email) {
                  //console.log(findresponse.e_password)
                  if (Authentication(password, findresponse.salt, findresponse.e_password) == true) {

                        const payload = {
                              email: email,
                              id: findresponse._id
                        };

                        console.log(payload);
                        const access_secret = process.env.ACCESS_SECRET;
                        const access_token = jwt.sign(payload, access_secret, { expiresIn: '4h' });

                        const refresh_secret = process.env.REFRESS_SECRET;
                        const refresh_token = jwt.sign(payload, refresh_secret, { expiresIn: '2d' });

                        return res.status(200).json({
                              "isSuccess": true,
                              "message": "signed in succesfully",
                              "data": {
                                    "email": email,
                                    "access_token": access_token,
                                    "refresh_token": refresh_token,
                                    "user_id": findresponse._id
                              },
                              "status": 200
                        })
                  }
                  else {
                        return res.status(401).json({
                              "isSuccess": false,
                              "message": "Invalid login crediantials",
                              "data": {},
                              "status": 401
                        })
                  }
            }
      }
      catch (error) {
            console.log(error)
            return res.status(500).json({
                  "isSuccess": false,
                  "message": "Internel server error Occured",
                  "data": {},
                  "status": 500
            })
      }
}

exports.refressaccesstoken = async (req, res) => {
      email = req.email

      try {
            var x = await user.findOne({ email: email })

            const payload = {
                  email: x.email,
                  id: x._id
            };

            const access_secret = process.env.ACCESS_SECRET;
            const access_token = jwt.sign(payload, access_secret, { expiresIn: '4h' });

            return res.status(200).json({
                  "isSuccess": true,
                  "data": {
                        "access_token": access_token
                  },
                  "message": "Succesfull Access Token",
                  "status": 200
            })

      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "data": {},
                  "message": "Internel Server Error",
                  "status": 500
            })
      }
}

exports.forgetpasswordemail = async (req, res) => {

      const { email } = req.body;

      try {
            var userinfo = await user.findOne({ email: email })

            //console.log(userinfo)

            if (userinfo == null) {
                  return res.status(404).json({
                        "isSuccess": false,
                        "data": {},
                        "message": "Data not Found",
                        "status": 404
                  })
            }

            //sendemail(userinfo.email, userinfo.name, userinfo._id)

            //console.log(emailsend)

            return res.status(200).json({
                  "isSuccess": true,
                  "data": {
                        "body": "email Send Succesfully"
                  },
                  "message": "Email Send Succesfully",
                  "status": 200
            })

      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "data": {},
                  "message": "Internel Server Error",
                  "status": 500
            })
      }
}


exports.changepassword = async (req, res) => {
      const { newPassword } = req.body

      const email = req.email

      try {
            var userinfo = await user.findOne({ email: email })

            userinfo.e_password = SecurePassword(newPassword, userinfo.salt)

            var savechanges = await userinfo.save()

            return res.status(200).json({
                  "isSuccess": true,
                  "data": {
                        "user_id": savechanges._id
                  },
                  "message": "Password Changed Succesfully",
                  "status": 200
            })

      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "data": {},
                  "message": "Internel Server Error",
                  "status": 500
            })
      }
}

exports.verifyemail = async (req, res) => {

      try {
            const email = req.email

            var userinfo = await user.findOne({ email: email })

            userinfo.active = true;

            var savedata = await userinfo.save()

            return res.status(200).json({
                  "isSuccess": true,
                  "data": {
                        "user_id": savedata._id
                  },
                  "message": "Email verified Succesfully",
                  "status": 200
            })
      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "data": {},
                  "message": "Internel Server Error",
                  "status": 500
            })
      }
}