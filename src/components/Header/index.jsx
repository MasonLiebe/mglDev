import React, { useEffect, useState } from "react";
import "./header.css";
import { TbSlashes } from "react-icons/tb";
import Logo from "../../assets/favicon-logo.png";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const navigate = useNavigate();

  // Header links data
  const data = [
    {
      title: "home",
      href: "#home",
    },
    {
      title: "about",
      href: "#about",
    },
    {
      title: "work",
      href: "#work",
    },
    {
      title: "blog",
      href: "#blog",
    },
    {
      title: "contact",
      href: "#contact",
    },
  ];

  // to run setScrollNav() when the page is scrolled to 80 px
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    // Check if the URL contains a hash
    if (location.hash) {
      // Smooth scroll to the target section
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]); // Trigger when the hash in the URL changes

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <header className="text-white relative z-50">
      <nav
        className={`${
          scrollNav ? "scroll-header" : "overflow-hidden"
        } pt-4 pb-4 max-md:pt-3 max-md:pb-3 flex items-center justify-between transition-all w-full mx-auto px-28 max-xl:px-4`}
      >
        <div className="flex items-center gap-4 ">
          <a href="/" className={`text-lg font-bold flex items-center`}>
            {/* animation logo */}
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ type: "spring", duration: 5, bounce: 0.6 }}
              src={Logo}
              alt=""
              className="w-10 h-10"
            />
            Mason Liebe
          </a>
        </div>

        {/* Menu */}
        <div className="max-md:hidden block">
          <ul className="text-[1rem] font-bold flex gap-10">
            {data.map((link) => (
              <li className="header-item" key={link.title}>
                <a
                  href={link.href}
                  className="relative flex items-center"
                  onClick={(e) => {
                    e.preventDefault(); // To prevent page refresh
                    navigate(`/${link.href}`); // navigate /${link.href}
                  }}
                >
                  <span className="header-text flex items-center">
                    <TbSlashes size={22} /> {link.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <MobileMenu data={data} />
      </nav>
    </header>
  );
};

export default Header;
