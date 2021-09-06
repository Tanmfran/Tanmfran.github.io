import React from "react";
import ImageHolder from "../Shared/ImageHolder/ImageHolder";
import styles from "./Dashboard.module.scss";
import { Card } from "@material-ui/core";
import { IonContent, IonPage } from "@ionic/react";

export const Dashboard = () => {
  const imageSource = {
    src: "https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",
    alt: "T-Initial",
  };

  return (
    <>
      <Card className={styles.dashboard} variant={"elevation"}>
        <ImageHolder img={imageSource} type={"none"} />
      </Card>
    </>
  );
};
