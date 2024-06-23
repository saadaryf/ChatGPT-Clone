import React from 'react';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import '../css/Home.css'

const Home = () => {
    return (
        <>
            <div className="home">
                <LeftContainer />
                <MainContainer />
            </div>
        </>
    );
};

export default Home;
