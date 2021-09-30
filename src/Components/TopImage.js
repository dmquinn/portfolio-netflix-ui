import React from "react";
import "../stylesheets/TopImage.css";

const TopImage = () => {
  return (
    <div className="h-screen topImage -m-20 bg-gradient-to-b from-black">
      <div className="container ml-50 py-64 bg-opacity-0">
        <h2 className="text-4xl font-bold mb-2 text-white mt-20 align-text-bottom">
          Frontend Developer
        </h2>
        <h3 className="text-2xl mb-8 text-white">
          Explore My Projects and get a feel for things.
        </h3>
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
  );
};

export default TopImage;
