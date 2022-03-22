import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
import { Card, CardImg, CardText, CardBody, CardSubtitle, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import { render } from "react-dom";
import { AWARDS } from "../shared/awards";
import { Random, Fade } from 'react-animation-components';
import { Control, LocalForm, Errors, Form } from 'react-redux-form';

function RenderProduct({ product }) {
    return (
        <Card>
            <CardImg width="100%" src={product.image} alt={product.name} />
        </Card>
    );
}

function RenderCart({ product }) {
    return (
        <Card>
            <CardBody>
            <CardImg top width="100%" src={product.secondaryImage} alt={product.name} />
            <CardTitle>{product.subtitle}</CardTitle>
            <CardText></CardText>
            </CardBody>
        </Card>
    )
}

/* function RenderCart({ addAwards }) {
    return (
        <div className="col-md-4">
            <Cart addAwards={addAwards} />
        </div>
    );
} */

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            award: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        // alert("Current state is: " + JSON.stringify(values));
    }

    updateOption(event){
        this.setState({award: event.target.value})
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
// }



// function Product(props) {
    render() {
    const productDetail = this.props.products.map(product => {
        return (
            <React.Fragment>
            <div key={product.id} className="col-md-4 order-2 order-md-1">
                <h1 className="text-center">{product.name}</h1>
                <hr></hr>
                <p className="text-justify">{product.description}</p>
                <h3 className="text-center"><i className="fa fa-certificate text-warning" /> Skills</h3>
                    <ul className="list-inline text-center">
                        {this.props.skills.map((skills) => {
                            return (
                        <li key={skills.id} className="list-inline-item"><i className="fa fa-check-circle" style={{color: (skills.color)}} /> {skills.text}</li>
                            );
                        })}
                    </ul>
                    <select className="custom-select" onChange={this.updateOption}>
                        <option>Awards &amp; Honors</option>
                        {this.props.awards.map((awards) => {
                            return (
                        <option key={awards.id} value={awards.text}>{awards.text}</option>
                            );
                        })}
                    </select>
                    {this.props.products.map(product => {
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
                <div className="text-center">
                    <button type="submit" className="btn btn-lg btn-primary mt-3" onClick={() => {
                        this.handleSubmit(this.state.award);
                        this.toggleModal();
                        }}>ADD TO COMPANY</button>
                </div>
            </div>
            <div key={product.id} className="col-md-8 order-1 order-md-2">
                <RenderProduct product={product} />
            </div>
            <Modal centered='true' isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Your Cart</ModalHeader>
                    <ModalBody>
                        <RenderCart product={product} />
                        {this.state.award}
                    </ModalBody>
                </Modal>
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
}

export default Product;