import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../images/icon.png'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Navbar.Brand className="brandname" href="/">
                <img
                    alt=""
                    src={logo}
                    width="70"
                    height="45"
                    className="d-inline-block align-top"/>{' '}
                SANS FABRIC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto headitems">
                    <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
                    <Nav.Link href="/about" className="text-dark">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
