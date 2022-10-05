import React from "react"
import { FaMagento} from 'react-icons/fa'
import {useState} from "react"

function Home() {

const [slide, setSlide] = useState(0);


const instructions = [
    {sentence: "Welcome to Gathered Magic where you can create the Magic: The Gathering Deck of your dreams!"},
    {sentence: "From the search page, type in the name of the card you are looking for, either partial or full"},
    {sentence: `Select from the list the card you wish to add by clicking the image itself!`},
    {sentence: "Keep tabs on your decklist from the DeckList page."},
    {sentence: "Remove a card from the DeckList by clicking on the card image"}
];

const length = instructions.length;

function nextSlide() {
    setSlide(slide === length - 1 ? 0 : slide + 1)
}

function lastSlide() {
    setSlide(slide === 0 ? length - 1 : slide - 1)
}
    return(
    <section className="slider">
        <FaMagento className='left-arrow' onClick={lastSlide}/>
        <FaMagento className='right-arrow' onClick={nextSlide}/>
          {instructions.map((direction, index) => {
            return (
            <div>
                {index === slide && (<h2 key={index}>{direction.sentence}</h2>)}
            </div>
            )
          })}
    </section>
    )
}

export default Home;