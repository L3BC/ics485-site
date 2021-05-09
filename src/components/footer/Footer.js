import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    const styles = {
        divider: {
            marginBottom: 0,
            borderTop: '2px solid #bbb',
            width: '35%'
        }
    }
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                    Testing
                    </Col>
                </Row>
            </Container>
            <hr style={styles.divider} />
            <p style={{color: '#ffffff'}}>ICS 485 | ACM 487 Spring 2021</p>
        </div>
    );
}

export default Footer;