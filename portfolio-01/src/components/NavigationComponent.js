import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light className="bg-light" sticky="top" expand="md">
                <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <div className="container justify-content-center">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link link-secondary" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link link-secondary" to="/work">
                                        <i className="fa fa-list fa-lg" /> My Work
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link link-secondary" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link link-secondary" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact Me
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    };
}

export default Navigation;