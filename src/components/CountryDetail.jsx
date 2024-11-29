import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

import './CountryDetail.css'

export default function CountryDetail() {

  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound,setNotFound] = useState("");

  console.log("renders...")

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {

          setCountryData({ name: data.name.common || "Not Available",
            nativeName: Object.values(data.name.nativeName)[0].common || "Not Available",
            population: data.population || 0,
            region: data.region || "Not Available",
            subregion: data.subregion || "Not Available",
            capital: data.capital || "Not Available",
            flag: data.flags.svg || "Not Available",
            tld: data.tld || "Not Available",
            languages: Object.values(data.languages).join(', ') || "Not Available",
            currencies: Object.values(data.currencies)
              .map((currency) => currency.name)
              .join(', ') || "Not Available",
            borders:[]
            });

            if(!data.borders) {
              data.borders = []
            }

            Promise.all(data.borders.map((border)=>{
              return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res)=>res.json())

              .then(([borderCountry])=> borderCountry.name.common)
            })).then((borders)=>{
              console.log(borders);
              setCountryData((prevState)=>({...prevState, borders}))
            })
              
                
                


              })
          

      
      .catch((err) => {
        // Set the error message after a delay (e.g., 3 seconds)
        setTimeout(() => {
          setNotFound("No country exists by this name");
        }, 1000); // 3000 milliseconds = 3 seconds
      });
  }, [countryName]);



  return countryData === null ? (
    `Loading...${notFound}`
  ) : (
    <main>
      <div className="country-details-container">

        <Link className="back-button" to={`/`}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </Link>


        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            { countryData.borders.length !== 0 && <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
              }
            </div>}
          </div>
        </div>
      </div>
    </main>
  )
}