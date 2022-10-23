import React from "react"

function Card ({ cardObj, handleDecklist }) {
    return (
    <li>
        <img id={cardObj.id} onClick={handleDecklist} title={cardObj.setName} alt={cardObj.name} src={cardObj.imageUrl} />
        <p>Set: {cardObj.setName}</p>
    </li>)
}

export default Card