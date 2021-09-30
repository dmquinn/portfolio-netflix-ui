import React, { useEffect, useState, useRef } from "react";
import ProfilePic from "../images/profilePic.png";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className="relative flex flex-wrap items-center justify-between py-1 bg-gradient-to-b from-black mb-3 sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#141414" : "transparent",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="https://fontmeme.com/netflix-font/">
            <img
              src="https://fontmeme.com/permalink/210916/161f87475cfd13e0b716890b557a6a9a.png"
              alt="netflix-font"
              border="0"
            />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          ></button>
        </div>
        <div
          className="lg:flex flex-grow items-center"
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fas fa-bell text-3xl"></i>{" "}
              </a>
            </li>
            <li className="nav-item w-14">
              <img src={ProfilePic} alt=""></img>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
