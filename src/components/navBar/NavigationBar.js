import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavigationBar = (props) => {
    const styles = {
        brand: {
            fontWeight: 'bold'
        },
        linkWidth: {
            marginLeft: 3,
            marginRight: 3
        },
        buttons: {
            backgroundColor: '#000000',
            border: 0
        }
    }

    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        const parsedActiveButton = Number(localStorage.getItem("activeButton") || 0);
        setActiveButton(parsedActiveButton);
    }, []);

    useEffect(() => {
        localStorage.setItem("activeButton", activeButton);
    }, [activeButton])

    return (
        <Navbar className='navBar' expand="lg">
            <Navbar.Brand className='navText' style={styles.brand}>Last 3 Brain Cells</Navbar.Brand>
            <Navbar.Toggle className='navBarToggle' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{marginTop: 8, marginBottom: 8}}>
                    <Nav.Item
                        style={styles.linkWidth}

                    >
                        <Button
                            as={Link} className='navText'
                            to="/"
                            style={{
                                ...styles.buttons,
                                fontWeight: activeButton === 0 ? 'bold' : null,
                            }}
                            onClick={() => setActiveButton(0)}
                        >
                            Home
                        </Button>
                    </Nav.Item>
                    <Nav.Item
                        style={styles.linkWidth}
                    >
                        <Button
                            as={Link} className='navText'
                            to="/project"
                            style={{
                                ...styles.buttons,
                                fontWeight: activeButton === 1 ? 'bold' : null
                            }}
                            onClick={() => setActiveButton(1)}
                        >
                            Project
                        </Button>
                    </Nav.Item>
                    <Nav.Item
                        style={styles.linkWidth}
                    >
                        <Button
                            as={Link} className='navText'
                            to="/members"
                            style={{
                                ...styles.buttons,
                                fontWeight: activeButton === 2 ? 'bold' : null
                            }}
                            onClick={() => setActiveButton(2)}
                        >
                            Members
                        </Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;