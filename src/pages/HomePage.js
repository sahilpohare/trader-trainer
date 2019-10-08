import React, { Component } from 'react';
import Header from '../components/Header';
import { Button, Nav } from 'react-bootstrap';
import { store } from '../StateManagement/store';
import {loginWithGoogle} from '../StateManagement/actions/authActions'
import { fire, googleAuthProvider } from '../StateManagement/Firebase/Firebase';

export default class HomePage extends Component {
    componentWillMount(){
        
    }

    googleLogin(){
        store.dispatch(loginWithGoogle);
    }

    render() {
        return (
            <div>
                <Header>
                    <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/SignUp">SignUp</Nav.Link>
                    <Button onClick={this.googleLogin.bind(this)}>Google</Button>
                </Header>
                <h1>home</h1>
            </div>
        )
    }
}
