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
    console.log(req.body.name)

    const document = new productsModel({
      name:req.body.name,
      sku:req.body.sku,
      description:req.body.description,
      price:req.body.price
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
