import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    console.log('add');

    const updatedItems = [...state.items];
    updatedItems.push(item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    console.log('remove');
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatcherCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatcherCartAction({ type: 'ADD', item: item });
  };
  const removeItemHandler = (id) => {
    dispatcherCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: defaultCartState.items,
    totalAmount: defaultCartState.totalAmount,
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
