import React from 'react'
import '../css/Suggestions.css'


const Suggestions = () => {
    return (
        <div className='suggestions'>
            <div className="centered-logo">
                <img src="/images/chatgpt-logo-transparent.png" alt="" />
                <h2>How can I help you today?</h2>
            </div>
            <div className="bottom-suggestions">
                <a href='#' className="sugg">
                    <b>Write a Text</b>
                    <p>Inviting my neighbours to a party</p>
                </a>
                <a href='#' className="sugg">
                    <b>Write a Letter</b>
                    <p>Inviting my brother to a function</p>
                </a>
                <a href='#' className="sugg">
                    <b>Write an Essay</b>
                    <p>On my best Freind</p>
                </a>
                <a href='#' className="sugg">
                    <b>Write a Story</b>
                    <p>For kids to sleep at night</p>
                </a>
            </div>
        </div>
    )
}

export default Suggestions
