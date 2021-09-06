import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

export const LeftNav = () => {
  const history = useHistory();

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

  const handleClick = (route: string) => {
    history.push(route);
  };

  return (
    <IonMenu contentId="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonListHeader>Navigate</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={() => handleClick(routes[0].path)}>
              <IonIcon slot="start" />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button onClick={() => handleClick(routes[1].path)}>
              <IonIcon slot="start" />
              <IonLabel>Loki Zone</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
