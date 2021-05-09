import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import MilestonesCard from '../../components/card/MilestonesCard';

const Progress = (props) => {
    const styles = {
        projectTitleText: {
            textAlign: 'center',
            fontWeight: 'bold',
        }
    }
    return (
        <div>
            <h1 style={styles.projectTitleText}>Development Progress</h1>
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

export default Progress;