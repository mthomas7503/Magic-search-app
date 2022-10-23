import React from "react"
import Card from './Card'
import { FaList } from "react-icons/fa"


function Cardlist({ list, handleDecklist }) {
    
    return(
        <div >
            {list.map((cardData, index) => {
                return(<Card key={index} cardObj={cardData} handleDecklist={handleDecklist}/>)}
            )}
        </div>
    )
}

export default Cardlist