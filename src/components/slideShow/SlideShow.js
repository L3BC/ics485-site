import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import trello from '../../assets/trello.jpg';
import mirro from '../../assets/mirro.jpg';
import game from '../../assets/game.jpg';

const SlideShow = () => {
    const styles = {
        image: {
            width: '100%',
            height: 'auto'
        },
        blur: {
            filter: 'blur(2px)'
        },
    };

    return (
        <Carousel className='slideShow'>
            <Carousel.Item>
                <a href={'https://gbfrancisco.itch.io/breaking-alpha'} target='_blank' rel="noopener noreferrer">
                    <Image style={styles.image} src={game} alt="Third slide" fluid />
                </a>
                <Carousel.Caption>
                    <div className="gradient">
                        <h3 style={{ paddingTop: 15 }}>Breaking Alpha</h3>
                        <p style={{ paddingBottom: 15 }}>Check out our game, Breaking Alpha on itch.io</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href={'https://trello.com/b/Qr9F5ue6/lul'} target='_blank' rel="noopener noreferrer">
                    <Image style={{ ...styles.image, ...styles.blur }} src={trello} alt="Third slide" fluid />
                </a>

                <Carousel.Caption>
                    <div className="gradient">
                        <h3 style={{ paddingTop: 15 }}>Trello Board</h3>
                        <p style={{ paddingBottom: 15 }}>Check out our activities on our Trello board</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href={'https://miro.com/app/board/o9J_lTS7J4o=/'} target='_blank' rel="noopener noreferrer">
                    <Image style={{ ...styles.image, ...styles.blur }} src={mirro} alt="Third slide" fluid />
                </a>

                <Carousel.Caption>
                    <div className="gradient">
                        <h3 style={{ paddingTop: 15 }}>Storyboard</h3>
                        <p
                            style={{
                                paddingBottom: 15,
                                paddingRight: 15,
                                paddingLeft: 15,
                            }}
                        >
                            Check out our game brainstorming on our Mirro board
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;