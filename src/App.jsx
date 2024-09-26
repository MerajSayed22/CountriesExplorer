import React from "react"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import SelectMenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import "./App.css"

function App() {


  return (
    <>
    <Header componentText= {"Where in the world?"} componentTheme = {"Dark Theme"}/>
    <main>
    <div className="search-filter-container">
    <SearchBar placeholder = {"Search for a country..."}/>
    <SelectMenu />
    </div>
    <CountriesList />
    </main>
    </>
  )
}

export default App
