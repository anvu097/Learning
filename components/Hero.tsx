"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.name}`,
      "Love-video-games",
      "PracticingToBecomeSWE",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      ></img>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#05bbaa] pb-2 tracking-[15px] ">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="ar-3 text-[#eb5951]">{text}</span>
          <Cursor cursorColor="#FFFF00" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton text-[#FFFF00]">About</button>
          </Link>
          <Link href="#experiences">
            <button className="heroButton text-[#FFFF00]">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-[#FFFF00]">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-[#FFFF00]">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
