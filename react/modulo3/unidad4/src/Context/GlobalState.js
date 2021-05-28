import React, { useState } from 'react'

import Context from './Context'

function GlobalState(props){

  const[userLogin,setUserLogin]=useState(localStorage.getItem("login"))

  const loginUser=(user)=>{
    setUserLogin(true)
    localStorage.setItem("login", true)
    localStorage.setItem("userInfo", JSON.stringify(user))
  }

  const logoutUser = ()=>{
    setUserLogin(false)
    localStorage.removeItem("login")
  }

  return(
    <Context.Provider
      value={{
        userLogin:userLogin,
        loginUser:loginUser,
        logoutUser:logoutUser
      }}
    >
      { props.children }
    </Context.Provider>
  )
}

export default GlobalState
