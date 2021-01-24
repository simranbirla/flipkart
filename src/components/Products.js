import React from "react";
import Product from "./Product";
import "../Style/Product.css";

const Products = (props) => {
  return (
    <div className="products">
      {props.list.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
