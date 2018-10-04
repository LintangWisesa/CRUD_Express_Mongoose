var mongoose = require('mongoose')
var Schema = mongoose.Schema

var skemaPelajar = new Schema({
    nis: Number,
    nama: String,
    kelas: String,
    kota: String,
    lunas: Boolean,
    tgl: {type: Date, default: Date.now}
})

var Pelajar = mongoose.model('pelajar', skemaPelajar)
module.exports = Pelajar