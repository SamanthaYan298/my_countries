import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [countries, setCountries] = useState([]);

  const [fetchStatus, setFetchStatus] = useState('idle'); 

  const isLoading = fetchStatus == 'loading';
  const isError = fetchStatus === 'error';

  const [query, setQuery] = useState('');

  // load data on mount - only load once
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;

    async function fetchData() {
      let response, data;
      try{
        setFetchStatus('loading');

        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        })
        response = await fetch(url);
        data = await response.json();
        setCountries(data);
        setFetchStatus('idle');
      } catch(e) {
        setFetchStatus('error');
        console.error(e.message);
      }
    }

    fetchData();

  }, [query]);


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

      {isLoading ? <p>Loading ...</p>
      : isError? <p>Something went wrong!</p>
      : <>
          {countries.map((country, index) => (
            <div key={index}>
              <div>
                <div>
                  <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                  <h3></h3>
                </div>
                <div>
                  <p><strong>Offical name: </strong>{country.name.official}</p>
                  <p><strong>Capital: </strong>{country.capital}</p>
                  <p><strong>Population: </strong>{country.population}</p>
                  <p><strong>Languages: </strong>{country.languages}</p>
                  <p><strong>Currency: </strong>{country.currencies}</p>
                  <p><strong>Area (mi2): </strong>{country.area}</p>
                  <p><strong>Subregion: </strong>{country.subregion}</p>
                  <p><strong>Continents: </strong>{country.continents}</p>
                  <p><strong>Borders: </strong>{country.borders}</p>
                </div>
              </div>
              <a>Show on Google Maps</a>
            </div>
          ))}
        </>
      }
    </>
  )
}

export default App
