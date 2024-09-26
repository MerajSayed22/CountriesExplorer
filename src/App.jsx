import React from "react"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import "./App.css"

function App() {


  return (
    <>
    <Header componentText= {"Where in the world?"} componentTheme = {"Dark Theme"}/>
    <SearchBar placeholder = {"Search for a country..."}/>
    </>
  )
}

export default App
