import React,{ Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'

import Context from '../Context/Context'

class Menu extends Component{
  render(){
    return(
      <Context.Consumer>
        { context=>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Entrega Final</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={ Link } to="/">Home</Nav.Link>
                {
                  context.userLogin &&
                  <>
                    <Nav.Link  onClick={()=>context.logoutUser(false)}>Salir</Nav.Link>
                  </>
                }
                {
                  !context.userLogin &&
                  <>
                    <Nav.Link as={ Link } to="/login">Login</Nav.Link>
                    <Nav.Link as={ Link } to="/alta">Registro</Nav.Link>
                  </>
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        }
      </Context.Consumer>
    )
  }
}

export default Menu
