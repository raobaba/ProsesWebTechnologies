const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
    unique: true
  },
  address: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};
