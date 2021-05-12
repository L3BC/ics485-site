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
                            imgLink={img1}
                            github={links.grahamGH}
                            portfolio={links.grahamPortfolio}
                            objectFit={'cover'}
                            objectPosition={'top'}
                        >
                            I am a senior studying for a B.S. in Computer Science in the
                            Department of Information and Computer Sciences at the University
                            of Hawaii. I love creating various kinds of software, from web apps 
                            to video games. I love the problem solving aspect of software engineering 
                            as it challenges me to be more creative. As such, I find developing 
                            video games a good way to work my technical skills and creativity.
                        </ProfileCard>
                    </Col>
                    <Col sm>
                        <ProfileCard
                            name={'Lana Kawauchi'}
                            imgLink={img2}
                            github={links.LanaGH}
                            portfolio={links.LanaPortfolio}
                            objectFit={'cover'}
                            objectPosition={'top'}
                        >
                            I am senior at the University of Hawaii currently pursuing my BS in 
                            Computer Science and a certificate in Creative Computational Media. 
                            I have a passion for video games and love the process of creating them, 
                            whether it’s coding the functionality or creating assets. I hope to one 
                            day create my own video game by myself from scratch like Stardew Valley 
                            or Undertale.
                        </ProfileCard>
                    </Col>
                    <Col sm>
                        <ProfileCard
                            name={'Daniel Oka'}
                            imgLink={img3}
                            objectFit={'cover'}
                        >
                            I am a senior at UH Manoa working in 3D animation. I worked on asset 
                            development and level design aspects of the game. I also led the creative 
                            side of things designing puzzles and figuring out mechanics. This is my first 
                            time working with a group of programmers on a game project.
                        </ProfileCard>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Members;