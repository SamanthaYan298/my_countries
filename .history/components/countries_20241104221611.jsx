import '../src/App.css'

function Countries({ countries }) {
    return (
      <>
        {countries.map((country, index) => (
            <div key={index} className='cards-container'>
              <div className='cards-header'>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                <h3>{country.name.common}</h3>
              </div>
              <div>
                <div className='country-info'>
                  <p>
                    <strong>Offical name: </strong>
                    <span>{country.name.official}</span>
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    <span>{country.capital}</span>
                  </p>
                  <p>
                    <strong>Population: </strong>
                    <span>{country.population}</span>
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    <span>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</span>
                  </p>
                  <p>
                    <strong>Currency: </strong>
                    <span>{country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</span>
                  </p>
                  <p>
                    <strong>Area (mi2): </strong>
                    <span>{country.area}</span>
                  </p>
                  <p>
                    <strong>Subregion: </strong>
                    <span>{country.subregion}</span>
                  </p>
                  <p>
                    <strong>Continents: </strong>
                    <span>{country.continents.join(', ')}</span>
                  </p>
                  <p>
                    <strong>Borders: </strong>
                    <span>{country.borders}</span>
                  </p>
                  <div>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${country.name.common}`} target="_blank" >Show on Google Maps</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }
  
  export default Countries;
  