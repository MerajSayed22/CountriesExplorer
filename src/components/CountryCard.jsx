import React, { useState } from 'react'


// export default function CountryCard({ name, flag, population, region, capital }) {
//   return (
//     <a className="country-card" href={`/country.html?name=${name.common}`}>
//       <img src={flag} alt={`${name} Flag`} />
//       <div className="card-text">
//         <h3 className="card-title">{name}</h3>
//         <p>
//           <b>Population: </b>
//           {population.toLocaleString('en-IN')}
//         </p>
//         <p>
//           <b>Region: </b>{region}
//         </p>
//         <p>
//           <b>Capital: </b>{capital}
//         </p>
//       </div>
//     </a>
//   )
// }

export default function CountryCard({name,flag,Population,region,capital,translations,landlocked}) {
  const isLandLocked = landlocked ? "Yes":" No"
  
  return (
    <a className="country-card" href={`/country.html?name=${name}`}>
      <img src={flag} alt={`${name} Flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {Population}
        </p>

        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
        <p>
          <b>Translation: </b>{translations}
        </p>
        <p>
          <b>Landlocked Country ? </b>{isLandLocked}
        </p>
      </div>
    </a>
  )
}