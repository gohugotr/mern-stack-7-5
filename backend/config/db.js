const mongoose = require('mongoose')

const baglan = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB bağlandı --> ${conn.connection.name}`.blue.inverse)
  } catch (error) {
    console.log(error)
    process.exit(1) // Çıkış yapma kodu
  }
}

module.exports = baglan
