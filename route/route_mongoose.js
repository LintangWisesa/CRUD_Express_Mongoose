var router = require('express').Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Pelajar = require('./../models/pelajar')
router.use(bodyParser.json())
var url =
'mongodb://lintang:12345@localhost:27017/sekolah'

// response = semua data dari mongo
router.get('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
        Pelajar.find((error, hasil)=>{
            console.log(hasil)
            res.send(hasil)
        })
        .limit(100)
        .sort({nama: -1})
        .then(()=>{
            mongoose.disconnect()
        })
    })
})

// response = data tertentu by index array
router.get('/data/:index', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
        Pelajar.find((error, hasil)=>{
            console.log(hasil[req.params.index - 1])
            res.send(hasil[req.params.index - 1])
        })
        .limit(100)
        .sort({nama: -1})
        .then(()=>{
            mongoose.disconnect()
        })
    })
})

// route post data ke mongo
router.post('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
        new Pelajar({
            nis: req.body.nis,
            nama: req.body.nama,
            kelas: req.body.kelas,
            kota: req.body.kota,
            lunas: req.body.lunas,
            tgl: Date().now
        }).save().then((hasil)=>{
            console.log(hasil)
            res.send(hasil)
            mongoose.disconnect()
        })
    })
})

// route update data ke mongo
router.put('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
        
    })
})

// route delete data ke mongo
router.delete('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
        
    })
})

module.exports = router