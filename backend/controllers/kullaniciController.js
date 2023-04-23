const registerKullanici = (req, res) => {
  res.json({ mesaj: 'Kullanıcı Kayıt İşlemleri' })
}

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
