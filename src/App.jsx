import React from "react"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import SelectMenu from "./components/SelectMenu"
import "./App.css"

function App() {


  return (
    <>
    <Header componentText= {"Where in the world?"} componentTheme = {"Dark Theme"}/>
    <div className="search-filter-container">
    <SearchBar placeholder = {"Search for a country..."}/>
    <SelectMenu />
    </div>
    </>
  )
}

export default App
