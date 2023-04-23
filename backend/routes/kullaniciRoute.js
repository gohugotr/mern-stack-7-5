const express = require('express')
const { registerKullanici, loginKullanıcı, getKullanici } = require('../controllers/kullaniciController')

const router = express.Router()

router.post('/', registerKullanici)
router.post('/login', loginKullanıcı)
router.get('/kullanici', getKullanici)

module.exports = router;
