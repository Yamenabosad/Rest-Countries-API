import Filter from "./Components/Filter";
import Countries from "./Components/Countries";
import Nav from "./Components/Nav";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [dataList, setDataList] = useState(data);
  const [filterRegion, setFilterRegion] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  function infoCountry(name) {
    // const deleteData = dataList.filter((el) => el.name !== name);
    // console.log(name);
  }

  const handleRegionChange = (region) => {
    setFilterRegion(region);
  };
  const handleCountrySearch = (country) => {
    setFilterCountry(country);
  };
  const handle = () => {
    if (filterCountry !== "") {
      return dataList.filter((el) => el.name.includes(filterCountry));
    }
    if (filterRegion !== "") {
      return dataList.filter((el) => el.region === filterRegion);
    }

    return dataList;
  };
  return (
    <>
      <Nav />
      <Filter
        onRegionChange={handleRegionChange}
        onCountrySearch={handleCountrySearch}
      />
      <Countries dataList={handle()} clicedCountry={infoCountry} />
    </>
  );
}

export default App;
