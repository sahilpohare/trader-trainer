import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
 
export default class Header extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" className="nav justify-content-around">
                <Navbar.Brand style={{fontSize : "26px"}} className="ml-50" href="/">TRADER TRAINER</Navbar.Brand>
                <Nav className= "justify-content-around">
                    {this.props.children}
                </Nav>
            </Navbar>
        )
    }
}
