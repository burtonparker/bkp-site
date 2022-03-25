import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Contact extends Component {
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
                            <h5>
                                <a href="mailto:burtonparker@gmail.com" className="text-success">burtonparker (at) gmail (dot) com</a>
                            </h5>
                            <h4>
                                <i>785-592-1391</i>
                            </h4>
                            <hr></hr>
                            <i style={{color: '#333333'}} className="fa fa-github fa-lg" /><span className="align-middle"> <a href="https://github.com/burtonparker" target="_blank" className="text-secondary">GitHub</a></span>
                            <br />
                            <i style={{color: '#0b65c2'}} className="fa fa-linkedin fa-lg" /><span className="align-middle"> <a href="https://www.linkedin.com/in/burtonkarasparker/" target="_blank" className="text-secondary">LinkedIn</a></span>
                            <br />
                            <i style={{color: '#e94c89'}} className="fa fa-dribbble fa-lg" /><span className="align-middle"> <a href="https://dribbble.com/welvis" target="_blank" className="text-secondary">Dribbble</a></span>
                            <br />
                            <i style={{color: '#0162dc'}} className="fa fa-flickr fa-lg" /><span className="align-middle"> <a href="https://www.flickr.com/photos/welvistarn/" target="_blank" className="text-secondary">Flickr</a></span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;