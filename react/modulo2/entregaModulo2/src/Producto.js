import React, { Component } from 'react'

class Producto extends Component {
  constructor(props) {
    super(props)
    this.state = { mensaje:"" }
  }

  comprar = ()=>{
    this.setState({
      mensaje: "Gracias por su compra"
    })
  }

  render() {
    return(
      <div>
        <div>Nombre: Moto G</div>
        <div>Descripción: Es un celular</div>
        <div>Precio: Montones de plata</div>
        <div>SKU: No se que es un Sku</div>
        <div>Cantidad disponible: 6</div>
        <button onClick={ this.comprar }>Comprar</button>
        <div>{ this.state.mensaje }</div>
      </div>
    )
  }
}

export default Producto
