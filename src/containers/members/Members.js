import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import links from '../../assets/urls';
import ProfileCard from '../../components/card/ProfileCard';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Members = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold' }}>Last 3 Brain Cells</h1>
            <Container>
                <Row>
                    <Col sm>
                        <ProfileCard
                            name={'Graham Francisco'}
                            description={'Hi, I\'m an ICS student.'}
                            imgLink={img1}
                            github={links.grahamGH}
                            portfolio={links.grahamPortfolio}
                            objectFit={'cover'}
                            objectPosition={'top'}
                        />
                    </Col>
                    <Col sm>
                        <ProfileCard
                            name={'Lana Kawauchi'}
                            description={'Hi, I\'m an ICS student.'}
                            imgLink={img2}
                            github={links.LanaGH}
                            portfolio={links.LanaPortfolio}
                            objectFit={'cover'}
                            objectPosition={'top'}
                        />
                    </Col>
                    <Col sm>
                        <ProfileCard
                            name={'Daniel Oka'}
                            description={'Hi, I\'m an ACM student.'}
                            imgLink={img3}
                            objectFit={'cover'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Members;