import React from "react";
import "../Style/Product.css";
const Product = ({ item }) => {
  return (
    <div className="product">
      <img src={item.img} alt="clothes" width="300px" />
      <strong>{item.brand}</strong>
      <p>Size:{item.size}</p>
      <p>Gender:{item.gender}</p>
      <p>Price : Rs {item.price}</p>
    </div>
  );
};

export default Product;
