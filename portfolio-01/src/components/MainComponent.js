import React, { Component } from 'react';
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { resetWarningCache } from 'prop-types';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';

class Main extends Component {
    render() {
      return (
        <div>
            <Header />
            <Navigation />
        </div>
      );
    };
  }

export default Main;