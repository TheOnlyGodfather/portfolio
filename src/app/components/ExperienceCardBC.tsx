"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCardBC = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/BClogo.png"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Web Developer
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          Bilingual Community
          <br />
          <span className="text-[#f7ab0a]">Xian, China</span>
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
            src="/firebase.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/flutter.png"
            alt="typescript"
            className="h-10 w-10 rounded-full"
          />
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
        </div>
        <p className="uppercase py-5 text-gray-300">October 2022 - May 2023</p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>Developed a job application portal for a company</li>
          <li>
            Optimized the applications performance through efficient coding
          </li>
          <li>
            Web application is fully responsive, 40% increase in mobile users.
          </li>
          <li>Integrated third-party APIs and services for features </li>
          <li>Conducted rigorous testing and debugging processes</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCardBC;
