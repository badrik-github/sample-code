const { user } = require('../../modules/users')
const jwt = require('jsonwebtoken')

require('dotenv').config()


exports.adminsignin = async (req, res) => {
      const { email, password } = req.body

      try {
            var findresponse = await user.findOne({ email: email, role: 2 })

            //console.log(findresponse)
            if (findresponse == null) {
                  return res.status(404).json({
                        "isStatus": false,
                        'message': "Data not found",
                        "data": {},
                        "status": 404
                  })
            }

            if (findresponse.email == email) {
                  //console.log(findresponse.e_password)
                  if (findresponse.Authentication(password, findresponse.salt, findresponse.e_password) == true) {

                        const payload = {
                              email: email,
                              id: findresponse._id
                        };
                        const access_secret = process.env.ADMIN_ACCESS_SECRET;
                        const access_token = jwt.sign(payload, access_secret, { expiresIn: '4h' });

                        const refresh_secret = process.env.ADMIN_REFRESS_SECRET;
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

exports.regenerateaccess = async (req, res) => {
      const email = req.email

      try {
            var x = await user.findOne({ email: email, role: 2 })

            const payload = x.email;
            const access_secret = process.env.ACCESS_SECRET;
            const access_token = jwt.sign({ payload }, access_secret, { expiresIn: '4h' });

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