const crypto = require('crypto');

exports.SecurePassword = function (plainpassword, salt) {

      //return encrypted password
      return crypto.createHmac('sha256', salt)
            .update(plainpassword)
            .digest('hex')

}

exports.Authentication = function (plainpassword, salt, e_password) {

      //encrypt newly recived password
      let encrypt = crypto.createHmac('sha256', salt)
            .update(plainpassword)
            .digest('hex')

      //If encryted password is true
      if (encrypt === e_password) {
            return true
      }

      //if encrypted password is false 
      else {
            return false
      }
}