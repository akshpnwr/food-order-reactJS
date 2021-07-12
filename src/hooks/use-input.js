import { useState } from 'react';

const useInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return {
    value: enteredValue,
    valueChangeHandler,
  };
};

export default useInput;
