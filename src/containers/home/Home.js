import React from 'react';
import SlideShow from '../../components/slideShow/SlideShow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    const styles = {
        homeTitleText: {
            fontWeight: 'bold',
            fontSize: '48px'
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
                    <h1 style={styles.homeTitleText}>Breaking Alpha</h1>
                    <hr style={styles.divider} />
                    <p style={{ fontSize: '36px' }}>LOL! What is this font!?</p>
                </Container>
            </div>
            <div className="homeFeatures">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 style={styles.homeFeaturesText}>Features</h1>
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