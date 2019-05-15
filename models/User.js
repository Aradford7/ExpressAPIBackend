const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
//For Favorite List
  // results:[
  //   {
  //   id: Number,
  //   name: String,
  //   description: String,
  //   resourceURI: String,
  //   thumbnail: {
  //     path: String,
  //     extension: String
  //   }}],
  });


module.exports = mongoose.model('User', UserSchema)