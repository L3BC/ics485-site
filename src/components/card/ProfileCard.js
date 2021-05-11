import React from 'react';
import Card from 'react-bootstrap/Card';

const ProfileCard = (props) => {
    const styles = {
        cardImg: {
            height: 300,
            maxHeight: 300,
            objectFit: props.objectFit,
            objectPosition: props.objectPosition,
        }
    }

    return (
        <Card style={{border: 0, marginBottom: 20}}>
            <Card.Img variant='top' src={props.imgLink} style={styles.cardImg}/>
            <Card.Body style={{height: 125}}>
                <Card.Title style={{fontWeight: 'bold'}}>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ height: 50, textAlign: 'left' }}>
                <Card.Link target='_blank' href={props.github} style={{ cursor: 'pointer' }} rel="noopener noreferrer">
                    {props.github ? "GitHub" : null}
                </Card.Link>
                <Card.Link target='_blank' href={props.portfolio} style={{ cursor: 'pointer' }} rel="noopener noreferrer">
                    {props.github ? "Portfolio" : null}
                </Card.Link>
            </Card.Footer>
        </Card>
    );
}

export default ProfileCard;