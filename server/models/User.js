const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: String,
  isActivated: {type: Boolean, default: false},
  googleId: String
});

module.exports = mongoose.model('User', userSchema);
