import React, { useEffect } from "react";
import { useState } from "react";
import Countries from "../components/Countries";
import Search from "../components/Search";
const url = "https://restcountries.com/v3.1/all";
function Home() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };
  const handleSearch = (searchValue) => {
    let val = searchValue.toLowerCase();
    const newCountrties = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(val);
    });
    setFilteredCountries(newCountrties);
  };

  return (
    <div>
      <h2>Home</h2>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
}

export default Home;
