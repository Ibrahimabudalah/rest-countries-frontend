import React from "react";

function Country(country) {
  console.log(country.country);

  let countryKeys = Object.keys(country.country);
  console.log(countryKeys);

  return (
    <div>
      <div>
        <button className=' before:content-["←"]'>Back</button>
        <div>
          <img src={country.country.flag} alt={country.country.name} />
          <div>
            <h1>{country.country.name}</h1>
            <h3>{country.country.nativeName}</h3>
            <h3>{country.country.population}</h3>
            <h3>{country.country.region}</h3>
            <h3>{country.country.subRegion}</h3>
            <h3>{country.country.capital}</h3>
            <h3>{country.country.topLevelDomain}</h3>
            <h3>{country.country.currencies[0].code}</h3>
            {country.country.languages.map((language, index) => {
              return <h3 key={index}>{language.name}</h3>;
            })}
            <h1>Border Countries: </h1>

            {countryKeys.includes("borders" || "border")
              ? country.country.borders.map((border, index) => {
                  return <button key={index}>{border}</button>;
                })
              : "No Border Countries Found"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
