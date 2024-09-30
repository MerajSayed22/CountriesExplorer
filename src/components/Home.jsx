import React from "react"
import SearchBar from "./SearchBar"
import Header from "./Header"
import {useState} from "react"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"


function Home() {
    const [userInput,setUserInput] = useState('');
  return (
    <>
    <Header componentText= {"Where in the world?"} componentTheme = {"Dark Theme"}/>
    <main>
    <div className="search-filter-container">
    <SearchBar placeholder = {"Search for a country..."} setUserInput = {setUserInput} />
    <SelectMenu />
    </div>
    <CountriesList userInput={userInput}/>
    </main>
    </>
  )
}

export default Home