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
      className="relative flex py-1 bg-gradient-to-b from-black mb-3 lg:sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#141414" : "transparent",
      }}
    >
      <div className="px-5 flex lg:items-center">
        <a href="https://fontmeme.com/netflix-font/">
          <img
            src="https://fontmeme.com/permalink/210916/161f87475cfd13e0b716890b557a6a9a.png"
            alt="netflix-font"
            border="0"
            className="sm: h-7 lg:h-12"
          />
        </a>
        <a
          href="#popular"
          className="text-white no-underline px-3 drop-shadow-sm"
        >
          Projects
        </a>
        <a href="#stack" className="text-white no-underline px-3">
          Stack
        </a>
        <ul className="flex lg:flex-row">
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
    </nav>
  );
};

export default Header;
