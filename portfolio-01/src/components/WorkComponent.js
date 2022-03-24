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
                            alt="Jonah Ray"
                            src="./assets/images/work-jonah-ray.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Jonah Ray
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Typography • Illustration
                            </CardSubtitle>
                            <CardText>
                                When Jonah Ray became the new host of Mystery Science Theater 3000 it fulfilled a lifelong dream, which he documented in a series of photographs during their U.S. tour. We worked together to turn those pictures into a limited edition zine.
                            </CardText>
                            <Button>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
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
                            src="./assets/images/work-merchtable.jpg"
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
                        </CardGroup>
                        <CardGroup>
                        <Card>
                            <CardImg
                            alt="Kenyan Birth Certificate Generator"
                            src="./assets/images/work-kenyan-birth-certificate-generator.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Kenyan Birth Certificate Generator
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Concept • Graphic Design
                            </CardSubtitle>
                            <CardText>
                                About that time I accidentally went viral and made a bunch of people laugh (some people, not so much).
                            </CardText>
                            <Button>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Product Design"
                            src="./assets/images/work-dillon-francis.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Various Clients
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Product Design • Merchandising
                            </CardSubtitle>
                            <CardText>
                                In my role as merchandiser, I was responsible for designing products for hundreds of artists, comedians, and record labels over the years. Here's just a small sampling of that work.
                            </CardText>
                            <Button>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Vinyl Mailers"
                            src="./assets/images/work-packaging-design.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                Vinyl Mailers
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Packaging Design
                            </CardSubtitle>
                            <CardText>
                                When you ship 40,000 vinyl albums each year, it's <i>pretty</i> important that they arrive safe and sound, so I designed a custom vinyl mailer and had it produced locally, helping the environment, and the local economy.
                            </CardText>
                            <Button>
                                Learn More
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