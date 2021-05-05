import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import MilestonesCard from '../../components/card/MilestonesCard';

const Project = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold' }}>Project</h1>
            <div style={{ paddingBottom: 50 }}>
                <Container>
                    <Card>
                        <MilestonesCard />
                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default Project;