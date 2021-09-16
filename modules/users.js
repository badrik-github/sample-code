//Require Modules
var mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment")

//Password Encryption Modules
const { v4: uuidv4 } = require('uuid');
const crypto = require("crypto")

//Making Schema
const userschema = new mongoose.Schema({
      name: {
            type: String
      },
      email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
      },
      salt: {
            type: String,
            default: uuidv4()
      },
      e_password: {
            type: String,
            required: true,
      },
      role: {
            type: Number,
            default: 1
      },
      photo: {
            type: String
      },
      address: {
            type: String,
      },
      contactNumber: {
            type: Number
      },
      active: {
            type: Boolean,
            default: true
      },
      isDeleted: {
            type: Boolean,
            default: false
      }
}, { timestamps: true })

//Making Auto Increment
autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin, {
      model: 'userschema',
      startAt: 1,
      incrementBy: 1
});


//Exporting Schema
var user = mongoose.model('user', userschema)
module.exports = { user }