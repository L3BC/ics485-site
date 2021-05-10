import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
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
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={ca_1}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    The player model in Maya
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                    <Col className="col d-flex justify-content-center">
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={ca_2}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    The time-manipulating watch
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                    <Col className="col d-flex justify-content-center">
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={ca_4}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    Early concept for the melee enemy
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} className="col d-flex justify-content-center">
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={ca_3}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    Taking animations from Mixamo for the melee enemy to use
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                </Row>
                                <Row className="row align-items-center">
                                    <Col>
                                        <h2>Storyboards</h2>
                                        <hr style={styles.divider} />
                                    </Col>
                                </Row>
                                <Row className="row align-items-center">
                                    <Col className="col d-flex justify-content-center">
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={sb_2}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    The player model in Maya
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                    <Col className="col d-flex justify-content-center">
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={sb_3}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    The time-manipulating watch
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                    <Col className="col d-flex justify-content-center">
                                        <Figure>
                                            <Figure.Image
                                                width={256}
                                                height={144}
                                                alt="171x180"
                                                src={sb_1}
                                                style={styles.image}
                                            />
                                            <Figure.Caption>
                                                <div style={styles.caption}>
                                                    Early concept for the melee enemy
                                                </div>
                                            </Figure.Caption>
                                        </Figure>
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