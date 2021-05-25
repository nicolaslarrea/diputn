import React, { useState, useEffect } from "react"
import firebase from "firebase"

import Producto from "../Components/Producto"

function HomePage() {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  //#TODO ver bien porque este es un componentDidMount.
  useEffect(
    ()=>{
      fetch("https://jsonfy.com/items")
      .then(res=>res.json())
      .then(data=>{
        setProductos(data)
        setLoading(false)
      })

      //TODO, ubicar bien esta configuración de Firebase.
      var firebaseConfig = {
        apiKey: "AIzaSyA9Vi2QbUVn_2j8o1fas3Gzm30GTHndIhU",
        authDomain: "diplomatura-c1893.firebaseapp.com",
        projectId: "diplomatura-c1893",
        storageBucket: "diplomatura-c1893.appspot.com",
        messagingSenderId: "32026429151",
        appId: "1:32026429151:web:29536f535192b76c350b6a"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      console.log("Firebase:", firebase.database())
    },
    []
  )

  //Muestra el cargando hasta que termina el fetch de productos.
  if (loading) {
    return(
      <div>
        cargando...
      </div>
    )
  } else {
    return(
      <div>
        { productos.map((producto)=> <Producto data={ producto } mostrarDetalle= { true }/>) }
      </div>
    )
  }
}

export default HomePage
