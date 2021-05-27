import React,{ Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'

class Menu extends Component{
  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={ Link } to="/">Home</Nav.Link>
            <Nav.Link as={ Link } to="/login">Login</Nav.Link>
            <Nav.Link as={ Link } to="/alta">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Menu
