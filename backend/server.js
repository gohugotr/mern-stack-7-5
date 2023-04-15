const express = require('express')
const dotenv = require('dotenv').config()

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

app.use('/api/notlar', require('./routes/notRoute'))

app.listen(PORT, () => console.log(`Server ${PORT} üzerinde yayında`) )

