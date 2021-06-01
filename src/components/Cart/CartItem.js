import classes from './CartItem.module.css';

const CartItem = (props) => {
  console.log(props);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>X{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() =>
            props.onRemove({
              id: props.id,
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            props.onAdd({
              id: props.id,
              name: props.name,
              price: props.price,
              amount: props.amount,
              description: props.description,
            })
          }
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
