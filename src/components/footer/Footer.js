import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import links from '../../assets/urls';

const Footer = () => {
    const styles = {
        divider: {
            marginTop: 60,
            marginBottom: 0,
            borderTop: '1px solid #bbb',
            width: '30%'
        }
    }
    return (
        <div className="footer">
            <Container>
                <Row lg={4}>
                    <Col>
                        <div style={{ color: '#ffffff', textAlign: 'left', marginTop: 15 }}>
                            <h6>Last 3 Brain Cells:</h6>
                            <a
                                style={{ color: '#ffffff' }}
                                href="https://trello.com/b/Qr9F5ue6/lul"
                                rel="noopener noreferrer"
                            >
                                Graham Francisco
                            </a>
                            <br />
                            <a
                                style={{ color: '#ffffff' }}
                                href="https://trello.com/b/Qr9F5ue6/lul"
                                rel="noopener noreferrer"
                            >
                                Lana Kawauchi
                            </a>
                            <br />
                            Daniel Oka
                            <br />
                        </div>
                    </Col>
                    <Col>
                        <div style={{ color: '#ffffff', textAlign: 'left', marginTop: 15 }}>
                            <h6>Links:</h6>
                            <a
                                style={{ color: '#ffffff' }}
                            >
                                Play the game (Itch.io)
                            </a>
                            <br />
                            <a
                                style={{ color: '#ffffff' }}
                                href={links.grahamPortfolio}
                                rel="noopener noreferrer"
                                >
                                Check development (Trello)
                            </a>
                            <br />
                            <a
                                style={{ color: '#ffffff' }}
                                href={links.LanaPortfolio}
                                rel="noopener noreferrer"
                            >
                                Check brainstorming (Mirro)
                            </a>
                            <br />
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr style={styles.divider} />
            <p style={{ color: '#ffffff' }}>ICS 485 | ACM 487 Spring 2021</p>
        </div>
    );
}

export default Footer;