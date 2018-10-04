var mongoose = require('mongoose')
var Pelajar = require('./models/pelajar')
var url =
'mongodb://lintang:12345@localhost:27017/sekolah'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB!')

})

//  insert data
new Pelajar({
    nis: 2,
    nama: 'Euis',
    kelas: 'I',
    kota: 'Kediri',
    lunas: false,
    tgl: Date().now
}).save().then((hasil)=>{
    console.log(hasil)
    mongoose.disconnect()
})

// ambil semua data
Pelajar.find((error, hasil)=>{
    console.log(hasil)
})
.limit(100)
.sort({nama: -1})  // descending
.then(()=>{
    mongoose.disconnect()
})

// ambil data tertentu
Pelajar.find({nama: 'Andi'}, (error, hasil)=>{
    console.log(hasil)
})
.then(()=>{
    mongoose.disconnect()
})

// ambil data tertentu by id
Pelajar.findById('5bb5849e09c2eb0a6cc33370', (error, hasil)=>{
    console.log(hasil)
})
.then(()=>{
    mongoose.disconnect()
})

// update data tertentu
Pelajar.update(
    {nama: 'Euis'},
    {nama: 'Ela'},
    (error, hasil)=>{
        console.log(hasil)
        mongoose.disconnect()
    }   
)

// delete data tertentu
Pelajar.deleteOne(    
    {nama: 'Ela'},
    (error, hasil)=>{
        console.log(hasil)
        mongoose.disconnect()
    }   
)