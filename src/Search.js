import React from "react";
import Card from "./Card"
import Cardlist from "./Cardlist.js"

function Search ({ userInput, handleChange, results, handleDecklist, handleSubmit}) {
 
   return(<div className={ results == false ? "search" : "searchlist"}>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button>Search</button>
        </form>
        {results.map((cardData, index) => {
                return(<Card key={index} cardObj={cardData} handleDecklist={handleDecklist}/>)}
            )}
    </div>);
}
export default Search;