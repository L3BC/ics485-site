import React from 'react';
import SlideShow from '../../components/slideShow/SlideShow';

const Home = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '48px' }}>Last 3 Brain Cells</h1>
            <div style={{ paddingBottom: 100 }}>
                <SlideShow />
            </div>
        </div>
    );
}

export default Home;