import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { Fragment, useContext, useState } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [sendingData, setSendingData] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const submitOrderHandler = async (user) => {
    setSendingData(true);
    const res = await fetch(
      `https://react-burger-builder-a797e-default-rtdb.firebaseio.com/orders.json`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ user, orderedItems: cartCtx.items }),
      }
    );

    if (!res.ok) return;

    setSendingData(false);
    setIsSubmitted(true);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            description={item.description}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const [isCheckout, setIsCheckout] = useState(false);

  const btnOrderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button-alt']} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={btnOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  let cart = (
    <Fragment>
      <div className={classes['cart-items']}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onCloseCart} submit={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  if (sendingData) cart = 'Sending Order';
  if (isSubmitted) cart = 'Successfully sent order';

  return <Modal onCloseCart={props.onCloseCart}>{cart}</Modal>;
};

export default Cart;
