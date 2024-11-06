import { useState } from "react";
import countries from "./countries.json";

const Country = () => {
  const { countries: countryList } = countries || {};
  const [countryName, setCountry] = useState(countryList[0].name);
  const [cityList, setCityList] = useState(countryList[0].cities);
  console.log(countryList);
  return (
    <>
      <div>
        <label>Country: </label>
        <select
          value={countryName}
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(e.target.value);
            const cityList = countryList.find(
              ({ value = "" }) => value === e.target.value
            ).cities;
            setCityList(cityList);
          }}
        >
          {countryList.map(({ value, name }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <label>City: </label>
        <select>
          {cityList.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Country;
