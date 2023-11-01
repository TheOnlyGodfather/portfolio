"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

const EducationCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/sabis.svg"
        alt="exp"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Highschool
          {/* position */}
        </h4>
        <p className="font-bold text-2xl mt-1">
          Ruwais Private School Managed by SABIS.
          <br />
          Abu Dhabi, U.A.E
          {/* company name */}
        </p>

        <p className="uppercase py-5 text-gray-300">
          September 2005 - June 2016
        </p>
        <ul className="list-none space-y-4 ml-5 text-lg ">
          <li>Achieved 8 Cambridge IGCSEs</li>
          <li>Grasped French as a second language</li>
          <li>
            Notable School Representative for <br />
            National Competition at Science Competition
          </li>
          <li>Head of Discipline</li>
        </ul>
      </div>
    </article>
  );
};

export default EducationCard;
