import {useState} from  "react"
import React from "react"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import SelectMenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import "./App.css"

function App() {

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

export default App
