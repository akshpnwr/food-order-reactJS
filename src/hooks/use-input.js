import { useState } from 'react';
import classes from '../components/Cart/Checkout.module.css';

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const isValid = validate(enteredValue);
  const hasError = !isValid && isTouched;

  const inputClasses = [classes.control];

  if (hasError) inputClasses.push(classes.invalid);

  return {
    value: enteredValue,
    inputChangeHandler,
    isValid,
    hasError,
    inputBlurHandler,
    inputClasses,
  };
};

export default useInput;
