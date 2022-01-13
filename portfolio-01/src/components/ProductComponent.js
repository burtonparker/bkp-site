import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { render } from "react-dom";
import { AWARDS } from "../shared/awards";
import { Random, Fade } from 'react-animation-components';

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
            <div key={product.id} className="col-md-4 order-2 order-md-1">
                <h1>{product.name}</h1>
                <hr></hr>
                <p className="text-justify">{product.description}</p>
                <h3><i className="fa fa-certificate text-warning" /> Skills</h3>
                    <ul className="list-inline">
                        {props.skills.map((skills) => {
                            return (
                        <li key={skills.id} className="list-inline-item">{skills.text}</li>
                            );
                        })}
                    </ul>
                    <select className="custom-select">
                        <option value="">Awards &amp; Honors</option>
                        {props.awards.map((awards) => {
                            return (
                        <option key={awards.id}>{awards.text}</option>
                            );
                        })}
                    </select>
                    {props.products.map(product => {
                        if (product.inventory <= 1)
                            return (
                                <small key={product.id} className="text-muted font-italic">
                                    Hurry! There's only {product.inventory} {product.name.split(' ').slice(0, -1)} left in stock!
                                </small>
                            );
                            return (
                                <div></div>
                            );
                    })}
                <div>
                    <button className="btn btn-lg btn-primary mt-3">ADD TO COMPANY</button>
                </div>
            </div>
            <div key={product.id} className="col-md-8 order-1 order-md-2">
                <RenderProduct product={product} />
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