import React from 'react';
import '../css/LeftContainer.css';

const LeftContainer = () => {
    return (
        <div className='left-container'>
            <div className="top-content">
                <a className="new-chat">
                    <img id='gpt-logo' src="/images/chatgpt-logo-transparent.png" alt="" />
                    <b>New chat</b>
                    <img id='new-chat-icon' src="/images/new-chat-icon.png" alt="" />
                </a>
            </div>
            <div className="bottom-content">
                <div className="instruction">
                    <b>Sign up or log in</b>
                    <p>Get smarter responses, upload files and images, and more.</p>
                </div>
                <div className="bottom-left-buttons">
                    <button className="signup">Sign up</button>
                    <button className="login">Log in</button>
                </div>
            </div>
            <div className="close-leftcontainer-line">
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default LeftContainer;
