const mongoose  = require("mongoose");

const kullaniciSchema = mongoose.Schema({
    kullaniciAd:{
        type:String,
        required:[true, 'Lütfen kullanici adı giriniz']
    },
    email:{
        type: String,
        required: [true, 'Lütfen email giriniz'],
        uniqe:true
    },
    parola:{
        type: String,
        required: [true, 'Lütfen parola giriniz']
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('kullanicis', kullaniciSchema)