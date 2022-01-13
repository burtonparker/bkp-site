import React, { Component } from 'react';
import { PRODUCTS } from '../shared/products';
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { resetWarningCache } from 'prop-types';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import Product from './ProductComponent';

// tweaks to orig main component

// end sandbox

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products: PRODUCTS
    };
}

// be sure to pass state in JSX as Main is the parent to Product, etc.

    render() {
      return (
        <div>
            <Header />
            <Navigation />
            <Product products={this.state.products} attributes={this.state.products.attributes}/>
            <Footer />
        </div>
      );
    };
  }

export default Main;