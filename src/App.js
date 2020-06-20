import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

import { Main } from "./components/Main/Main";
import { Item } from "./components/Item/Item";
import { Checkout } from "./components/Checkout/Checkout";
import { CartProvider } from "./components/ShoppingCartContext";

function App() {
  return (
    <div className="h-screen">
      <div className="">
        <BrowserRouter>
          <Switch>
            <CartProvider>
              <Route path="/" component={Main} exact />
              <Route path="/item/:uuid/type/:title" component={Item} exact />
              <Route path="/checkout" component={Checkout} exact />
            </CartProvider>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
