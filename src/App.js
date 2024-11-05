import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import "./App.css";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

   const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
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
    console.log(name);
  };

  return (
    <>
      <h1>Country App</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={countries} onRemoveCountry(handleRemoveCountry) />}
    </>
  );
}

export default App;
