const express = require('express')

const PORT = 8080

const app = express()

const serverFonk = () => {
    console.log(`Server ${PORT} üzerinde çalışıyor`);
}

app.listen(PORT, serverFonk)

