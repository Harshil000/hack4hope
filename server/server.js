const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
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
        res.json({ status: 'reject', message: 'user not found' });
    } else {
        if (validUser.password==password){
        res.json({ status: 'accepted', message: 'successfully logged in' });
        } else {
            res.json({ status: 'reject', message: 'incorrect password' });
        }
    }

})

app.post('/signup', async(req, res)=>{
    const {name, mail, password, usertype} = req.body
    if(!await userModel.findOne({mail})){
        const newUser = await userModel.create({
            name,
            mail,
            password,
            userType: usertype
        })
        res.json({ status: "success", message: "User added successfully" });
    } else {
        res.json({ status: "reject", message: "User already exists" });
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
