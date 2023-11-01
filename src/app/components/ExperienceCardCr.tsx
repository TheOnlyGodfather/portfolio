"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCardCr = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/cr.svg"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Junior Web Developer
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          Creative Tech
          {/* company name */}
          <br />
          <span className="text-[#f7ab0a]">Islamabad, Pakistan</span>
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
            src="/ai.png"
            alt="typescript"
            className="h-10 w-10 rounded-full "
          />
          <img
            src="/typescript.png"
            alt="typescript"
            className="h-10 w-10 rounded-full "
          />
          <img
            src="/next.svg"
            alt="typescript"
            className="h-10 w-10 rounded-full bg-white "
          />
        </div>
        <p className="uppercase py-5 text-gray-300">September 2023 - Present</p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>UI/UX Enhancement</li>
          <li>Front-End Development</li>
          <li>API Integration</li>
          <li>Feature Development</li>
          <li>Version Control and Collaboration</li>
          <li>Scalability Considerations</li>
          <li>User Testing and Feedback</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCardCr;
