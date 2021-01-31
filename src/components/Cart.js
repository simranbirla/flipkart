import React from "react";
import { connect } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  removeCart,
  saveLater,
  deleteLater,
} from "../redux/actions";
import "../Style/Cart.css";
const Cart = (props) => {
  const totalQuan = () => {
    if (props.cart.length > 0) {
      const total = props.cart.reduce((acc, val) => {
        return { quantity: acc.quantity + val.quantity };
      });
      return total.quantity;
    }
    return 0;
  };

  const totalAmont = () => {
    var val = 0;
    var price = 0;
    for (let i = 0; i < props.cart.length; i++) {
      val = val + props.cart[i].item.price * props.cart[i].quantity;
      price = price + props.cart[i].item.d_price * props.cart[i].quantity;
    }
    return val - price;
  };

  const totalValue = () => {
    var val = 0;
    for (let i = 0; i < props.cart.length; i++) {
      val = val + props.cart[i].item.price * props.cart[i].quantity;
    }
    return val;
  };

  const totalAmount = () => {
    var price = 0;
    for (let i = 0; i < props.cart.length; i++) {
      price = price + props.cart[i].item.d_price * props.cart[i].quantity;
    }
    return price;
  };

  return (
    <div className="cart">
      <div className="cart_shop">
        <div className="cart_main">
          {props.cart.length > 0 ? (
            props.cart.map((obj) => (
              <div key={obj.item.id} className="cart_obj">
                <img src={obj.item.img} alt={obj.item.id} />
                <div className="cart_obj-div">
                  <p>
                    Price : Rs {obj.item.d_price}{" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      {" "}
                      {obj.item.price}{" "}
                    </span>
                  </p>
                  <div>
                    <button onClick={() => props.increaseItem(obj.item.id)}>
                      <i className="fas fa-plus"></i>
                    </button>
                    {obj.quantity}
                    <button
                      onClick={() => props.decreaseItem(obj.item.id)}
                      disabled={obj.quantity > 1 ? false : true}
                    >
                      <i className="fas fa-minus"></i>{" "}
                    </button>
                  </div>
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
              </div>
            ))
          ) : (
            <h2>Please Shop !</h2>
          )}
        </div>
        {props.save.length > 0 ? (
          <div className="cart_save">
            <h2 style={{ textAlign: "center" }}>SAVE LATER</h2>
            <div className="cart_main">
              {props.save.map((obj) => (
                <div className="cart_save-main">
                  <img src={obj.img} alt={obj.id} />
                  <p>
                    Price : Rs {obj.d_price}{" "}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      {" "}
                      {obj.price}{" "}
                    </span>
                  </p>
                  <button onClick={() => props.deleteLater(obj.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="cart_bill">
        <h3 style={{ color: "#2874f0" }}>Total items :{totalQuan()} </h3>
        <h3>Price : Rs. {totalValue()}</h3>
        <h3 style={{ color: "green" }}>Discount : Rs. - {totalAmont()} </h3>
        <h2>Total:Rs. {totalAmount()}</h2>
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
  deleteLater,
})(Cart);
