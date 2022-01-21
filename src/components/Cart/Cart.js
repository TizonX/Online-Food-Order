import React from "react";
import classes from "./Cart.model.css";
const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
const Cart = () => {
  return (
    <div>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>13.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
