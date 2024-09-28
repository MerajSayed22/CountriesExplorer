import React from 'react'

export default function SearchBar({placeholder,setUserInput}) {

  return (
    <>
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="search" 
      placeholder={placeholder} 
      onChange={(e)=>{
        setUserInput(e.target.value.toLowerCase())
      }}
      />
    </div>

    </>
  )
}