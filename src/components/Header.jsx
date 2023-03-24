import React from 'react'

export default function Header(props) {

    const {currentScore, bestScore} = props;

    return (
        <div className="header">
            <h1>Pokemon Memory Card Game</h1>
            <p className="instructions">Do not click on the same character more than once</p>
            <p className='score-display'>Current Score: {currentScore} </p>
            <p className='score-display'>Best Score: {bestScore}</p>
        </div>
    )
};