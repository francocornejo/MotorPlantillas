const Productos = require('../../productos')
const producto = new Productos

const getProduct = (req, res) => {
    const totalProduct = producto.productos;
    console.log(totalProduct)
    res.render('productoPug.pug', { totalProduct })
}

const postProduct = (req, res) => {
    producto.agregar(req.body)
    res.redirect('/api/formulario')
}

const mostrarForm = (req, res) => {
    res.render('form.pug')
}

module.exports = {
    getProduct,
    postProduct,
    mostrarForm
}
