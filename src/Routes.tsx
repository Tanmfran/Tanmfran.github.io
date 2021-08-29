import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./app/Components/Dashboard/Dashboard";
import { LokiZone } from "./app/Components/LokiZone/LokiZone";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/loki-zone" component={LokiZone} />
    </Switch>
  );
};
