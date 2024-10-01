
import React from "react"
import "./App.css"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  

  return (
    <>
    <Header componentText= {"Where in the world?"} componentTheme = {"Dark Theme"}/>
    <Outlet />
    
    </>
  )
}

export default App
