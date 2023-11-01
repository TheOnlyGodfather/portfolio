"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCardSol = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/Sol.png"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Full-Stack Intern
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          SOLTRIDE
          <br />
          <span className="text-[#f7ab0a]">Islamabad, Pakistan</span>
          {/* company name */}
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          <img
            src="/mongo.png"
            alt="typescript"
            className="h-10 w-10 rounded-full bg-white"
          />
          <img
            src="/express.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/reactjs.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/node.png"
            alt="typescript"
            className="h-10 w-10 rounded-full bg-white"
          />
          <img
            src="/figma.png"
            alt="typescript"
            className="h-10 w-10 rounded-full bg-white"
          />
          <img
            src="/git.png"
            alt="typescript"
            className="h-10 w-10 rounded-full bg-white"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          August 2023 - September 2023
        </p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>
            Designed and implemented new features(job search filters, etc)
          </li>
          <li>Gained proficiency in HTML, CSS, JavaScript, React, Node.js.</li>
          <li>
            Managed version control using Git, ensuring smooth collaboration
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCardSol;
