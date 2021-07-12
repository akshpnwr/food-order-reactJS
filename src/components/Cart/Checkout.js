import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const Checkout = (props) => {
  const { value: enteredName, valueChangeHandler: nameChangeHandler } =
    useInput();

  const { value: enteredStreet, valueChangeHandler: streetChangeHandler } =
    useInput();

  const {
    value: enteredPostalCode,
    valueChangeHandler: postalCodeChangeHandler,
  } = useInput();

  const { value: enteredCity, valueChangeHandler: cityChangeHandler } =
    useInput();

  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="Street">Street</label>
        <input
          type="text"
          id="Street"
          onChange={streetChangeHandler}
          value={enteredStreet}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          value={enteredPostalCode}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          value={enteredCity}
        />
      </div>

      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
