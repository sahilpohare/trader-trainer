import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class Sidebar extends Component {
    render() {
        return (
            <Navbar className="d-block p-4" bg="primary" variant="dark" id="sidebar" >
                <Navbar.Brand style={{fontSize : "26px"}} className="m-0 text-center" href="/">TRADER TRAINER</Navbar.Brand>
                <Nav>
                    <ul className="p-0 mt-4 d-block w-100">
                        <Nav.Link href="/" className="mt-2">Home</Nav.Link>
                        <Nav.Link className="mt-2">Settings</Nav.Link>
                        <Nav.Link className="mt-2">Logout</Nav.Link>
                    </ul>
                </Nav>
            </Navbar>
        )
    }
}
