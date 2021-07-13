import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const Checkout = (props) => {
  const {
    value: enteredName,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    inputClasses: nameInputClasses,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredStreet,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    inputClasses: streetInputClasses,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredPostalCode,
    inputChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    inputClasses: postalCodeInputClasses,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredCity,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    inputClasses: cityInputClasses,
  } = useInput((value) => value.trim() !== '');

  const confirmHandler = async (event) => {
    event.preventDefault();

    props.submit({
      enteredName,
      enteredCity,
      enteredPostalCode,
      enteredStreet,
    });
    // await fetch(``)
  };

  let formIsValid = false;

  if (enteredName) formIsValid = true;

  //   const nameInputClasses = [classes.control];
  //   if (nameHasError) nameInputClasses.push(classes.invalid);

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses.join(' ')}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={streetInputClasses.join(' ')}>
        <label htmlFor="Street">Street</label>
        <input
          type="text"
          id="Street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
      </div>
      <div className={postalCodeInputClasses.join(' ')}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
      </div>
      <div className={cityInputClasses.join(' ')}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
