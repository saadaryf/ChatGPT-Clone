import React from 'react';
import '../css/MainContainer.css'

import Header from './Header'
import ChatBox from './ChatBox';
import Suggestions from './Suggestions';
import Footer from './Footer';

const MainContainer = () => {
    return (
        <>
            <div className='main-container'>
                <Header />
                <Suggestions />
                <Footer />
            </div>
        </>

    );
};

export default MainContainer;
