import React from "react";
import { connect } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/actions";

const Cart = (props) => {
  return (
    <div>
      Cart
      {props.cart.map((obj) => (
        <div>
          {" "}
          {obj.item.price}
          <button onClick={() => props.increaseItem(obj.item.id)}>Add</button>
          <button
            onClick={() => props.decreaseItem(obj.item.id)}
            disabled={obj.quantity > 1 ? false : true}
          >
            Delete
          </button>
          <p>quantity : {obj.quantity}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { cart: state };
};

export default connect(mapStateToProps, { increaseItem, decreaseItem })(Cart);
