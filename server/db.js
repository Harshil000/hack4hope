const mongoose = require('mongoose')

const connect = mongoose.connect('mongodb+srv://rudranpatel0980:AEgIUTDsg9CAxbfv@hackspire.pcbz20x.mongodb.net/?retryWrites=true&w=majority&appName=HackSpire').then(()=>{
    console.log('Connected to DB')
})

module.exports = connect
