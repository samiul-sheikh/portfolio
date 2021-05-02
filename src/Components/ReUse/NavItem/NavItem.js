import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const NavItem = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand to="#home">Samiul Sheikh</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>

                <Nav>
                    <Nav.Link className="me-4" to="/" as={Link}>Home</Nav.Link>
                    <Nav.Link className="me-4" to="projects" as={Link}>Project</Nav.Link>
                    <Nav.Link className="me-4" to="blog" as={Link}>Blog</Nav.Link>
                    <Nav.Link className="me-4" to="contact" as={Link}>Contact</Nav.Link>
                    <Nav.Link eventKey={2} to="" as={Link}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavItem;