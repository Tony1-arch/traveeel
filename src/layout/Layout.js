import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
  return (
    <div >
    

   
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Proto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="linkss"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
             <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
         
       
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    
    <main>
      <Outlet/>
    </main> 
    </div>
  )
}

export default Layout