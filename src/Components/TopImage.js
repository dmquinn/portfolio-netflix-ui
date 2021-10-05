import React from "react";
import "../stylesheets/TopImage.css";

const TopImage = () => {
  return (
    <div className="parent pb--20">
      <div className="h-screen topImage bg-gradient-to-b absolute"></div>
      <div className="text-banner bg-opacity-0 absolute">
        <h2 className="sm:text-xl md:text-4xl font-bold mb-2 text-white align-text-bottom">
          Frontend Developer
        </h2>
        <h3 className="sm:text-xs md:text-2xl mb-8 text-white sm:max-w-xs lg:max-w-lg">
          Interested in all things visual, and working with a UI-mindset
        </h3>
        <div>
          <button className="bg-white font-bold rounded-3 py-3 px-8 shadow-lg uppercase tracking-wider">
            About
          </button>
          <button className="text-white ml-12">
            <a
              href="https://github.com/dmquinn?"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-github fa-3x text-white" id="popular" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopImage;
