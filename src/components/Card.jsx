import React, { useState } from "react";


export default function Card(props) {
    const { name , onCardClick, src} = props

    function cardClicked() {
        onCardClick(name)       
    }

    return (
        <div className="game-card" onClick={cardClicked}>
            <p>{name}</p>
            <img src={src} alt={name} />
        </div>
    )
}