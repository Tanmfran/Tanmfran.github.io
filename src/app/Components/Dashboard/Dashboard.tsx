import React from "react";
import ImageHolder from "../ImageHolder/ImageHolder";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const imageSource = {
    src: "https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",
    alt: "T-Initial",
  };

  return (
    <ImageHolder
      className={styles.dashboard}
      img={imageSource}
      type={"rotate"}
    />
  );
};
