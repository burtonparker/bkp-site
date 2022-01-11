import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
      return (
        <React.Fragment>
            <div className="container-fluid text-light bg-dark bg-gradient">
                <div className="row">
                    <div className="col">
                        <h1>Portfolio</h1>
                        <h2>You can't love your team without hating another team.</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
    };
  }

export default Header;