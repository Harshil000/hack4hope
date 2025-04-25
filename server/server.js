const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 4000
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
