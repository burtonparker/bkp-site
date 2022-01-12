import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { render } from "react-dom";

function RenderProduct({ product }) {   

    return (
        <Card>
                <CardImg width="100%" src={product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
}

function Product(props) {

    const productDetail = () => props.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                {<RenderProduct product={product} />}
            </div>
        );
    });

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 bg-primary">
                            <h1>Product Title</h1>
                        </div>
                        <div className="col-4 bg-secondary">
                            <h4>Product Details</h4>
                            <p>{productDetail}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default Product;