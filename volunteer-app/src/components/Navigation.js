import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/images/logoB.png'
import { useHistory } from "react-router-dom";

function Navigation() {
    const history = useHistory()
    return (
        <Navbar className="menu" style={{ zIndex: 100, }} bg="light" >
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
          Volunteer
        </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => history.push('/')} >About</Nav.Link>
                <Nav.Link onClick={() => history.push('/login')} >Login</Nav.Link>
                <Nav.Link onClick={() => history.push('/signup')} >Sign Up</Nav.Link>
            </Nav>
        </Navbar>

    )
}
export default Navigation