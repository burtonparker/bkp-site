import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <React.Fragment>
                    <div className="container text-light bg-dark bg-gradient">
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