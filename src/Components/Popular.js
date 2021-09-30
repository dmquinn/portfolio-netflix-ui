import React, { useEffect } from "react";
import SliderCard from "./SliderCard";
import SliderData from "../SliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../stylesheets/Slider.css";

const Slider = ({ setIsOpen, setModalData, modalData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div
      style={{ overflowX: "visible", height: "100%" }}
      className="px-5 ml-3 "
    >
      <h3 className="text-white">Popular Projects</h3>
      <Carousel
        ssr
        partialVisbile
        itemClassName="image-item"
        responsive={responsive}
      >
        {SliderData.map((card, i) => {
          return (
            <div className="">
              <SliderCard
                card={card}
                key={i}
                setIsOpen={setIsOpen}
                setModalData={setModalData}
                modalData={modalData}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
