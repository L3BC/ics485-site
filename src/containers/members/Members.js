import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import links from '../../assets/urls';
import ProfileCard from '../../components/card/ProfileCard';
import img1 from '../../assets/img1.jpg';

const Members = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold' }}>Members</h1>
            <Container>
                <Row>
                    <Col sm>
                        <ProfileCard
                            name={'Graham Francisco'}
                            description={'Hi, I\'m an ICS student.'}
                            imgLink={img1}
                            link={links.grahamGH}
                            linkName={'GitHub'}
                            objectFit={'cover'}
                            objectPosition={'top'}
                        />
                    </Col>
                    <Col sm>
                        <ProfileCard
                            name={'Lana Kawauchi'}
                            description={'Hi, I\'m an ICS student.'}
                            // imgLink={img1}
                            link={links.LanaGH}
                            linkName={'GitHub'}
                        // objectFit={'cover'}
                        // objectPosition={'top'}
                        />
                    </Col>
                    <Col sm>
                        <ProfileCard
                            name={'Daniel Oka'}
                            description={'Hi, I\'m an ACM student.'}
                            // imgLink={img2}
                            // link={links.grahamGH}
                            // linkName={'Link'}
                        // objectFit={'cover'}
                        // objectPosition={'top'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Members;