import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card }from 'react-bootstrap'

import Context from '../Context/Context'

function Producto(props) {
  const { id } = props
  const { price, name, sku, description } = props.data

  const styles = {
    card:{ width: '18r/em', marginBottom:"10px" },
    button:{ marginLeft:"5px" },
    link:{ color:"#FFFFFF" }
  }

  const mostrarDetalle = (props.mostrarDetalle !== true ? false : true)
  
  const [ mensaje, setMensaje ] = useState("")

  const comprar = ()=> {
    setMensaje("Gracias vuelva pronto!")
  }

  return(
    <Context.Consumer>
      { context=>
        <Card style={ styles.card }>
          <Card.Body>
            <Card.Title>{ name }</Card.Title>
            <Card.Subtitle>$ { price }</Card.Subtitle>
            {
              mostrarDetalle &&
              <>
                <Card.Text>
                  <div>sku: { sku } </div>
                  <div>description: { description } </div>
                </Card.Text>
              </>
            }

            { context.userLogin &&
            <Button variant="primary" onClick={comprar}>Comprar</Button>
            }

            { !mostrarDetalle &&
              <Button style={styles.button} variant="primary"><Link style={styles.link} to={"/producto/"+id}>Ver Detalle</Link></Button>
            }
          </Card.Body>
            { mensaje }
        </Card>
      }
    </Context.Consumer>
  )
}

export default Producto
