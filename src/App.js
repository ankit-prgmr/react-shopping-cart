import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./components/Home";
import fire from "./components/config/fire";
import MyAccount from "./components/MyAccount";

class App extends Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Cart</Nav.Link>
            <Nav.Link href="/MyAccount">My Account</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Home /> */}
        <MyAccount />
      </div>
    )
  }
}


export default App;
