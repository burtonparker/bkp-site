import React, { Component } from 'react';
import { Badge, Card, CardImg, CardGroup, CardBody, CardSubtitle, CardText, Button, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import PhotoAlbum from 'react-photo-album';

const jonahPhotos = [
    {
        src: "./assets/images/jonah-cover.jpg",
        width: 1267,
        height: 1920
    },
    {
        src: "./assets/images/jonah-crow.jpg",
        width: 1920,
        height: 1920
    },
    {
        src: "./assets/images/jonah-kansas-city.jpg",
        width: 1920,
        height: 1440
    },
    {
        src: "./assets/images/jonah-papa-bear.jpg",
        width: 1920,
        height: 1440
    },
    {
        src: "./assets/images/jonah-we-rolled.jpg",
        width: 1920,
        height: 1440
    }
];

const fcPhotos = [
    {
        src: "./assets/images/female-collective-merchtable-front-page.jpg",
        width: 1920,
        height: 3304
    },
    {
        src: "./assets/images/female-collective-merchtable-product-page.jpg",
        width: 1920,
        height: 1976
    },
    {
        src: "./assets/images/female-collective-instagram-launch.jpg",
        width: 1080,
        height: 1920
    },
    {
        src: "./assets/images/female-collective-myou-hat.jpg",
        width: 1080,
        height: 1920
    },
    {
        src: "./assets/images/female-collective-insights.jpg",
        width: 887,
        height: 1920
    }
];

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.toggleModalJonah = this.toggleModalJonah.bind(this);
        this.toggleModalFC = this.toggleModalFC.bind(this);
    }

    toggleModalJonah() {
        this.setState({
            isJonahModalOpen: !this.state.isJonahModalOpen
        });
    }

    toggleModalFC() {
        this.setState({
            isFCModalOpen: !this.state.isFCModalOpen
        });
    }

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
                        <p>For starters <i>this website</i> was built by me from the ground up, using React and Redux, with dependencies including <a href="https://www.npmjs.com/package/reactstrap" target="_blank">reactstrap</a> and <a href="https://www.npmjs.com/package/react-photo-album" target="_blank">react-photo-album</a>. The full repo is public on GitHub if you want to check out how I put it all together. <a href="https://github.com/burtonparker/bkp-site" target="_blank">Take a look here!</a></p>
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
                                <Badge bg="" style={{backgroundColor: '#ff5f2e'}} pill>Typography</Badge> • <Badge bg="" style={{backgroundColor: '#3173a2'}} pill>Illustration</Badge>
                            </CardSubtitle>
                            <CardText>
                                When Jonah Ray became the new host of Mystery Science Theater 3000 it fulfilled a lifelong dream, which he documented in a series of photographs during their U.S. tour. We worked together to turn those pictures into a limited edition zine.
                            </CardText>
                            <Button onClick={() => 
                                this.toggleModalJonah()
                            }>
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
                                <Badge bg="" style={{backgroundColor: '#1fb25a'}} pill>UI</Badge> • <Badge bg="" style={{backgroundColor: '#f70ff7'}} pill>UX</Badge> • <Badge bg="" style={{backgroundColor: '#eed300'}} pill>Marketing</Badge>
                            </CardSubtitle>
                            <CardText>
                                I was responsible for translating Candace Reels dynamic voice into a shopping experience that felt like a natural extension of her social media presence.
                            </CardText>
                            <Button onClick={() => 
                                this.toggleModalFC()
                            }>
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
                        <br class="mobile-break" />
                        <CardGroup>
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
                        </CardGroup>
                        <Modal size="xl" className="modal-fullscreen" isOpen={this.state.isJonahModalOpen} toggle={this.toggleModalJonah}>
                            <ModalHeader toggle={this.toggleModalJonah}>Making Zines With Jonah</ModalHeader>
                            <ModalBody>
                                <p>For this project, I had Jonah simply share an iPhoto album with me so I could quickly get access to all of his photographs. On the cover, I made a hand-drawn illustration of Jonah and then mixed in some paint and shape effects using my iPad. I used Adobe Typekit for the typography, my goal was to have something that felt ever so slightly worn, since this was in essence a tour diary. In order to keep the budget under control, I was able to source a print-on-demand book publisher out of Omaha, Nebraska, which allowed Jonah and I to only have to commit to small print runs, as the zine was initially only intended to be sold at comic conventions.</p>
                                <PhotoAlbum layout="rows" targetRowHeight={350} photos={jonahPhotos} />
                            </ModalBody>
                        </Modal>
                        <Modal size="xl" className="modal-fullscreen" isOpen={this.state.isFCModalOpen} toggle={this.toggleModalFC}>
                            <ModalHeader toggle={this.toggleModalFC}>Words Matter</ModalHeader>
                            <ModalBody>
                                <p>Female Collective was experiencing explosive growth from their viral text-based Instagram posts and was looking to expand into select merchandise offerings. I was tasked with extending their visual language into a storefront. I designed the store layout itself in Liquid and SCSS, while integrating MailChimp into the header so we could encourage growth while following all the appropriate privacy best practices (aka, no forced opt-in!).</p>

                                <p>A year after her successful launch, we turned the focus to expanding marketing. I worked with the Instagram Shopping team at Facebook to integrate direct product listings into the Female Collective Instagram feed. This allowed her followers to purchase directly from Instagram, without ever having to leave the app, all the while sending the sales data to our platform for fulfillment. Additionally I provided reporting on insights and the success of each campaign.</p>
                                <PhotoAlbum layout="rows" targetRowHeight={350} photos={fcPhotos} />
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Work;