import React, { useState } from "react";

const SliderCard = ({ card }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="item px-1 h-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        // zIndex: hover ? "99" : "0",
      }}
    >
      <img
        src={card.image}
        alt="Describe"
        className="rounded-md object-cover"
      />
      <div
        style={{
          visibility: hover ? "visible" : "hidden",
        }}
        className="bg-black p-2 -mt-1 text-white"
      >
        <h3 className="heading">{card.header}</h3>
        <p className="duration">{card.subHeader}</p>
      </div>
    </div>
  );
};

export default SliderCard;
