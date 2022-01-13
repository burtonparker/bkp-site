import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { render } from "react-dom";

function RenderProduct({ product }) {
    return (
        <Card>
            <CardImg width="100%" src={product.image} alt={product.name} />
        </Card>
    );
}

function Product(props) {
    
    const productDetail = props.products.map(product => {
        return (
            <React.Fragment>
            <div key={product.id} className="col-md-8">
                <RenderProduct product={product} />
            </div>
            <div key={product.id} className="col-md-4">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div>
                    <button className="btn btn-lg btn-primary">ADD TO COMPANY</button>
                </div>
            </div>
            </React.Fragment>
        );
    });

        return (
            <div className="container mt-3">
                <div className="row">
                    {productDetail}
                </div>
            </div>
        );
}

export default Product;