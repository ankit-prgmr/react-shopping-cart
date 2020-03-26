import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/NavBar.css";

function NavBar() {
  return (
        <Navbar className="navbar" collapseOnSelect expand="lg">
          <Navbar.Brand><Link to="/" className="logo">Shopping</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/MyAccount">
                <NavItem>MyAccount</NavItem>
              </LinkContainer>
              <LinkContainer to="/Cart">
                <NavItem>Cart</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  );
}

export default NavBar;
