import React, { useState } from "react";
import AboutModal from "./AboutModal";
import "../stylesheets/TopImage.css";
import laptop from "../images/berlin.mp4";

const TopImage = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  return (
    <div className="parent pb--20">
      <div>
        <video
          loop
          muted
          autoPlay
          controls=""
          id="myVideo"
          className="topImage"
        >
          <source src={laptop} autoPlay type="video/mp4" />
        </video>
        <div className="fader"></div>
      </div>
      <div className="h-screen topImage bg-gradient-to-b absolute"></div>
      <div className="text-banner bg-opacity-0 absolute">
        <div className="text-2xl md:text-4xl lg:text-4xl font-bold mt-2 text-title-yellow align-text-bottom scaleText">
          F R O N T E N D
        </div>
        <div className="text-2xl md:text-4xl lg:text-4xl font-bold mt-2 text-title-yellow align-text-bottom scaleText">
          D E V E L O P E R
        </div>
        <div className="text-lg md:text-2xl mb-8 mt-4 text-white sm:max-w-xs lg:max-w-lg font-semibold">
          Interested in all things visual, and working with a UI-mindset.
        </div>
        <div className=" flex py-3 w-full">
          <button
            className="bg-white font-bold rounded-3 shadow-lg px-4 py-3"
            onClick={setAboutIsOpen}
          >
            About
          </button>
          <a
            className="bg-opacity-60 ml-3 bg-netflix-grey font-bold rounded-3 shadow-lg px-4 text-white flex align-middle no-underline"
            href="https://github.com/dmquinn?"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <button>
              {" "}
              <i className="fab fa-github fa-2x text-white" id="popular" />
              <span className="px-2">More Info</span>
            </button>{" "}
          </a>
        </div>
      </div>
      <AboutModal aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />
    </div>
  );
};

export default TopImage;
