"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCardAM = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/AM.png"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Sales/Quality Control Manager
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          AL-MOHANDIS
          <br />
          <span className="text-[#f7ab0a]">Islamabad, Pakistan</span>
          {/* company name */}
        </p>

        <p className="uppercase py-5 text-gray-300">
          April 2017 - December 2019
        </p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>Increased sales revenue by 25%</li>
          <li>Implemented a targeted customer outreach program.</li>
          <li>Reduced defect rate by 20% within six months</li>
          <li>Led the sales team to achieve a 92% customer satisfaction</li>
          <li>
            Implemented a CRM system and improved conversion rates by 20%.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCardAM;
