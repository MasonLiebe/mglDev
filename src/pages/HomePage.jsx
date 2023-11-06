import React from "react";
import { About, Blog, Contact, Home, Projects } from "../components";

const HomePage = ({
  home,
  about,
  contact,
  posts,
  projects,
  catList,
  resumes,
}) => {
  return (
    <main className="px-4">
      <Home home={home} />
      <About about={about} resumes={resumes} />
      <Projects projects={projects} catList={catList} />
      <Blog posts={posts} />
      <Contact contact={contact} />
    </main>
  );
};

export default HomePage;
