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
              
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
