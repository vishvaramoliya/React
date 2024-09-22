import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavSec() {
  return (
    <div className='main1'>
        <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <h1 className='t1'>High<span>Tech</span> </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto box1">
            <Nav.Link href="#home" className='t2'>HOME</Nav.Link>
            <Nav.Link href="#home" className='t2'>ABOUT</Nav.Link>
            <Nav.Link href="#home" className='t2'>SERVICE</Nav.Link>
            <Nav.Link href="#link" className='t2'>MENU</Nav.Link>
            <Nav.Link href="#home" className='t2'>PAGES</Nav.Link>
            <Nav.Link href="#home" className='t2'>CONTACT</Nav.Link>
          </Nav>
          <p className='p1'>Have any questions?</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
