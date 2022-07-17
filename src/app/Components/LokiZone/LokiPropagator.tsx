import React, { useEffect, useState } from "react";

import ImageHolder from "../Shared/ImageHolder/ImageHolder";

// const lokiImage = {
//   src: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/125223273_10214445225524286_7354193883580040641_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cT6d6Rs7x8MAX8Hp_rh&_nc_ht=scontent-atl3-1.xx&oh=c0b1fdd34190a78ca6cb49ffd9be3600&oe=6152740D",
//   alt: "MyBoy!!",
// };

const lokiFace = {
  src: "https://www.dropbox.com/s/gqbwjwpgd34e2wb/240964287_602829917552839_6712852289343453981_n-removebg-preview.png?dl=1",
  alt: "Dat Boi",
};

export const LokiPropagator = () => {
  const [placeOnPage, setPlaceOnPage] = useState([] as any);

  const xCoordinates: any[] = [];
  for (let i = 0; i < window.innerWidth; i = i + 300) {
    xCoordinates.push(i);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newPlace = {
        x: xCoordinates[placeOnPage.length],
        y: window.innerHeight / 4,
      };
      if (placeOnPage.length < 6) {
        setPlaceOnPage([...placeOnPage, newPlace]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [placeOnPage]);

  return (
    <>
      {placeOnPage.map((place: any) => {
        const style = {
          left: place.x,
          top: place.y,
          position: "fixed",
        };
        return (
          <ImageHolder
            img={lokiFace}
            type={"rotate"}
            style={style}
            key={`${place.x}${place.y}`}
          />
        );
      })}
    </>
  );
};
