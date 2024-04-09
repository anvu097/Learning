"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#6d4ce7] rounded-full h-[350px] w-[350px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#6d4ce7] h-[300px] w-[300px] opacity-50 absolute mt-52" />
      <div className="rounded-full border border-[#6d4ce7] h-[500px] w-[500px] opacity-50 absolute mt-52" />
      <div className="rounded-full border border-[#FFFF00] h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#6d4ce7] h-[800px] w-[800px] opacity-50 absolute mt-52" />
    </motion.div>
  );
}
