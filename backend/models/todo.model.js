const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  mobile: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
  },
  address: {
    type: String,
    required: true
  },
  profilePic: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
