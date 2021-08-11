import React from "react";
import Icon from "Components/Weather/Icon/Icon";

import { utcToDate } from "Helpers/Date";

import { container } from "./style.css";

const Item = ({ detail }) => {
  const { min, max } = detail.temp;
  const { description = "NO DISPONIBLE", icon = "" } = detail.weather[0];
  return (
    <div className={container}>
      <p>{utcToDate(detail.dt)}</p>
      <Icon iconName={icon} />
      <p>{description}</p>
      <span>min:{min}°C </span>
      <span>max:{max}°C</span>
    </div>
  );
};

export default Item;
