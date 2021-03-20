import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Project = (props) => {
    const styles = {
        header: {
            textAlign: 'left',
            marginLeft: 50,
            marginRight: 50,
            marginTop: 15,
            marginBottom: 15
        },
        divider: {
            borderTop: '2px solid #bbb'
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold' }}>Project</h1>
            <Container>
                <Card>
                    <div style={styles.header}>
                        <h2>Milestones</h2>
                        <hr style={styles.divider} />
                        <h4>Week 1:</h4>
                        <ul>
                            <li>Started creating rough draft and floor plans for level 1</li>
                            <li>
                                Started implementing first person movement
                                <ul>
                                    <li>Used a custom character controller script</li>
                                    <li>Created custom gravity for character</li>
                                    <li>Plan to implement ladder climbing</li>
                                </ul>
                            </li>
                            <li>Started implementing enemy behavior (LOS)</li>
                            <li>Started implementing time travel or dimension hopping</li>
                            <li>Started running tests on character movement</li>
                        </ul>
                        <hr style={styles.divider} />
                        <h4>Week 2:</h4>


                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Project;