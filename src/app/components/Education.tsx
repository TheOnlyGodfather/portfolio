"use client";
import { motion } from "framer-motion";
import React from "react";
import EducationCard from "./EducationCard";
import EducationCardFro from "./EducationCardFro";
import EducationCardHR from "./EducationCardHR";
import EducationCardChan from "./EducationCardChan";

type Props = {};

const Education = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Education
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin ">
        {/* experienceCards */}

        <EducationCardChan />

        <EducationCardHR />
        <EducationCardFro />

        <EducationCard />
        {/* experienceCards */}
        {/* experienceCards */}
      </div>
    </motion.div>
  );
};

export default Education;
