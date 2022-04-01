import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import Iframe from 'react-iframe';

class Contact extends Component {

    componentDidMount() {
        document.title = 'Contact Me • Burton Parker'
      }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8 order-2 order-md-1">
                            <Iframe 
                            url="https://snazzymaps.com/embed/382239" 
                            width="100%" 
                            height="600px" 
                            frameBorder="0"
                            />
                        </div>
                        <div className="col-md-4 order-1 order-md-2">
                            <h1>
                                Contact Me
                            </h1>
                            <h4>
                                <Badge bg="" href="mailto:burtonparker@gmail.com" style={{backgroundColor: '#00f468'}} pill>burtonparker@gmail.com</Badge>
                            </h4>
                            <h3>
                                <i className="fa fa-globe fa-lg" /> <i>Lawrence, Kansas</i>
                            </h3>
                            <hr></hr>
                            <i style={{color: '#333333'}} className="fa fa-github fa-lg" /><span className="align-middle lead"> <a href="https://github.com/burtonparker" target="_blank" className="text-secondary">GitHub</a></span>
                            <br />
                            <i style={{color: '#0b65c2'}} className="fa fa-linkedin fa-lg" /><span className="align-middle lead"> <a href="https://www.linkedin.com/in/burtonkarasparker/" target="_blank" className="text-secondary">LinkedIn</a></span>
                            <br />
                            <i style={{color: '#e94c89'}} className="fa fa-dribbble fa-lg" /><span className="align-middle lead"> <a href="https://dribbble.com/welvis" target="_blank" className="text-secondary">Dribbble</a></span>
                            <br />
                            <i style={{color: '#0162dc'}} className="fa fa-flickr fa-lg" /><span className="align-middle lead"> <a href="https://www.flickr.com/photos/welvistarn/" target="_blank" className="text-secondary">Flickr</a></span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;