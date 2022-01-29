import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckOut, setIsCheckOut] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // if item available true else false
  const hasItems = cartCtx.items.length > 0;
  //
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // when click on order item button, it will add item
    cartCtx.addItem(item);
  };
  //
  const orderHandler = () => {
    setIsCheckOut(true);
  };
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && <Checkout onCancel={props.onHideCart} />}
      {!isCheckOut && modalActions}
    </Modal>
  );
};

export default Cart;
