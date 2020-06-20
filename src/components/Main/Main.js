import React, { useContext } from "react";
import {
  Route,
  Switch,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

import {Header} from './Header';
import {Body} from './Body';
import { BottomNav } from "../Common/BottomNav";
import { CartContext } from "../ShoppingCartContext";

export {Main};

function Main() {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <Header></Header>
            <Body></Body>
            <BottomNav />
        </div>
    );
}