import React, { useState } from "react"

function RegistroPage() {

  const [ form, setForm] = useState({ nombre:'', apellido:'', email:'', password:''})
  
  const handleSubmit = (event)=> {
    event.preventDefault()
    //Acá manejaría el envío del formulario.
    console.log(form)
  }
  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]:value })
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" name="nombre" value={ form.nombre } onChange={ handleChange }></input>
      </div>
      <div>
        <label>Apellido</label>
        <input type="text" name="apellido" value={ form.apellido } onChange={ handleChange }></input>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={ form.email } onChange={ handleChange }></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" name="password" value={ form.password } onChange={ handleChange }></input>
      </div>

      <button type="submit">Registrarse</button>
    </form>
  )
}

export default RegistroPage
