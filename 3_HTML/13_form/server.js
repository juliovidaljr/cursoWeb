const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/user', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Cadastro feito com sucesso!</h1>')
})

app.listen(3300)