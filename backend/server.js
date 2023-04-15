const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.get('/api/not',(req,res) =>{
    res.send('Notlar')
})

app.get('/api/notlar', (request, response)=>{
    response.json({Mesaj : 'JSON şeklinde Notlar'})
})

app.listen(PORT, () => console.log(`Server ${PORT} üzerinde yayında`) )

