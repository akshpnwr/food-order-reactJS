import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={(e) => cartCtx.addItem(e, props)}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
