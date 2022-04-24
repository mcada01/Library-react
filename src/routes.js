import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoute from "./hooks/PublicRoute";
import Book from "./pages/Book";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/" component={Book} />
      <Route path="*" component={Book} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
