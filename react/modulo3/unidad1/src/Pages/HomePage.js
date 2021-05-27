import React, { useState, useEffect } from "react"
import firebase from "../Config/firebase"

import Producto from "../Components/Producto"

function HomePage() {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  //#TODO ver bien porque este es un componentDidMount.
  useEffect(
    ()=>{
      firebase.db.collection("productos")
      .get()
      .then(querySnapshot=> {
        console.log(querySnapshot.docs)
        setProductos(querySnapshot.docs)
        setLoading(false)
      })
     },
    []
  )

  //Muestra el cargando hasta que termina el fetch de productos.
  if (loading) {
    return(
      <div>
        cargando...
      </div>
    )
  } else {
    return(
      <div>
        { productos.map((producto)=> <Producto key={ producto.id } id={ producto.id } data={ producto.data() } mostrarDetalle={ true }/>) }
      </div>
    )
  }
}

export default HomePage
