const express = require('express')

const router = express.Router()

const {
  getNotlar,
  setNotlar,
  updateNotlar,
  patchNotlar,
  deleteNotlar,
} = require('../controllers/notControler')

// router.get('/', (req, res) => {
//   res.status(200).json({ mesaj: 'get notlar' })
// })

// router.post('/', (req, res) => {
//   res.status('200').json({ mesaj: 'post notlar' })
// })

// router.put('/:id', (req, res) => {
//   res.status('200').json({ mesaj: `put ${req.params.id} nolu id` })
// })
// router.patch('/:id', (req, res) => {
//   res.status('200').json({ mesaj: `Patch ${req.params.id} nolu kayıtta düzenleme yapıldı` })
// })
// router.delete('/:id', (req, res) => {
//   res.status('200').json({ mesaj: `delete ${req.params.id} nolu kayıt silindi` })
// })

// router.get('/', getNotlar)
// router.post('/', setNotlar)
// router.put('/:id', updateNotlar)
// router.patch('/:id', patchNotlar)
// router.delete('/:id', deleteNotlar)

// Routeları birleştirme, Zincirleme route oluşturma

router.route('/').get(getNotlar).post(setNotlar)
router.route('/:id').put(updateNotlar).patch(patchNotlar).delete(deleteNotlar)

module.exports = router
