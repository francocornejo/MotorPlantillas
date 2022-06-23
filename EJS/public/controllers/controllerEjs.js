const Productos = require('../../productos')
const producto = new Productos

const getProduct = (req, res) => {
    const totalProduct = producto.productos;
    console.log(totalProduct)
    res.render('productoEjs.ejs', { totalProduct })
}

const postProduct = (req, res) => {
    producto.agregar(req.body)
    res.redirect('/api/formulario')
}

const mostrarForm = (req, res) => {
    res.render('form.ejs')
}

module.exports = {
    getProduct,
    postProduct,
    mostrarForm
}
