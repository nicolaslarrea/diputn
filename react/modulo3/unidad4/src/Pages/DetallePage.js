import React, { useState, useEffect } from "react"
import firebase from "../Config/firebase"

import Producto from "../Components/Producto"

function DetallePage(props) {
  const id = props.match.params.id

  const [ producto, setProducto ] = useState({})
  const [ loading, setLoading ] = useState(true)

  //Este es como un componentDidMount.
  useEffect(
    ()=> {
      firebase.db.doc("productos/"+id)
      .get()
      .then(doc=> {
        setProducto(doc)
        setLoading(false)
      }
      )
    },
    [id]
  )
  
  if (loading) {
    return (
      <div>
        cargando...
      </div>
      )
  } else {
    return (
      <Producto id={ producto.id } data={ producto.data() } mostrarDetalle={ true }/>
    )
  }
}

export default DetallePage
