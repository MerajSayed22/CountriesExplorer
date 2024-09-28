import React, { useState,useEffect } from 'react'
import CountryCard from './CountryCard'

export default function CountriesList({userInput}) {
const [countriesData,setCountriesData] = useState([]);

useEffect(()=> {
  fetch('https://restcountries.com/v3.1/all')
  .then((res)=> res.json())
  .then((data)=>setCountriesData(data))
},[])

  return (

    <div className='countries-container'>
      {countriesData.filter((country)=> country.name.common.toLowerCase().includes(userInput)).map((country) => {
        

        return (
        <CountryCard key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          Population={country.population.toLocaleString('en-IN')}
          region={country.region} capital={country.capital?.[0]}
          translations={country.translations.ara.common}
          landlocked = {country.landlocked}
        /> )
      })

      }

    </div>
  )


}
