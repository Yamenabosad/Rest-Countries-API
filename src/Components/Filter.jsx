import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Filter({ onRegionChange, onCountrySearch }) {
  const [Region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  const handleRegionChange = (region) => {
    setRegion(region);

    onRegionChange(region);
  };
  const handleCountrySearch = (country) => {
    setCountry(country);

    onCountrySearch(country);
  };
  return (
    <div className="filter  p-20">
      <div className="input-search">
        <input
          title="Search for a country..."
          value={country}
          onChange={(e) => handleCountrySearch(e.target.value)}
          type="search"
          placeholder="Search for a country..."
        />
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </div>
      <select
        title="Filter by Region"
        value={Region}
        onChange={(e) => handleRegionChange(e.target.value)}
      >
        <option value="" label="Filter by Region" disabled></option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
