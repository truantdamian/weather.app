import React, { useState } from "react";

import List from "Components/Weather/List/List";
import LocationSelect from "Components/LocationSelect/LocationSelect";
import Loader from "Components/Loader/Loader";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

import useWeather from "Hooks/useWeather";

import { locations } from "Data/Locations";

import { container, main } from "./style.css";

const App = () => {
  const defaultLocation = locations[0];

  const [lat, setLat] = useState(defaultLocation.lat);
  const [long, setLong] = useState(defaultLocation.long);
  const [data, loading, error] = useWeather(lat, long);

  const handleChange = ({ target }) => {
    const { lat, long } = JSON.parse(target.value);
    setLat(lat);
    setLong(long);
  };
  return (
    <div className={container}>
      <Header />
      <main className={main}>
        <LocationSelect handleChange={handleChange} />
        {loading && !error.hasError && <Loader />}
        {!loading && !error.hasError && <List data={data}></List>}
        {!loading && !error.hasError && data.length === 0 && (
          <div>No hay datos para mostrar!</div>
        )}
        {!loading && error.hasError && <div>{error.message}</div>}
      </main>
      <Footer />
    </div>
  );
};

export default App;
