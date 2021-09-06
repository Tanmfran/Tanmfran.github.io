import React from "react";
import "./App.scss";
import { LeftNav } from "./app/Components/LeftNav/LeftNav";
import { Header } from "./app/Components/Header/Header";
import { Routes } from "./Routes";
import { Canvas } from "./app/Components/Shared/Canvas";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { IonReactHashRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./app/Components/Dashboard/Dashboard";
import { LokiZone } from "./app/Components/LokiZone/LokiZone";

export const App = () => {
  const routes = [
    {
      header: "Dashboard",
      path: "",
    },
    {
      header: "Loki Zone",
      path: "loki-zone",
    },
  ];

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonSplitPane contentId="main" when="xs">
          {/*Side Menu*/}
          <LeftNav />
          {/*Main Content*/}
          <IonPage id={"main"}>
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/loki-zone" component={LokiZone} />
              <Route component={Dashboard} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
