import React, { Component } from 'react';
import { Card, CardImg, CardGroup, CardBody, CardSubtitle, CardText, Button, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="col-md-8">
                        <h1>
                            Selected Works
                        </h1>
                    </div>
                    <div className="col">
                        <p>
                        Admission is free, so won't you please take a tour of some of my work?
                        </p>
                    </div>
                    <div className="col">
                        <CardGroup>
                        <Card>
                            <CardImg
                            alt="Female Collective"
                            src="./assets/images/work-female-collective.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Female Collective
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                UI • UX • Marketing
                            </CardSubtitle>
                            <CardText>
                                I was responsible for translating Candace Reels dynamic voice into a shopping experience that felt like a natural extension of her social media presence.
                            </CardText>
                            <Button>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Merchtable"
                            src="./assets/images/work-female-collective.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Merchtable
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Product Management • Web Design
                            </CardSubtitle>
                            <CardText>
                                At Merchtable I owned all aspects of our software platfrom, from initial design, to managing the development team, designing new features, and even committing and deploying my own branches.
                            </CardText>
                            <Button>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                            </CardText>
                            <Button>
                                Button
                            </Button>
                            </CardBody>
                        </Card>
                        </CardGroup>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Work;