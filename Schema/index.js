
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    phone: { type: String },
    gander: { type: String },
    dob: { type: String },
    comment: { type: String },

});

const User = mongoose.model('User', userSchema);
module.exports = User;