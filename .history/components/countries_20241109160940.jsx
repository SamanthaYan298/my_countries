import '../src/App.css'


let filteredCountries = [...countries];

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


function Countries({ countries }) {
    return (
      <div className='outer-container'>
        {countries.map((country, index) => (
            <div key={index} className='cards-container'>
              <div className='cards'>
                <div className='cards-header'>
                  <div>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                  </div>
                  <h4 className='name'>{country.name.common}</h4>
                </div>
                <div>
                  <div className='country-info'>
                    <p>
                      <span><strong>Offical name: </strong></span>
                      <span>{country.name.official}</span>
                    </p>
                    <p>
                      <span><strong>Capital: </strong></span>
                      <span>{country.capital}</span>
                    </p>
                    <p>
                      <span><strong>Population: </strong></span>
                      <span>{country.population}</span>
                    </p>
                    <p>
                      <span><strong>Languages: </strong></span>
                      <span>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</span>
                    </p>
                    <p>
                      <span><strong>Currency: </strong></span>
                      <span>{country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</span>
                    </p>
                    <p>
                      <span><strong>Area (mi2): </strong></span>
                      <span>{country.area}</span>
                    </p>
                    <p>
                      <span><strong>Subregion: </strong></span>
                      <span>{country.subregion}</span>
                    </p>
                    <p>
                      <span><strong>Continents: </strong></span>
                      <span>{country.continents.join(', ')}</span>
                    </p>
                    <p>
                      <span><strong>Borders: </strong></span>
                      <span>{country.borders}</span>
                    </p>
                    <div className='links'>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${country.name.common}`} target="_blank">Show on Google Maps</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  
  export default Countries;
  