import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CaptionedFigure from '../../components/captionedFigure/CaptionedFigure';
import ca_1 from '../../assets/concepts/CA_1.png';
import ca_2 from '../../assets/concepts/CA_2.png';
import ca_3 from '../../assets/concepts/CA_3.png';
import ca_4 from '../../assets/concepts/CA_4.png';
import sb_1 from '../../assets/concepts/SB_1.jpg';
import sb_2 from '../../assets/concepts/SB_2.png';
import sb_3 from '../../assets/concepts/SB_3.png';
import sb_4 from '../../assets/concepts/SB_4.jpg';
import sb_5 from '../../assets/concepts/SB_5.jpg';
import sb_6 from '../../assets/concepts/SB_6.jpg';
import sb_7 from '../../assets/concepts/SB_7.jpg';

const Concept = () => {
    const styles = {
        divider: {
            borderTop: '2px solid #bbb'
        },
        conceptTitle: {
            textAlign: 'center',
            fontWeight: 'bold'
        },
        content: {
            marginLeft: 50,
            marginRight: 50,
            marginTop: 15,
            marginBottom: 15
        },
        image: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        caption: {
            color: "#000000",
            textAlign: 'center'
        }
    }
    return (
        <div>
            <div style={{ paddingBottom: 50 }}>
                <Container>
                    <h1 style={styles.conceptTitle}>Images</h1>
                    <Card>
                        <div style={styles.content}>
                            <div>
                                <Row className="row align-items-center">
                                    <Col>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h2>Concept Art / Models / Misc</h2>
                                            <Button
                                                href="https://miro.com/app/board/o9J_lTS7J4o=/"
                                                target='_blank'
                                                rel='noreferrer'
                                                type="button"
                                            >
                                                <div style={{ fontSize: 20, fontWeight: 'bold' }}>Mirro Board</div>
                                            </Button>
                                        </div>
                                        <hr style={styles.divider} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col d-flex justify-content-center">
                                        <CaptionedFigure src={ca_1}>
                                            The player model in Maya
                                        </CaptionedFigure>
                                    </Col>
                                    <Col className="col d-flex justify-content-center">
                                        <CaptionedFigure src={ca_2}>
                                            The time-manipulating watch
                                        </CaptionedFigure>
                                    </Col>
                                    <Col className="col d-flex justify-content-center">
                                        <CaptionedFigure src={ca_4}>
                                            Early concept for the melee enemy
                                        </CaptionedFigure>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={ca_3}>
                                            Taking animations from Mixamo for the melee enemy to use
                                        </CaptionedFigure>
                                    </Col>
                                </Row>
                                <Row className="row align-items-center">
                                    <Col>
                                        <h2>Storyboards</h2>
                                        <hr style={styles.divider} />
                                    </Col>
                                </Row>
                                <Row className="row align-items-center">
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_2}>
                                            First initial story board for a level. Initially, the game was supposed to have sequential levels.
                                        </CaptionedFigure>
                                    </Col>
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_3}>
                                            How the time travel works: teleport the player to a similar place on the z-axis, based on an offset
                                        </CaptionedFigure>
                                    </Col>
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_1}>
                                            How time travel should help: if door is locked in present, it may be open in the past
                                        </CaptionedFigure>
                                    </Col>
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_4}>
                                            A sketch for one room: enemies guarding keycard
                                        </CaptionedFigure>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_5}>
                                            The main hall in the game
                                        </CaptionedFigure>
                                    </Col>
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_6}>
                                            Another room adjacent to the main hall
                                        </CaptionedFigure>
                                    </Col>
                                    <Col lg={3} className="col d-flex justify-content-center">
                                        <CaptionedFigure src={sb_7}>
                                            Hall next to the starting point of the game
                                        </CaptionedFigure>
                                    </Col>
                                </Row>
                                <Row className="row align-items-center">
                                    <Col>
                                        <h2>Game Screenshots</h2>
                                        <hr style={styles.divider} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default Concept;