import React from "react";
import Item from "Components/Weather/Item/Item";

import { container } from "./style.css";

const List = ({ data }) => (
  <div className={container}>
    {data.map((x) => (
      <Item key={x.dt} detail={x}></Item>
    ))}
  </div>
);

export default List;
