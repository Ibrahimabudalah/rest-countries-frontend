import React from "react";
import { Link } from "react-router-dom";

function Country(country) {
  console.log(country.country);

  let countryKeys = Object.keys(country.country);
  console.log(countryKeys);

  return (
    <div className="p-5 h-screen">
      <div>
        <Link to={"/"}>
          <button className='mb-12 bg-white w-28 h-8 border rounded shadow-md before:content-["←"]  dark:bg-darkBackground dark:border-darkBackground'>
            Back
          </button>
        </Link>

        <div className=" xl:flex xl:flex-row">
          <img
            src={country.country.flag}
            alt={country.country.name}
            className="pb-8 xl:w-1/2 xl:pr-5"
          />
          <div className="xl:w-full xl:flex xl:items-start xl:flex-col xl:pl-5">
            <h1 className="xl:font-bold xl:text-2xl xl:pb-6 xl:block hidden xl:pl-16">
              {country.country.name}
            </h1>
            <div className="xl:pt-16 xl:flex xl:justify-around xl:w-full ">
              <div>
                <h1 className="font-bold text-2xl pb-6 xl:hidden">
                  {country.country.name}
                </h1>
                <h3 className="pb-2">
                  Native Name: {country.country.nativeName}
                </h3>
                <h3 className="pb-2">
                  Population: {country.country.population}
                </h3>
                <h3 className="pb-2">Region: {country.country.region}</h3>
                <h3 className="pb-2">
                  Sub Region: {country.country.subRegion}
                </h3>
                <h3 className="pb-2">Capital: {country.country.capital}</h3>
              </div>
              <div>
                <h3 className="pb-2">
                  Top Level Domain: {country.country.topLevelDomain}
                </h3>
                <h3 className="pb-2">
                  Currencies: {country.country.currencies[0].code}
                </h3>
                <h3 className="flex pb-2">
                  Languages:
                  {country.country.languages.map((language, index) => {
                    return <p key={index}>{language.name},</p>;
                  })}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
