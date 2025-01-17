"use client";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity/lib/image";

type Props = {
  projects: Project[];
};

export default function ({ projects }: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 bg-[rgb(36,36,36)]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#05bbaa] text-2xl">
        Projects
      </h3>
      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFFF00]">
        {projects?.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
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
              src={urlFor(project?.image).url()}
              alt=""
              className="rounded-full w-56 h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#FFFF00]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                : {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#FFFF00]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
