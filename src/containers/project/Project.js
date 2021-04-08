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
                        <ul>
                            <li>
                                Tested character movement
                                <ul>
                                    <li>Plan to implement ladder climbing still in doubts</li>
                                </ul>
                            </li>
                            <li>
                                Continued tests on enemy
                                <ul>
                                    <li>Checking collision with terrain</li>
                                    <li>Will have to test interaction with doors</li>
                                </ul>
                            </li>
                            <li>Started implementing time travel or dimension hopping</li>
                            <li>
                                Started implementing interactable objects
                                <ul>
                                    <li>Created highlighting system to see which objects can be interacted with</li>
                                    <li>Created collectable objects that can be picked up and stored in inventory</li>
                                    <li>
                                        Created general script for doors
                                        <ul>
                                            <li>Must fix highlight bug</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Started implementing inventory system
                                <ul>
                                    <li>Created working inventory UI</li>
                                    <li>Created a list that contains collectable items</li>
                                </ul>
                            </li>
                            <li>Started creating the character asset with animations</li>
                            <li>Started creating the omnitrix</li>
                            <li>
                                <b>Plans for next week</b>
                                <ul>
                                    <li>Create the game map</li>
                                    <li>Create First Person UI</li>
                                    <li>Implement additional mechanics like slowing down time, speeding up time, and freezing time</li>
                                </ul>
                            </li>
                        </ul>
                        <hr style={styles.divider} />
                        <h4>Week 3:</h4>
                        <ul>
                            <li>
                                Fixed Inventory
                                <ul>
                                    <li>Added item selection</li>
                                </ul>
                            </li>
                            <li>
                                Added Slow down mechanic
                                <ul>
                                    <li>Added some obstacles</li>    
                                </ul>    
                            </li>
                            <li>Started working on the map layout</li>
                        </ul>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Project;