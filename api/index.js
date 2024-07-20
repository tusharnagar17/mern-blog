const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

app.use(bodyParser.json())

app.get('/test', (req, res)=> {
    res.status(200).json("Test endpoint working")
})

app.listen(process.env.PORT, ()=> {
    console.log("You app is listening to port: http://localhost:5000")
})