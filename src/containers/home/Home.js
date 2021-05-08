import React from 'react';
import SlideShow from '../../components/slideShow/SlideShow';
import VideoFrame from '../../components/videoFrame/VideoFrame';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    const styles = {
        homeTitleText: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '48px',
            fontFamily: 'monospace'
        },
        homeTitleBody: {
            fontSize: '28px',
        },

        homeCarouselText: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center'
        },
        homeDescriptionTitle: {
            marginBottom: 20,
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center',
        },
        homeDescriptionBody: {
            color: '#000000',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'justify'
        },
        homeFeaturesTitle: {
            marginBottom: 20,
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center',
        },
        homeFeaturesSubTitle: { 
            marginTop: 20,
            color: '#ffffff',
            textAlign: 'center'
        },
        homeFeaturesBody: {
            marginTop: 20,
            fontSize: 18,
            color: '#ffffff',
            textAlign: 'center'
        },
        divider: {
            borderTop: '2px solid #000000'
        }
    }

    return (
        <div>
            <div className="homeMainTitle">
                <Container>
                    <Row className="row align-items-center">
                        <Col>
                            <h1 style={styles.homeTitleText}>Breaking Alpha</h1>
                            <hr style={styles.divider} />
                            <p style={styles.homeTitleBody}>
                                You find yourself trapped in a run-down lab facility. Although, as you attempt to
                                escape, you encounter obstacles which are not traversible by normal means as well
                                as menacing robots who will attack you on sight. However, with your time-manipulating
                                watch, you have <b><i>TIME</i></b> on your side to aid you on your way to freedom.
                            </p>
                        </Col>
                        <Col>
                            <VideoFrame videoLink={`v_swG-F0Za0`} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="homeDescription">
                <Container>
                    <Row>
                        <Col>
                            <h1 style={styles.homeDescriptionTitle}>Our Game</h1>
                            <p style={styles.homeDescriptionBody}>
                                Breaking Alpha is an FPS game made in Unity3D. It follows the conventional WASD movement
                                system employed by other FPS games, with sprinting but without jumping mechanic. It also 
                                contains an inventory system that allows the player to pick up items in order to interact 
                                with other objects. In order to achieve the goal of escaping the facility, the player must 
                                use time-travelling and time-slowing powers to solve puzzles along the way.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="homeFeatures">
                <Container>
                    <Row>
                        <Col>
                            <h1 style={styles.homeFeaturesTitle}>Features</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VideoFrame videoLink={`pERsblOacis`} />
                            <h3 style={styles.homeFeaturesSubTitle}>Time Travel</h3>
                            <p style={styles.homeFeaturesBody}>
                                Move back and forth between past and present to navigate your way through obstacles.
                                Some paths are not traversable normally, so use your powers to find circumvent them.
                            </p>
                        </Col>
                        <Col>
                            <VideoFrame videoLink={`LhEfVZwdBxk`} />
                            <h3 style={styles.homeFeaturesSubTitle}>Slow Time</h3>
                            <p style={styles.homeFeaturesBody}>
                                Some obstacles are too fast to go past through, and some enemies will hunt you non-stop.
                                Give yourself enough time to react to these obstacles, by slowing down time itself.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="homeCarousel">
                <Container fluid>
                    <h1 style={styles.homeCarouselText}>Check out our game!</h1>
                    <SlideShow />
                </Container>
            </div>
        </div>
    );
}

export default Home;