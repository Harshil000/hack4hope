const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
const db = require('./db')
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "*",
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("src")
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
