import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                                <Card>
                                    <CardImg width="100%" img src="../assets/images/burton-karas-parker-about.jpg" alt="Burton Karas Parker" title="Burton Parker" />
                                </Card>
                                <cite>Hair by Supercuts.</cite>
                        </div>
                        <div className="col-md-8">
                            <h1>About Me</h1>
                            <p>
                            Born in Oregon, raised in Kansas, happily married father of four. I enjoy writing and performing music, art, photography, and cheeseburgers. I am a loyal, consistent, and hard worker who loves challenges and learning new systems and finding ways to make them better.
                            </p>
                            <p>
                            Previously I was the Co-Founder and Co-Owner of Merchtable &amp; Blue Collar Press, a combined merchandising &amp; e-commerce fulfillment company, and screen printing facility where I oversaw operations during 19 years.
                            </p>
                            <h3>Experience</h3>
                            <ul>
                            <li>
                                <span className="feature">Management</span> - Directly managed a team of more than a dozen people in diverse roles at a given time, including full reviews, raises, management training, and human resources. I trained my team to have autonomy and take ownership of their positions, which improved the company work ethic and retention.
                            </li>
                            <li>
                                <span className="feature">Graphic &amp; Visual Design</span> - Created designs and logos for approximately 100 different artists and labels. Additionally I was responsible for creating and maintaining the UI and UX of approximately 300 different online stores covering a broad range of different interests, from musicians to podcasts, entertainers, clothing and food companies, and social media influencers among others. This included design and implementation of CSS frameworks, Liquid, and in some cases scripting. I was also responsible for designing  the entire user interface for Merchtable software and back end live chart features.
                            </li>
                            <li>
                                <span className="feature">Merchandising</span> - Directly developed product lines and merchandise, including P&amp;L, logistics, job costing, break even points, product sourcing, and overseeing production runs.
                            </li>
                            <li>
                                <span className="feature">Marketing</span> - Created and ran dozens of successful online ad campaigns for clients, with ROAS over $20 in some instances. Responsibilities included everything from asset creation to budgeting to real time monitoring and adjustment of campaigns. Experience in Facebook, Instagram, Google, and AdRoll digital marketing platforms.
                            </li>
                            <li>
                                <span className="feature">Growth</span> - Over the course of 18 years, helped grow the revenues of my company from six figures to over $7 million in 2020 during the height of the pandemic, with our fulfillment center averaging around 100,000 orders per year and just under 1,000,000 registered users.
                            </li>
                            <li>
                                <span className="feature">Sales &amp; Client Services</span> - Managed a portfolio of hundreds of high level artists, influencers, and record labels, specializing in acquisition, retention and revenue growth. Notable clients included Diplo, Major Lazer, Josh Ritter, The Ringer Podcast Network, Maria Bamford, The Indoor Kids featuring Kumail Nanjiani and Emily V. Gordon, Jonah Ray, The WTF Podcast with Marc Maron, Mom+Pop Records, Dillon Francis, STS9, Flume, Lucero, Female Collective, PARADISE by Marawa the Amazing, JPEGMAFIA, Sturgill Simpson, Sleater-Kinney, Tennis, and Neurot Recordings, among many others. To this day all of our business has come via word of mouth.
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;