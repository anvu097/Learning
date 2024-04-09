"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo/fuse.svg";
import restAPI from "../images/logo/rest-api-icon.svg";
import react from "../images/logo/react-icon.svg";
import { Experience } from "../typings";
import { urlFor } from "../sanity/lib/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCards({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:h-[600px] snap-center
    bg-[rgb(104,71,219)] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-yellow-500"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl text-[#eb5951] font-semibold">
          {experience.company}
        </h4>

        <p className="text-2xl mt-1 text-[#05bbaa] font-medium">
          {experience.jobTitle}
        </p>

        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-[#FFFF00]">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg text-[#FFFF00] max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFFF00] pr-5">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
