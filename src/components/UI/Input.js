import { useState } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const [inputValue, setInputValue] = useState(0);

  const inputChangeHandler = (e) => {
    console.log(e.target.value);

    setInputValue(e.target.value);
    // e.target.value =
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        onChange={inputChangeHandler}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
