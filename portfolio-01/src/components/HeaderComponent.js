import React, { Component } from 'react';

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
      );
    };
  }

export default Header;