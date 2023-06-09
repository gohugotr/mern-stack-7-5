const express = require('express')
const dotenv = require('dotenv').config()
const { hataYakala } = require('./middlewares/errorMiddlewares')
const colors = require('colors')
const baglan = require('./config/db')

const PORT = process.env.PORT

const app = express()

// app.get('/api/not',(req,res) =>{
//     res.send('Notlar')
// })

// app.get('/api/notlar', (request, response)=>{
//     const notlar = {
//         Ad: 'Cengiz',
//         Not: 88,
//         Yaş: 53,
//     }

//     response.status(200).json({ mesaj : notlar})
// })

// Body verisini post ve update işlemlerinde kullanabiliriz.
app.use(express.urlencoded({ extended: true })) // varsayılan olarak {extended:true}
app.use(express.json())

app.use('/api/notlar', require('./routes/notRoute'))

// Kullanıcı işlemleri
app.use('/api/kullanicilar', require('./routes/kullaniciRoute'))

// Middleware ile  hata yakalama
app.use(hataYakala)

baglan()

app.listen(PORT, () => console.log(`Server ${PORT} üzerinde yayında`.magenta.italic))
