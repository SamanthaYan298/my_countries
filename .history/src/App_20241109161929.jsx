import { useEffect, useState } from 'react'
import './App.css'
import Countries from '../components/countries';

function App() {

  const [countries, setCountries] = useState([]);

  const [fetchStatus, setFetchStatus] = useState('idle'); 

  const isLoading = fetchStatus == 'loading';
  const isError = fetchStatus === 'error';

  const [query, setQuery] = useState('');

  // category options and functions
  const [sortByPopulation, setSortByPopulation] = useState(false);
  const [sortByArea, setSortByArea] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedSubregion, setSelectedSubregion] = useState('Choose region');
  const [sortByAlpha, setSortByAlpha] = useState(false); 

  function handleSortByPopulationChange() {
    setSortByPopulation(!sortByPopulation);
    setSortByArea(false);
  }
  
  function handleSortByAreaChange() {
    setSortByArea(!sortByArea);
    setSortByPopulation(false);
  }
  
  function handleContinentChange(event) {
    setSelectedContinent(event.target.value);
  }
  
  function handleSubregionChange(event) {
    setSelectedSubregion(event.target.value);
  }
  


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

  let filteredCountries = [...countries];

  // Sort alphabetically
  if (sortByAlpha) {
    filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  // 按大陆筛选
  if (selectedContinent !== 'All') {
    filteredCountries = filteredCountries.filter(country => 
      country.continents && country.continents.includes(selectedContinent)
    );
  }

  // 按次区域筛选
  if (selectedSubregion !== 'Choose region') {
    filteredCountries = filteredCountries.filter(country => 
      country.subregion === selectedSubregion
    );
  }

  // 按人口排序
  if (sortByPopulation) {
    filteredCountries.sort((a, b) => b.population - a.population);
  }

  // 按面积排序
  if (sortByArea) {
    filteredCountries.sort((a, b) => b.area - a.area);
  }

  // Handle continent and subregion selection
  const handleContinentChange = (e) => {
    setSelectedContinent(e.target.value);
    if (e.target.value !== 'All') {
      setSelectedSubregion('Choose region'); // Reset subregion when a continent is selected
    }
  };

  const handleSubregionChange = (e) => {
    setSelectedSubregion(e.target.value);
    if (e.target.value !== 'Choose region') {
      setSelectedContinent('All'); // Reset continent when a subregion is selected
    }
  };


  return (
    <>
      <h1>Countries of the World</h1>
      <div className="container">
        <div className='inner-container'>
          <p>Filter & Sort</p>
          <div className='filters'>
            <div className='alpha'>
              <input 
                type="checkbox" 
                id="alpha"
                checked={sortByAlpha}
                onChange={() => setSortByAlpha(!sortByAlpha)} 
                />
              <label htmlFor="alpha">Alpha</label>
            </div>
            <div className='categories'>
              <p>Top 10</p>
                <div>
                  <input 
                    type="checkbox" 
                    id="byPopulation"
                    checked={sortByPopulation} 
                    onChange={handleSortByPopulationChange}
                  />
                  <label htmlFor="byPopulation">by population</label>
                </div>
                <div>
                  <input 
                    type="checkbox" 
                    id="byArea" 
                    checked={sortByArea} 
                    onChange={handleSortByAreaChange}
                  />
                  <label htmlFor="byArea">by area</label>
                </div>
            </div>
            <div  className='categories'>
              <p>By continent</p>
              <select
                value={selectedContinent} 
                onChange={handleContinentChange}
              >
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
              <select
                value={selectedSubregion} 
                onChange={handleSubregionChange}
              >
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
          <Countries countries={filteredCountries} />
        </>
      }
    </>
  )
}

export default App
