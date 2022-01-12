import React, { Component, useState } from "react";
import { PRODUCTS } from '../shared/products';
import { Loading } from "./LoadingComponent";
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
    const [products] = useState([]);
    const productDetail = props.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                <RenderProduct product={product} />
            </div>
        );
    });

        return (
            <div className="container">
                <div className="row">
                    {productDetail}
                </div>
            </div>
        );
}

export default Product;