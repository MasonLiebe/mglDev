import React from "react";
import { Slide } from "../../animation/Slide";
import { useNavigate } from "react-router-dom";
import Social from "../Social";

const Contact = ({ contact }) => {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="section text-white border-t border-[rgb(39,39,42)] mt-10"
    >
      <Slide delay={0.3}>
        <div className="container2 flex gap-4 max-md:flex-col items-center max-md:items-start max-md:gap-10 justify-between">
          <div>
            <h3 className="text-6xl">Get in touch</h3>
            <p className="my-[20px] max-w-xl text-xl text-zinc-300">
              {contact?.title}
            </p>
            <a
              href={`mailto:${contact?.email}`}
              className="flex px-10 py-5 items-center w-fit justify-center text-center gap-x-2 bg-[rgba(39,39,43,.4)] border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md text-base font-incognito font-semibold"
            >
              Send me an email
            </a>
          </div>
          <ul className="flex flex-col gap-3 uppercase">
            <li className="text-xl text-zinc-300 font-bold hover:text-[#66d9ed] transition-all duration-200 ease-in">
              <a
                href="/project"
                onClick={(e) => {
                  e.preventDefault(); // To prevent page refresh
                  navigate("/project"); // navigate /project page
                  window.scrollTo(0, 0); // Scroll to the top of the page.
                }}
              >
                Projects
              </a>
            </li>
            <li className="text-xl text-zinc-300 font-bold hover:text-[#66d9ed] transition-all duration-200 ease-in">
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault(); // To prevent page refresh
                  navigate("/blog"); // navigate /blog page
                  window.scrollTo(0, 0); // Scroll to the top of the page.
                }}
              >
                Blogs
              </a>
            </li>
            <li className="flex gap-4 flex-wrap mt-4">
              {/* social links component */}
              <Social />
            </li>
          </ul>
        </div>
      </Slide>
    </section>
  );
};

export default Contact;
