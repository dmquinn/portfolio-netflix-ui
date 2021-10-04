import React, { useEffect, useState, useRef } from "react";
import ProfilePic from "../images/profilePic.svg";

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
      className="relative flex flex-wrap items-center justify-between py-1 bg-gradient-to-b from-black mb-3 lg:sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#141414" : "transparent",
      }}
    >
      <div className="px-5 flex lg:flex-wrap lg:items-center justify-between">
        <div className="w-full relative flex justify-between w-auto">
          <a href="https://fontmeme.com/netflix-font/">
            <img
              src="https://fontmeme.com/permalink/210916/161f87475cfd13e0b716890b557a6a9a.png"
              alt="netflix-font"
              border="0"
              className="sm: h-7 lg:h-12"
            />
          </a>
        </div>
        <a
          href="#popular"
          className="text-white no-underline px-3 drop-shadow-sm"
        >
          Projects
        </a>
        <a href="#stack" className="text-white no-underline px-3">
          Stack
        </a>
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
                <i className="fas fa-bell text-3xl "></i>{" "}
              </a>
            </li>
            <li className="nav-item w-14">
              <img src={ProfilePic} alt="" className="h-12 pt-2 sm:px-3"></img>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
