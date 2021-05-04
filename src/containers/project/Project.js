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
                                Fixed Enemy AI
                                <ul>
                                    <li>Fixed so that it goes up stairs</li>
                                    <li>Fixed so that it doesn't clip through walls</li>
                                </ul>
                            </li>
                            <li>
                                Added Slow down mechanic
                                <ul>
                                    <li>Added some obstacles
                                        <ul>
                                            <li>Laser</li>
                                            <li>Rotating Blades</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Started working on the map layout</li>
                            <li>
                                <b>Plans for next week</b>
                                <ul>
                                    <li>
                                        <b>Player</b>
                                        <ul>
                                            <li>Add sprinting</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Audio</b>
                                        <ul>
                                            <li>Add audio manager to the game</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Inventory/Items</b>
                                        <ul>
                                            <li>Polish inventory UI</li>
                                            <li>Add functionality to items</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Time Powers</b>
                                        <ul>
                                            <li>Add cooldowns</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <hr style={styles.divider} />
                        <h4>Week 4:</h4>
                        <ul>
                            <li>Added sprinting (shift key)</li>
                            <li>
                                <b>Added Audio Manager</b>
                                <ul>
                                    <li>Walking sounds</li>
                                    <li>Running sounds</li>
                                </ul>
                            </li>
                            <li>Added map extension</li>
                            <li>
                                <b>Item interaction</b>
                                <ul>
                                    <li>Added highlighting to keycard and fuse</li>
                                    <li>keycard and fuse now pickable and storeable in inventory</li>
                                </ul>
                            </li>
                            <li>Added inventory sprites</li>
                            <li>Added cooldowns and UI for time travel and slow time</li>
                            <li>Added door, closet, elvator models</li>
                            <li>
                                <b>Plans for next week</b>
                                <ul>
                                    <li>Add functionalities to door, locker, elevator</li>
                                </ul>
                            </li>
                        </ul>
                        <hr style={styles.divider} />
                        <h4>Week 5:</h4>
                        <ul>
                            <li>
                                Obstacle functionalities
                                <ul>
                                    <li>
                                        <b>Door and Locker</b>
                                        <ul>
                                            <li>Now open properly</li>
                                            <li>Could be set as open or closed</li>
                                            <li>Could now require keycard to open</li>
                                            <li>Time slow affects open/close speed</li>
                                            <li>Added sound for doors for open, close and locked</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Elevator</b>
                                        <ul>
                                            <li>Now can lift the player up and down</li>
                                            <li>Could now require fuse to operate</li>
                                            <li>Time slow affects up/down speed</li>
                                            <li>Added sound to elevator for up, down, and inoperable</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Added Main Menu</li>
                            <li>
                                <b>Plans for next week</b>
                                <ul>
                                    <li>Fix obstacle bugs</li>
                                    <li>Start finalizing the puzzles</li>
                                    <li>Add more sounds</li>
                                </ul>
                            </li>
                        </ul>
                        <hr style={styles.divider} />
                        <h4>Week 6:</h4>
                        <ul>
                            <li>Added checkpoint</li>
                            <li>Incorporated Time Slow to enemies</li>
                            <li>
                                Started integrating enemies in Main Game
                                <ul>
                                    <li>Added NavMesh in Main Game</li>
                                </ul>
                            </li>
                            <li>Imported Player Animations (Movement)</li>
                            <li>Added better laser visual for laser obstacle</li>
                            <li>Added sound to laser</li>
                            <li>Added time travel delay and sound</li>
                            <li>Added melee enemy and firing enemy</li>
                            <li>Bug fixes to doors, elevators, closets</li>
                            <li>Added enemy field of view script</li>
                            <li>
                                <b>Plans for next week</b>
                                <ul>
                                    <li>Integrate animations to player</li>
                                    <li>Import animations for enemies</li>
                                    <li>Integrate animations to melee enemy</li>
                                    <li>Integrate animations to ranged enemy</li>
                                    <li>Add remaining sounds</li>
                                </ul>
                            </li>
                        </ul>
                        <hr style={styles.divider} />
                        <h4>Week 7:</h4>
                        <ul>
                            <li>
                                player model and movement animations
                                <ul>
                                    <li>added FP camera to show player body etc.</li>
                                </ul>
                            </li>
                            <li>Added melee enemy model with movement animations</li>
                            <li>Integrated enemy field</li>
                        </ul>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Project;