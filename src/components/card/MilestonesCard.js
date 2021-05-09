import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import m1_1 from '../../assets/milestones/M1_PlayerThirdPerson.png';
import m1_2 from '../../assets/milestones/M1_FirstPerson.png';
import m2_1 from '../../assets/milestones/M2_Enemy.png';
import m2_2 from '../../assets/milestones/M2_Unhighlighted.png';
import m2_3 from '../../assets/milestones/M2_Highlighted.png';
import m2_4 from '../../assets/milestones/M2_ItemPlaceholder.png';
import m2_5 from '../../assets/milestones/M2_StoredItem.png';
import m3_1 from '../../assets/milestones/M3_Lasers.png';
import m3_2 from '../../assets/milestones/M3_Blades.png';
import m4_1 from '../../assets/milestones/M4_DoorsClosets.png';
import m4_2 from '../../assets/milestones/M4_Elevators.png';
import m4_3 from '../../assets/milestones/M4_FusesKeyCards.png';
import m4_4 from '../../assets/milestones/M4_NewUI.png';
import m5_1 from '../../assets/milestones/M5_Open.png';
import m5_2 from '../../assets/milestones/M5_ElevatorUp.png';
import m6_1 from '../../assets/milestones/M6_NewLasers.png';
import m6_2 from '../../assets/milestones/M6_PlayerModel.png';
import m6_3 from '../../assets/milestones/M6_CharacterAnimations.gif';
import m7_1 from '../../assets/milestones/M7_Melee.png';
import m7_2 from '../../assets/milestones/M7_Ranged.png';
import m7_3 from '../../assets/milestones/M7_TimeTravel.gif';
import m7_4 from '../../assets/milestones/M7_SlowTime.gif';

const MilestonesCard = (props) => {
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
        },
        image: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        caption: {
            color: "#000000",
            textAlign: 'center'
        }
    }

    return (
        <div style={styles.header}>
            <h2>Milestones</h2>
            <hr style={styles.divider} />
            <Tabs defaultActiveKey="week1" style={{ marginBottom: 10 }}>
                <Tab eventKey="week1" title="Week 1">
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
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row className="row align-items-center">
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m1_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            The player model in third person, from the scene window
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m1_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            The player in first person, from the game window
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="week2" title="Week 2">
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
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m2_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            The player model in third person, from the scene window
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m2_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Object unhighligted when not hovered on
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m2_3}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Object highligted when hovered on
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m2_4}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Box serves as temporary model for key
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col lg={4} className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m2_5}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Key item is stored in inventory after picking it up
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="week3" title="Week 3">
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
                        <li>Added temporary door model</li>
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
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m3_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Laser obstacles
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m3_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Rotating blade obstacles
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="week4" title="Week 4">
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
                        <li>Polished Inventory UI</li>
                        <li>
                            <b>Item interaction</b>
                            <ul>
                                <li>Added keycard and fuse models</li>
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
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m4_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Wide door, closet, and tall door
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m4_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Elevator
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m4_3}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Fuses (top) and <br/> Key Cards (bottom)
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m4_4}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Recolored inventory UI and added power cooldowns
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="week5" title="Week 5">
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
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m5_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Doors and closet are now interactable
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m5_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Elevators are now interactable
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="week6" title="Week 6">
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
                        <li>Imported Player Model</li>
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
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m6_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            New laser visuals
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m6_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Player model in T-pose
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m6_3}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Player movement animations
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="week7" title="Week 7">
                    <hr style={styles.divider} />
                    <h4>Week 7:</h4>
                    <ul>
                        <li>Completed puzzles</li>
                        <li>
                            Player model and movement animations
                                <ul>
                                <li>Added FP camera to show player body etc.</li>
                                <li>Added time travel animation.</li>
                                <li>Added slow time animation.</li>
                            </ul>
                        </li>
                        <li>Added multiple key cards (red, blue, green)</li>
                        <li>Doors now require specific colored keycard</li>
                        <li>Added elevator switch to use elevator from distance</li>
                        <li>Added melee enemy model with movement animations</li>
                        <li>Added ranged enemy model with movement and attack animations</li>
                        <li>Integrated enemy field of view</li>
                        <li>Added decorative models to help distinguish past and present states</li>
                        <li>Added static models to help distinguish past and present states</li>
                        <li>Added game completion</li>
                        <li>
                            User Interface
                            <ul>
                                <li>Added keys and buttons text to UI</li>
                                <li>
                                    Added main menu
                                    <ul>
                                        <li>Added background music</li>
                                        <li>Added instructions.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h4 style={{paddingBottom: 10}}>Images</h4>
                    <Container>
                        <Row>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m7_1}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Melee Enemy Model
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m7_2}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Ranged Enemy Model
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m7_3}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Ranged Enemy Model
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col className="col d-flex justify-content-center">
                                <Figure>
                                    <Figure.Image
                                        width={256}
                                        height={144}
                                        alt="171x180"
                                        src={m7_4}
                                        style={styles.image}
                                    />
                                    <Figure.Caption>
                                        <div style={styles.caption}>
                                            Ranged Enemy Model
                                        </div>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </div>
    );
}

export default MilestonesCard;