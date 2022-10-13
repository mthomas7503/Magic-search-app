import React from "react"

function Card ({ cardObj, handleDecklist }) {
    return (
    <li>
        <img id={cardObj.id} onClick={handleDecklist} alt={`${cardObj.cardName}`} src={`${cardObj.cardImg}`} />
        <p>Set: {cardObj.set}</p>
    </li>
    )
}

export default Card