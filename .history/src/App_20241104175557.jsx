import { useState } from 'react'
import './App.css'

function App() {

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
          
        </div>
      </div>
    </>
  )
}

export default App
