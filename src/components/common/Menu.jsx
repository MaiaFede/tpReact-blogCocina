import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavLink, Link} from "react-router-dom"
import logo from "../../assets/photo_2024-02-26_21-33-04.jpg"

const Menu = () => {
    return (

        <Navbar expand="lg" className="bg-beige ">
      <Container className="">
      <Navbar.Brand as={Link} to={"/"} className="me-auto align-items-center d-lg-none">
            <img
              src={logo}
              width="130"
              height="130"
              className="d-inline-block align-top img-fluid"
              alt="logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center d-flex justify-content-center">
          <NavLink className="nav-link pe-5" to={"/"}>Inicio</NavLink>
            
            <Navbar.Brand as={Link} to="/" className="me-auto align-items-center d-none d-lg-block ">
            <img
              src={logo}
              width="130"
              height="130"
              className="d-inline-block align-top img-fluid"
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="nav-link ps-4" to={"/Administrador"}>Administrador</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        

    );
};

export default Menu;