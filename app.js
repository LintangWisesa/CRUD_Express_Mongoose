var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(cors())

// initial route
app.get('/', (req, res)=>{
    res.send('<h1>Express ♥ Mongoose</h1>')
})

app.listen('1357', ()=>{
    console.log('Serer aktif di port 1357!')
})