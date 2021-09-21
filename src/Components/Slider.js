import React from "react";
import SliderCard from "./SliderCard";
import SliderData from "../SliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Slider.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div style={{ overflow: "visible" }} className="px-5">
      <h3 className="px-12 text-white">Popular Projects</h3>
      <Carousel
        ssr
        partialVisbile
        itemClassName="image-item"
        responsive={responsive}
      >
        {SliderData.map((card, i) => {
          return (
            <div className="cardContainer">
              <SliderCard card={card} key={i} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
