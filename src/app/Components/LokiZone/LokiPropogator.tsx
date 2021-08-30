import React, { useEffect, useState } from "react";
import ImageHolder from "../ImageHolder/ImageHolder";

const lokiImage = {
  src: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/125223273_10214445225524286_7354193883580040641_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cT6d6Rs7x8MAX8Hp_rh&_nc_ht=scontent-atl3-1.xx&oh=c0b1fdd34190a78ca6cb49ffd9be3600&oe=6152740D",
  alt: "MyBoy!!",
};

export const LokiPropogator = () => {
  const [placeOnPage, setPlaceOnPage] = useState([] as any);

  const between = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    if (placeOnPage.count > 20) {
      return;
    }

    const timeout = setTimeout(() => {
      const newPlace = {
        x: between(0, maxHeight),
        y: between(0, maxWidth),
      };
      setPlaceOnPage([...placeOnPage, newPlace]);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [placeOnPage]);

  return (
    <>
      <ImageHolder img={lokiImage} type={"rotate"} />
      {placeOnPage.map((place: any) => {
        const style = {
          left: place.x,
          top: place.y,
          position: "absolute",
        };
        return (
          <ImageHolder
            img={lokiImage}
            type={"rotate"}
            style={style}
            key={`${place.x}${place.y}`}
          />
        );
      })}
    </>
  );
};
