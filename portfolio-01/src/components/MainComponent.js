import React, { Component } from 'react';
import { PRODUCTS } from '../shared/products';
import { AWARDS } from '../shared/awards';
import { SKILLS } from '../shared/skills';
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { resetWarningCache } from 'prop-types';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import Product from './ProductComponent';
import Work from './WorkComponent';
import Contact from './ContactComponent';

// tweaks to orig main component

// end sandbox

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products: PRODUCTS,
        awards: AWARDS,
        skills: SKILLS
    };
}

// be sure to pass state in JSX as Main is the parent to Product, etc.

    render() {
      return (
        <div>
            <Header />
            <Navigation />
            <Switch>
              <Route exact path='/home' render={() => <Product products={this.state.products} awards={this.state.awards} skills={this.state.skills}/>} />
              <Route exact path='/work' render={() => <Work />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path='/contact' render={() => <Contact />} />
              <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
      );
    };
  }

export default Main;