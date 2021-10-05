import React, { useState } from "react";
import VideoModal from "./VideoModal";
import "../stylesheets/Modal.css";

const TModal = ({ isOpen, setIsOpen, modalData }) => {
  const [videoIsOpen, setVideoIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="justify-center items-center flex fixed inset-0 z-50 bg-modal-back text-xs lg:text-base overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl opacity-100 modalOpen">
              <div
                className="w-full h-96 rounded-t-md"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0) 0%, #141414 100%),url(${modalData.card.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex">
                  <button
                    className="icon absolute inset-y-5 right-5"
                    type="button"
                    onClick={() => setIsOpen(false)}
                    style={{ transform: "scale(1.5)" }}
                  >
                    X
                  </button>
                </div>
              </div>{" "}
              <div className=" shadow-lg relative flex flex-col w-full bg-netflix-black text-white to-transparent px-12 rounded-b-md">
                <div className="flex -mt-32 lg:-mt-20">
                  {" "}
                  <button
                    className=" bg-black w-25 text-netflix-black bg-white rounded-md p-2 font-extrabold"
                    onClick={() => setVideoIsOpen(true)}
                  >
                    {" "}
                    <i className="fas fa-play mr-3"></i>
                    Play
                  </button>{" "}
                  <a
                    href={modalData.card.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i className="fab fa-github fa-3x ml-5 modalIcon "></i>
                  </a>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-3">
                    <div className="flex  pt-10">
                      <p className="text-netflix-green font-semibold">
                        98% Match
                      </p>{" "}
                      <p className="ml-2"> 2020</p>
                      <p className="ml-2 border-1 border-white px-1"> 12</p>
                    </div>
                    {modalData.card.info}
                  </div>
                  <div className="col-span-2 pt-10 px-3 ">
                    <p className="text-netflix-grey">
                      Director:
                      <span className="text-white"> Daniel Muprhy</span>
                    </p>
                    <p className="text-netflix-grey">
                      Genres:
                      <span className="text-white">
                        {" "}
                        {modalData.card.genres}
                      </span>
                    </p>
                    <p className="text-netflix-grey">
                      Stack:
                      <span className="text-white">
                        {" "}
                        {modalData.card.stackText}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 rounded-b"></div>
              </div>
            </div>
          </div>
        </>
      )}
      <VideoModal
        videoIsOpen={videoIsOpen}
        modalData={modalData}
        setVideoIsOpen={setVideoIsOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default TModal;
