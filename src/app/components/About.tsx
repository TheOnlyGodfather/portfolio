"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Step into the world of Web Dev. I am multifaceted web developer, who
          also happens to be a skilled seller with a flair for the art of
          persuasion. Fluent in four languages—English, French, Urdu, and
          Chinese— Technical expertise with linguistic versatility to excel in
          both the digital and real-world marketplaces. Worked as junior web
          developer at Creative Tech, contributing to the enigmatic WeedBate
          project with React, Bootstrap, Express, MongoDB, Gennylovo, and Telnyx
          API integration, to a role as a shrewd seller, the journey has been
          nothing short of extraordinary. With a reputation for creative
          problem-solving, meticulous attention to detail, and a passion for
          enhancing user experiences, my journey continues to evolve. My
          proficiency in English, French, Urdu, and Chinese has not only
          unlocked the gates to international web development but has also
          opened doors to global sales, forging a path where technology and
          commerce intersect.
        </p>
      </div>
      <motion.img
        initial={{ x: +200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="/m31.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
    </motion.div>
  );
};

export default About;
