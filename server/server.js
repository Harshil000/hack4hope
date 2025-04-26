const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
require("dotenv").config()
const db = require('./db')
const accountModel = require('./models/user')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "*",
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("src")
})

app.post('/login', async (req, res) => {
    const {mail, password, usertype} = req.body
    const validUser = await accountModel.findOne({mail})
    if(!validUser){
        res.json({ status: 'reject', message: 'user not found' });
    } else {
        if (validUser.password==password){
            if(validUser.userType == usertype){
                res.json({ status: 'accepted', message: 'successfully logged in', user: validUser });
            } else {
                res.json({ status: 'reject', message: 'invalid user'});
            }

        } else {
            res.json({ status: 'reject', message: 'incorrect password' });
        }
    }

})

app.post('/signup', async(req, res)=>{
    const {name, mail, password, usertype} = req.body
    if(!await accountModel.findOne({mail})){
        const newUser = await accountModel.create({
            name,
            mail,
            password,
            userType: usertype
        })
        res.json({ status: "success", message: "User added successfully", user: newUser });
        const AdminSchema = new mongoose.Schema({
            name: String,
            mail: String,
            time: String,
            date: String
        })
        const adminModel= mongoose.model(newUser.mail, AdminSchema)
    } else {
        res.json({ status: "reject", message: "User already exists" });
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
