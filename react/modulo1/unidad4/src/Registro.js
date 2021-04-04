import React, { Component } from 'react'

class Registro extends React.Component {
  render (){
    return(
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>

        <label>
          Apellido:
          <input type="text" name="apellido" />
        </label>
   
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Teléfono
          <input type="text" name="telefono" />
        </label>

        <label>
          Contraseña
          <input type="password" name="contrasena" />
        </label>

        <label>
          Reescribir contraseña
          <input type="password" name="contrasena-confirm" />
        </label>


      <input type="submit" value="Submit" />
     </form>
    )
  }
}

export default Registro;
