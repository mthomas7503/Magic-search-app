import React from 'react'
import logo from './logo.svg';
//import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home.js";
import About from "./About.js";
import DeckList from "./DeckList.js"
import NavBar from "./NavBar.js"
import Search from "./Search.js"
import { card } from 'mtgsdk';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function App() {
const [userInput, setUserInput]=useState("")
const [results, setResults] = useState([])
const [userChoices, setUserChoices] = useState([])


useEffect(
  () => {fetch('http://localhost:3000/userChoices')
.then(resp => resp.json())
.then(cards => {setUserChoices(cards)})
  }, [])

function handleInputChange(e) {
setUserInput(e.target.value)
}

function handleAddToDecklist(e) {
  fetch('http://localhost:3000/userChoices',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
    },
    body:JSON.stringify({cardName: e.target.alt,
    cardSpecificId: e.target.id,
    cardImg: e.target.src,
    set: e.target.title})
  })
  .then(resp => resp.json())
  .then(()=> {fetch('http://localhost:3000/userChoices')
.then(resp => resp.json()
.then(selectedCards => setUserChoices(selectedCards)))})
}

    console.log(userChoices)

function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://api.magicthegathering.io/v1/cards?name=${userInput}`)
    .then(prom=>prom.json())
    .then(data=>  setResults(data.cards))
    setUserInput("")
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search handleAddToDecklist={handleAddToDecklist} results={results} handleSubmit={handleSubmit} userInput={userInput} handleChange={handleInputChange} setUserInput={setUserInput}/>
        </Route>
        <Route path="/decklist">
          <DeckList userChoices={userChoices} setUserChoices={setUserChoices} /*onRemove={handleRemoveCard}*/ />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
