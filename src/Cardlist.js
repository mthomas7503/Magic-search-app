import React from "react"
import Card from './Card'
import { FaList } from "react-icons/fa"


function Cardlist({ list, handleDecklist }) {
    if(list.length === 0) {
        return(<div className="cardlistholder">
            <h1>Add to your Decklist from Search!</h1>
        </div>)
    }

    else {return(
        <div className = {list.length < 3 ? "cardlistholder" : "cardlist"}>
            {list.map((cardData, index) => {
                return(<Card key={index} cardObj={cardData} handleDecklist={handleDecklist}/>)}
            )}
        </div>
    )}
}

export default Cardlist