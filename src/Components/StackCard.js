import React from "react";
import "../stylesheets/Slider.css";

const SliderCard = ({ card, setIsOpen, setModalData, modalData }) => {
  return (
    <>
      <div className="item px-1">
        <img
          src={card.image}
          alt="Describe"
          className="rounded-t-sm object-cover"
        />
      </div>
    </>
  );
};

export default SliderCard;
