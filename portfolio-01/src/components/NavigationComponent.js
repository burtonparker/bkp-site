import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> My Work
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Me
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    };
}

export default Navigation;