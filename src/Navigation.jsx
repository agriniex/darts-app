import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Navigation = () => {

    return (<Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Darts</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Groups" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/groups/a">A</NavDropdown.Item>
                        <NavDropdown.Item href="/groups/b">B</NavDropdown.Item>
                        <NavDropdown.Item href="/groups/c">C</NavDropdown.Item>
                        <NavDropdown.Item href="/groups/d">D</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Navigation;