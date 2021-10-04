import React, { useState, useEffect } from "react";
import "../stylesheets/Slider.css";

const SliderCard = ({ card, setIsOpen, setModalData, modalData }) => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(true);
    setModalData({ card });
    console.log(modalData);
  };
  return (
    <>
      <div
        className="item px-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
      >
        <img
          src={card.image}
          alt="Describe"
          className="rounded-t-sm object-cover"
        />
        <div
          style={{
            visibility: hover ? "visible" : "hidden",
            opacity: hover ? "1" : "0",
            transition: "0.4s",
          }}
          className="bg-modal-gray rounded-b-sm text-white pt-3  shadow-lg"
        >
          <div className="flex">
            <i className="fas fa-play ml-4 icon white"></i>
            <i className="fas fa-plus ml-2 icon"></i>
            <a
              href={card.link}
              target="_blank"
              rel="noreferrer"
              className="no-underline text-white"
            >
              {" "}
              <i class="fas fa-external-link-square-alt fa-2x ml-2 link"></i>{" "}
            </a>{" "}
          </div>
          <div className="flex  pt-3 ml-2 text-xs">
            <p className="text-netflix-green font-semibold">
              {Math.floor(Math.random() * (93 - 98) + 100)}%
            </p>{" "}
            <p className="ml-2"> 2020</p>
            <p className="ml-2 border-1 border-white px-1"> 12</p>
          </div>
          <p className="duration text-xs mx-2 pb-2">{card.tags}</p>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
