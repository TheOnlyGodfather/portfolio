"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/exp.jpg"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Lorem, ipsum dolor.
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          Lorem.
          {/* company name */}
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          <img
            src="/typescript.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/typescript.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/typescript.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>Summary Points: Lorem ipsum dolor sit amet consectetur.</li>
          <li>Summary Points: Lorem ipsum dolor sit amet consectetur.</li>
          <li>Summary Points: Lorem ipsum dolor sit amet consectetur.</li>
          <li>Summary Points: Lorem ipsum dolor sit amet consectetur.</li>
          <li>Summary Points: Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
