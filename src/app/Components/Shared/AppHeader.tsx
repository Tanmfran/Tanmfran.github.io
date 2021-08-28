import React from "react";
import ImageHolder from "../ImageHolder/ImageHolder";

export const AppHeader = () => {
  const imageSource = {
    src: "https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",
    alt: "https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",
  };

  return <ImageHolder img={imageSource} type={"rotate"}></ImageHolder>;
};
