const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ mesaj: 'get notlar' })
})

router.post('/',(req,res)=>{
    res.status('200').json({mesaj: 'post notlar'})
})

router.put('/:id', (req, res) => {
  res.status('200').json({ mesaj: `put ${req.params.id} nolu id` })
})

router.patch('/:id', (req,res) =>{
  res.status('200').json({mesaj: `Patch ${req.params.id} nolu kayıtta düzenleme yapıldı`})
})

router.delete('/:id',(req,res) => {
  res.status('200').json({mesaj: `delete ${req.params.id} nolu kayıt silindi`})
})

module.exports = router
