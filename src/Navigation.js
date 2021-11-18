import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'


 const Navigation = () => {

   return (
     
    <Navbar bg="light" expand="lg">
  <Container>
      <Navbar.Brand title="Bad Bank" href="#/">Bad Bank</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link title="home" href="#/">Home</Nav.Link>
        <Nav.Link title="Create Account" href="#CreateAccount">Create Account</Nav.Link>
        <Nav.Link title="Deposit" href="#Deposit">Deposit</Nav.Link>
        <Nav.Link title="Withdraw" href="#Withdraw">Withdraw</Nav.Link>
        <Nav.Link title="All Data" href="#AllData">All Data</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

);
 }
 
 export default Navigation;
 




