import React, { useEffect, useState } from "react";
import "./App.css"; // Importing the CSS styles
import { Footer, Header } from "./components"; // Importing custom components
import { Navigate, Route, Routes } from "react-router-dom"; // Importing routing components
import {
  BlogDetailsPage,
  BlogsPage,
  HomePage,
  ProjectDetailsPage,
  ProjectsPage,
} from "./pages"; // Importing page components
import CustomCursor from "./components/CustomCursor"; // Importing a custom cursor component
import gsap from "gsap"; // Importing GSAP for animations
import ScrollToTop from "./components/ScrollToTop"; // Importing a component for scrolling to the top of the page
import { ToastContainer } from "react-toastify"; // Importing a toast notification component
import "react-toastify/dist/ReactToastify.css"; // Importing styles for the toast component
import SanityService from "./services/sanityService"; // Importing a custom service

const App = () => {
  // setting to remove gsap null target warn
  gsap.config({
    nullTargetWarn: false,
  });

  const [home, setHome] = useState(); // State for home data
  const [about, setAbout] = useState(); // State for about data
  const [projects, setProjects] = useState(); // State for project data
  const [posts, setPosts] = useState(); // State for blog posts data
  const [catList, setCatList] = useState(); // State for project categories list
  const [resumes, setResumes] = useState(); // State for resumes data
  const [contact, setContact] = useState(); // State for contact data

  /* GET HOME DATA FROM SANITY SERVICE */
  const getHome = () => {
    SanityService.getData("home")
      .then((response) => {
        setHome(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET ABOUT DATA FROM SANITY SERVICE */
  const getAbout = () => {
    SanityService.getData("about")
      .then((response) => {
        setAbout(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET CONTACT DATA FROM SANITY SERVICE */
  const getContact = () => {
    SanityService.getData("contact")
      .then((response) => {
        setContact(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET PORTRFOLIO DATA FROM SANITY SERVICE */
  const getProjects = () => {
    SanityService.getDataWithCategory("project", 6)
      .then((response) => {
        setProjects(response);
        // We put the project category into an array
        const allCatList = [
          "All",
          ...new Set(response?.map((project) => project.category[0].title)),
        ];
        setCatList(allCatList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET RESUMES DATA FROM SANITY SERVICE */
  const getResumes = () => {
    SanityService.getData("resume")
      .then((response) => {
        setResumes(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET BLOG POSTS DATA FROM SANITY SERVICE */
  const getPosts = () => {
    SanityService.getDataWithAuthor("post", 4)
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHome();
    getContact();
    getProjects();
    getResumes();
    getPosts();
    getAbout();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              home={home}
              contact={contact}
              posts={posts}
              projects={projects}
              catList={catList}
              resumes={resumes}
              about={about}
            />
          }
        />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<ProjectDetailsPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />

      {/* scroll to top */}
      <ScrollToTop />

      {/* custom cursor */}
      <CustomCursor />

      {/* ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default App;
