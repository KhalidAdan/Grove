import React from "react";
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

export {Main};

function Main() {
    return (
        <div>
            <Header></Header>
            <Body></Body>
            <BottomNav />
        </div>
    )
}