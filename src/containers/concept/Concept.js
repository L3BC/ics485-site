import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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