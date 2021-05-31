import CartContext from './cart-context';
import { useState } from 'react';

const CartProvider = (props) => {
  const addItemHandler = (e, item) => {
    e.preventDefault();
    console.log(item);

    const newItems = cartContext.items;
    newItems.push(item);

    let newAmount = cartContext.totalAmount;
    newAmount += item.price;

    setCartContext({
      items: newItems,
      totalAmount: newAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
    });

    // cartContext.items.push(item.name);
    // cartContext.totalAmount += item.price;
  };
  const removeItemHandler = (id) => {};

  const [cartContext, setCartContext] = useState({
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  });

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
