import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./app/Components/Dashboard/Dashboard";
import { LokiZone } from "./app/Components/LokiZone/LokiZone";
import { IonReactHashRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import { Header } from "./app/Components/Header/Header";
import { LeftNav } from "./app/Components/LeftNav/LeftNav";

export const Routes = () => {
  return (
    <IonReactHashRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/loki-zone" component={LokiZone} />
          <Route component={Dashboard} />
        </Switch>
      </IonRouterOutlet>
    </IonReactHashRouter>
  );
};
