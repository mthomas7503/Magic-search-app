import React from "react"
import image from "./images/liliana.webp"


function DeckList( {userChoices, setUserChoices} ) {
 
      


return <div className={userChoices.length < 3  ? "decklistholder" : "decklist"}>
    {userChoices == false ? (
            <h2 >Add to your Deck List from the Search!</h2>):
        (userChoices.map((cardData)=> {return(
            <ul key={cardData.id}>
                <li>
                    <img id={cardData.id} onClick={handleRemoveCard} alt={`${cardData.cardName}`} src={`${cardData.cardImg}`} />
                    <p>Set: {cardData.set}</p>
                </li>
            </ul>
        )}))}
    </div>    
}

export default DeckList;