import React from "react"
import Card from './Card'
import { FaList } from "react-icons/fa"


function Cardlist({ list, handleDecklist }) {
    return(
        <div className = "cardlist">
            {list.map(cardData => {
                return(<Card cardObj={cardData} handleDecklist={handleDecklist}/>)}
            )}
        </div>
    )
}

export default Cardlist