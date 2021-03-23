import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import naruto from '../../assets/naruto.jpg';
// import kda from '../../assets/kda.jpg';
import trello from '../../assets/trello.jpg';
import timetravel from '../../assets/timetravel.jpg';
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
                            id={'imageBlur'}
                            src={timetravel}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="gradient">
                                <h3 style={{ paddingTop: 15 }}>Breaking Alpha</h3>
                                <p style={{ paddingBottom: 15 }}>Check out our game, Breaking Alpha on itch.io</p>
                            </div>
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
                            <div className="gradient">
                                <h3 style={{ paddingTop: 15 }}>Trello Board</h3>
                                <p style={{ paddingBottom: 15 }}>Check out our activities on our Trello board</p>
                            </div>
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
                            <div className="gradient">
                                <h3 style={{ paddingTop: 15, color: '#000' }}>Storyboard</h3>
                                <p 
                                    style={{ 
                                        paddingBottom: 15,
                                        paddingRight: 15, 
                                        paddingLeft: 15,
                                        color: '#000'
                                    }}
                                >
                                    Check out our game brainstorming on our Mirro board
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;