import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartButtonHandler = () => {
    setCartIsShown(true);
  };

  const cartCloseHandler = () => {
    console.log('closed');
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown ? <Cart closed={cartCloseHandler} /> : null}
      <Header clicked={cartButtonHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
