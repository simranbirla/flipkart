import React from "react";
import { connect } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  removeCart,
  saveLater,
} from "../redux/actions";

const Cart = (props) => {
  const totalQuan = () => {
    const total = props.cart.reduce((acc, val) => {
      return { quantity: acc.quantity + val.quantity };
    });
    return total.quantity;
  };

  const totalAmont = () => {
    var val = 0;
    var price = 0;
    for (let i = 0; i < props.cart.length; i++) {
      val = val + props.cart[i].item.price;
      price = price + props.cart[i].item.d_price;
    }
    return val - price;
  };

  const totalAmount = () => {
    var price = 0;
    for (let i = 0; i < props.cart.length; i++) {
      price = price + props.cart[i].item.d_price;
    }
    return price;
  };

  return (
    <div>
      Cart
      <div>
        {props.cart.length > 0 ? (
          props.cart.map((obj) => (
            <div>
              {" "}
              {obj.item.price}
              <button onClick={() => props.increaseItem(obj.item.id)}>
                Add
              </button>
              <button
                onClick={() => props.decreaseItem(obj.item.id)}
                disabled={obj.quantity > 1 ? false : true}
              >
                Delete
              </button>
              <p>quantity : {obj.quantity}</p>
              <button onClick={() => props.removeCart(obj.item.id)}>
                Remove
              </button>
              <button
                onClick={() => {
                  props.saveLater(obj.item);
                  props.removeCart(obj.item.id);
                }}
              >
                Save Later
              </button>
            </div>
          ))
        ) : (
          <h2>Please Shop !</h2>
        )}
        {props.save.length > 0 ? (
          <div>
            <h2>SAVE LATER</h2>
            {props.save.map((obj) => (
              <p>{obj.price}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <h3>Total items :{totalQuan()} </h3>
        <h3>Discount :{totalAmont()} </h3>
        <h3>Total:{totalAmount()}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { cart: state.cart, save: state.save };
};

export default connect(mapStateToProps, {
  increaseItem,
  decreaseItem,
  removeCart,
  saveLater,
})(Cart);
