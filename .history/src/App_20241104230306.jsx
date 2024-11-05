import { useEffect, useState } from 'react'
import './App.css'
import Countries from '../components/countries';

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

      {isLoading ? <p>Loading ...</p>
      : isError? <p>Something went wrong!</p>
      : <>
          <Countries countries={countries} />
        </>
      }
    </>
  )
}

export default App
