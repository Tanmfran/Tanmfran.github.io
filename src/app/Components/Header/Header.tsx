import React from "react";
import { IconHolder } from "../Shared/IconHolder/IconHolder";
import { IonContent, IonHeader } from "@ionic/react";
export const Header = () => {
  // const headerData = {
  //   src: "https://cdn.iconscout.com/icon/premium/png-512-thumb/t-letter-1-840447.png",
  //   alt: "T-Initial",
  // };

  return (
    <IonHeader>
      <IconHolder text={"Tannor Franks"} />
    </IonHeader>
  );
};
