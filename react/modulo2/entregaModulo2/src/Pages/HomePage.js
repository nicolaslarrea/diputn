import React, { useState, useEffect } from "react"

import Producto from "../Components/Producto"

function HomePage() {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  //#TODO ver bien porque este es un componentDidMount.
  useEffect(
    ()=>{
      fetch("https://jsonfy.com/items")
      .then(res=>res.json())
      .then(data=>{
        setProductos(data)
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
        { productos.map((producto)=> <Producto data={ producto } mostrarDetalle= { true }/>) }
      </div>
    )
  }
}

export default HomePage
