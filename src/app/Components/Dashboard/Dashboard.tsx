import React from "react";
import ImageHolder from "../ImageHolder/ImageHolder";
import styles from "./Dashboard.module.scss";
import { Card } from "@material-ui/core";
import { Canvas } from "../Background/ BackgroundCanvas";

export const Dashboard = () => {
  const imageSource = {
    src: "https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",
    alt: "T-Initial",
  };

  return (
    <div>
      <Card className={styles.dashboard} variant={"elevation"}>
        <ImageHolder img={imageSource} type={"none"} />
      </Card>
    </div>
  );
};
