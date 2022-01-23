import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // ↓↓↓↓↓↓        if item already added into the cart            ↓↓↓↓↓↓

    // if item already available, getting its index, ↓↓↓
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // detail of that Item, like name, price etc. ↓↓↓↓
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    // validating item     ↓↓↓
    if (existingCartItem) {
      // item details will same but amout will change when same item added multiple time
     const updatedItem = {
        ...existingCartItem,
        // ↓↓↓
        amount: existingCartItem.amount + action.item.amount,
      };
      // new array with old item's
      updatedItems = [...state.items];
      // updated item set with new amount
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
       updatedItems = state.items.concat(action.item);
    }

    //   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  END  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  //
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
