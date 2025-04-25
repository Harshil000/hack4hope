const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000
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