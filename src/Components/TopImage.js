import React, { useState } from "react";
import AboutModal from "./AboutModal";
import "../stylesheets/TopImage.css";

const TopImage = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  return (
    <div className="parent pb--20">
      <div className="h-screen topImage bg-gradient-to-b absolute"></div>
      <div className="text-banner bg-opacity-0 absolute">
        <h2 className="sm:text-xl md:text-4xl font-bold mb-2 text-white align-text-bottom">
          Frontend Developer
        </h2>
        <h3 className="sm:text-xs md:text-2xl mb-8 text-white sm:max-w-xs lg:max-w-lg">
          Interested in all things visual, and working with a UI-mindset.
        </h3>
        <div className=" flex py-3 w-full">
          <button
            className="bg-white font-bold rounded-3 shadow-lg px-4 py-3"
            onClick={setAboutIsOpen}
          >
            About
          </button>
          <a
            className="bg-opacity-60 ml-3 bg-netflix-grey font-bold rounded-3 shadow-lg px-4 text-white flex items-center no-underline"
            href="/"
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
