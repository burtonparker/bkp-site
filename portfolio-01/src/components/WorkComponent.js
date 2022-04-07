import React, { Component } from 'react';
import PhotoAlbum from 'react-photo-album';
import { Badge, Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Modal, ModalBody, ModalHeader } from 'reactstrap';

const jonahPhotos = [
    {
        src: "/assets/images/jonah-cover.jpg",
        width: 1267,
        height: 1920
    },
    {
        src: "/assets/images/jonah-crow.jpg",
        width: 1920,
        height: 1920
    },
    {
        src: "/assets/images/jonah-kansas-city.jpg",
        width: 1920,
        height: 1440
    },
    {
        src: "/assets/images/jonah-papa-bear.jpg",
        width: 1920,
        height: 1440
    },
    {
        src: "/assets/images/jonah-we-rolled.jpg",
        width: 1920,
        height: 1440
    }
];

const fcPhotos = [
    {
        src: "/assets/images/female-collective-merchtable-front-page.jpg",
        width: 1920,
        height: 3304
    },
    {
        src: "/assets/images/female-collective-merchtable-product-page.jpg",
        width: 1920,
        height: 1976
    },
    {
        src: "/assets/images/female-collective-instagram-launch.jpg",
        width: 1080,
        height: 1920
    },
    {
        src: "/assets/images/female-collective-myou-hat.jpg",
        width: 1080,
        height: 1920
    },
    {
        src: "/assets/images/female-collective-insights.jpg",
        width: 887,
        height: 1920
    }
];

const mtPhotos = [
    {
        src: "/assets/images/merchtable-stock-withdrawal.jpg",
        width: 1920,
        height: 819
    },
    {
        src: "/assets/images/merchtable-royalty-report.jpg",
        width: 1920,
        height: 1196
    },
    {
        src: "/assets/images/merchtable-regional-report.jpg",
        width: 1920,
        height: 1854
    },
    {
        src: "/assets/images/merchtable-dashboard.jpg",
        width: 1920,
        height: 1281
    },
    {
        src: "/assets/images/merchtable-petit-biscuit-front-page.jpg",
        width: 619,
        height: 1920
    },
    {
        src: "/assets/images/merchtable-petit-biscuit-product-page.jpg",
        width: 1246,
        height: 2069
    },
    {
        src: "/assets/images/merchtable-blazer.jpg",
        width: 1920,
        height: 1162
    },
    {
        src: "/assets/images/merchtable-burton-parker-warehouse.jpg",
        width: 1864,
        height: 1242
    },
    {
        src: "/assets/images/merchtable-burton-parker-office.jpg",
        width: 1920,
        height: 1280
    }
];

const vcPhotos = [
    {
        src: "/assets/images/various-deck-01.jpg",
        width: 1920,
        height: 1075
    },
    {
        src: "/assets/images/various-deck-02.jpg",
        width: 1920,
        height: 1075
    },
    {
        src: "/assets/images/various-deck-03.jpg",
        width: 1920,
        height: 1075
    },
    {
        src: "/assets/images/various-deck-04.jpg",
        width: 1920,
        height: 1075
    },
    {
        src: "/assets/images/various-ps-hoodie.jpg",
        width: 2000,
        height: 2000
    },
    {
        src: "/assets/images/various-ps-tee.jpg",
        width: 2500,
        height: 1394
    },
    {
        src: "/assets/images/various-ps-logos.jpg",
        width: 1920,
        height: 1920
    },
    {
        src: "/assets/images/various-candle-01.jpg",
        width: 1280,
        height: 1280
    },
    {
        src: "/assets/images/various-candle-02.jpg",
        width: 1050,
        height: 1050
    },
    {
        src: "/assets/images/various-deck-cuco.jpg",
        width: 1920,
        height: 1065
    },
    {
        src: "/assets/images/various-dillon-francis-bag.jpg",
        width: 1920,
        height: 1920
    },
    {
        src: "/assets/images/various-gerald-stocking.jpg",
        width: 1920,
        height: 1920
    },
    {
        src: "/assets/images/various-idgafos-pillow.jpg",
        width: 1000,
        height: 1000
    }
];

const vmPhotos = [
    {
        src: "/assets/images/vm-mailer-01.jpg",
        width: 1920,
        height: 998
    },
    {
        src: "/assets/images/vm-mailer-02.jpg",
        width: 1920,
        height: 1920
    },
    {
        src: "/assets/images/vm-mailer-03.jpg",
        width: 1920,
        height: 1920
    }
];

const kbPhotos = [
    {
        src: "/assets/images/kenyan-birth-certificate-generator.jpg",
        width: 1698,
        height: 3349
    }
];

class Work extends Component {

    componentDidMount() {
        document.title = 'My Work • Burton Parker'
      }    

    constructor(props) {
        super(props);
        this.state = {

        };

        this.toggleModalJonah = this.toggleModalJonah.bind(this);
        this.toggleModalFC = this.toggleModalFC.bind(this);
        this.toggleModalMT = this.toggleModalMT.bind(this);
        this.toggleModalVC = this.toggleModalVC.bind(this);
        this.toggleModalVM = this.toggleModalVM.bind(this);
        this.toggleModalKB = this.toggleModalKB.bind(this);
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

    toggleModalMT() {
        this.setState({
            isMTModalOpen: !this.state.isMTModalOpen
        });
    }

    toggleModalVC() {
        this.setState({
            isVCModalOpen: !this.state.isVCModalOpen
        });
    }

    toggleModalVM() {
        this.setState({
            isVMModalOpen: !this.state.isVMModalOpen
        });
    }

    toggleModalKB() {
        this.setState({
            isKBModalOpen: !this.state.isKBModalOpen
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
                            src="/assets/images/work-jonah-ray.jpg"
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
                            src="/assets/images/work-female-collective.jpg"
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
                            src="/assets/images/work-merchtable.jpg"
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
                                <Badge bg="" style={{backgroundColor: '#00cbc7'}} pill>Product Management</Badge> • <Badge bg="" style={{backgroundColor: '#d484fe'}} pill>Web Design</Badge>
                            </CardSubtitle>
                            <CardText>
                                At Merchtable I owned all aspects of our software platfrom, from initial design, to managing the development team, designing new features, and even committing and deploying my own branches.
                            </CardText>
                            <Button onClick={() => 
                                this.toggleModalMT()
                            }>
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
                            src="/assets/images/work-dillon-francis.jpg"
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
                                <Badge bg="" style={{backgroundColor: '#dea860'}} pill>Product Design</Badge> • <Badge bg="" style={{backgroundColor: '#704f6e'}} pill>Merchandising</Badge>
                            </CardSubtitle>
                            <CardText>
                                In my role as merchandiser, I was responsible for designing products for hundreds of artists, comedians, and record labels over the years. Here's just a small sampling of that work.
                            </CardText>
                            <Button onClick={() => 
                                this.toggleModalVC()
                            }>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Vinyl Mailers"
                            src="/assets/images/work-packaging-design.jpg"
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
                                <Badge bg="" style={{backgroundColor: '#f38ab4'}} pill>Packaging Design</Badge>
                            </CardSubtitle>
                            <CardText>
                                When you ship 40,000 vinyl albums each year, it's <i>pretty</i> important that they arrive safe and sound, so I worked with a local company to produce new packaging to protect our shipments, making our customers and clients both happy in the process.
                            </CardText>
                            <Button onClick={() => 
                                this.toggleModalVM()
                            }>
                                Learn More
                            </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                            alt="Kenyan Birth Certificate Generator"
                            src="/assets/images/work-kenyan-birth-certificate-generator.jpg"
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
                                <Badge bg="" style={{backgroundColor: '#0084ff'}} pill>Concept</Badge> • <Badge bg="" style={{backgroundColor: '#e71a30'}} pill>Graphic Design</Badge>
                            </CardSubtitle>
                            <CardText>
                                About that time my friend and I accidentally went viral and made a bunch of people laugh (some people, not so much).
                            </CardText>
                            <Button onClick={() => 
                                this.toggleModalKB()
                            }>
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
                        <Modal size="xl" className="modal-fullscreen" isOpen={this.state.isMTModalOpen} toggle={this.toggleModalMT}>
                            <ModalHeader toggle={this.toggleModalMT}>Merchtable and Blue Collar Press</ModalHeader>
                            <ModalBody>
                                <p>I literally helped build Merchtable (formerly Blue Collar Distro) with my bare hands, starting with framing the darkroom in our first basement space. From my earliest build of the website using Dreamweaver and Fireworks in 2002, through transitions to MivaMerchant, followed by overseeing an OSCommerce rebuild with Varien, to the most current version which runs on Ruby on Rails which was built and launched in 2012, I have either built, designed, or product managed the entire platform (sometimes all three).</p>

                                <p>Probably my favorite aspect is working on user interfaces. I designed Merchtable to have an extremely flexible front-end, so that each store on the platform to look and feel entirely unique. However for the back-end I had an entirely different challenge - make a single cohesive experience that could be used by staff to reliably and accurately process important data such as sales an inventory. Actually make that two back-ends, because I had to do it all over again when I designed the management portal, a service to be used by the artists and managers to analyze their data directly.</p>
                                <PhotoAlbum layout="rows" targetRowHeight={350} photos={mtPhotos} />
                            </ModalBody>
                        </Modal>
                        <Modal size="xl" className="modal-fullscreen" isOpen={this.state.isVCModalOpen} toggle={this.toggleModalVC}>
                            <ModalHeader toggle={this.toggleModalVC}>Design is How it Works</ModalHeader>
                            <ModalBody>
                                <p>From my earliest days creating my high school band's cassette tape insert I've been a designer. When working with artists, I would sometimes be tasked with creating an identity from the ground up, but often times they would come with ready made creative assets but no clue how to merchandise them. My job would be to take those visuals, research trends, and come up with compelling new product concepts. This included everything from vendor sourcing - like a Polish candlemaker - to market analysis and even personally creating the final pitch deck for presentation.</p>
                                
                                <p>Some notable clients I've worked with include Diplo, Josh Ritter, Brandi Carlile, Wilco, JPEGMAFIA, Kill Rock Stars, Tennis, Mom + Pop Records, Cuco, Dillon Francis, Marc Maron, Bayonne, Tad, Fischerspooner, Joywave, Juliana Hatfield, Mike Birbiglia, Maria Bamford, MØ, OK GO, Petit Biscuit, Ruth E. Carter, REZZ, Sturgill Simpson, The Ringer, and ZEDD among many others.</p>
                                <PhotoAlbum layout="rows" targetRowHeight={350} photos={vcPhotos} />
                            </ModalBody>
                        </Modal>
                        <Modal size="xl" className="modal-fullscreen" isOpen={this.state.isVMModalOpen} toggle={this.toggleModalVM}>
                            <ModalHeader toggle={this.toggleModalVM}>What Goes Into a Box?</ModalHeader>
                            <ModalBody>
                                <p>Part of owning a company involves listening - <i>really</i> listening - to criticism. As vinyl albums began to grow again in popularity, I was faced with a major problem in the form of damaged records arriving on customer's doorsteps. On top of that, the company we were using, Uline, was politically and morally incongruous to my beliefs and those of our clients. Lastly, packaging is wasteful, so what can be done to reduce that impact?</p>
                                
                                <p>I worked with a local packaging company on several initial prototypes. Some of them were very <i>very</i> weird, but eventually I settled on a design that adequately protected all corners of the album(s) in the shipment. To reduce waste, I had our logo die-cut from the center of the interior, which not only looked cool and expanded brand awareness, but had the effect of reducing the weight of every mailer by about 15% - that's a lot of carbon - especially considering the mailers now only had to travel across town instead of multiple states. All together this project had the effect of impacting the environment and local economy positively, while showing both clients and customers that their voices were indeed heard.</p>
                                <PhotoAlbum layout="rows" targetRowHeight={350} photos={vmPhotos} />
                            </ModalBody>
                        </Modal>
                        <Modal size="xl" className="modal-fullscreen" isOpen={this.state.isKBModalOpen} toggle={this.toggleModalKB}>
                            <ModalHeader toggle={this.toggleModalKB}>We're All President Now</ModalHeader>
                            <ModalBody>
                                <p>In 2009, like a lot of people, I was freaked out and annoyed that there was a growing conspiracy theory about President Obama's birth certificate. My friend <a href="https://wlrs.net/" target="_blank">Joey</a> is a developer, and over IM we kicked around the idea of making it so <i>everyone</i> could be born in Kenya. I registered a domain and tracked down a high res image of the birth certificate and wiped it clean in Photoshop. Joey got to work coding a simple one-page site that allowed people to enter their own info and generate <i>their</i> certificate of live birth.</p>
                                
                                <p>Within a single work day the entire site was built. We launched it and things took off very <i>very</i> quickly. By the next day we'd been interviewed by the Washington Times, Rachel Maddow did a segment, and the site was written about on <a href="https://www.vanityfair.com/news/2009/08/now-you-can-have-your-very-own-kenyan-birth-certificate" target="_blank">Vanity Fair</a>, <a href="https://www.salon.com/2009/08/05/kenyan_certificate/" target="_blank">Salon</a>, <a href="https://www.gawker.com/5330861/create-your-own-kenyan-birth-certificates-and-save" target="_blank">Gawker</a>, and even <a href="https://www.snopes.com/fact-check/kenyan-mistake/" target="_blank">Snopes</a>.</p>

                                <p>This project was directly responsible for sparking my deeper interest in eventually learning to code myself, because I was blown away that Joey and I were able to go from concept to reality in such a short amount of time.</p>
                                <PhotoAlbum layout="rows" targetRowHeight={350} photos={kbPhotos} />
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Work;