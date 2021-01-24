import React, { useState } from "react";
import data from "../data.json";
import Product from "./Product";

const Products = (props) => {
  const [list, setList] = useState(data);

  return (
    <div>
      {list.map((item) => (
        <Product size={item.size} key={item.id} />
      ))}
      <h2>{props.dis}</h2>
    </div>
  );
};

export default Products;
