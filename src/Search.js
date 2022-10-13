import React from "react";
import Cardlist from "./Cardlist.js"

function Search ({ userInput, handleChange, results, handleDecklist, handleSubmit}) {

   return(<div className={ results == false ? "search" : "searchlist"}>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button>Search</button>
        </form>
        <Cardlist handleDecklist={handleDecklist} list={results} />
    </div>);
}
export default Search;