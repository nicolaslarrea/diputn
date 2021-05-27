import './App.css'
import { BrowserRouter, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'

import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import RegistroPage from "./Pages/RegistroPage"
import DetallePage from "./Pages/DetallePage"

import Menu from "./Components/Menu"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Route path="/" component={ HomePage } exact />
        <Route path="/alta" component={ RegistroPage } exact />
        <Route path="/login" component={ LoginPage } exact />
        <Route path="/producto/:id" component={ DetallePage } exact />
      </Container>
    </BrowserRouter>
  )
}

export default App
