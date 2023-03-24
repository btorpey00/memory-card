import React from 'react'

export default function Header(props) {

    const {currentScore, bestScore} = props;

    return (
        <div className="header">
            <h2>Pokemon Memory Card Game</h2>
            <p className="instructions">Do not click on the same character more than once</p>
            <p>Current Score: {currentScore} </p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
};