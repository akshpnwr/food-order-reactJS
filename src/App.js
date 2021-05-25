import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cart, setCart] = useState(null);

  const cartButtonHandler = () => {
    setCart(<Cart />);
  };

  return (
    <Fragment>
      <Header clicked={cartButtonHandler} />
      <main>
        <Meals />
      </main>
      {cart}
    </Fragment>
  );
}

export default App;
