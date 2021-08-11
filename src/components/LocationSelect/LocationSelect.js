import React from "react";
import { locations } from "Data/Locations";
import { container } from "./style.css";

const LocationSelect = ({ handleChange }) => {
  const changeLocation = (e) => {
    handleChange(e);
  };

  return (
    <select className={container} onChange={changeLocation}>
      {locations.map((x) => (
        <option
          key={x.id}
          value={JSON.stringify({ lat: x.lat, long: x.long })}
        >{`${x.country}-${x.city}`}</option>
      ))}
    </select>
  );
};

export default LocationSelect;
