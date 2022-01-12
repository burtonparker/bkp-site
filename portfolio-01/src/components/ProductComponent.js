import React, { Component } from "react";
import { render } from "react-dom";

class Product extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 bg-primary">
                            <h1>Product Title</h1>
                        </div>
                        <div className="col-4 bg-secondary">
                            <h4>Product Details</h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Product;