import React, { useEffect, useRef, useState } from "react";
import "../VideoModal.css";
import Forward from "../images/forward.svg";
import Backward from "../images/backward.svg";
import "../VideoModal.css";

const VideoModal = ({ videoIsOpen, modalData, setVideoIsOpen, setIsOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    !isPlaying ? setIsPlaying(true) : setIsPlaying(false);
    isPlaying ? vidRef.current.play() : vidRef.current.pause();
  };

  const handleClick = () => {
    setIsOpen(false);
    setVideoIsOpen(false);
  };

  return (
    <>
      {videoIsOpen && (
        <>
          <div className="h-screen w-screen fixed top-0 z-40 videoModal text-white">
            <div className="flex flex-row w-full bg-gradient-to-b from-netflix-black absolute z-50">
              <button onClick={handleClick} className="">
                <i className="fas fa-arrow-left fa-3x text-white mt-3 mx-3"></i>
              </button>
            </div>
            <video
              width="100%"
              height="100%"
              ref={vidRef}
              className="inline-block align-middle"
            >
              <source src={modalData.card.video} type="video/mp4" />
            </video>
            <div className="flex flex-col">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "100vw", zIndex: "199", height: "20px" }}
                aria-valuenow=""
                aria-valuemin="0"
                aria-valuemax="1500"
              ></div>
              <div className="videoToolbar absolute bottom-0 left-0 z-10 flex flex-row w-full px-5 py-6 bg-gradient-to-t from-netflix-black ">
                <div className="progress"></div>
                <i
                  className={
                    !isPlaying ? "fas fa-pause fa-2x" : "fas fa-play fa-2x"
                  }
                  onClick={handlePlayVideo}
                ></i>
                <img
                  src={Backward}
                  className="h-20 pl-7 -mt-2"
                  onClick={() => vidRef.current.currentTime + 10}
                  alt=""
                />
                <img src={Forward} className="h-20 pl-5 -mt-2" />
                <p className="ml-5">{modalData.card.header}</p>
                <p className="text-netflix-grey ml-5">S1:E1:</p>
                <p className="text-netflix-grey ml-5">
                  {modalData.card.subHeader}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VideoModal;
