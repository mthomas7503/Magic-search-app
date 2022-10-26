import React from 'react'
import logo from './logo.svg';
//import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home.js";
import About from "./About.js";
import NavBar from "./NavBar.js"
import Search from "./Search.js"
import Cardlist from "./Cardlist.js"
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

function handleAddCard(e) {
const postObj = {
  name: e.target.alt,
  cardSpecificId: e.target.id,
  imageUrl: e.target.src,
  setName: e.target.title
}

  fetch('http://localhost:3000/userChoices', {
    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(postObj)})
  .then(resp => resp.json())
  .then(newCard => {setUserChoices([...userChoices, newCard])})
}

function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://api.magicthegathering.io/v1/cards?name=${userInput}`)
    .then(prom=>prom.json())
    .then(data=> {
      const goodData = data.cards.filter(card => card.imageUrl)
      setResults(goodData)})
    .catch(() => alert("Card Not Found"))
    setUserInput("")
  }

  function handleRemoveCard (e) {
    fetch(`http://localhost:3000/userChoices/${e.target.id}`, {
      method: 'DELETE',
      headers:{
        "content-type":"application/json"
      }
    })
    .then(resp => resp.json())
    .then(() => {
      const filteredObj = userChoices.filter(card => card.id != e.target.id)
      setUserChoices(filteredObj)
    } )
}

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search handleDecklist={handleAddCard} results={results} handleSubmit={handleSubmit} userInput={userInput} handleChange={handleInputChange} setUserInput={setUserInput}/>
        </Route>
        <Route path="/decklist">
          <Cardlist list={userChoices} handleDecklist={handleRemoveCard} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
