const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
const db = require('./db')
const userModel = require('./models/user')
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "*",
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("src")
})

app.post('/login', async (req, res) => {
    const {mail, password} = req.body
    const validUser = await userModel.findOne({mail})
    if(!validUser){
        res.send(JSON.stringfy({status: 'reject', message: 'user not found'}))
    } else {
        if (validUser.password==password){
            res.send(JSON.stringify({status: 'accepted', message: 'succesfully logged in'}))
        } else {
            res.send(JSON.stringify({status: "reject" , message: 'incorrect password'}))
        }
    }

})

app.post('/signup', async(req, res)=>{
    const {name, mail, password} = req.body
    const newUser = await userModel.create({
        name,
        mail,
        password
    })
    res.send("User added succesfully")
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
