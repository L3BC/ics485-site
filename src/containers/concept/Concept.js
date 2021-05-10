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
import sb_1 from '../../assets/concepts/SB_1.jpg';
import sb_2 from '../../assets/concepts/SB_2.png';
import sb_3 from '../../assets/concepts/SB_3.png';
import sb_4 from '../../assets/concepts/SB_4.jpg';
import sb_5 from '../../assets/concepts/SB_5.jpg';

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
        }
    }
    return (
        <div>
            <Container>
                <h1 style={styles.conceptTitle}>Images</h1>
                <Card>
                    <div style={styles.content}>
                        <div>
                            <Row>
                                <Col>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h2>Concept Art / Models</h2>
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
                                    <Row>
                                        <Col>
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
                                            The player in first person, from the game window
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                                        </Col>
                                    </Row>
                                    <h2>Storyboards</h2>
                                    <hr style={styles.divider} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Concept;