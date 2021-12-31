const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tel: {
        type: String,
        required: true,
        unique: true
    },
    cc: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    accessToken: {
        type: Array
    }
})

const User = new mongoose.model('users', userSchema);

module.exports = User;