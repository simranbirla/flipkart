import React from "react";
import "../Style/Product.css";
import { connect } from "react-redux";
import { addCart } from "../redux/actions";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.item.img} alt="clothes" />
      <strong>{props.item.brand}</strong>
      <p>Size:{props.item.size}</p>
      <p>Gender:{props.item.gender}</p>
      <p>
        Price : Rs {props.item.d_price}{" "}
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          {" "}
          {props.item.price}{" "}
        </span>
      </p>
      <button onClick={() => props.addCart(props.item)}>Add To cart</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state };
};

export default connect(mapStateToProps, { addCart })(Product);
