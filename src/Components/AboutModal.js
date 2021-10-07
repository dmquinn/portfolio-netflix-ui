import React from "react";
import "../stylesheets/Modal.css";

const TModal = ({ aboutIsOpen, setAboutIsOpen }) => {
  return (
    <>
      {aboutIsOpen && (
        <>
          <div
            className="justify-center items-center flex fixed inset-0 z-50 bg-modal-back text-xs lg:text-base overflow-y-auto"
            onClick={() => setAboutIsOpen(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl opacity-100 modalOpen">
              <div
                className="w-full h-96 rounded-t-md"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0) 0%, #141414 100%),url("https://res.cloudinary.com/drpdq0pui/image/upload/v1633597675/portfolio/97041299_2641475286125095_6417737959876853760_n_xjt8sy.jpg")`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex">
                  <button
                    className="icon absolute inset-y-5 right-5"
                    type="button"
                    onClick={() => setAboutIsOpen(false)}
                    style={{ transform: "scale(1.5)" }}
                  >
                    X
                  </button>
                </div>
              </div>{" "}
              <div className=" shadow-lg relative flex flex-col w-full bg-netflix-black text-white to-transparent px-12 rounded-b-md">
                <div className="flex -mt-32 lg:-mt-20"> </div>

                <p>
                  Hello! My name is Daniel Murphy and I'm a Javascript developer
                  working mainly with React. I also have extensive experience
                  working with HTML, CSS, SCSS, Tailwind, Bootstrap, Redux,
                  Node, Express, MongoDB, Git, and right now I am working on
                  polishing my skills in React Native, TypeScript and Storybook.{" "}
                </p>
                <p>
                  This website was built using React and Tailwind, with some
                  styling being done with SCSS. I have tried my best to emulate
                  the current UI for netflix (September/October 2021).{" "}
                </p>
                <div className="flex items-center justify-end p-6 rounded-b"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TModal;
