import React, { useState } from "react"
import firebase from "../Config/firebase.js"

import ButtonWithLoading from '../Components/Forms/ButtonWithLoading'
import AlertCustom from '../Components/AlertCustom'
import FormGroup from '../Components/Forms/FormGroup'

function RegistroPage() {

  const [ form, setForm ] = useState({ nombre:'', apellido:'', email:'', password:''})
  const [ loading, setLoading ] = useState(false)
  const [ alert, setAlert ] = useState({ variant:'', text:'' }) 

  const handleSubmit = (event)=> {
    event.preventDefault()
    setLoading(true)

    firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
    .then(data=>{
      firebase.db.collection('usuarios').add({
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        userId: data.user.uid
      })
      .then(data=> {
        setLoading(false)
        setAlert({ variant:'success', text:'Registro Exitoso' })
      })
    })
    .catch(error=> {
      setLoading(false)
      setAlert({ variant:'danger', text:'Algo salió mal' })
    })
  }

  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]:value })
  }
  
  return(
    <>
      <form onSubmit={ handleSubmit }>
        <FormGroup name="nombre" label="Nombre" type="text" placeholder="Ingrese su nombre" value={ form.nombre } onChange={ handleChange }></FormGroup>
        <FormGroup name="apellido" label="Apellido" type="text" placeholder="Ingrese su apellido" value={ form.apellido } onChange={ handleChange }></FormGroup>
        <FormGroup name="email" label="Email" type="email" placeholder="Ingrese su email" value={ form.email } onChange={ handleChange }></FormGroup>
        <FormGroup name="password" label="Password" type="password" placeholder="Ingrese su contraseña" value={ form.password } onChange={ handleChange }></FormGroup>

        <ButtonWithLoading  loading={ loading }>Registrarse</ButtonWithLoading>
      </form>

      <AlertCustom variant={ alert.variant } text={ alert.text } /> 
    </>
  )
}

export default RegistroPage
