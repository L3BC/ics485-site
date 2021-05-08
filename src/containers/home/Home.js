import React from 'react';
import SlideShow from '../../components/slideShow/SlideShow';
import VideoFrame from '../../components/videoFrame/VideoFrame';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    const styles = {
        homeTitleText: {
            fontWeight: 'bold',
            fontSize: '48px',
            fontFamily: 'monospace'
        },
        homeCarouselText: {
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center'
        },
        homeFeaturesText: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '36px',
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
                            <p style={{ fontSize: '28px' }}>
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
            <div className="homeFeatures">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 style={styles.homeFeaturesText}>Features</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ color: 'white', textAlign: 'center' }}>Time Travel</h3>
                        </Col>
                        <Col>
                            <h3 style={{ color: 'white', textAlign: 'center' }}>Slow Time</h3>
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