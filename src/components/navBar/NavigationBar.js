import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = (props) => {
    return (
        <Navbar className='navBar' expand="lg">
            <Navbar.Brand className='navText'>ICS 485</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} className='navText' to="/">Home</Nav.Link>
                    <Nav.Link as={Link} className='navText' to="/project">Project</Nav.Link>
                    <Nav.Link as={Link} className='navText' to="/members">Members</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;