import React from "react"

function Card ({ cardObj, handleDecklist }) {
console.log(cardObj)
    return (
    <li>
        <img id={cardObj.id} onClick={handleDecklist} alt={cardObj.name} src={cardObj.imageUrl} />
        <p>Set: {cardObj.setName}</p>
    </li>
    )
}

export default Card