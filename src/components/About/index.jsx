import React, { useEffect, useState } from "react";
import { Slide } from "../../animation/Slide";
import { BiEnvelope, BiLinkExternal } from "react-icons/bi";
import Experience from "./Experience";
import Education from "./Education";
import { components } from "../../utils/PortableTextOptions";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../sanity";

/* A builder to be able to use images from sanity.io */
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const About = ({ about, resumes }) => {
  const [_file, id, extension] =
    about !== undefined && about?.file !== undefined
      ? about?.file.asset._ref.split("-")
      : "";

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const filteredEducation = resumes?.filter(
      (resume) => resume.category === "education"
    );
    setEducations(filteredEducation);

    const filteredExperience = resumes?.filter(
      (resume) => resume.category === "experience"
    );
    setExperiences(filteredExperience);
  }, [resumes]);

  return (
    <section id="about" className="container2 text-white section">
      <div>
        <h2 className="text-6xl max-md:text-4xl max-sm:text-3xl text-left">
          About Me
        </h2>
      </div>
      <div className="mt-10">
        <section className="relative grid lg:grid-cols-[1.2fr,1fr] grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide delay={0.3}>
              <h2 className="font-incognito font-black tracking-tight text-3xl lg:leading-tight basis-1/2 mb-8">
                {about?.title}
              </h2>

              {about?.body !== undefined ? (
                <div className="text-zinc-200 leading-relaxed">
                  {/* With the @portabletext/react package, we print the description data from Sanity to the screen more regularly. */}
                  <PortableText value={about?.body} components={components} />
                </div>
              ) : (
                ""
              )}

              {educations?.length !== 0 ? (
                <div className="mt-10">
                  <h3 className="text-[18px] font-bold">
                    Education & Credentials
                  </h3>
                  {educations?.map((education) => (
                    <Education education={education} key={education?._id} />
                  ))}
                </div>
              ) : (
                ""
              )}
              {experiences?.length !== 0 ? (
                <div className="mt-10">
                  <h3 className="text-[18px] font-bold">Employment History</h3>
                  {experiences?.map((experience) => (
                    <Experience experience={experience} key={experience?._id} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.3}>
              <div className="sticky top-10">
                {about?.image !== undefined ? (
                  <img
                    className="rounded-2xl mb-4 -mt-28 max-lg:-mt-0 w-full object-cover h-auto bg-top"
                    src={urlFor(about?.image.asset._ref)}
                  />
                ) : (
                  ""
                )}

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    {/* PDF file from sanity.io */}
                    <a
                      href={`https://cdn.sanity.io/files/6icrb2vy/production/${id}.${extension}`}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex px-8 items-center justify-center w-full text-center gap-x-2 bg-[rgba(39,39,43,.4)] border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-base font-incognito font-semibold"
                    >
                      View Resume <BiLinkExternal className="text-base" />
                    </a>
                  </div>

                  {about?.email !== undefined ? (
                    <a
                      href={`mailto:${about?.email}`}
                      className="flex items-center gap-x-2 hover:text-[#66d9ed] w-fit"
                    >
                      <BiEnvelope className="text-lg" />
                      {about?.email}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Slide>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default About;
