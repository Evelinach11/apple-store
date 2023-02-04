import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../components/pages/Home";
import Catalog from "../components/pages/Catalog";
import Cart from "../components/pages/Cart";
import Product from "../components/pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
