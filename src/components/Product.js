import React from "react";
import "../Style/Product.css";
const Product = ({ item }) => {
  return (
    <div className="product">
      <img src={item.img} alt="clothes" />
      <strong>{item.brand}</strong>
      <p>Size:{item.size}</p>
      <p>Gender:{item.gender}</p>
      <p>
        Price : Rs {item.d_price}{" "}
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          {" "}
          {item.price}{" "}
        </span>
      </p>
      <button>Add To cart</button>
    </div>
  );
};

export default Product;
