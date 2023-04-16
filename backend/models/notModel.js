const mongoose = require('mongoose')

const notSchema = mongoose.Schema({
    baslik:{
        type: String,
        required : [true, 'Lütfen not başlığını giriniz']
    },
    aciklama: {
        type: String,
        required:[true,'Lütfen not açıklamasını giriniz']
    },
    oncelik: {
        type: number
    },
}, {
    timestamps:true
})

module.exports = mongoose.model('Not',notSchema)