import React, { Component } from "react";
import { Card, CardImg, Button, Modal, ModalBody, ModalHeader, Table } from 'reactstrap';

function RenderProduct({ product }) {
    return (
        <Card>
            <CardImg width="100%" src={product.image} alt={product.name} />
        </Card>
    );
}

function RenderCart({ product }) {
    return (
        <React.Fragment>
        <Table borderless>
            <thead>
                <tr>
                <th>
                    
                </th>
                <th>
                    Product
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Price
                </th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        <img src={product.secondaryImage} alt={product.name} width="75"></img>
                    </th>
                    <td className="align-middle">
                        <span>{product.subtitle}</span>
                    </td>
                    <td className="align-middle">
                        <span>{product.inventory}</span>
                    </td>
                    <td className="align-middle">
                        <span>{product.price}</span>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <div className="text-right">
                <Button color="success" onClick={() => window.location = 'mailto:burtonparker@gmail.com?subject=Hey Burton!&body=Let\'s work together!'}>CHECK OUT</Button>
            </div>
            </React.Fragment>
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

    componentDidMount() {
        document.title = 'Burton Parker: Web Development & Product Management'
      }      

    constructor(props) {
        super(props);
        this.state = {
            award: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.toggleModalCart = this.toggleModalCart.bind(this);
        this.toggleModalGrinch = this.toggleModalGrinch.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        // alert("Current state is: " + JSON.stringify(values));
    }

    updateOption(event){
        this.setState({award: event.target.value})
    }

    toggleModalCart() {
        this.setState({
            isCartModalOpen: !this.state.isCartModalOpen
        });
    }

    toggleModalGrinch() {
        this.setState({
            isGrinchModalOpen: !this.state.isGrinchModalOpen
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
                <p className="text-justify">I am a resourceful full-stack developer, designer, and problem solver. Making systems work better is my specialty and I love to develop and grow new businesses. In 2017 <a href="#" 
                        onClick={(event) => {
                        this.toggleModalGrinch();
                        event.preventDefault();
                        }}>someone stole my Grinch inflatable</a> and I was on the news.</p>
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
                        <option key={awards.id} value={awards.details}>{awards.text}</option>
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
                        this.toggleModalCart();
                        }}>ADD TO COMPANY</button>
                </div>
            </div>
            <div key={product.id} className="col-md-8 order-1 order-md-2">
                <RenderProduct product={product} />
            </div>
                <Modal size="lg" centered='true' isOpen={this.state.isCartModalOpen} toggle={this.toggleModalCart}>
                    <ModalHeader toggle={this.toggleModalCart}>Your Cart</ModalHeader>
                    <ModalBody>
                        <RenderCart product={product} />
                    </ModalBody>
                </Modal>
                <Modal centered='true' isOpen={this.state.isGrinchModalOpen} toggle={this.toggleModalGrinch}>
                    <ModalBody>
                    <img src="./assets/images/burton-karas-parker-stolen-grinch.jpg" width="100%" alt="Burton Karas Parker - Portrait of a Victim" title="Breaking News - Grinch Stolen" />
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