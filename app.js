const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const mongoUtil = require('./config/database')
const Seller = require('./routes/Seller.route')


const corsOptions = {
    origin: '*',
    Credential: true
}
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Server is running"
    })
})

app.use('/Seller', Seller)

module.exports = app;