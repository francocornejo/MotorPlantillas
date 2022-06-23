const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./routes/index')
const { engine } = require('pug')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))


app.use('/', rutas)

app.listen(puerto, (err) => {
    if(err){
        console.log( `Hubo un error: ${err}`)
    }else{
        console.log(`Escuchando el puerto: ${puerto}`)
    }
})