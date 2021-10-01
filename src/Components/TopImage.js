import React from "react";
import "../stylesheets/TopImage.css";

const TopImage = () => {
  return (
    <div className="parent pb--20">
      <div className="h-screen topImage bg-gradient-to-b absolute"></div>
      <div className="text-banner bg-opacity-0 absolute">
        <h2 className="text-4xl font-bold mb-2 text-white align-text-bottom">
          Frontend Developer
        </h2>
        <h3 className="text-2xl mb-8 text-white">
          Explore My Projects and get a feel for things.
        </h3>
        <div>
          <button className="bg-white font-bold rounded-3 py-3 px-8 shadow-lg uppercase tracking-wider">
            About
          </button>
          <button className="bg-opacity-50 text-white font-bold rounded-3 ml-3 px-8 shadow-md uppercase tracking-wider">
            <a href="https://github.com/dmquinn?">
              {" "}
              <i className="fab fa-github fa-3x text-white" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopImage;
