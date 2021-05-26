import React, { useState, useEffect } from "react"
import firebase from "../Config/firebase"

import { getProducto } from "../Services/ItemsServices"

import Producto from "../Components/Producto"

function DetallePage(props) {
  const id = props.match.params.id

  const [ producto, setProducto ] = useState({})
  const [ loading, setLoading ] = useState(true)

  const [ form, setForm] = useState({ name:'', price:''})
  const [ formAdd, setFormAdd] = useState({ name:'', price:''})

  const handleSubmit = (event)=> {
    event.preventDefault()
    firebase.db.doc("productos/"+id)
    .set({
      name: form.name,
      price: form.price
    }, { merge: true })
  }

  const handleSubmitAdd = (event)=> {
    event.preventDefault()
    firebase.db.collection("productos")
    .add({
      name: formAdd.name,
      price: formAdd.price
    })
  }

  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]:value })
  }
 
  const handleChangeAdd = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setFormAdd({ ...formAdd, [name]:value })
  }
 
  const handleDelete = (event)=> {
    event.preventDefault()
    firebase.db.doc("productos/"+id)
    .delete() 
  }
  //Este es como un componentDidMount.
  useEffect(
    ()=> {
      firebase.db.doc("productos/"+id)
      .get()
      .then(doc=> {
        setProducto(doc)
        setLoading(false)
        setForm({ name: doc.data().name, price: doc.data().price })
      }
      )
    },
    []
  )
  
  if (loading) {
    return (
      <div>
        cargando...
      </div>
      )
  } else {
    return (
      <div>
        <Producto id={ producto.id } data={ producto.data() } />

        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input type="text" name="name" value={ form.name } onChange={ handleChange }></input>
          </div>
          <div>
            <label>Precio</label>
            <input type="text" name="price" value={ form.price } onChange={ handleChange }></input>
          </div>

          <button type="submit">Actualizar Producto</button>
        </form>
          
        <button onClick={ handleDelete } >Eliminar Producto</button>

        <form onSubmit={handleSubmitAdd}>
          <h1> Agregar Producto</h1>
          <div>
            <label>Nombre</label>
            <input type="text" name="name" value={ formAdd.name } onChange={ handleChangeAdd }></input>
          </div>
          <div>
            <label>Precio</label>
            <input type="text" name="price" value={ formAdd.price } onChange={ handleChangeAdd }></input>
          </div>
          <button type="submit">Crear Producto</button>

        </form>
         
      </div>
    )
  }
}

export default DetallePage
