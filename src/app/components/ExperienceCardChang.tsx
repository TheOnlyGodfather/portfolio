"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCardChang = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/chang.svg"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          English Professor
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          Changan Dublin International College <br />
          <span className="text-[#f7ab0a]">Xian, China</span>
          {/* company name */}
        </p>

        <p className="uppercase py-5 text-gray-300">August 2021 - June 2022</p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>Created and developed innovative English language</li>
          <li>Designed curriculum enhancements that integrated technology</li>
          <li>Interactive learning methods to improve student engagement.</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCardChang;
