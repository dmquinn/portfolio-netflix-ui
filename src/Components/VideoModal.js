import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Forward from "../images/forward.svg";
import Backward from "../images/backward.svg";
import "../stylesheets/VideoModal.css";

const VideoModal = ({ videoIsOpen, modalData, setVideoIsOpen, setIsOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef(null);
  // const [vidTime, setVidTime] = useState(vidRef.current.currentTime);

  const handlePlayVideo = () => {
    isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
    isPlaying ? vidRef.current.play() : vidRef.current.pause();
  };

  const handleClick = () => {
    setIsOpen(false);
    setVideoIsOpen(false);
  };
  // const handleForward = () => {
  //   vidRef.current.seekTo(vidRef.current.getCurrentTime() + 10);
  // };
  // useEffect(() => {
  //   // vidTime !== null && console.log(vidTime);
  // }, [vidTime]);
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
              height="80%"
              fullScreen
              ref={vidRef}
              className="inline-block align-middle"
              autoplay={true}
            >
              <source src={modalData.card.video} type="video/mp4" />
            </video>
            <div className="flex flex-col">
              <div className="videoToolbar absolute -bottom-5 left-0 z-10 w-full px-5 py-6 bg-gradient-to-t from-netflix-black ">
                <div className="flex flex-row w-full">
                  <div className="progress-bar absolute bottom-36 h-2 z-50 w-11/12 bg-red">
                    {" "}
                    <ProgressBar variant="danger" now={60} />
                  </div>{" "}
                </div>
                <div className="flex flex-row w-full">
                  <i
                    className={
                      isPlaying === false
                        ? "fas fa-play fa-2x"
                        : "fas fa-pause fa-2x"
                    }
                    onClick={handlePlayVideo}
                  ></i>
                  <img
                    src={Backward}
                    className="h-20 pl-7 -mt-2"
                    // onClick={handleForward}
                    alt=""
                  />
                  <img src={Forward} className="h-20 pl-5 -mt-2" alt="" />
                  <p className="ml-5">{modalData.card.header}</p>
                  <p className="text-netflix-grey ml-5">S1:E1:</p>
                  <p className="text-netflix-grey ml-5">
                    {modalData.card.subHeader}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VideoModal;
