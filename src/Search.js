import React from "react";
import SearchList from "./SearchList.js";

function Search ({ userInput, handleChange, results, handleSubmit, handleAddToDecklist}) {

   return(<div className={ results == false ? "search" : "searchlist"}>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button>Search</button>
        </form>
        <SearchList onAdd={handleAddToDecklist} results={results} />
    </div>);
}
export default Search;