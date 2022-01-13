import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { render } from "react-dom";

function RenderProduct({ product }) {
    return (
        <Card>
                <CardImg width="100%" src={product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.description}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
}

function Product(props) {
    //const [products] = useState([]);
    const productDetail = props.products.map(product => {
        return (
            <React.Fragment>
            <div key={product.id} className="col-8">
                <h1>{product.name}</h1>
            </div>
            <div key={product.id} className="col-4">
                <RenderProduct product={product} />
            </div>
            </React.Fragment>
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