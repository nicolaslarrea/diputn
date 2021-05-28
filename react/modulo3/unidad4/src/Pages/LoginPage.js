import React, { useState, useContext } from "react"
import firebase from "../Config/firebase.js"
import { useHistory } from "react-router-dom"

import Context from '../Context/Context'

import ButtonWithLoading from '../Components/Forms/ButtonWithLoading'
import FormGroup from '../Components/Forms/FormGroup'

function LoginPage(){
  const [ form, setForm ] = useState({ email:'', password:'' })
  const [ loading, setLoading ] = useState(false)

  const history = useHistory()
  //TODO, cambiar el nombre de Context porque quedó super confuso.
  const context = useContext(Context)

  const handleSubmit = (event)=>{
    event.preventDefault()
    setLoading(true)
    firebase.auth.signInWithEmailAndPassword(form.email, form.password)
    .then(data=>{
      console.log("Login Ok", data)
      setLoading(false)
      context.loginUser()
      history.push("/")
    })

    .catch(error=> {
      console.log("Error:", error)
      setLoading(false)
    })
  }
  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form,[name]:value })
  }
  
  return(
      <form onSubmit={ handleSubmit }>
        <FormGroup name="email" label="Email" type="email" placeholder="Ingrese su Email" value={ form.email } onChange={ handleChange }></FormGroup>
        <FormGroup name="password" label="Password" type="password" placeholder="Ingrese su contraseña" value={ form.password } onChange={ handleChange }></FormGroup>
        <ButtonWithLoading  loading={ loading }>Ingresar</ButtonWithLoading>
      </form>
  )
}

export default LoginPage
