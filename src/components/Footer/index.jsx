import React from "react";

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className="text-center my-10 text-white opacity-80 text-xs">
      <p>
        © {year}{" "}
        <a href="/" className="text-[#66d9ed]">
          Mason Liebe
        </a>{" "}
        — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
