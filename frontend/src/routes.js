import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Login, Spot } from "./Screens";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/spot" component={Spot} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
