import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Header</h1>
                                <h2>A portfolio site like no other.</h2>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
      )
    }
  }