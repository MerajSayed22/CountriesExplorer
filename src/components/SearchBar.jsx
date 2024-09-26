import React from 'react'

export default function SearchBar({placeholder}) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}