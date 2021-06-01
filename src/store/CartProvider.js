import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    console.log(state.items);

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems = [...state.items];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: action.item.amount + existingItem.amount,
      };

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push(action.item);
    }

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
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
