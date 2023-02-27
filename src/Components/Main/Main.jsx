import React from "react";

function Main(countries) {
//   console.log(country);
  return (
    <div className="p-5">
      <div>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div>
        {countries.countries.map((country, index) => {
          return (
            <div
              key={index}
              className="my-5 pb-16 border border-grey-600 shadow-lg rounded-lg bg-white w-3/4"
            >
              <img src={country.flag} alt={country.name} />
              <div className="pl-5">
                <h4 className="font-bold py-5">{country.name}</h4>
                <h4 className='before:content-["Population:"] before:font-medium before:pr-1'>
                  {country.population}
                </h4>
                <h4 className='before:content-["Region:"] before:font-semibold before:pr-1'>
                  {country.region}
                </h4>
                <h4 className='before:content-["Capital:"] before:font-semibold before:pr-1'>
                  {country.capital}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
