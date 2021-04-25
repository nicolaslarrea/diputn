const mongoose = require("../bin/mongodb")

const productoSchema = new mongoose.Schema({
  name:String,
  sku:String,
  description:String,
  price:Number
})

module.exports = mongoose.model("productos",productoSchema)
