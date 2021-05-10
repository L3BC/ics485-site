import React from 'react';
import Figure from 'react-bootstrap/Figure';

const CaptionedFigure = (props) => {
    const styles = {
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
        <Figure>
            <Figure.Image
                width={256}
                height={144}
                alt="171x180"
                src={props.src}
                style={styles.image}
            />
            <Figure.Caption>
                <div style={styles.caption}>
                    {props.children}
                </div>
            </Figure.Caption>
        </Figure>
    );
}

export default CaptionedFigure;