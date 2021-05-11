import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

const ModalFigure = (props) => {
    const styles = {
        image: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Image style={styles.image} className="img-fluid" src={props.src} />
                        </Col>
                    </Row>
                    <p style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        {props.caption}
                    </p>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const CaptionedFigure = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const styles = {
        image: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            cursor: 'pointer'
        },
        caption: {
            color: "#000000",
            textAlign: 'center'
        }
    }

    return (
        <>
            <Figure>
                <Figure.Image
                    width={256}
                    height={144}
                    alt="171x180"
                    src={props.src}
                    style={styles.image}
                    onClick={() => setModalVisible(true)}
                />
                <Figure.Caption>
                    <div style={styles.caption}>
                        {props.children}
                    </div>
                </Figure.Caption>
            </Figure>

            <ModalFigure
                show={isModalVisible}
                onHide={() => setModalVisible(false)}
                src={props.src}
                caption={props.children}
            />
        </>
    );
}

export default CaptionedFigure;