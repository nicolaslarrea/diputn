import React, { useState, useEffect } from "react"

import Producto from "../Components/Producto"

function DetallePage(props) {
  const id = props.match.params.id

  const [ producto, setProducto ] = useState({})
  const [ loading, setLoading ] = useState(true)

  //Este es como un componentDidMount.
  useEffect(
    ()=> {
      fetch("https://jsonfy.com/items/"+id)
      .then(res=>res.json())
      .then(data=>{
        setProducto(data[0])
        setLoading(false)
      })
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
      <Producto data={ producto } />
    )
  }
}

export default DetallePage
