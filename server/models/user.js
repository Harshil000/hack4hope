const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    password: String,
    userType: String
})

const userModel= mongoose.model('quiz', userSchema)

module.exports = userModel
