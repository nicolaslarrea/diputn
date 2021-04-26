const productsModel = require("../models/productosModel")

module.exports = {
  getAll:async function(req, res, next) {
    const productos = await productsModel.find()
    res.json(productos)
  },
  getById:async function(req, res, next) {
    console.log(req.params)
    const producto = await productsModel.findById(req.params.id)
    res.json(producto)
  },
  create:async function(req, res, next) {
    console.log(req.body)
    console.log(req.body.nombre)

    const document = new productsModel({
      nombre:req.body.nombre,
      precio:req.body.precio,
      codigo:req.body.codigo,
      descripcion:req.body.descripcion,
      categoria:req.body.categoria
    })

    const response = await document.save()

    res.json(response)
  },
  update:async function(req, res, next) {
      console.log(req.params)
      console.log(req.body)
      const producto = await productsModel.updateOne({_id:req.params.id},req.body)
      res.json(producto)
  },
  delete:async function(req, res, next) {
    console.log(req.params)
    const producto = await productsModel.deleteOne({_id:req.params.id})
    res.json(producto)
  }
}
