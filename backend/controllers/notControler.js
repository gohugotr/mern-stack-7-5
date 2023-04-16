const asyncHandler = require('express-async-handler')

const notModel = require('../models/notModel')

const getNotlar = asyncHandler(async (req, res) => {
  //res.status(200).json({ mesaj: `Controller get notlar` })
  const notlar = await notModel.find()
  res.status(200).json(notlar)
})

const setNotlar = asyncHandler(async (req, res) => {
  //   body verisini yakalama
  //   console.log(req.body);

  //   if(!req.body.mesaj){
  //       res.status(400).json({mesaj: `Lütfen mesaj alanını girin`})
  //   }

  //   express ile hata yakalama
  //   if (!req.body.mesaj) {
  //     res.status(400)
  //     throw new Error('Lütfen mesaj alanını giriniz')
  //   }

  //   res.status(200).json({ mesaj: `Controller post notlar` })

  if (!req.body.baslik || !req.body.aciklama) {
    res.status(400)
    throw new Error('Lütfen başlık ve açıklama giriniz')
  }

  const not = await notModel.create({
    baslik: req.body.baslik,
    aciklama: req.body.aciklama,
    oncelik: req.body.oncelik,
  })

  res.status(200).json(not)
})

const updateNotlar = asyncHandler(async (req, res) => {
  //res.status(200).json({ mesaj: `Controller ${req.params.id} nolu kayıt güncellendi` })
  const not = await notModel.findById(req.params.id)

  if (!not) {
    res.status(400)
    throw new Error('Not bulunamadı')
  }

  const guncelle = await notModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(guncelle)
})

const patchNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ mesaj: `Controller ${req.params.id} nolu kayıt patch edildi` })
})

const deleteNotlar = asyncHandler(async (req, res) => {
  //res.status(200).json({ mesaj: `Controller ${req.params.id} nolu kayıt silindi` })
  const not = await notModel.findById(req.params.id)
  if (!not){
    res.status(400)
    throw new Error('Kayıt bulunamadı')
  }
  //const siliniyor = await notModel.findByIdAndDelete(req.params.id) veya aşşağıdaki gibi
  await notModel.deleteOne(not)

  res.status(200).json(not._id)
})

module.exports = {
  getNotlar,
  setNotlar,
  updateNotlar,
  patchNotlar,
  deleteNotlar,
}
