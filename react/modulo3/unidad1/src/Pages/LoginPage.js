import React, { useState } from "react"

function LoginPage(){
  const [ form,setForm ] = useState({ email:'', password:'' })
  const handleSubmit = (event)=>{
    event.preventDefault()
    //Acá se manejaría el envío para logueo.
    console.log(form)
  }
  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form,[name]:value })
  }
  
  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={ form.email } onChange={ handleChange }></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" name="password" value={ form.password } onChange={ handleChange }></input>
      </div>

      <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginPage
