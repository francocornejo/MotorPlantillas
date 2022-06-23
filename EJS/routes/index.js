const {Router} = require('express')
const router = Router()
const Productos = require('../productos')
const productosObj = new Productos() 
const { getProduct, postProduct, mostrarForm } = require('../public/controllers/controllerEjs')

router.get('/api/productos', getProduct)
router.get('/api/formulario', mostrarForm)
router.post('/api/productos', postProduct)

module.exports = router