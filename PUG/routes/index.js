const {Router} = require('express')
const router = Router()
const Productos = require('../productos')
const productosObj = new Productos() 
const { getProduct, postProduct, mostrarForm } = require('../public/controllers/controllerPug')

router.get('/api/productos', getProduct)
router.get('/api/formulario', mostrarForm)
router.post('/api/productos', postProduct)

/*
router.delete('/api/productos/:id', (req, res) =>{
    res.json(productosObj.borrar(req.params.id))
})

router.put('/api/productos/:id', (req, res) => {
    res.json(productosObj.modificar(req.body, req.params.id))
})*/

module.exports = router