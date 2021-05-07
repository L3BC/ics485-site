import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import trello from '../../assets/trello.jpg';
import timetravel from '../../assets/timetravel.jpg';
import mirro from '../../assets/mirro.jpg';

const SlideShow = () => {
    const styles = {
        image: {

        },
        blur: {
            filter: 'blur(2px)'
        }
    };

    return (
        <Carousel className='slideShow'>
            <Carousel.Item>
                {/* <img
                    className="d-block w-100"
                    id={'imageBlur'}
                    src={timetravel}
                    alt="Third slide"
                /> */}
                <Image style={styles.image} src={timetravel} alt="Third slide" fluid />
                <Carousel.Caption>
                    <div className="gradient">
                        <h3 style={{ paddingTop: 15 }}>Breaking Alpha</h3>
                        <p style={{ paddingBottom: 15 }}>Check out our game, Breaking Alpha on itch.io</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href={'https://trello.com/b/Qr9F5ue6/lul'} target='_blank' rel='noreferrer'>
                    {/* <img
                        className="d-block w-100"
                        id={'imageBlur'}
                        src={trello}
                        alt="Second slide"
                    /> */}
                    <Image style={styles.image, styles.blur} src={trello} alt="Third slide" fluid />
                </a>

                <Carousel.Caption>
                    <div className="gradient">
                        <h3 style={{ paddingTop: 15 }}>Trello Board</h3>
                        <p style={{ paddingBottom: 15 }}>Check out our activities on our Trello board</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href={'https://miro.com/app/board/o9J_lTS7J4o=/'} target='_blank' rel='noreferrer'>
                    {/* <img
                        className="d-block w-100"
                        id={'imageBlur'}
                        src={mirro}
                        alt="Fourth slide"
                    /> */}
                    <Image style={styles.image, styles.blur} src={mirro} alt="Third slide" fluid />
                </a>

                <Carousel.Caption>
                    <div className="gradient">
                        <h3 style={{ paddingTop: 15}}>Storyboard</h3>
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