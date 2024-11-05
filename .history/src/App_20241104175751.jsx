import { useState } from 'react'
import './App.css'

function App() {

  const [articles, setArticles] = useState([]);

  const [fetchStatus, setFetchStatus] = useState('idle'); 

  const isLoading = fetchStatus == 'loading';
  const isError = fetchStatus === 'error';

  const [query, setQuery] = useState('');

  // load data on mount - only load once
  useEffect(() => {
    const url = `http://hn.algolia.com/api/v1/search?query=${query}`; //make an error /ap/v1

    async function fetchData() {
      let response, data; // if it is exist, it will fetch the data, otherwise it will catch the errors
      try{
        setFetchStatus('loading');

        await new Promise(resolve => { // force a delay as promise will take time
          setTimeout(resolve, 2000);
        })
        response = await fetch(url); // will only work within the async function
        data = await response.json(); // once it is completed, I will get the actual data from online
        setArticles(data.hits);
        setFetchStatus('idle');
      } catch(e) {
        setFetchStatus('error');
        console.error(e.message);
      }
    }

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
      <div>
        <div>
          <img />
          <p></p>
        </div>
      </div>
    </>
  )
}

export default App