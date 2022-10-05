import React from "react";

function SearchList({ results, onAdd }) {
    const goodResults = results.filter(result => result.imageUrl)
    return (<div className="searchlist">
        {goodResults.map((cardData, index)=> {
            
            return(
            <ul className="searchresult" key={index}>
                <li>
                    <img title={cardData.setName} id={cardData.multiverseid} alt={`${cardData.name}`} src={`${cardData.imageUrl}`} onClick={onAdd}/>
                    <p>Set: {cardData.setName}</p>
                </li>
            </ul>
        )})}
    </div>)
}

export default SearchList