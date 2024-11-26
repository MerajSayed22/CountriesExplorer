import { Link } from "react-router-dom"


export default function CountryCard({name,flag,Population,region,capital,translations,landlocked}) {
  const isLandLocked = landlocked ? "Yes":" No"
  
  return (
    <Link className="country-card" to={`/${name}`}>
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
    </Link>
  )
}