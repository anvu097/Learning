"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

export default function Experiences({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flew-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-[#05bbaa] text-2xl">
        Experiences
      </h3>

      <div className="w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFFF00]">
        {experiences?.map((experience) => (
          <ExperienceCards key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
