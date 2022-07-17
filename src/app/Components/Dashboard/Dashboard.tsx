import React from "react";

// import ImageHolder from "../Shared/ImageHolder/ImageHolder";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  // const imageSource = {
  //   src: "https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",
  //   alt: "T-Initial",
  // };

  return (
    <div>
      <div className={styles.dashboard}>
        <div>Hello</div>
        {/* <ImageHolder img={imageSource} type={"none"} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
