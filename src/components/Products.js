import React, { useState } from "react";
import Product from "./Product";

const Products = (props) => {
  return (
    <div>
      {props.list.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
