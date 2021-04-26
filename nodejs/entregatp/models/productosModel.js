const mongoose = require("../bin/mongodb")

const productoSchema = new mongoose.Schema({
  nombre:String,
  precio:Number,
  codigo:String,
  descripcion:String,
  categoria:String
})

module.exports = mongoose.model("productos",productoSchema)
