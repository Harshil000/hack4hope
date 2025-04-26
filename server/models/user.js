const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    name: String,
    mail: String,
    password: String,
    userType: String
})

const accountModel= mongoose.model('account', AccountSchema)

module.exports = accountModel
