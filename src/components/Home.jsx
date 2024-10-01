import SearchBar from "./SearchBar"
import {useState} from "react"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"


function Home() {
    const [userInput,setUserInput] = useState('');
  return (
    <>
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