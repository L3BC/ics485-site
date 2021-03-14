import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import naruto from '../../assets/naruto.jpg';
import kda from '../../assets/kda.jpg';
import newshoes from '../../assets/newshoes.jpg';
import mirro from '../../assets/mirro.jpg';

const Footer = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '48px' }}>Last 3 Brain Cells</h1>
            <div style={{paddingBottom: 100}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={naruto}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={kda}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={newshoes}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            id={'imageBlur'}
                            src={mirro}
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{ color: '#000000' }}>Storyboard</h3>
                            <p style={{ color: '#000000' }}>Check out our game brainstorming on our Mirro board.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Footer;