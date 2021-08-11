import React from "react";

const Icon = ({ iconName }) => {
  return iconName === "" ? null : (
    <img
      alt={"icono"}
      src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
    />
  );
};

export default Icon;
