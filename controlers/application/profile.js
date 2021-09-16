//Requiring Modules
const { user } = require("../../modules/users")

var AWS = require('aws-sdk');

exports.editinfo = async (req, res) => {
      const { address, contactNumber, name } = req.body
      const userid = req.id

      try {

            var finduser = await user.findOne({ _id: userid })

            finduser.address = address
            finduser.contactNumber = contactNumber
            finduser.name = name

            let save = await finduser.save()

            return res.status(200).json({
                  "isSuccess": true,
                  "message": "Updated succesfully",
                  "data": {
                        "email": save.email,
                        "user_id": save._id
                  },
                  "status": 200,
            })
      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "message": "Internel Server Error",
                  "data": {},
                  "status": 500,
            })
      }
}

exports.getuserinfo = async (req, res) => {
      const userid = req.id
      try {
            var finduser = await user.findOne({ _id: userid }, { _id: 1, email: 1, name: 1, photo: 1, address: 1, contactNumber: 1 }).lean()
            //console.log(finduser)
            return res.status(200).json({
                  "isSuccess": true,
                  "message": "Succesfull Search",
                  "data": {
                        "email": finduser.email,
                        "user_id": finduser._id,
                        "contactNumber": finduser.contactNumber,
                        "photo": finduser.photo,
                        "address": finduser.address,
                        "name": finduser.name
                  },
                  "status": 200,
            })
      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "message": "Internel Server Error",
                  "data": {},
                  "status": 500,
            })
      }
}

exports.changepassword = async (req, res) => {
      const userid = req.id

      const { oldpassword, newpassword } = req.body

      try {
            var finduser = await user.findOne({ _id: userid })

            if (finduser.Authentication(oldpassword, finduser.salt, finduser.e_password) == true) {
                  var new_password = finduser.SecurePassword(newpassword, finduser.salt)

                  finduser.e_password = new_password

                  var savechanges = await finduser.save()

                  return res.status(200).json({
                        "isSuccess": true,
                        "message": "Password Changed succesfully",
                        "data": {
                              "email": savechanges.email,
                              "user_id": savechanges._id
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
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "message": "Internel Server Error",
                  "data": {},
                  "status": 500,
            })
      }
}

exports.uploadprofilephoto = async (req, res) => {
      userid = req.id
      var locfile = req.file.location

      try {
            var userinfo = await user.findOne({ _id: userid })

            if (userinfo.photo != undefined) {

                  var x = userinfo.photo.split("/")

                  //console.log(x)
                  var s3 = new AWS.S3({
                        accessKeyId: process.env.AWS_KEY,
                        secretAccessKey: process.env.AWS_SECRET
                  });
                  s3.deleteObject({
                        Bucket: process.env.AWS_S3BUCKET,
                        Key: x[3]
                  }, (err, data) => { })
            }

            if (locfile != null || locfile != "undefined") {
                  userinfo.photo = locfile

                  var savedata = await userinfo.save()


                  return res.status(200).json({
                        "isSuccess": true,
                        "data": {
                              "name": savedata.name,
                              "email": savedata.email,
                              "user_id": savedata._id,
                              "photo": savedata.photo
                        },
                        "message": "Uploaded succesfully",
                        "status": 200
                  })
            }
      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "message": "Internel Server Error",
                  "data": {},
                  "status": 500,
            })
      }
}


exports.deleteuserprofile = async (req, res) => {

      const id = req.id

      try {
            var update = await user.findByIdAndUpdate(id, { isDeleted: true })

            return res.status(200).json({
                  "isSuccess": true,
                  "data": {
                        "Message": "Profile Deleated Succesfully",
                  },
                  "message": "Profile Deleted succesfully",
                  "status": 200
            })
      }
      catch (error) {
            console.log(error)

            return res.status(500).json({
                  "isSuccess": false,
                  "message": "Internel Server Error",
                  "data": {},
                  "status": 500,
            })
      }
}