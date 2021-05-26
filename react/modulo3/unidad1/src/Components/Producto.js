import React, { useState } from "react"
import { Link } from "react-router-dom"

function Producto(props) {
  const { data, id } = props
  const { price, name } = props.data
  
  const mostrarDetalle = (props.mostrarDetalle !== true ? false : true)
  
  const [ mensaje, setMensaje ] = useState("")

  const comprar = ()=> {
    if(data.stock-1===0) {
      setMensaje("No hay stock")
    } else {
      setMensaje("Gracias vuelva pronto!")
    }
  }

  return(
    <div> 
      <div>Identificador: { id }</div>
      <div>Precio: { price }</div>
      <div>Nombre: { name }</div>
      <button onClick={ comprar }>Comprar</button>
      {
        mostrarDetalle && 
        <button ><Link to={"/producto/"+id}>Ver Detalle</Link></button>
      }
      
      { mensaje }
    </div>
  )
}

export default Producto
