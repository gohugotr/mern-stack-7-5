const asyncHandler = require('express-async-handler')

const notSchema = require('../models/notModel')

const getNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ mesaj: `Controller get notlar` })
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
    throw new Error('Lütfen balış ve açıklama giriniz')
  }

  const not = await notModel.create({
    baslik: req.body.baslik,
    aciklama: req.body.aciklama,
    oncelik: req.body.oncelik
  })

  res.status(200).json(not)
})

const updateNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ mesaj: `Controller ${req.params.id} nolu kayıt güncellendi` })
})

const patchNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ mesaj: `Controller ${req.params.id} nolu kayıt patch edildi` })
})

const deleteNotlar = asyncHandler(async (req, res) => {
  res.status(200).json({ mesaj: `Controller ${req.params.id} nolu kayıt silindi` })
})

module.exports = {
  getNotlar,
  setNotlar,
  updateNotlar,
  patchNotlar,
  deleteNotlar,
}
