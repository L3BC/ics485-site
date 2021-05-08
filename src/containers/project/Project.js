import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import MilestonesCard from '../../components/card/MilestonesCard';

const Project = (props) => {
    const styles = {
        projectTitleText: {
            fontWeight: 'bold',
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={styles.projectTitleText}>Project</h1>
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