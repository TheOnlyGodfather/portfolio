"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCardTut = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/mytutorpod.png"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Eng, Com, Psy Teacher
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          MyTutorPod
          <br />
          <span className="text-[#f7ab0a]">Ontario, Canada</span>
          {/* company name */}
        </p>

        <p className="uppercase py-5 text-gray-300">September 2023 - Present</p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>
            Developed lesson plans to cater to the specific learning goals
          </li>
          <li> Encouraging students to think analytically and independently</li>
          <li>IELTS preparation and GRE preparation classes</li>
          <li>Interactive and engaging teaching strategies</li>
          <li>
            Demonstrated adaptability by successfully transitioning to remote or
            hybrid teaching methods
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCardTut;
