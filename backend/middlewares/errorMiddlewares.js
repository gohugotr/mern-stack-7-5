const hataYakala = (err, req, res, next) => {
  const statusKod = res.statusCode ? res.statusCode : 400

  res.status(statusKod)

  res.json({
    mesaj: err.message,
    aciklama: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = {
  hataYakala,
}
