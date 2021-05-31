import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addMealHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.querySelector('input'));
    // console.log(props);
    // console.log(cartCtx.items);

    const item = {
      ...props,
      amount: Number(e.target.querySelector('input').value),
    };

    console.log(cartCtx);
    cartCtx.addItem(e, item);
  };

  // const inputChangeHandler = (e) => {
  //   console.log(e.target);
  //   console.log('change');
  // };

  return (
    <form className={classes.form} onSubmit={addMealHandler}>
      <Input
        // change={inputChangeHandler}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          // defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
