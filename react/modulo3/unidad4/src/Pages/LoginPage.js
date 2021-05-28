import React, { useState, useContext } from "react"
import firebase from "../Config/firebase.js"
import { useHistory } from "react-router-dom"
import { Container } from 'react-bootstrap'

import Context from '../Context/Context'

import ButtonWithLoading from '../Components/Forms/ButtonWithLoading'

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
    <Container>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={ form.email } onChange={ handleChange }></input>
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" name="password" value={ form.password } onChange={ handleChange }></input>
        </div>

        <ButtonWithLoading  loading={ loading }>Ingresar</ButtonWithLoading>
      </form>
    </Container>
  )
}

export default LoginPage
