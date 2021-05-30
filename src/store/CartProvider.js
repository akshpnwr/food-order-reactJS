import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemHandler = (e, item) => {
    e.preventDefault();
    cartContext.items.push(item.name);
    cartContext.totalAmount += item.price;
  };
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
