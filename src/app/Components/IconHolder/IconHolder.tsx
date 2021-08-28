import React from "react";

interface IconHolderProps {
  icon: {
    src: string;
    alt: string;
  };
  text: string;
}

export const IconHolder = (props: IconHolderProps) => {
  return (
    <div className="icon-holder">
      <div className="icon-holder__icon">
        <img src={props.icon.src} alt={props.icon.alt} />
      </div>
      <h1 className="icon-holder__text">{props.text}</h1>
    </div>
  );
};
