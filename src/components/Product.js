import React from "react";

const Product = ({ item }) => {
  return (
    <div>
      {item.size}
      <h6>Gender:{item.gender}</h6>
      <p>Price : Rs {item.price}</p>
    </div>
  );
};

export default Product;
