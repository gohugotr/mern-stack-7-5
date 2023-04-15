const hataYakala = (error, req, res, next) => {
  const statusKod = res.statusCode ? res.statusCode : 500

  res.status(statusKod)

  res.json({
    mesaj: error.message,
    aciklama: process.env.NODE_ENV === 'production' ? null : error.stack,
  })
}

module.exports = {
  hataYakala,
}
