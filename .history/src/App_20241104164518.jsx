import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Countries of the World</h1>
      <div>
        <div>
          <p>Filter & Sort</p>
          <div>
            <div>
              <input type="checkbox"/>
            </div>
            <div>
              <p>Top 10</p>
              <input type="checkbox">by population</input>
              <input type="checkbox">by area</input>
            </div>
            <div>
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
            <div>
            <p>By subregion</p>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
