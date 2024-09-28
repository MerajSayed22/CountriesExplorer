import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({userInput}) {

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
        /> )
      })

      }

    </div>
  )


}
