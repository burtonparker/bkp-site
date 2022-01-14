import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>
                                <Card>
                                    <CardImg width="100%" img src="../assets/images/burton-karas-parker-about.jpg" alt="Burton Karas Parker" />
                                </Card>
                            </h1>
                        </div>
                        <div className="col-md-8">
                            <p>
                            Elementum nisi quis eleifend quam. Arcu risus quis varius quam quisque id diam vel. Odio tempor orci dapibus ultrices in iaculis nunc sed. Id consectetur purus ut faucibus pulvinar elementum integer enim. Elementum curabitur vitae nunc sed velit dignissim sodales. Nisi est sit amet facilisis magna etiam tempor. Facilisi etiam dignissim diam quis enim. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Gravida rutrum quisque non tellus orci ac. Diam volutpat commodo sed egestas egestas. In ante metus dictum at tempor commodo ullamcorper a lacus. Quisque egestas diam in arcu cursus. Erat imperdiet sed euismod nisi porta lorem. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;