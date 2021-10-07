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
      className="relative py-1 bg-gradient-to-b from-black mb-3 lg:sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#141414" : "transparent",
      }}
    >
      <div className="md:px-5 flex lg:items-center">
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/210916/161f87475cfd13e0b716890b557a6a9a.png"
            alt="netflix-font"
            className="logo pl-3"
          />
        </a>
        <a
          href="#popular"
          className="hidden md:block text-white no-underline px-3 drop-shadow-sm"
        >
          Projects
        </a>
        <a
          href="#stack"
          className="hidden md:block text-white no-underline px-3"
        >
          Stack
        </a>
        <ul className="flex absolute right-0 lg:right-10">
          <li className="nav-item py-2">
            <a
              className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="dingdingding"
            >
              <i className="fas fa-bell text-3xl "></i>{" "}
            </a>
          </li>
          <li className="nav-item w-14 sm:px-3">
            <img src={ProfilePic} alt="" className="h-12 pt-2"></img>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
