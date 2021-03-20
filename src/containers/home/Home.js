import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import naruto from '../../assets/naruto.jpg';
// import kda from '../../assets/kda.jpg';
import trello from '../../assets/trello.jpg';
import newshoes from '../../assets/newshoes.jpg';
import mirro from '../../assets/mirro.jpg';

const Home = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '48px' }}>Last 3 Brain Cells</h1>
            <div style={{ paddingBottom: 100 }}>
                <Carousel>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={naruto}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={newshoes}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Breaking Alpha</h3>
                            <p>Check out our game, Breaking Alpha on itch.io</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={'https://trello.com/b/Qr9F5ue6/lul'} target='_blank'>
                            <img
                                className="d-block w-100"
                                id={'imageBlur'}
                                src={trello}
                                alt="Second slide"
                            />
                        </a>

                        <Carousel.Caption>
                            <h3>Trello Board</h3>
                            <p>Check out our activities on our Trello board</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={'https://miro.com/app/board/o9J_lTS7J4o=/'} target='_blank'>
                            <img
                                className="d-block w-100"
                                id={'imageBlur'}
                                src={mirro}
                                alt="Fourth slide"
                            />
                        </a>

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

export default Home;