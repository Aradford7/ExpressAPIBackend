const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
 // not write naming convnetions (all for comics)
  favorites: [{
    comicid: String,
    name: String,
    description: String,
    img: String,}]
})

module.exports = mongoose.model('User', UserSchema)