import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [countries, setCountries] = useState([]);


  // load data on mount - only load once
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;

    async function fetchData() {
      let response, data;
      try{

        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        })
        response = await fetch(url);
        data = await response.json();
        setCountries(data);
      } catch(e) {
        console.error(e.message);
      }
    }

    fetchData();

  }, []);


  return (
    <>
      <h1>Countries of the World</h1>
      <div className="container">
        <div className='inner-container'>
          <p>Filter & Sort</p>
          <div className='filters'>
            <div className='alpha'>
              <input type="checkbox"/>
              <label htmlFor="alpha">Alpha</label>
            </div>
            <div className='categories'>
              <p>Top 10</p>
                <div>
                  <input type="checkbox"/>
                  <label htmlFor="by-population">by population</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="by-area">by area</label>
                </div>
            </div>
            <div  className='categories'>
              <p>By continent</p>
              <select>
                <option value="All">All</option>
                <option value="Antarctica">Antarctica</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
              </select>
            </div>
            <div  className='categories'>
            <p>By subregion</p>
              <select>
                <option value="Choose region">Choose region</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Western Europe">Western Europe</option>
                <option value="Western Africa">Western Africa</option>
                <option value="Central Europ">Central Europ</option>
                <option value="Estern Asia">Estern Asia</option>
                <option value="Polynesia">Polynesia</option>
                <option value="North Africa">North Africa</option>
                <option value="Southern Europe">Southern Europe</option>
                <option value="Southern-Eastern Asia">Southern-Eastern Asia</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {countries.map((country, index) => (
            <div key={index}>
              <div className='cards'>
                <div>
                  <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                  <h3>{country.name.common}</h3>
                </div>
                <div>
                  <p><strong>Offical name: </strong>{country.name.official}</p>
                  <p><strong>Capital: </strong>{country.capital}</p>
                  <p><strong>Population: </strong>{country.population}</p>
                  <p><strong>Languages: </strong>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                  <p><strong>Currency: </strong>{country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</p>

                  <p><strong>Area (mi2): </strong>{country.area}</p>
                  <p><strong>Subregion: </strong>{country.subregion}</p>
                  <p><strong>Continents: </strong>{country.continents.join(', ')}</p>
                  <p><strong>Borders: </strong>{country.borders}</p>
                </div>
              </div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${country.name.common}`} target="_blank" >Show on Google Maps</a>
            </div>
          ))}
    </>
  )
}

export default App
