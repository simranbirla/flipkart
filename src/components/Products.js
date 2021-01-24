import React from "react";
import Product from "./Product";
import "../Style/Product.css";

const Products = (props) => {
  return (
    <div className="products">
      {props.list.length > 0 ? (
        props.list.map((item) => <Product item={item} key={item.id} />)
      ) : (
        <div>
          <h2>No Items found. Sorry! 😔</h2>
        </div>
      )}
    </div>
  );
};

export default Products;
