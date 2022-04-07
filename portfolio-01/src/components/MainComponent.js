import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import Product from './ProductComponent';
import Work from './WorkComponent';
import Contact from './ContactComponent';
import { addAwards } from '../redux/ActionCreators';

// tweaks to orig main component

const mapDispatchToProps = {
  addAwards: (id, text) => (addAwards(id, text))
};

// end sandbox

const mapStateToProps = state => {
  return {
      products: state.products,
      skills: state.skills,
      awards: state.awards
  }
}

class Main extends Component {

// be sure to pass state in JSX as Main is the parent to Product, etc.

    render() {
      return (
        <div>
            <Header />
            <Navigation />
            <Switch>
              <Route exact path='/' render={() => <Product products={this.props.products} awards={this.props.awards} skills={this.props.skills}/>} />
              <Route exact path='/home' render={() => <Product products={this.props.products} awards={this.props.awards} skills={this.props.skills}/>} />
              <Route exact path='/work' render={() => <Work />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path='/contact' render={() => <Contact />} />
              <Redirect to='/home' />
            </Switch>
        </div>
      );
    };
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));