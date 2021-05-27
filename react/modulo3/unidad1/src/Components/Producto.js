import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card }from 'react-bootstrap'

function Producto(props) {
  const { data, id } = props
  const { price, name } = props.data

  const styles = {
    card:{ width: '18r/em', marginBottom:"10px" },
    button:{ marginLeft:"5px" },
    link:{ color:"#FFFFFF" }
  }

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
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>{price} - {name}</Card.Title>
        {
          mostrarDetalle &&
          <>
            <Card.Text>
                { price }
            </Card.Text>
          </>
        }
        <Button variant="primary" onClick={comprar}>Comprar</Button>
        {
          <Button style={styles.button} variant="primary"><Link style={styles.link} to={"/producto/"+id}>Ver Detalle</Link></Button>
        }
      </Card.Body>
        { mensaje }
    </Card>
  )
}

export default Producto
