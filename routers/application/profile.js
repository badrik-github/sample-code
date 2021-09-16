//Requiring Modules
const express = require('express');
const { isAuthenticated } = require('../../middleware/application/middleware');
const { changepassword, editinfo, getuserinfo, uploadprofilephoto, deleteuserprofile } = require('../../controlers/application/profile');
const router = express.Router();

//Requiring upload photo module
var AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
require('dotenv').config()

router.get("/getuserprofile", isAuthenticated, getuserinfo)

router.put("/edituserprofile", isAuthenticated, editinfo)

router.put("/changepassword", isAuthenticated, changepassword)


router.put("/deleteuserprofile", isAuthenticated, deleteuserprofile)


const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET
});

var upload = multer({
      storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_S3BUCKET,
            key: function (req, file, cb) {
                  var orgName = file.originalname;
                  var endEx = "";
                  if (orgName && orgName != null && orgName != "") {
                        if (orgName.endsWith(".png")) {
                              endEx = ".png";
                        }
                        if (orgName.endsWith(".jpg")) {
                              endEx = ".jpg";
                        }
                        if (orgName.endsWith(".JPG")) {
                              endEx = ".JPG";
                        }
                        if (orgName.endsWith(".jpeg")) {
                              endEx = ".jpeg";
                        }
                        if (orgName.endsWith(".svg")) {
                              endEx = ".svg";
                        }
                        cb(null, Date.now().toString() + endEx)
                  }
                  else {
                        return;
                  }
            },
            acl: 'public-read'
      })
});

router.post("/uploadprofilephoto", isAuthenticated, upload.single('file'), uploadprofilephoto)

module.exports = router