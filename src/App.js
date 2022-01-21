import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Header />
      <Cart title="hello world black" />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
