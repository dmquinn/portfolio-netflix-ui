import React, { useState, useEffect } from "react";

const SliderCard = ({ card, setIsOpen, setModalData, modalData }) => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
    setModalData({ card });
    console.log(modalData);
  };
  return (
    <>
      <div
        className="item px-1 h-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
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
          className="bg-modal-gray rounded-md -mt-1 text-white py-3 shadow-lg"
        >
          <div className="flex">
            <i className="fas fa-play ml-4 icon white"></i>
            <i className="fas fa-plus ml-2 icon"></i>
            <i className="fas fa-chevron-down ml-20 icon"></i>
          </div>
          <p className="heading mx-2">{card.header}</p>
          <p className="duration text-xs mx-2">{card.tags}</p>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
