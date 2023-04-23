// express ile asynkron yapısı kuruyoruz.
const asyncHandler = require("express-async-handler")

const Kullanıcı = require('../models/kullaniciModel')

const registerKullanici = asyncHandler(async (req, res) => {
  // 1. Adım kullanıcı gerekli alanları doldurmuş mu
  // 2. Adım email kayıtlıysa kayıt yapılamasın kontrolu

  // 1. Adım başlıyor.
  const { kullaniciAd, email, parola } = req.body // Kullanıcının gireceği bilgiler res.body içinde

  if (!kullaniciAd || !email || !parola) {
    res.status(400)
    throw new Error('Lütfen gerekli alanları doldurunuz')
  } // 1. Adım bitti.

  // 2. Adım başlıyor.
  const kullanici = await Kullanıcı.findOne({ email })

  if (kullanici) {
    res.status(400)
    throw new Error('Bu e-posta zaten var!')
  } // 2. Adım bitti.

  res.json({ mesaj: 'Kullanıcı Kayıt İşlemleri' })
})

const loginKullanıcı = (req,res) => {
  res.json({mesaj: 'Kullanıcı Login İşlemleri'})
}

const getKullanici = (req,res) => {
  res.json({mesaj: 'Kullanıcı Get İşlemleri'})
}

module.exports = {
  registerKullanici,
  loginKullanıcı,
  getKullanici
}
