import React, { useState } from "react";
import cards from "../SliderData";

const SliderCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      class="item"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <a href="#">
        <img src={cards.image} alt="Describe" className="rounded-md" />
        <div style={{ visibility: hover ? "visible" : "hidden" }}>
          <h1 class="heading">{cards.header}</h1>
          <p class="duration">{cards.subHeader}</p>
        </div>
      </a>
    </div>
  );
};

export default SliderCard;
